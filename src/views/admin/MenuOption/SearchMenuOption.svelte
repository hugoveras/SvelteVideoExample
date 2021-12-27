<script>
  import CardTimeOut from "components/Cards/CardTimeOut.svelte";
  import CardBusyIndicator from "components/Cards/CardBusyIndicator.svelte";
  import Pagination from "components/Tables/Pagination.svelte";
  import { exportToSpreadsheet } from "js/GeneralFuntions.js";
  import SuccessToast from "components/Toast/SuccessToast.svelte";
  import { _ } from "services/i18n.js";
  import ClearIcon from "components/Common/ClearIcon.svelte";

  import CardNotification from "components/Cards/CardNotification.svelte";
  import MenuOptionService from "services/menuoption.js";
  import { Search } from "./../../../../proto/chat_pb";
  import { ChatReqPromiseClient } from "./../../../../proto/chat_grpc_web_pb";
  import { coreserviceurl, formatDate, getStatusColor } from "stores/store.js";
  import MenuOption from "./MenuOption.svelte";
  import MenuGroupService from "services/menugroup.js";

  import LabelMetadataBtn from "components/Common/LabelMetadataBtn.svelte";
  import ButtonToDisplayBtn from "components/Common/ButtonToDisplayBtn.svelte";

  let title = "Dashboard Menu Option";
  let documentdata = document;
  let dataLabels = [];
  let dataButtons = [];
  let viewName = "DashboardMEnuOptionView";

  let showMenuOption = false;
  let showToastSuccess = false;
  let showNotification = false;
  let messageNotification = "";
  let showBusyIndicator = false;
  let searchOptionName = "";
  let columns = [
    "Option Name",
    "Menu Group",
    "Icon",
    "Order",
    "Status",
    "Date",
    "Updated By",
  ];
  let search = new proto.chat.Search();
  let searchGroup = new proto.chat.Search();
  let menuOptionList = [];
  let token = localStorage.getItem("token");
  let MenuOptionSelected = {};

  //Pagination
  let current_page = 1;
  let from = 1;
  let to = 1;
  let per_page = 8;
  let last_page = 1;
  let total = 0;
  ////////////////

  // can be one of light or dark
  export let color = "light";

  const handleToggleModalNotification = () => {
    showNotification = !showNotification;
  };

  function searchMenuOption() {
    var q = {}; // declare the query object
    q["$and"] = [];

    if (searchOptionName != "") {
      var cond = { $regex: searchOptionName, $options: "i" };

      q["$and"].push({ OptionName: cond });
    }

    search.setSearch("");

    if (q["$and"].length > 0) {
      search.setSearch(JSON.stringify(q));
    }

    getData({ page: current_page });
  }

  async function selectData() {
    var deps = {
      token,
      search,
      coreserviceurl,
      proto: {
        Search,
        ChatReqClient: ChatReqPromiseClient,
      },
    };
    //console.log("antes del  get menuoption .........", deps);
    let menuoption = new MenuOptionService(deps);
    //console.log("despues  menuoption .........", menuoption);
    return await menuoption.selectMenuOptionfromDatabase();
  }

  function getData(params) {
    const page = params.page || 1;
    const fromn = (page - 1) * per_page;
    let order = "{" + '"Order"' + ":" + 1 + "}";
    search.setLimit(per_page.toString());
    search.setSkip(fromn.toString());
    search.setSort(order);
    search.setProjection("");
    search.setAggregation("");

    selectData(token)
      .then((data) => {
        showBusyIndicator = false;
        //console.log(data);
        menuOptionList = data.getMenuoptiondataList();
        //console.log("Menu Option List ==>", menuOptionList);
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
        //console.log("Error==>", error);
        showBusyIndicator = false;
        if (error.message != undefined) {
          showNotification = true;
          messageNotification = error.message;
        }
      });
  }

  function goTomenuoption(itemmenuoption) {
    MenuOptionSelected = {
      optionSelected: itemmenuoption,
      hasData: true,
      currentPage: 1, // currentPage,
    };
    // showMenuOption = true;
    getMenuGroupById(itemmenuoption.getMenugroup());
  }

  function sentToExcelFile() {
    showBusyIndicator = true;
    let dataExport = [];
    dataExport.push(columns);

    let data = [];

    menuOptionList.forEach((element) => {
      data.push([
        element.getOptionname(),
        element.getMenugroup(),
        element.getIcon(),
        element.getOrder(),
        element.getCreatedate(),
        element.getStatus(),
        element.getUpdatedby(),
      ]);
    });

    for (let i = 0; i < data.length; i++) {
      let item = data[i];

      let rowexport = [];
      for (const key in item) {
        rowexport.push(item[key]);
      }

      dataExport.push(rowexport);
    }
    showBusyIndicator = exportToSpreadsheet(dataExport, "menuoption");
  }

  function addNewmenuoption() {
    MenuOptionSelected = {
      optionSelected: {},
      hasData: false,
      currentPage: current_page,
    };
    showMenuOption = true;
  }

  function handleToggleMaintenance() {
    showMenuOption = !showMenuOption;
    getData({ page: current_page });
  }

  getData({ page: 1 });

  function getMenuGroupById(id) {
    var cond = "{" + '"_id"' + ":" + '"' + id + '"}';

    searchGroup.setSearch(cond);
    searchGroup.setLimit("1");
    searchGroup.setSkip("0");
    selectDataMenuGroup()
      .then((data) => {
        MenuOptionSelected.MenuGroupName = "";
        if (data.getTotal() > 0) {
          MenuOptionSelected.MenuGroupName = data
            .getMenugroupdataList()[0]
            .getMenugroup();
        }
        showMenuOption = true;
      })
      .catch((error) => {
        //console.log("Error get data", error);
      });
  }

  async function selectDataMenuGroup() {
    let search = searchGroup;
    var deps = {
      token,
      search,
      coreserviceurl,
      proto: {
        Search,
        ChatReqClient: ChatReqPromiseClient,
      },
    };
    //console.log("antes del  get menugroup .........", deps);
    let menugroup = new MenuGroupService(deps);
    //console.log("despues  menugroup .........", menugroup);
    return await menugroup.selectMenuGroupfromDatabase();
  }

  const onKeyPress = (e) => {
    if (e.charCode === 13) searchMenuOption();
  };


  function reloadButtons() {
    let reloadDocument = document.getElementsByTagName("button");
    for (var idx = 0; idx < dataButtons.length; idx++) {
      for (var ridx = 0; ridx < reloadDocument.length; ridx++) {
        if (dataButtons[idx].key == reloadDocument[ridx].id) {
          if (dataButtons[idx].display) {
            // if(dataButtons[idx].onlyOwner){
            reloadDocument[ridx].style.display = "inline";
            //   if(inputCreateDate == userData.userName){
            //     reloadDocument[ridx].style.display = "inline";
            //   }else{
            //     reloadDocument[ridx].style.display = "none";
            //   }
            // }else{
            //   reloadDocument[ridx].style.display = "inline";
            // }
          } else {
            reloadDocument[ridx].style.display = "none";
          }
        }
      }
    }
  }

