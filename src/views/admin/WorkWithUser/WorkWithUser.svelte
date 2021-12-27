<script>
  
  import { createEventDispatcher } from 'svelte'
  import CardTimeOut from 'components/Cards/CardTimeOut.svelte';
	import CardBusyIndicator from 'components/Cards/CardBusyIndicator.svelte';
  
  import CardNotification from 'components/Cards/CardNotification.svelte';
  import SuccessToast from "components/Toast/SuccessToast.svelte";
  import { workingWithUserSelected } from 'stores/store.js';
  import User from 'services/workinguserregistration.js';
  
  import { _ } from 'services/i18n.js';

  import {  getStorage } from "stores/store.js";
    // import BusyIndicatorModal from "./../componentmodal/BusyIndicatorModal.svelte";
    import { getContext } from "svelte";
  
    import {
      Req,
      ReqUpdateUserRegistration 
    } from "./../../../../proto/chat_pb";
    import {
      ChatReqClient,
      ChatReqPromiseClient,
    } from "./../../../../proto/chat_grpc_web_pb";
    //
    import WorkingWithDashboards from "services/workingwithdashboards.js";
    import { navigate } from "svelte-routing";


    import LabelMetadataBtn from "components/Common/LabelMetadataBtn.svelte";
    import ButtonToDisplayBtn from "components/Common/ButtonToDisplayBtn.svelte";

    let title = "Working with Users";
    let documentdata = document;
    let dataLabels = [];
    let dataButtons = [];
    let viewName = "WorkingWithUsersView";


    export let isOpen = false

    let token = localStorage.getItem("token");
    let showBusyIndicator  =false
    let messageNotification = ""
    let showToastSuccess = false


    let inputEmail = "";
  let inputFirstName = "";
  let inputLastName = "";
  let inputStatus = "Active";
  let inputWasUpdated = false;
  let inputId = "";
  let inputCreateDate = "";
  let inputStatusDate = "";
  let reqUserRegistration = new proto.chat.ReqUserRegistration();

  if($workingWithUserSelected.hasData){
    inputWasUpdated = true;
    console.log("workingWithUserSelected==>",$workingWithUserSelected.userSelected)

    inputId = $workingWithUserSelected.userSelected.getId();
    console.log(inputId)
    inputEmail = $workingWithUserSelected.userSelected.getEmail();
    inputFirstName = $workingWithUserSelected.userSelected.getFirstname();
    inputLastName = $workingWithUserSelected.userSelected.getLastname();
    inputStatus = $workingWithUserSelected.userSelected.getStatus();
    inputCreateDate = $workingWithUserSelected.userSelected.getCreatedate();
    inputStatusDate = $workingWithUserSelected.userSelected.getStatusdate();;
  }
 
  
    const dispatch = createEventDispatcher()

    
    let inputWorkingWithDashboard = new proto.chat.Dashboard();
    let userData = getStorage();
    let msg_error = "";
    
  
    $ : statusUser = inputStatus;

    async function myUpdateUser(){
      let id = inputId
      var deps={
        id,
        token,
        reqUserRegistration,
        proto:{
          token,
          ReqUpdateUserRegistration,
          ChatReqClient: ChatReqPromiseClient,
        }
      }

      let user = new User(deps);
      return await user.updateUserRegistration();
    }
  
    function saveButton(){
     
     let newUpdateDate = new Date();
     newUpdateDate = newUpdateDate.toISOString();

     reqUserRegistration.setFirstname(inputFirstName);
     reqUserRegistration.setLastname(inputLastName);
     reqUserRegistration.setStatus(inputStatus);

     reqUserRegistration.setCreatedate(inputCreateDate);
     reqUserRegistration.setStatusdate(newUpdateDate);
     reqUserRegistration.setUpdatedate(newUpdateDate);
     reqUserRegistration.setEmail(inputEmail);
     reqUserRegistration.setUsertype($workingWithUserSelected.userSelected.getUsertype());

     myUpdateUser().then((data)=>{
        showBusyIndicator  = false;
        showToastSuccess = true
        closeMaintenance()
     }).catch((error)=>{
          showBusyIndicator  =false;
          console.log("error en el save ------------>", error);
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
          <h6 class="text-blueGray-700 text-xl font-bold labelsMetadata" id="hWorkingWithUsers">{$_("Working with Users")}</h6>

          <div>
            <button  on:click={()=>{inputStatus = "AUTHORIZE"; saveButton();}}
              class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 labelsMetadata" id="bAuthorize"
                      type="button">
                      {$_("Authorize")}
            </button>
            <button  on:click={()=>{inputStatus = "DENY"; saveButton();}}
            class="bg-red-500 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 labelsMetadata" id="bDeny"
                    type="button">
                    {$_("Deny")}
            </button>
            <button  on:click={()=>{inputStatus = "DELETE"; saveButton();}}
            class="bg-orange-500 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 labelsMetadata" id="bDelete"
                    type="button">
                    {$_("Delete")}
          </button>
            <button on:click={closeMaintenance}
              class="bg-red-400 text-white active:bg-red-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 labelsMetadata" id="bBack"
              type="button">
              {$_("Back")}
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
                  on:loadButtons={reloadButtons}
                  {viewName}
                  statusButton={inputStatus}
                />
          </div>
        </div>
      </div>
      
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase labelsMetadata" id="hUserInformation">
            {$_("User Information")}
          </h6>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata"
                  for="iFirstName">
                  {$_("Name")}
                </label>
                <input
                type="text"
                name="iFirstName"
                id="iFirstName"
                autocomplete="given-name"
                bind:value={inputFirstName}
                disabled
                placeholder="type your name"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 labelsMetadata"
                  
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata" id="lLastName"
                  for="iLastName">
                {$_("Last Name")}
                </label>
                <input
                type="text"
                      name="iLastName"
                      id="iLastName"
                      autocomplete="given-name"
                      disabled
                      bind:value={inputLastName}
                      placeholder="type your last name"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 labelsMetadata"
                  
                />
              </div>

            </div>

            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata" id="lEmail"
                  for="iEmail">
                {$_("Email")}
                </label>
                <input
                type="text"
                name="iEmail"
                id="iEmail"
                autocomplete="given-name"
                bind:value={inputEmail}
                disabled
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 labelsMetadata"
                  
                />
              </div>

            </div>


            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata" id="lStatus"
                  for="inputStatus">
                  {$_("Status")}
                  </label>
                  <input
                  type="text"
                  name="inputStatus"
                  id="inputStatus"
                  autocomplete="given-Url"
                  bind:value={inputStatus}
                  disabled
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  
                />
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


