<script>
	import CardTimeOut from 'components/Cards/CardTimeOut.svelte';
	import CardBusyIndicator from 'components/Cards/CardBusyIndicator.svelte';
  import Pagination from 'components/Tables/Pagination.svelte';

  import SuccessToast from "components/Toast/SuccessToast.svelte";
  import {exportToSpreadsheet} from "js/GeneralFuntions.js"

  
  import { createEventDispatcher } from 'svelte'
 

    import { navigate } from "svelte-routing";

    import CardNotification from 'components/Cards/CardNotification.svelte';

    import Customer from "services/customer.js";
    import WorkingWithDashboard from "services/workingwithdashboards.js";
    import {
      Req,
      Msg,
      DataList,
      Search,
      CustomerList,
    } from "./../../../proto/chat_pb";

    import {
      ChatReqClient,
      ChatReqPromiseClient,
    } from "./../../../proto/chat_grpc_web_pb";
    import {
      coreserviceurl,
      formatDate,
  Authenticated,
    workingWithDashboardsSelected,
    } from  'stores/store.js';




  let columns = ["Name", "Status",  "Date", "Url"]
  let collumnsExport = ["InvoiceNumber", "InvoiceDate",  "InvoiceAmount",  "SupplierName", "OriginatorName"]
  const refreshIcon = "../assets/img/refresh.svg";
  let searchName = "";
  let workingWithDashboardList = [];


  // export let isOpen = false
  // export let message = ''
  // export let type = ''
 

  let rowexport = [];
 

  
  let types = ["success", "error", "info"];
  let dismissible = true;
  let timeout = 0;
  let showToastSuccess = false



 
    
  
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
    let searchById = "";

  
    let showBusyIndicator = false;
    let token = localStorage.getItem("token");
    let search = new proto.chat.Search();
 
  


    const dispatch = createEventDispatcher()



    getData({ page: 1 });

  async function myCustomer(token) {
    var deps = {
      token,
      search,
      coreserviceurl,
      proto: {
        Search,
        ChatReqClient: ChatReqPromiseClient,
      },
    };
    // console.log("antes del  get Customer .........", deps);
    let customer = new Customer(deps);
    // console.log("despues  customer .........", customer);
    return await customer.selectCustomerFromMongo();
  }

  function getcustomer(params) {

    
    const page = params.page || 1;
    const from = (page - 1) * per_page;
    const to = page * per_page;

    search.setLimit(per_page.toString());
    search.setSkip(from.toString());
    search.setSort("");
    search.setProjection("");
    search.setAggregation("");

    
   // showBusyIndicator = true;
    myCustomer(token)
      .then((data) => {
        showBusyIndicator = false;

        //$customerList = data.getCustomerdataList();
        total = data.getTotal();
        last_page = Math.ceil(total / per_page);
        current_page = page;

      
      })
      .catch((error) => {
        showBusyIndicator = false
        if (error.message != undefined) {
          showNotification = true
          messageNotification = error.message;
        }
      });
  }

 

  

  function goTo(itemCustomer) {
    let customer = {
      CustomerId: itemCustomer.getCustomerid(),
      CustomerNumber: itemCustomer.getCustomernumber(),
      CustomerName: itemCustomer.getCustomername(),
    };
    setCustomerSelected(customer);
    customerSelected.set(customer);
    Authenticated.set(true);
    localStorage.setItem("Authenticated",true) ;
    //navigate("/searchKeyObservations", { replace: true });

   
    navigate("/admin/dashboard", { replace: true });
  }

  const searchCustomer = () => {
   
    search.setSearch(searchByName);
   

    var q = {}; // declare the query object
    q["$and"] = [];

    if (searchById != "") {
      var cond = { $regex: searchById, $options: "i" };

      q["$and"].push({ CustomerNumber: cond });
    }

    if (searchByName != "") {
      var cond = { $regex: searchByName, $options: "i" };
      q["$and"].push({ CustomerName: cond });
    }

    search.setSearch("");

    if (q["$and"].length > 0) {
      search.setSearch(JSON.stringify(q));
    }

    
    getcustomer({ page: 1 });
  };

  function clearById() {
  
    searchById = "";
    searchCustomer();
  }

  function clearByName() {
    searchByName = "";
    searchCustomer();
  }

  function clear() {
    
    searchById = "";
    searchByName = "";
    searchCustomer();
  }

  const onKeyPress = e => {
    if (e.charCode === 13) searchCustomer();
  };

  // can be one of light or dark
  export let color = "light";

  function sentToExcelFile() {
    showBusyIndicator = true
    dataExport = []
    dataExport.push(columns)
    
    for (let i = 0; i < data.length; i++) {
      let item = data[i]
     
      rowexport = []
      for (const key in item) {

        rowexport.push(item[key]);

      }

      dataExport.push(rowexport)
    }
    showBusyIndicator = exportToSpreadsheet(dataExport,"Invoices")

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
    console.log("antes del  get WorkingWithDashboard .........", deps);
    let workingWithDashboard = new WorkingWithDashboard(deps);
    console.log(
      "despues  WorkingWithDashboard .........",
      workingWithDashboard
    );
    return await workingWithDashboard.selectDashboardFromMongo();
  }


  function getData(params) {
    console.log("get working with dashboards");
    //
    if ($workingWithDashboardsSelected.hasData) {
      currentPage = $workingWithDashboardsSelected.currentPage;
      workingWithDashboardsSelected.set({});
    }
    
    const page = params.page || 1;
    const from = (page - 1) * per_page;
    const to = page * per_page;

    search.setLimit(per_page.toString());
    search.setSkip(from.toString());
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
      })
      .catch((error) => {
        showBusyIndicator = false
        if (error.message != undefined) {
          showNotification = true
          messageNotification = error.message;
        }
      });
  }

