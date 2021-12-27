<script>
	import CardTimeOut from 'components/Cards/CardTimeOut.svelte';
	import CardBusyIndicator from 'components/Cards/CardBusyIndicator.svelte';
  import Pagination from 'components/Tables/Pagination.svelte';

  import SuccessToast from "components/Toast/SuccessToast.svelte";
  import {exportToSpreadsheet} from "js/GeneralFuntions.js"

  import WorkWithUser from "views/admin/WorkWithUser/WorkWithUser.svelte";
 
  import ClearIcon from "components/Common/ClearIcon.svelte";
  import { _ } from 'services/i18n.js';
  
  import CardNotification from 'components/Cards/CardNotification.svelte';
  import UserRegistration from 'services/workinguserregistration.js';


  import {
    Search,
  } from "./../../../../proto/chat_pb";

  import {
    ChatReqPromiseClient,
  } from "./../../../../proto/chat_grpc_web_pb";
  
  import {
    formatDate,
    getStatusColor,
    workingWithUserSelected,
  } from  'stores/store.js';

  import LabelMetadataBtn from "components/Common/LabelMetadataBtn.svelte";
  import ButtonToDisplayBtn from "components/Common/ButtonToDisplayBtn.svelte";

  let title = "Dashboard Working With User";
  let documentdata = document;
  let dataLabels = [];

  let columns = ["Name","Last Name","Email", "Status",  "Date"]
  let searchEmailUser = "";
  let workingWithUsersList = [];


  let rowexport = [];
 
  let showToastSuccess = false
  let showWorkingWithUser  =false 
    
  
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
 
    let dataButtons = [];
    let viewName = "DashboardWorkingWithUsersView";

    getData({ page: 1 });



  function goToWorkingWithUsers(itemUser) {
    setTimeout(() => {
     //console.log("open for edit working with users");
      workingWithUserSelected.set(itemUser);   
      showWorkingWithUser =  true
    }, 75);
  }

  
  const onKeyPress = e => {
    if (e.charCode === 13) searchWorkingWithUsers();
  };

  // can be one of light or dark
  export let color = "light";

  function sentToExcelFile() {
    showBusyIndicator = true
    let dataExport = []
    dataExport.push(columns)
    
    for (let i = 0; i < workingWithUsersList.length; i++) {
      let element = workingWithUsersList[i]
     
      rowexport =[element.getFirstname(),
        element.getLastname(),
        element.getEmail(),
        element.getStatus(),
        element.getCreatedate()]

      dataExport.push(rowexport)
    }
    showBusyIndicator = exportToSpreadsheet(dataExport,"Users")

  }

  async function selectData() {
    var deps={
      token,
      search,
      proto:{
        token,
        Search,
        ChatReqClient: ChatReqPromiseClient,
      }
    }
    let userRegistration = new UserRegistration(deps);
    return await userRegistration.selectUserRegistration();

  }


  function getData(params) {
   //console.log("get working with user");
    //
    if ($workingWithUserSelected.hasData) {
     // currentPage = 1 //$workingWithUserSelected.currentPage;
      workingWithUserSelected.set({});
    }
    
    const page = params.page || 1;
    const fromn = (page - 1) * per_page;

    search.setLimit(per_page.toString());
    search.setSkip(fromn.toString());
    search.setSort("");
    search.setProjection("");
    search.setAggregation("");

    selectData().then((data)=>{
      showBusyIndicator = false
     //console.log("data==>",data.getUserregistrationList());
      workingWithUsersList = data.getUserregistrationList();
      total = data.getTotal();
      last_page = Math.ceil(total / per_page);
      current_page = page;
      from =  (page - 1) * per_page
      to =  page * per_page;
      if( to > total){
        to = total
      }
    }).catch((error) => {
        showBusyIndicator = false
        if (error.message != undefined) {
          showNotification = true
          messageNotification = error.message;
        }
      });

  }


  function handleToggleMaintenance(params) { 
    showWorkingWithUser = !showWorkingWithUser
    getData({ page: current_page });
  }

  
  const handleToggleModalNotification = () => {
    showNotification = !showNotification
  }

  function addNewWorkingWithDashboards() {
    workingWithUserSelected.set({
      dashboardSelected: {},
      hasData: false,
      currentPage: current_page,
    });
    showWorkingWithUser = true
  }


  function searchWorkingWithUsers() {
    search.setSearch("");
    var q = {}; // declare the query object
    q["$and"] = [];

    if (searchEmailUser != "") {
      var cond = { $regex: searchEmailUser, $options: "i" };
      q["$and"].push({ Email: cond });
      search.setSearch(JSON.stringify(q));
    }
    

    getData({ page: 1 });
  }


  function reloadButtons() {
    let reloadDocument = document.getElementsByTagName("button");
    for (var idx = 0; idx < dataButtons.length; idx++) {
      for (var ridx = 0; ridx < reloadDocument.length; ridx++) {
        if (dataButtons[idx].key == reloadDocument[ridx].id) {
          if(dataButtons[idx].display){
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
          }else{
            reloadDocument[ridx].style.display = "none";
          }         
        }
      }
    }
  }

