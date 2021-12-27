<script>
	import DashboardsSelectionModal from 'components/Modals/DashboardsSelectionModal.svelte';
	import Editor from './../../../components/Common/Editor.svelte';
  import { _ } from 'services/i18n.js';
  
  import { createEventDispatcher } from 'svelte'
  import CardTimeOut from 'components/Cards/CardTimeOut.svelte';
	import CardBusyIndicator from 'components/Cards/CardBusyIndicator.svelte';
  
  import CardNotification from 'components/Cards/CardNotification.svelte';
  import SuccessToast from "components/Toast/SuccessToast.svelte";
  
  import { getStorage, getCustomerSelected,keyObservationSelected } from "stores/store.js";
  import {
      Msg,
      UpdateRequest,
    } from "./../../../../proto/chat_pb";
    import {
       ChatReqPromiseClient,
    } from "./../../../../proto/chat_grpc_web_pb";
    //
    import KeyObservation from "services/keyobservation.js";
    

    import LabelMetadataBtn from "components/Common/LabelMetadataBtn.svelte";
    import ButtonToDisplayBtn from 'components/Common/ButtonToDisplayBtn.svelte';
    import ViewAttachmentsBtn from 'components/Common/ViewAttachmentsBtn.svelte';
    
    let title = "Key Observations";
    let documentdata = document;
    let dataLabels = [];
    let dataButtons = [];
    let viewName = "KeyObservationsView";
  export let isOpen = false

  let inputTitle="";
  let inputCustomerId = getCustomerSelected();
  let inputObservationbody="";
  let inputStatus="NEW";
  let inputFeedback="";
  let inputId="";
  let keyObservations = new proto.chat.Msg();
  let inputDashboardID="";
  let inputDashboardName="";
  let showBusyIndicator = false;
  let showToastSuccess = false
  let messageNotification = "";
  let showDashboardsSearch = false;

  if($keyObservationSelected.hasData){
   //console.log("params==>",$keyObservationSelected.ObservationSelected);
    let ObservationData = $keyObservationSelected.ObservationSelected.getMsg();
    inputTitle = ObservationData.getTitle();
    inputCustomerId= ObservationData.getCustomerid;
    inputObservationbody= ObservationData.getObservationbody();
    inputStatus= ObservationData.getStatus();
    inputId = $keyObservationSelected.ObservationSelected.getId();
    inputDashboardID = ObservationData.getDashboardid();
    inputDashboardName =  $keyObservationSelected.DashboardName;
   //console.log("inputId==>",inputId);
  }
  
    const dispatch = createEventDispatcher()

    
    
    let userData = getStorage();
    
  async function mySendMsg() {
    let token = localStorage.getItem("token");
    var deps = {
      token,
      keyObservations,
      proto: {
        Msg,
        ChatReqClient: ChatReqPromiseClient,
      },
    };
    
    let keyobservation = new KeyObservation(deps);
    return await keyobservation.sendMsg();
  }
  function sendMsg() {
    showBusyIndicator  =true;
    mySendMsg()
      .then((data) => {
        showBusyIndicator  = false;
        showToastSuccess = true
        closeMaintenance()
      })
      .catch((error) => {
        showBusyIndicator  = false;
         //console.log("error en el save ------------>", error);
          if (error.message != undefined) {
            showNotification = true
            messageNotification = error.message;
          }
      });
  }
  function saveData() {
    let NewDateCreated = new Date();
    let DateCreated = NewDateCreated.toISOString();
   //console.log("Key Observation value Customer Id==>",inputCustomerId)
    keyObservations.setDateupdated(DateCreated);
    keyObservations.setCustomerid(inputCustomerId.CustomerId);
    keyObservations.setTitle(inputTitle);
    keyObservations.setObservationbody(inputObservationbody);
    keyObservations.setObservationfeedback(inputFeedback);
    keyObservations.setStatus(inputStatus);
    keyObservations.setDashboardid(inputDashboardID);
    if (!$keyObservationSelected.hasData) {
      keyObservations.setDatecreated(DateCreated);
      keyObservations.setCreatedby(userData.userName);
      keyObservations.setStatusdate(DateCreated);
      
      sendMsg();
    } else {
      keyObservations = $keyObservationSelected.ObservationSelected.getMsg();
      keyObservations.setTitle(inputTitle);
      keyObservations.setObservationbody(inputObservationbody);
      keyObservations.setObservationfeedback(inputFeedback);
      keyObservations.setStatus(inputStatus);
      keyObservations.setDashboardid(inputDashboardID);
      keyObservations.setStatusdate(DateCreated);
      
      sendMsgUpdated();
    }
  }

  async function myUpdate() {
   //console.log("inputId==>", inputId);
    let id = inputId;
    let token = localStorage.getItem("token");
    var deps = {
      keyObservations,
      token,
      id,
      proto: {
        UpdateRequest,
        Msg,
        ChatReqClient: ChatReqPromiseClient,
      },
    };
   //console.log("before update .........", deps);
    let update = new KeyObservation(deps);
   //console.log("after update .........", update);
    return await update.updateDocumentToMongo();
  }
  function sendMsgUpdated() {
    let NewDateUpdated = new Date();
    let DateUpdated = NewDateUpdated.toISOString();
    
    keyObservations.setUpdatedby(userData.userName);
    keyObservations.setDateupdated(DateUpdated);
  
   //console.log("actualize", keyObservations);
    myUpdate(keyObservations)
      .then((data) => {
       //console.log(" respuesta en svelte del update ", data);
        showBusyIndicator  = false;
        showToastSuccess = true
        closeMaintenance()
      })
      .catch((error) => {
        if (error.message != undefined) {
            showNotification = true
            messageNotification = error.message;
          }
      });
  }

  let showNotification = false
  const handleToggleModalNotification = () => {
    showNotification = !showNotification
  }


  const closeMaintenance = () => {
   
      setTimeout(function (){
        showToastSuccess = false;
        dispatch('close')
      }, 1000);
    

   
  }
 