</script>

<div class="relative bg-red-500 pb-32 pt-10" />
<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
>
  <CardNotification
    isOpen={showNotification}
    message={messageNotification}
    on:close={() => handleToggleModalNotification()}
  />
  <SuccessToast showToast={showToastSuccess} />
  <CardTimeOut />

  <CardBusyIndicator title="Please wait..." open={showBusyIndicator} />

  {#if showMenuOption}
    <MenuOption
      isOpen={showMenuOption}
      {MenuOptionSelected}
      on:close={() => handleToggleMaintenance()}
    />
  {/if}
  {#if !showMenuOption}
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
        <div class="w-full lg:w-9/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata"
              id="lSearchOptionName"
              for="iSearchOptionName"
            >
              {$_("Search by Name")}
            </label>
            {#if searchOptionName != ""}
              <ClearIcon
                on:click={() => {
                  searchOptionName = "";
                  searchMenuOption();
                }}
              />
            {/if}
            <input
              type="text"
              name="iSearchOptionName"
              id="iSearchOptionName"
              autocomplete="given-title"
              placeholder={$_("Search By Name")}
              bind:value={searchOptionName}
              on:keypress={onKeyPress}
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 labelsMetadata"
            />
          </div>
        </div>

        <div class="w-full lg:w-3/12 px-4">
          <div class="relative w-full mb-3">
            <div class="text-center flex justify-between">
              <div style="margin-top: 30px;">
                <button
                  on:click={searchMenuOption}
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
                  type="button"
                  class="text-white p-4 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
                  on:click={(ev) => getData({ page: 1 })}
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
                  type="button"
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blueGray-700"
                  on:click|preventDefault={addNewmenuoption}
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
                    : 'bg-red-700 text-red-200 border-red-600'} labelsMetadata"
                  id="cSelect"
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
              {#each menuOptionList as item}
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
                        on:click={goTomenuoption(item)}
                        class="form-checkbox border-b-1 border-blueGray-300 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                    </label>
                  </td>

                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >{item.getOptionname()}
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
                    >{item.getMenugroup()}
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
                    >{item.getIcon()}
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
                    >{item.getOrder()}
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    ><i
                      class="fas fa-circle {getStatusColor(
                        item.getStatus()
                      )} mr-2"
                    />{item.getStatus()}
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >{formatDate(item.getCreatedate())}
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >{item.getUpdatedby()}</td
                  >
                </tr>
              {/each}
            </tbody>
          </table>

          {#if total > 0}
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-center flex justify-between">
                <button
                  on:click={sentToExcelFile}
                  class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 labelsMetadata"
                  id="bExpotToExcel"
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