</script>

<div class="relative bg-red-500 pb-32 pt-12">
</div>
<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
>
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

<div class="flex flex-wrap rounded-t bg-white mb-0 px-6 py-6">
  
  <div class="w-full lg:w-3/12 px-4">
    <div class="relative w-full mb-3">
      <label
        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        for="searchName">
      Search By Name
      </label>
      <input
      type="text"
      name="searchName"
      id="searchName"
      autocomplete="given-name"
      placeholder="Search By Name"
      bind:value={searchName}
        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      
      />
    </div>
  </div>

  <div class="w-full lg:w-3/12 px-4">
    <div class="relative w-full mb-3" >
      <div class="text-center flex justify-between">
        <div style="margin-top: 30px;">
          <button on:click="{sentToExcelFile}" 
                class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
            >
                <i class="w-5 mr-1 fa fa-search" ></i>
                Search
            </button>
        </div>

        <div style="margin-top: 20px;">
          <button class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
              <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
            </svg>
          </button>
      
          <button class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blueGray-700">
            <i class="w-5 mr-1 fa fa-plus" ></i>
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
              <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}">
                Select
              </th>
              {#each columns as colName}
              <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}">
              {colName}
              </th>
              {/each}
              
            </tr>
          </thead>
          <tbody>
            {#each workingWithDashboardList as item }
            <tr>
              <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" contenteditable="true" >

              <label
              class="inline-flex justify-items-stretch cursor-pointer"
            >
              <input
                id="customCheckLogin"
                type="checkbox"  on:click|preventDefault={goTo(item)}
                class="form-checkbox border-b-1 border-blueGray-300 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
              />
            </label>
          </td>

          
              <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{item.getName()} </td>
              <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{item.getStatus()} </td>
              <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{formatDate(item.getCreatedate())} </td>
              <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{item.getUrl()}</td>
            
        
            </tr>
          {/each}

          
            
          </tbody>

        </table>

        {#if total > per_page}
        <div class="rounded-t bg-white mb-0 px-6 py-6">
          <div class="text-center flex justify-between">
              <button on:click="{sentToExcelFile}" 
                  class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
              >
                  <i class="w-5 mr-1 fas fa-download" ></i>
                  Export to Excel
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
