<script>
	import MenuGroupModal from './../../../components/Modals/MenuGroupModal.svelte';
  import { ChatReqPromiseClient } from "./../../../../proto/chat_grpc_web_pb";
  import { createEventDispatcher } from "svelte";
  import CardTimeOut from "components/Cards/CardTimeOut.svelte";
  import CardBusyIndicator from "components/Cards/CardBusyIndicator.svelte";
  import CardNotification from "components/Cards/CardNotification.svelte";
  import SuccessToast from "components/Toast/SuccessToast.svelte";
  import MenuOptionService from "services/menuoption.js";
  import { getStorage } from "stores/store.js";
  import { UpdateMenuOption } from "./../../../../proto/chat_pb";
  import { _ } from 'services/i18n.js';
  export let MenuOptionSelected;
  // export let isOpen = false;

  
  import LabelMetadataBtn from "components/Common/LabelMetadataBtn.svelte";
  import ButtonToDisplayBtn from "components/Common/ButtonToDisplayBtn.svelte";

  let title = "Menu Option";
  let documentdata = document;
  let dataLabels = [];
  let dataButtons = [];
  let viewName = "MenuOptionView";

  const dispatch = createEventDispatcher()

  let showToastSuccess = false;
  let showNotification = false;
  let messageNotification = "";
  let showBusyIndicator = false;
  let showMenuGroupSearch = false;

  let menuoption = {};
  let userData = getStorage();
  let MenuOptionSave = new proto.chat.MenuOption();

  

  if (MenuOptionSelected.hasData) {
   //console.log("Mnu option selected ==>",MenuOptionSelected.optionSelected.getUsertype());
    MenuOptionSave = MenuOptionSelected.optionSelected;
    menuoption.UserType =  MenuOptionSelected.optionSelected.getUsertype();
    menuoption.MenuOptionName = MenuOptionSelected.optionSelected.getOptionname();
    menuoption.MenuGroupName = MenuOptionSelected.MenuGroupName;
    menuoption.MenuGroupId = MenuOptionSelected.optionSelected.getMenugroup();
    menuoption.Status = MenuOptionSelected.optionSelected.getStatus();
    menuoption.Icon = MenuOptionSelected.optionSelected.getIcon();
    menuoption.id = MenuOptionSelected.optionSelected.getId();
    menuoption.Order = MenuOptionSelected.optionSelected.getOrder();
    menuoption.OptionHref = MenuOptionSelected.optionSelected.getOptionhref();
  }

 //console.log("Menu Option Save Value ==>", MenuOptionSave)

  async function myinsertMenuOptionuptoDatabase() {
    let token = localStorage.getItem("token");
    var deps = {
      token,
      MenuOptionSave,
      proto: {
        MenuOptionSave,
        ChatReqClient: ChatReqPromiseClient,
      },
    };

    let menuOption = new MenuOptionService(deps);
    return await menuOption.insertMenuOptionuptoDatabase();
  }

  function insertMenuOptionuptoDatabase() {
    myinsertMenuOptionuptoDatabase()
      .then((data) => {
       //console.log(" respuesta del save:  ", data);
        showBusyIndicator = false;
        showToastSuccess = true;
        closeMaintenance();
      })
      .catch((error) => {
        showBusyIndicator = false;
       //console.log("error en el save ------------>", error);
        if (error.message != undefined) {
          showNotification = true;
          messageNotification = error.message;
        }
      });
  }

  async function myupdateMenuOptiontoDatabase() {
    let token = localStorage.getItem("token");
    let id = menuoption.id;
    var deps = {
      token,
      MenuOptionSave,
      id,
      proto: {
        UpdateMenuOption,
        ChatReqClient: ChatReqPromiseClient,
      },
    };

    let menuOption = new MenuOptionService(deps);
    return await menuOption.updateMenuOptiontoDatabase();
  }

  function updateMenuOptiontoDatabase() {
    myupdateMenuOptiontoDatabase()
      .then((data) => {
       //console.log(" respuesta del save:  ", data);
        showBusyIndicator = false;
        showToastSuccess = true;
        closeMaintenance();
      })
      .catch((error) => {
        showBusyIndicator = false;
       //console.log("error en el save ------------>", error);
        if (error.message != undefined) {
          showNotification = true;
          messageNotification = error.message;
        }
      });
  }

  function saveData() {
    showBusyIndicator = true;
    let NewDateCreated = new Date();
    NewDateCreated = NewDateCreated.toISOString();

    MenuOptionSave.setUsertype(Number(menuoption.UserType));
    MenuOptionSave.setOptionname(menuoption.MenuOptionName);
    MenuOptionSave.setMenugroup(menuoption.MenuGroupId);
    MenuOptionSave.setStatus(menuoption.Status);
    MenuOptionSave.setIcon(menuoption.Icon);
    MenuOptionSave.setOrder(menuoption.Order);
    MenuOptionSave.setOptionhref(menuoption.OptionHref);
    if (MenuOptionSelected.hasData) {
      MenuOptionSave.setUpdatedate(NewDateCreated);
      MenuOptionSave.setUpdatedby(userData.Username);
      updateMenuOptiontoDatabase();
    } else {
      MenuOptionSave.setCreatedate(NewDateCreated);
      MenuOptionSave.setCreatedby(userData.Username);
      MenuOptionSave.setStatusdate(NewDateCreated);
      MenuOptionSave.setUpdatedate(NewDateCreated);
      MenuOptionSave.setUpdatedby(userData.Username);
      insertMenuOptionuptoDatabase();
    }
  }

  const handleToggleModalNotification = () => {
    showNotification = !showNotification;
  };

  const closeMaintenance = () => {
    setTimeout(function () {
      showToastSuccess = false;
      dispatch("close");
    }, 1000);
  };

  function deleteData(){
    menuoption.Status = "DELETE";
    saveData();
  }

  function showMenuGroup(){
    showMenuGroupSearch = true;
  }

  
