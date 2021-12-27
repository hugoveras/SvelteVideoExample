<script>
  import { createEventDispatcher } from "svelte";
  export let isOpen = false;
  export let inputDashboardName = "";
  export let inputDashboardID = "";

  import CardTimeOut from "components/Cards/CardTimeOut.svelte";
  import CardBusyIndicator from "components/Cards/CardBusyIndicator.svelte";
  import Pagination from "components/Tables/Pagination.svelte";

  import CardNotification from "components/Cards/CardNotification.svelte";

  import WorkingWithDashboard from "services/workingwithdashboards.js";
  import { Search } from "./../../../proto/chat_pb";

  import { ChatReqPromiseClient } from "./../../../proto/chat_grpc_web_pb";
  import {
    coreserviceurl,
    workingWithDashboardsSelected,
    formatDate,
  } from "stores/store.js";

  import { _ } from "services/i18n.js";
  import LabelMetadataBtn from "../Common/LabelMetadataBtn.svelte";
  import ButtonToDisplayBtn from "components/Common/ButtonToDisplayBtn.svelte";

  let columns = ["Name", "Status", "Date", "Url"];
  let dashboardList = [];

  //Pagination
  let current_page = 1;
  let from = 1;
  let to = 1;
  let per_page = 6;
  let last_page = 1;
  let total = 0;
  ////////////////

  let showNotification = false;
  let messageNotification = "";

  let searchByName = "";

  let showBusyIndicator = false;
  let token = localStorage.getItem("token");
  let search = new proto.chat.Search();
  let dataLabels = {};
  let title = "Select a Dashboard";
  let documentdata = document;
  let dataButtons = [];
  let viewName ="DashboardsSelectionModalView";
  const dispatch = createEventDispatcher();

  getdashboards({ page: 1 });

  async function myDashboards(token) {
    var deps = {
      token,
      search,
      coreserviceurl,
      proto: {
        Search,
        ChatReqClient: ChatReqPromiseClient,
      },
    };
    ////console.log("antes del  get Customer .........", deps);
    let dashboards = new WorkingWithDashboard(deps);
    ////console.log("despues  customer .........", customer);
    return await dashboards.selectDashboardFromMongo();
  }

  function getdashboards(params) {
    const page = params.page || 1;
    const fromn = (page - 1) * per_page;

    search.setLimit(per_page.toString());
    search.setSkip(fromn.toString());
    search.setSort("");
    search.setProjection("");
    search.setAggregation("");

    // showBusyIndicator = true;
    myDashboards(token)
      .then((data) => {
        //startBusyIndicator = false;

        dashboardList = data.getDashboarddataList();
        total = data.getTotal();
        last_page = Math.ceil(total / per_page);
        from = (page - 1) * per_page;
        to = page * per_page;
        if (to > total) {
          to = total;
        }
        current_page = page;
      })
      .catch((error) => {
        if (error.message != undefined) {
          showNotification = true;
          messageNotification = error.message;
        }
      });
  }

  function goTo(itemWorkingWithDashboards) {
    setTimeout(() => {
      inputDashboardName = itemWorkingWithDashboards.getName();
      inputDashboardID = itemWorkingWithDashboards.getId();
      dispatch("close");
    }, 100);
  }

  const searchDashboards = () => {
    var q = {}; // declare the query object
    q["$and"] = [];

    if (searchByName != "") {
      var cond = { $regex: searchByName, $options: "i" };
      q["$and"].push({ Name: cond });
    }

    search.setSearch("");

    if (q["$and"].length > 0) {
      search.setSearch(JSON.stringify(q));
    }

    getddashboards({ page: 1 });
  };

  function clear() {
    searchByName = "";
    searchDashboards();
  }

  const onKeyPress = (e) => {
    if (e.charCode === 13) searchDashboards();
  };

  export let color = "light";

  const handleToggleModalNotification = () => {
    showNotification = !showNotification;
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

  // reloadLabels();
  reloadButtons();
</script>

{#if isOpen}
  <CardNotification
    isOpen={showNotification}
    message={messageNotification}
    on:close={() => handleToggleModalNotification()}
  />

  <CardTimeOut />

  <CardBusyIndicator title="Please wait..." open={showBusyIndicator} />

  <div
    class="modal z-50 fixed w-full  h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0"
  >
    <div class="modal-overlay fixed w-full h-full bg-blueGray-600 opacity-50" />
    <div
      class="bg-white w-full lg:h-max lg:w-8/12 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto"
    >
      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
          <h6
            class="text-blueGray-700 text-xl font-bold labelsMetadata"
            id="hTitle"
          >
            {$_(title)}
          </h6>
          <button type="button" on:click={() => dispatch("close")}>
            <span aria-hidden="true" />
            <i class="fa fa-times " aria-hidden="true" />
          </button>
        </div>
      </div>

      <div class="content p-8">
        <!--Start Content -->
        <slot name="body" />
        <div class="flex flex-wrap">
          <div class="w-full lg:w-9/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata"
                for="iSearchByName"
                id="lSearchByName"
              >
                {$_("Search by Name")}
              </label>
              <input
                id="iSearchByName"
                type="text"
                name="iSearchByName"
                autocomplete="given-name"
                placeholder={$_("Search by Name")}
                on:keypress={onKeyPress}
                bind:value={searchByName}
                class="border-0 labelsMetadata px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>

          <div class="w-full lg:w-3/12 px-4">
            <div class="relative w-full mb-3">
              <div class="text-center flex justify-between">
                <div style="margin-top: 20px;">
                  <button id="bClear"
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
                    on:click|preventDefault={clear}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <span class="sr-only">{$_("Clear")}</span>
                  </button>
                  <button id="bSearch"
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blueGray-700"
                    on:click|preventDefault={searchDashboards}
                  >
                    <i class="w-5 mr-1 fa fa-search" />
                    <span class="sr-only">{$_("Search")}</span>
                  </button>

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
                    {viewName}
                    on:loadButtons={reloadButtons}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block w-full overflow-x-auto">
          <div style="position: relative;min-height: 480px;">
            <table class="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th
                    id="cSelect"
                    class="labelsMetadata px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                    'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-red-700 text-red-200 border-red-600'}"
                  >
                    {$_("Select")}
                  </th>
                  {#each columns as colName}
                    <th
                      id="c{colName}"
                      class="labelsMetadata px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                      'light'
                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                        : 'bg-red-700 text-red-200 border-red-600'}"
                    >
                      {$_(colName)}
                    </th>
                  {/each}
                </tr>
              </thead>
              <tbody>
                {#each dashboardList as itemDashboards}
                  <tr>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      contenteditable="true"
                    >
                      <label
                        class="inline-flex justify-items-stretch cursor-pointer"
                      >
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          on:click={goTo(itemDashboards)}
                          class="form-checkbox border-b-1 border-blueGray-300 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        />
                      </label>
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >{itemDashboards.getName()}
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >{itemDashboards.getStatus()}
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >{formatDate(itemDashboards.getCreatedate())}
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >{itemDashboards.getUrl()}</td
                    >
                  </tr>
                {/each}
              </tbody>
            </table>

            {#if total > 0}
              <div class="rounded-t bg-white mb-0 px-6 py-6">
                <div class="text-right">
                  <Pagination
                    {current_page}
                    {from}
                    {last_page}
                    {per_page}
                    {to}
                    {total}
                    on:change={(ev) => getdashboards({ page: ev.detail })}
                  />
                </div>
              </div>
            {/if}
          </div>
        </div>

        <div class="btn-wrapper text-right">
          <button
            id="bClose"
            on:click={() => dispatch("close")}
            class="labelsMetadata bg-red-400 text-white active:bg-red-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
          >
            {$_("Close")}
          </button>
        </div>
      </div>
      <!--End Content -->
    </div>
  </div>
{/if}
