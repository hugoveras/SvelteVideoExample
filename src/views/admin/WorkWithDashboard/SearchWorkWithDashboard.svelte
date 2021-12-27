<script>
	import CardTimeOut from 'components/Cards/CardTimeOut.svelte';
	import CardBusyIndicator from 'components/Cards/CardBusyIndicator.svelte';
  import Pagination from 'components/Tables/Pagination.svelte';

  import SuccessToast from "components/Toast/SuccessToast.svelte";
  import {exportToSpreadsheet} from "js/GeneralFuntions.js";

  import WorkWithDashboard from "views/admin/WorkWithDashboard/WorkWithDashboard.svelte";

  import ClearIcon from "components/Common/ClearIcon.svelte";

  import CardNotification from 'components/Cards/CardNotification.svelte';
  import { _ } from 'services/i18n.js';
  
    import WorkingWithDashboard from "services/workingwithdashboards.js";
    import {
      Req,
      Msg,
      DataList,
      Search,
      CustomerList,
    } from "./../../../../proto/chat_pb";

    import {
      ChatReqClient,
      ChatReqPromiseClient,
    } from "./../../../../proto/chat_grpc_web_pb";
    
    import {
      coreserviceurl,
      formatDate,
      getStatusColor,
      workingWithDashboardsSelected,
    } from  'stores/store.js';



  import LabelMetadataBtn from "components/Common/LabelMetadataBtn.svelte";
  import ButtonToDisplayBtn from 'components/Common/ButtonToDisplayBtn.svelte';

  let title = "Select a Menu Group";
  let documentdata = document;
  let dataLabels = [];
  let dataButtons = [];
  let viewName = "DashboradWorkingWithDashboardView";
  let columns = ["Name", "Status",  "Date", "Url"];
  let searchName = "";
  let workingWithDashboardList = [];


  // export let isOpen = false
  // export let message = ''
  // export let type = ''
 

  let rowexport = [];
 

  let showToastSuccess = false
  let showWorkingWithDashboard  =false



 
    
  
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
 
    

    getData({ page: 1 });



  function goToWorkingWithDashboard(itemWorkingWithDashboards) {
    setTimeout(() => {
     //console.log("open for edit working with dashboards");
      workingWithDashboardsSelected.set({
        dashboardSelected: itemWorkingWithDashboards,
        hasData: true,
        currentPage:1 // currentPage,
      });
      showWorkingWithDashboard =  true
    }, 50);
  }


  const onKeyPress = e => {
    if (e.charCode === 13) searchWorkingWithDashboards();
  };

  // can be one of light or dark
  export let color = "light";

  function sentToExcelFile() {
    showBusyIndicator = true
    let dataExport = []
    dataExport.push(columns)
    
    for (let i = 0; i < workingWithDashboardList.length; i++) {
      let element = workingWithDashboardList[i]
     
      rowexport =[
        element.getName(),
        element.getStatus(),
        element.getCreatedate(),
        element.getUrl(),
      ]

      daaExport.push(rowexport)
    }
    showBusyIndicator = exportToSpreadsheet(dataExport,"Dashboard")

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
    let workingWithDashboard = new WorkingWithDashboard(deps);
   //console.log("despues  WorkingWithDashboard .........",workingWithDashboard);
    return await workingWithDashboard.selectDashboardFromMongo();
  }


  function getData(params) {
   //console.log("get working with dashboards");
    //
    if ($workingWithDashboardsSelected.hasData) {
     // currentPage = 1 //$workingWithDashboardsSelected.currentPage;
      workingWithDashboardsSelected.set({});
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
        showBusyIndicator = false
        workingWithDashboardList = data.getDashboarddataList();
        total = data.getTotal();
        last_page = Math.ceil(total / per_page);
        current_page = page;
        from =  (page - 1) * per_page
        to =  page * per_page;
        if( to > total){
          to = total
        }
      })
      .catch((error) => {
        showBusyIndicator = false
        if (error.message != undefined) {
          showNotification = true
          messageNotification = error.message;
        }
      });
  }


  function handleToggleMaintenance(params) { 
    showWorkingWithDashboard = !showWorkingWithDashboard
    getData({ page: current_page });
  }

  
  const handleToggleModalNotification = () => {
    showNotification = !showNotification
  }

  function addNewWorkingWithDashboards() {
    workingWithDashboardsSelected.set({
      dashboardSelected: {},
      hasData: false,
      currentPage: current_page,
    });
    showWorkingWithDashboard = true
  }


  function searchWorkingWithDashboards() {
    search.setSearch("");
    var q = {}; // declare the query object
    q["$and"] = [];

    if (searchName != "") {
      var cond = { $regex: searchName, $options: "i" };
      q["$and"].push({ Name: cond });
      search.setSearch(JSON.stringify(q));
    }

    getData({ page: 1 });
  }
   