const handleToggleModalMenu = () => {
  showMenuGroupSearch = !showMenuGroupSearch
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
{#if showMenuGroupSearch}
<MenuGroupModal
bind:MenuGroupName={menuoption.MenuGroupName}
bind:MenuGroupId={menuoption.MenuGroupId}
on:close={() => handleToggleModalMenu()}
isOpen={showMenuGroupSearch}/>
{/if}
<CardNotification
  isOpen={showNotification}
  message={messageNotification}
  on:close={() => handleToggleModalNotification()}
/>
<SuccessToast showToast={showToastSuccess} />
<CardTimeOut />

<CardBusyIndicator title="Please wait..." open={showBusyIndicator} />

<div class="flex flex-wrap">
  <div class="w-full lg:w-12/12 px-4 py-4">
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
    >
      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
          <h6 class="text-blueGray-700 text-xl font-bold labelsMetadata" id="hTitle">{$_("Menu Option")}</h6>

          <div>
            <button
              class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 labelsMetadata" id="bSave"
              type="button"
              on:click={saveData}
            >
              {$_("Save")}
            </button>
            <button  on:click={deleteData}
              class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 labelsMetadata" id="bDelete"
              type="button"
            >
              {$_("Delete")}
            </button>
            <button  on:click={closeMaintenance}
              class="bg-red-400 text-white active:bg-red-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 labelsMetadata" id="bBack"
              type="button"
            >
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
            />
          </div>
        </div>
      </div>

      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            {$_("Menu Option Information")}
          </h6>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-9/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata" id="lMenuGroupName"
                  for="iMenuGroupName"
                >
                  {$_("Menu Group Name")}
                </label>
                <input
                  type="text"
                  name="MenuGroupName"
                  id="iMenuGroupName"
                  disabled
                  autocomplete="given-name"
                  bind:value={menuoption.MenuGroupName}
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 labelsMetadata"
                />
              </div>
            </div>
            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3" >
                <div class="text-center flex justify-between">
          
                  <div style="margin-top: 20px;">
                    <button class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500" on:click|preventDefault={()=>{menuoption.MenuGroupName=""; menuoption.MenuGroupId="";}} id="bClearSelectedMenuGroup">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </button>
                    <button class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blueGray-700"
                    on:click|preventDefault={showMenuGroup}  id="bShowMenuGroup">
                      <i class="w-5 mr-1 fa fa-search" ></i>
                    </button>

                   
                  </div>
          
                  </div>
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2  labelsMetadata" id="lMenuOptionName"
                  for="iMenuOptionName"
                >
                  {$_("Menu Option Name")}
                </label>
                <input
                  type="text"
                  name="MenuOptionName"
                  id="MenuOptionName"
                  autocomplete="given-name"
                  bind:value={menuoption.MenuOptionName}
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 labelsMetadata"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata" id="lIcon"
                  for="iIcon"
                >
                  {$_("Icon")}
                </label>
                <input
                  type="text"
                  name="iIcon"
                  id="iIcon"
                  autocomplete="given-Url"
                  bind:value={menuoption.Icon}
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 labelsMetadata"
                />
                <span
                  class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"
                >
                  <i class={menuoption.Icon} />
                </span>
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata" id="lOptionHref"
                  for="iOptionHref"
                >
                  {$_("Option reference")}
                </label>
                <input
                  type="text"
                  name="iOptionHref"
                  id="iOptionHref"
                  autocomplete="given-name"
                  bind:value={menuoption.OptionHref}
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 labelsMetadata"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata" id="lUserType"
                  for="iUserType"
                >
                  {$_("User Type")}
                </label>
                <select
                  name="iUserType"
                  id="iUserType"
                  autocomplete="given-name"
                  bind:value={menuoption.UserType}
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 labelsMetadata"
                >
                <option value={0}>Administrator</option>
                <option value={1}>Standar User</option>
              </select>
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata" id="lOrder"
                  for="iOrder"
                >
                  {$_("Order")}
                </label>
                <input
                  type="number"
                  name="iOrder"
                  id="iOrder"
                  autocomplete="given-Url"
                  bind:value={menuoption.Order}
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 labelsMetadata"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="mt-4">
                <span
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata" id="sStatus"
                  >{$_("Status")}</span
                >
                <div class="mt-2">
                  <label class="inline-flex items-center">
                    <input
                      type="radio"
                      class="form-radio"
                      bind:group={menuoption.Status}
                      name="inputStatus"
                      value={"ACTIVE"}
                    />
                    <span class="ml-2">{$_("Active")}</span>
                  </label>
                  <label class="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      class="form-radio"
                      bind:group={menuoption.Status}
                      name="inputStatus"
                      value={"INACTIVE"}
                    />
                    <span class="ml-2">{$_("Inactive")}</span>
                  </label>
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