</script>

<div class="relative bg-red-500 pb-32 pt-10"/>

<div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

  {#if showWorkingWithUser}
  <WorkWithUser
      isOpen={showWorkingWithUser}
      on:close={() => handleToggleMaintenance()}>
  </WorkWithUser>
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

  {#if !showWorkingWithUser}
  <div  class="bg-red-500 w-full p-2">
    <LabelMetadataBtn {title} Document={documentdata} bind:dataLabels {viewName} />
    <ButtonToDisplayBtn  {title} Document={documentdata} bind:dataButtons={dataButtons} on:loadButtons={reloadButtons} {viewName}/>
                  
  </div>
  <div>
    <div class="flex flex-wrap rounded-t bg-white mb-0 px-6 py-6">
      
      <div class="w-full lg:w-4/12 px-4">
        <div class="relative w-full mb-3">
          <label
            class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata" id="lSearchEmailUser"
            for="iSearchEmailUser">
          {$_("Search By Email")}
          </label>
          {#if searchEmailUser != ""}
            <ClearIcon
              on:click={() => {
                searchEmailUser = "";
                searchWorkingWithUsers();
              }}
            />
          {/if}
          <input
          type="text"
          name="iSearchEmailUser"
          id="iSearchEmailUser"
          autocomplete="given-name"
          placeholder= {$_("Search By Email")}
          bind:value={searchEmailUser}
          on:keypress={onKeyPress}
            class="labelsMetadata border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          
          />
        </div>
      </div>


      

      <div class="w-full lg:w-4/12 px-4">
        <div class="relative w-full mb-3" >
          <div class="text-center flex justify-between">
            <div style="margin-top: 30px;">
              <button on:click="{searchWorkingWithUsers}" 
                    class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 labelsMetadata" id="bSearch"
                    type="button"
                >
                    <i class="w-5 mr-1 fa fa-search" ></i>
                    {$_("Search")}
                </button>
            </div>

            <div style="margin-top: 20px;">
              <button class="text-white p-4 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
              on:click="{(ev) => getData({page: 1})}" id="bRefresh">
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
                {#each workingWithUsersList as item }
                <tr>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"  >

                  <label
                  class="inline-flex justify-items-stretch cursor-pointer" >
                  <input
                    id="customCheckLogin"
                    type="checkbox"    on:click={goToWorkingWithUsers({hasData:true,userSelected:item,currentPage:current_page})}
                    class="form-checkbox border-b-1 border-blueGray-300 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"/>
                </label>
              </td>
              
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{item.getFirstname()} </td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{item.getLastname()} </td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{item.getEmail()} </td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4  "><i class="fas fa-circle {getStatusColor(item.getStatus())} mr-2"></i> {item.getStatus()} </td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{formatDate(item.getCreatedate())} </td>
                
            
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