function reloadButtons(){
 
 let reloadDocument = document.getElementsByTagName("button");
 for(var idx=0; idx < dataButtons.length;idx++){
   for(var ridx = 0; ridx < reloadDocument.length;ridx++){
     
     if(dataButtons[idx].key == reloadDocument[ridx].id){
      
       reloadDocument[ridx].style.display = dataButtons[idx].display ? "inline" : "none" ;
     
     }
   }
 
 }
}

  

</script>

<div class="relative bg-red-500 pb-32 pt-10"/>
<div  class="bg-red-500 w-full p-2">
  <LabelMetadataBtn
                    {title}
                    Document={documentdata}
                    bind:dataLabels
                    {viewName}
                  />
  <ButtonToDisplayBtn  {title} Document={documentdata} bind:dataButtons={dataButtons} on:loadButtons={reloadButtons} {viewName}/>
                
</div>
<div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

  {#if showWorkingWithDashboard}
  <WorkWithDashboard
      isOpen={showWorkingWithDashboard}
      on:close={() => handleToggleMaintenance()}>
  </WorkWithDashboard>
  {/if}


  <CardNotification
      isOpen={showNotification}
      message={messageNotification}
      on:close={() => handleToggleModalNotification()}>
    </CardNotification>
  <SuccessToast showToast={showToastSuccess}>
  </SuccessToast>
  <CardTimeOut />

  <CardBusyIndicator 
  title="Please wait..."
    open={showBusyIndicator}
  >
  </CardBusyIndicator>

  {#if !showWorkingWithDashboard}
  <div>
    <div class="flex flex-wrap rounded-t bg-white mb-0 px-6 py-6">
      
      <div class="w-full lg:w-3/12 px-4">
        <div class="relative w-full mb-3">
          <label
            class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata" id="lSearchName"
            for="iSearchName">
          {$_("Search by Name")}
          </label>
          {#if searchName != ""}
            <ClearIcon
              on:click={() => {
                searchName = "";
                searchWorkingWithDashboards();
              }}
            />
          {/if}
          <input
          type="text"
          name="isearchName"
          id="isearchName"
          autocomplete="given-name"
          placeholder={$_("Search by Name")}
          bind:value={searchName}
          on:keypress={onKeyPress}
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 labelsMetadata"
          
          />
        </div>
      </div>


      

      <div class="w-full lg:w-3/12 px-4">
        <div class="relative w-full mb-3" >
          <div class="text-center flex justify-between">
            <div style="margin-top: 30px;">
              <button on:click="{searchWorkingWithDashboards}" 
                    class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 labelsMetadata" id="bSearch"
                    type="button"
                >
                    <i class="w-5 mr-1 fa fa-search" ></i>
                    {$_("Search")}
                </button>
            </div>

            <div style="margin-top: 20px;">
              <button class="text-white p-4 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500" id="bRefresh"
              on:click="{(ev) => getData({page: 1})}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                </svg>
              </button>
          
              <button class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blueGray-700" on:click|preventDefault={addNewWorkingWithDashboards} id="bAddNewWorkingWithDashboards">
                <i class="w-5 m-1 fa fa-plus" ></i>
              </button>
              
            </div>

            </div>
        </div>
      </div>

      
    </div>


      
      <div class="block w-full overflow-x-auto">

    <div style="position: relative;">
      
      

            <table class="items-center w-full bg-transparent border-collapse" >
              <thead>
                <tr>
                  <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'} labelsMetadata" id="cSelect">
                    {$_("Select")}
                  </th>
                  {#each columns as colName}
                  <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'} labelsMetadata" id="c{colName}">
                  {$_(colName)}
                  </th>
                  {/each}
                  
                </tr>
              </thead>
              <tbody>
                {#each workingWithDashboardList as item }
                <tr>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"  >

                  <label
                  class="inline-flex justify-items-stretch cursor-pointer" >
                  <input
                    id="customCheckLogin"
                    type="checkbox"  on:click={goToWorkingWithDashboard(item)}
                    class="form-checkbox border-b-1 border-blueGray-300 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"/>
                </label>
              </td>

              
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{item.getName()} </td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><i class="fas fa-circle {getStatusColor(item.getStatus())} mr-2"></i>{item.getStatus()} </td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{formatDate(item.getCreatedate())} </td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{item.getUrl()}</td>
                
            
                </tr>
              {/each}

              
                
              </tbody>

            </table>
            
            {#if total > 0}
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-center flex justify-between">
                  <button on:click="{sentToExcelFile}" 
                      class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 labelsMetadata" id="bExportToExcel"
                      type="button" >
                      <i class="w-5 mr-1 fas fa-download" ></i>
                      {$_("Export to Excel")} 
                  </button>

                <Pagination
                  {current_page}
                  {from}
                  {last_page}
                  {per_page}
                  {to}
                  {total}
                  on:change="{(ev) => getData({page: ev.detail})}">
                </Pagination>
                
            </div>
          </div>
          {/if}
    </div>

    </div>
  </div>
  {/if}


</div>
