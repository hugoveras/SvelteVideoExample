<script>
  import CardTimeOut from "components/Cards/CardTimeOut.svelte";
  import CardBusyIndicator from "components/Cards/CardBusyIndicator.svelte";
  import Pagination from "components/Tables/Pagination.svelte";

  import SuccessToast from "components/Toast/SuccessToast.svelte";
  import { exportToSpreadsheet } from "js/GeneralFuntions.js";

  import ClearIcon from "components/Common/ClearIcon.svelte";

  import { createEventDispatcher } from "svelte";

  import CardNotification from "components/Cards/CardNotification.svelte";

  import KeyObservationSevice from "services/keyobservation.js";
  import { Search } from "./../../../../proto/chat_pb";
  import { _ } from "services/i18n.js";
  import {
    ChatReqClient,
    ChatReqPromiseClient,
  } from "./../../../../proto/chat_grpc_web_pb";
  import {
    coreserviceurl,
    formatDate,
    getStatusColor,
    keyObservationSelected,
  } from "stores/store.js";
  import KeyObservation from "./KeyObservation.svelte";
  import WorkingWithDashboards from "services/workingwithdashboards.js";

  import LabelMetadataBtn from "components/Common/LabelMetadataBtn.svelte";
  import ButtonToDisplayBtn from "components/Common/ButtonToDisplayBtn.svelte";

  let title = "Dashboard Key Observations";
  let documentdata = document;
  let dataLabels = [];
  let dataButtons = [];
  let viewName = "DashboardKeyObservationsView";

  let columns = ["Title", "Status", "Date", "Observation"];
  let collumnsExport = ["Title", "Status", "Date", "Observation"];
  const refreshIcon = "../assets/img/refresh.svg";
  let searchTitle = "";
  let searchStatus = "";
  let ObservationsList = [];
  // export let isOpen = false
  // export let message = ''
  // export let type = ''

  let rowexport = [];

  let types = ["success", "error", "info"];
  let dismissible = true;
  let timeout = 0;
  let showToastSuccess = false;
  let showKeyObservation = false;

  //Pagination
  let current_page = 1;
  let from = 1;
  let to = 1;
  let per_page = 8;
  let last_page = 1;
  let total = 0;
  ////////////////

  let showNotification = false;
  let messageNotification = "";

  let showBusyIndicator = false;
  let token = localStorage.getItem("token");
  let search = new proto.chat.Search();
  let searchDashboard = new proto.chat.Search();
  const dispatch = createEventDispatcher();

  let items = [
    {
      Status: "ALL",
    },
    {
      Status: "ACCEPTED",
    },
    {
      Status: "REJECTED",
    },
    {
      Status: "PENDING",
    },
    {
      Status: "CANCELED",
    },
  ];
  getData({ page: 1 });

  function goToKeyObservation(itemKeyObsertivation) {
    setTimeout(() => {
      //console.log("open for edit key Observation");
      keyObservationSelected.set({
        ObservationSelected: itemKeyObsertivation,
        hasData: true,
        currentPage: 1, // currentPage,
      });

      getDashboardbyId(itemKeyObsertivation.getMsg().getDashboardid());
    }, 50);
  }

  // can be one of light or dark
  export let color = "light";

  function sentToExcelFile() {
    showBusyIndicator = true;
    let dataExport = [];
    dataExport.push(columns);

    let data = [];

    ObservationsList.forEach((element) => {
      data.push([
        element.getMsg().getTitle(),
        element.getMsg().getStatus(),
        element.getMsg().getDatecreated(),
      ]);
      //console.log("Data prepare for export excel==>", data);
    });

    for (let i = 0; i < data.length; i++) {
      let item = data[i];

      rowexport = [];
      for (const key in item) {
        rowexport.push(item[key]);
      }

      dataExport.push(rowexport);
    }
    showBusyIndicator = exportToSpreadsheet(dataExport, "KeyObservations");
  }

  async function selectData(token) {
    var deps = {
      token,
      search,
      coreserviceurl,
      proto: {
        Search,
        ChatReqClient: ChatReqPromiseClient,
      },
    };
    //console.log("antes del  get WorkingWithDashboard .........", deps);
    let keyObservations = new KeyObservationSevice(deps);
    //console.log("despues  keyObservation .........", keyObservations);
    return await keyObservations.selectDocumentFromMongo();
  }

  function getData(params) {
    //console.log("get working with dashboards");
    //
    if ($keyObservationSelected.hasData) {
      keyObservationSelected.set({});
    }

    const page = params.page || 1;
    const fromn = (page - 1) * per_page;

    search.setLimit(per_page.toString());
    search.setSkip(fromn.toString());
    search.setSort("");
    search.setProjection("");
    search.setAggregation("");

    selectData(token)
      .then((data) => {
        showBusyIndicator = false;
        ObservationsList = data.getDataList();
        total = data.getTotal();
        last_page = Math.ceil(total / per_page);
        current_page = page;
        from = (page - 1) * per_page;
        to = page * per_page;
        if (to > total) {
          to = total;
        }
      })
      .catch((error) => {
        showBusyIndicator = false;
        if (error.message != undefined) {
          showNotification = true;
          messageNotification = error.message;
        }
      });
  }

  function handleToggleMaintenance(params) {
    showKeyObservation = !showKeyObservation;
    getData({ page: current_page });
  }

  const handleToggleModalNotification = () => {
    showNotification = !showNotification;
  };

  function addNewKeyObservation() {
    keyObservationSelected.set({
      ObservationSelected: {},
      hasData: false,
      currentPage: current_page,
    });
    showKeyObservation = true;
  }

  function searchKeyObservation() {
    search.setSearch("");
    var q = {}; // declare the query object
    q["$and"] = [];

    if (searchTitle != "") {
      var cond = { $regex: searchTitle, $options: "i" };
      q["$and"].push({ Title: cond });
    }

    if (searchStatus != "" && searchStatus != "ALL") {
      var cond = { $regex: searchStatus, $options: "i" };
      q["$and"].push({ Status: cond });
    }

    if (q["$and"].length > 0) {
      search.setSearch(JSON.stringify(q));
    }
    getData({ page: 1 });
  }

  async function myDashboard(token) {
    let search = searchDashboard;
    var deps = {
      token,
      search,
      coreserviceurl,
      proto: {
        Search,
        ChatReqClient: ChatReqPromiseClient,
      },
    };
    //console.log("antes del  get WorkingWithDashboard .........", deps);
    let workingDashboard = new WorkingWithDashboards(deps);
    //console.log("despues  WorkingWithDashboard .........", workingDashboard);
    return await workingDashboard.selectDashboardFromMongo();
  }

  function getDashboardbyId(Id) {
    var cond = "{" + '"_id"' + ":" + '"' + Id + '"}';
    searchDashboard.setSearch(cond);
    searchDashboard.setLimit("1");
    searchDashboard.setSkip("0");
    searchDashboard.setSort("");
    searchDashboard.setProjection("");
    searchDashboard.setAggregation("");
    myDashboard(token)
      .then((data) => {
        if (data.getTotal() > 0) {
          $keyObservationSelected.DashboardName = data
            .getDashboarddataList()[0]
            .getName();
        }
        showKeyObservation = true;
      })
      .catch((error) => {
        if (error.message != undefined) {
          messageNotification = error.message;
        }
      });
  }

  const onKeyPress = (e) => {
    if (e.charCode === 13) searchKeyObservation();
  };


  function reloadButtons() {
    let reloadDocument = document.getElementsByTagName("button");
    for (var idx = 0; idx < dataButtons.length; idx++) {
      for (var ridx = 0; ridx < reloadDocument.length; ridx++) {
        if (dataButtons[idx].key == reloadDocument[ridx].id) {
          reloadDocument[ridx].style.display = dataButtons[idx].display
            ? "inline"
            : "none";
        }
      }
    }
  }
  
