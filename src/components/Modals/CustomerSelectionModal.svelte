<script>
	
    import { createEventDispatcher } from 'svelte'
    export let isOpen = false
    // export let message = ''
    // export let type = ''

    import CardTimeOut from 'components/Cards/CardTimeOut.svelte';
    import CardBusyIndicator from 'components/Cards/CardBusyIndicator.svelte';
    import Pagination from 'components/Tables/Pagination.svelte';
    import { navigate } from "svelte-routing";

    import CardNotification from 'components/Cards/CardNotification.svelte';
    import { _ } from 'services/i18n.js';
    import Customer from "services/customer.js";
    import {
      Search,
    } from "./../../../proto/chat_pb";

    import {
      ChatReqPromiseClient,
    } from "./../../../proto/chat_grpc_web_pb";
    import {
      coreserviceurl,
      customerList,
      setCustomerSelected,
      customerSelected,
      Authenticated,
      currentMenuOption,
    } from  'stores/store.js';
    
    import LabelMetadataBtn from 'components/Common/LabelMetadataBtn.svelte';

    import ButtonToDisplayBtn from 'components/Common/ButtonToDisplayBtn.svelte';


    let columns = ["ID", "Name",  "Country", "City"]
    let title = "Select a Customer";
    let documentdata = document;
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
 
    let dataLabels = [];
    let dataButtons = [];
    let viewName = "CustomerSelectionModalView";

    const dispatch = createEventDispatcher()



  

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
    ////console.log("antes del  get Customer .........", deps);
    let customer = new Customer(deps);
    ////console.log("despues  customer .........", customer);
    return await customer.selectCustomerFromMongo();
  }

  function getcustomer(params) {

    
    const page = params.page || 1;
    const fromn = (page - 1) * per_page;

    search.setLimit(per_page.toString());
    search.setSkip(fromn.toString());
    search.setSort("");
    search.setProjection("");
    search.setAggregation("");

    
   // showBusyIndicator = true;
    myCustomer(token)
      .then((data) => {
        //startBusyIndicator = false;

        $customerList = data.getCustomerdataList();
        total = data.getTotal();
        last_page = Math.ceil(total / per_page);
        from =  (page - 1) * per_page
        to =  page * per_page;
        if( to > total){
          to = total
        }
        current_page = page;

      
      })
      .catch((error) => {
        if (error.message != undefined) {
          showNotification = true
          messageNotification = error.message;
        }
      });
  }



  function goTo(itemCustomer) {
    setTimeout(() => {
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

    currentMenuOption.set({menuOption:{OptionName:"Dashboard", OptionHref:"dashboard", Icon:"fas fa-chart-line"},menuGroup:'Home'})
    navigate("/admin/dashboard", { replace: true });
    }, 50);
   
    
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

  function clear() {
    
    searchById = "";
    searchByName = "";
    searchCustomer();
  }

  const onKeyPress = e => {
    if (e.charCode === 13) searchCustomer();
  };
    

export let color = "light";

const handleToggleModalNotification = () => {
    showNotification = !showNotification
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

getcustomer({ page: 1 });
// reloadLabels();
// reloadButtons();

</script>


{#if isOpen}
  <CardNotification
    isOpen={showNotification}
    message={messageNotification}
    on:close={() => handleToggleModalNotification()}>
  </CardNotification>

  <CardTimeOut />

  <CardBusyIndicator 
  title="Please wait..."
    open={showBusyIndicator}
  >
  </CardBusyIndicator>
    
    <div class="modal z-50 fixed w-full  h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0">
        <div class="modal-overlay fixed w-full h-full bg-blueGray-600 opacity-50"></div>
        <div class="bg-white w-full lg:h-max lg:w-8/12 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto">
          <div class="rounded-t bg-white mb-0 px-6 py-6">
            <div class="text-center flex justify-between">
              <h6 class="text-blueGray-700 text-xl font-bold labelsMetadata" id="hTitle" >{$_(title)}</h6>
              <button type="button" on:click={() => dispatch('close')}>
                <span aria-hidden="true"></span>
                <i class="fa fa-times " aria-hidden="true"></i>
                </button>
            </div>
          </div>


          <div class="content p-8"> <!--Start Content -->
            <slot name="body" />
                <div class="flex flex-wrap">
      
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata"
                        for="iSearchByIdplaceholder"
                        id="lSearchById"
                      >
                      {$_("Search by Id")}
                      </label>
                      <input
                        id="iSearchByIdplaceholder"
                        name="searchById"
                        autocomplete="given-name"
                        placeholder= {$_("Search by Id")}
                        bind:value={searchById}
                        on:keypress={onKeyPress}
                        class="border-0 px-3 py-3 labelsMetadata placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                      <label id="lSearchByName"
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata"
                        for="iSearchByNameplaceholder"
                      >
                      {$_("Search by Name")}
                      </label>
                      <input
                        id="iSearchByNameplaceholder"
                        type="text"
                        name="searchByName"
                      autocomplete="given-name"
                      placeholder={$_("Press key 'Enter' for Search By Name")}
                      on:keypress={onKeyPress}
                      bind:value={searchByName} 
                        class="border-0 px-3 py-3 labelsMetadata placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                       
                      />
                    </div>
                  </div>

                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3" >
                      <div class="text-center flex justify-between">
                
                        <div style="margin-top: 20px;">
                          <button id="bClear" class="text-white p-4 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500" on:click|preventDefault={clear}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            <span class="sr-only">{$_("Clear")}</span>
                          </button>
                          <button id="bSearch" class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blueGray-700"
                          on:click|preventDefault={searchCustomer}>
                            <i class="w-5 mr-1 fa fa-search" ></i>
                            <span class="sr-only">{$_("Search")}</span>
                          </button>
                          <LabelMetadataBtn id="bLabelsMetadata"  {title} Document={documentdata} bind:dataLabels={dataLabels}  {viewName}><span class="sr-only">{$_("Labels Metadata")}</span></LabelMetadataBtn>
                          <ButtonToDisplayBtn  {title} Document={documentdata} bind:dataButtons={dataButtons} on:loadButtons={reloadButtons} {viewName}/>
                          
                        </div>
                       
                        </div>
                    </div>
                  </div>

                </div>
                <div class="block w-full overflow-x-auto">

                  <div style="position: relative;min-height: 480px;">
                    <table class="items-center w-full bg-transparent border-collapse" >
                      <thead>
                        <tr>
                          <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left labelsMetadata {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}" id="cSelect">
                            {$_("Select")}
                          </th>
                          {#each columns as colName}
                          <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left labelsMetadata {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}" id="c{colName}">
                            {$_(colName)}
                          </th>
                          {/each}
                          
                        </tr>
                      </thead>
                      <tbody>
                        {#each $customerList as itemCustomer }
                        <tr>
                          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" contenteditable="true" >
                  
                          <label
                          class="inline-flex justify-items-stretch cursor-pointer"
                        >
                          <input
                            id="customCheckLogin"
                            type="checkbox"  on:click={goTo(itemCustomer)}
                            class="form-checkbox border-b-1 border-blueGray-300 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                          />
                        </label>
                      </td>
                          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{itemCustomer.getCustomernumber()} </td>
                          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{itemCustomer.getCustomername()} </td>
                          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{itemCustomer.getCustomeraddress().getCountry()} </td>
                          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{itemCustomer.getCustomeraddress().getCity()}</td>
                        
                    
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
                          on:change="{(ev) => getcustomer({page: ev.detail})}">
                        </Pagination>
                          
                        </div>
                      </div>
                    {/if}
                  </div>
                  
                </div>

                <div class="btn-wrapper text-right">
                  <button on:click={() => dispatch('close')}
                    class="bg-red-400 text-white active:bg-red-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 labelsMetadata"
                    type="button"
                    id="bClose">
                    {$_("Close")}  
                  </button>
               </div>

          </div>  <!--End Content -->
         
        </div>
      </div>
{/if}