function showDashboards(){
  showDashboardsSearch = true;
}
  
const handleToggleModalDashboard = () => {
  showDashboardsSearch = !showDashboardsSearch
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


{#if showDashboardsSearch}
<DashboardsSelectionModal
bind:inputDashboardID={inputDashboardID}
bind:inputDashboardName={inputDashboardName}
on:close={() => handleToggleModalDashboard()}
isOpen={showDashboardsSearch}></DashboardsSelectionModal>
{/if}

<SuccessToast showToast={showToastSuccess}>
</SuccessToast>
{#if isOpen}
<CardBusyIndicator 
  title="Please wait..."
    open={showBusyIndicator}
  >
</CardBusyIndicator>
<CardNotification
isOpen={showNotification}
message={messageNotification}
on:close={() => handleToggleModalNotification()}>
</CardNotification>
<CardTimeOut />
<div class="flex flex-wrap">
  <div class="w-full lg:w-12/12 px-4 py-4">
    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">


      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
          <h6 class="text-blueGray-700 text-xl font-bold labelsMetadata" id="hKeyObservations"> {$_("Key Observations")}</h6>

          <div>
            <button  on:click|preventDefault={()=>{inputStatus="NEW";saveData();}}
              class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150  labelsMetadata" id="bSave"
                      type="button">
                      {$_("Save")}
            </button>
            <button  on:click|preventDefault={()=>{inputStatus="CANCELED";saveData();}}
              class="bg-red-700 active:bg-red-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150  labelsMetadata" id="bCancel"
                      type="button">
                      {$_("Cancel")}
            </button>
            <button on:click={closeMaintenance}
              class="bg-red-400 text-white active:bg-red-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150  labelsMetadata" id="bBack"
              type="button">
              {$_("Back")}
            </button>
            <ViewAttachmentsBtn/>
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
                  statusButton={inputStatus}
                />
          </div>
        </div>
      </div>
      
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase  labelsMetadata" id="hKeyObservationsInformation">
            {$_("Key Observations Information")}
          </h6>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2  labelsMetadata" id="lTitle"
                  for="Title">
                  {$_("Title")}
                </label>
                <input
                type="text"
                name="Title"
                id="Title"
                autocomplete="given-name"
                bind:value={inputTitle}
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  
                />
              </div>
            </div>
            <div class="w-full lg:w-9/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2  labelsMetadata" id="lDashboard"
                  for="Dashboard">
                {$_("Dashboard")}
                </label>
                <input
                type="text"
                name="Dashboard"
                id="Dashboard"
                autocomplete="given-Dashboard"
                disabled
                bind:value={inputDashboardName}
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  
                />
              </div>

            </div>
            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3" >
                <div class="text-center flex justify-between">
          
                  <div style="margin-top: 20px;">
                    <button class="text-white p-4 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500" on:click|preventDefault={()=>{inputDashboardName=""; inputDashboardID="";}} id="bClearSelectDashboard">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </button>
                    <button class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blueGray-700" id="bSelectDashboard"
                    on:click|preventDefault={showDashboards}>
                      <i class="w-5 mr-1 fa fa-search" ></i>
                    </button>

                   
                  </div>
          
                  </div>
              </div>
            </div>
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2  labelsMetadata" id="lTypeObservation"
                  for="TypeObservation">
                  {$_("Type")}
                </label>
                <select
                      id="TypeObservation"
                      name="TypeObservation"
                      autocomplete="TypeObservation"
                      bind:value={keyObservations.Type}
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                  >
                  <option>Key Observation</option>
                  <option>Others key</option>
                </select>
              </div>

            </div>

            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2  labelsMetadata" id="lObservationBody"
                  for="ObservationBody">
                  {$_("Observation Body")}
                </label>
                <div class="mt-1">
                     
                  <Editor bind:html={inputObservationbody}/>
                 
                </div>
              </div>
            </div>


          </div>
    
          <hr class="mt-6 border-b-1 border-blueGray-300" />
    

        </form>
      </div>
    
    </div>
    
  </div>
  
</div>
{/if}