</script>

<div class="relative bg-red-500 pb-32 pt-10" />
<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
>
  {#if showKeyObservation}
    <KeyObservation
      isOpen={showKeyObservation}
      on:close={() => handleToggleMaintenance()}
    />
  {/if}

  <CardNotification
    isOpen={showNotification}
    message={messageNotification}
    on:close={() => handleToggleModalNotification()}
  />
  <SuccessToast showToast={showToastSuccess} />
  <CardTimeOut />

  <CardBusyIndicator title="Please wait..." open={showBusyIndicator} />

  {#if !showKeyObservation}
  <div class="bg-red-500 w-full p-2">
    <LabelMetadataBtn
          {title}
          Document={documentdata}
          bind:dataLabels
          {viewName}
        />
        <ButtonToDisplayBtn
          {title}
          Document={documentdata}
          bind:dataButtons
          on:loadButtons={reloadButtons}
          {viewName}
        />
      </div>
    <div>
      <div class="flex flex-wrap rounded-t bg-white mb-0 px-6 py-6">
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata"
              id="lSearchTitle"
              for="iSearchTitle"
            >
              {$_("Search By Title")}
            </label>
            {#if searchTitle != ""}
              <ClearIcon
                on:click={() => {
                  searchTitle = "";
                  searchKeyObservation();
                }}
              />
            {/if}
            <input
              type="text"
              name="searchTitle"
              id="iSearchTitle"
              autocomplete="given-title"
              placeholder={$_("Search By Title")}
              bind:value={searchTitle}
              on:keypress={onKeyPress}
              class="labelsMetadata border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
        </div>
        <div class="w-full lg:w-3/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata"
              id="lSearchStatus"
              for="iSearchStatus"
            >
              {$_("Search By Status")}
            </label>
            {#if searchStatus != ""}
              <ClearIcon
                on:click={() => {
                  searchStatus = "";
                  searchKeyObservation();
                }}
              />
            {/if}
            <select
              placeholder={$_("Search By Status")}
              bind:value={searchStatus}
              class="labelsMetadata border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            >
              {#each items as item}
                <option>{item.Status}</option>
              {/each}
            </select>
          </div>
        </div>
        <div class="w-full lg:w-3/12 px-4">
          <div class="relative w-full mb-3">
            <div class="text-center flex justify-between">
              <div style="margin-top: 30px;">
                <button
                  on:click={searchKeyObservation}
                  class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 labelsMetadata"
                  id="bSearch"
                  type="button"
                >
                  <i class="w-5 mr-1 fa fa-search" />
                  {$_("Search")}
                </button>
              </div>

              <div style="margin-top: 20px;">
                <button
                  class="text-white p-4 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
                  on:click={(ev) => getData({ page: 1 })}
                  id="bRefresh"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-repeat"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                    />
                  </svg>
                </button>

                <button
                  id="bAddNewKeyObservation"
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blueGray-700"
                  on:click|preventDefault={addNewKeyObservation}
                >
                  <i class="w-5 m-1 fa fa-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="block w-full overflow-x-auto">
        <div style="position: relative;">
          <table class="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                  'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-red-700 text-red-200 border-red-600'}  labelsMetadata"
                  id="hSelect"
                >
                  {$_("Select")}
                </th>
                {#each columns as colName}
                  <th
                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                    'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-red-700 text-red-200 border-red-600'}  labelsMetadata"
                    id="c{colName}"
                  >
                    {$_(colName)}
                  </th>
                {/each}
              </tr>
            </thead>
            <tbody>
              {#each ObservationsList as item}
                <tr>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  >
                    <label
                      class="inline-flex justify-items-stretch cursor-pointer"
                    >
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        on:click={goToKeyObservation(item)}
                        class="form-checkbox border-b-1 border-blueGray-300 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                    </label>
                  </td>

                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >{item.getMsg().getTitle()}
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    ><i
                      class="fas fa-circle {getStatusColor(
                        item.getMsg().getStatus()
                      )} mr-2"
                    />{item.getMsg().getStatus()}
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >{formatDate(item.getMsg().getDatecreated())}
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >{@html item.getMsg().getObservationbody()}</td
                  >
                </tr>
              {/each}
            </tbody>
          </table>

          {#if total > 0}
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-center flex justify-between">
                <button
                  id="bExportToExcel"
                  on:click={sentToExcelFile}
                  class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 labelsMetadata"
                  type="button"
                >
                  <i class="w-5 mr-1 fas fa-download" />
                  {$_("Export to Excel")}
                </button>

                <Pagination
                  {current_page}
                  {from}
                  {last_page}
                  {per_page}
                  {to}
                  {total}
                  on:change={(ev) => getData({ page: ev.detail })}
                />
              </div>
            </div>
          {/if}
        </div>
        
      </div>
    </div>
  {/if}
</div>
