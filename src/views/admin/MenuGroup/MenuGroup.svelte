<script>
  import { ChatReqPromiseClient } from "./../../../../proto/chat_grpc_web_pb";
  import { createEventDispatcher } from "svelte";
  import CardTimeOut from "components/Cards/CardTimeOut.svelte";
  import CardBusyIndicator from "components/Cards/CardBusyIndicator.svelte";
  import CardNotification from "components/Cards/CardNotification.svelte";
  import SuccessToast from "components/Toast/SuccessToast.svelte";
  import MenuGroupService from "services/menugroup.js";
  import { getStorage } from "stores/store.js";
  import { UpdateMenuGroup } from "./../../../../proto/chat_pb";
  import { _ } from 'services/i18n.js';

  
  import LabelMetadataBtn from "components/Common/LabelMetadataBtn.svelte";
  import ButtonToDisplayBtn from "components/Common/ButtonToDisplayBtn.svelte";

  let title = "Menu Group";
  let documentdata = document;
  let dataLabels = [];
  let dataButtons = [];
  let viewName = "DashboardMenuGroupView"
  export let MenuGroupSelected;
  // export let isOpen = false;

  const dispatch = createEventDispatcher()

  let showToastSuccess = false;
  let showNotification = false;
  let messageNotification = "";
  let showBusyIndicator = false;

  let menugroup = {};
  let userData = getStorage();
  let MenuGroupSave = new proto.chat.MenuGroup();

  if (MenuGroupSelected.hasData) {
    MenuGroupSave = MenuGroupSelected.groupSelected;
    menugroup.MenuGroupName = MenuGroupSelected.groupSelected.getMenugroup();
    menugroup.Status = MenuGroupSelected.groupSelected.getStatus();
    menugroup.Icon = MenuGroupSelected.groupSelected.getIcon();
    menugroup.id = MenuGroupSelected.groupSelected.getId();
    menugroup.Order = MenuGroupSelected.groupSelected.getOrder();
  }

  async function myinsertMenuGrouptoDatabase() {
    let token = localStorage.getItem("token");
    var deps = {
      token,
      MenuGroupSave,
      proto: {
        MenuGroupSave,
        ChatReqClient: ChatReqPromiseClient,
      },
    };

    let menuGroup = new MenuGroupService(deps);
    return await menuGroup.insertMenuGrouptoDatabase();
  }

  function insertMenuGrouptoDatabase() {
    myinsertMenuGrouptoDatabase()
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

  async function myupdateMenuGrouptoDatabase() {
    let token = localStorage.getItem("token");
    let id = menugroup.id;
    var deps = {
      token,
      MenuGroupSave,
      id,
      proto: {
        UpdateMenuGroup,
        ChatReqClient: ChatReqPromiseClient,
      },
    };

    let menuGroup = new MenuGroupService(deps);
    return await menuGroup.updateMenuGrouptoDatabase();
  }

  function updateMenuGrouptoDatabase() {
    myupdateMenuGrouptoDatabase()
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

    MenuGroupSave.setMenugroup(menugroup.MenuGroupName);
    MenuGroupSave.setStatus(menugroup.Status);
    MenuGroupSave.setIcon(menugroup.Icon);
    MenuGroupSave.setOrder(menugroup.Order);
    if (MenuGroupSelected.hasData) {
      MenuGroupSave.setUpdatedate(NewDateCreated);
      MenuGroupSave.setUpdatedby(userData.Username);
      updateMenuGrouptoDatabase();
    } else {
      MenuGroupSave.setCreatedate(NewDateCreated);
      MenuGroupSave.setCreatedby(userData.Username);
      MenuGroupSave.setStatusdate(NewDateCreated);
      MenuGroupSave.setUpdatedate(NewDateCreated);
      MenuGroupSave.setUpdatedby(userData.Username);
      insertMenuGrouptoDatabase();
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
    menugroup.Status = "DELETE";
    saveData();
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
          <h6 class="text-blueGray-700 text-xl font-bold labelsMetadata" id="hMenuGroup">{$_("Menu Group")}</h6>

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
          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase labelsMetadata" id="hMenuGroupInforma">
            {$_("Menu Group Information")}
          </h6>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata" id="lMenuGroupName"
                  for="MenuGroupName"
                >
                  {$_("Menu Group Name")}
                </label>
                <input
                  type="text"
                  name="MenuGroupName"
                  id="MenuGroupName"
                  autocomplete="given-name"
                  bind:value={menugroup.MenuGroupName}
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata" id="lIcon"
                  for="Icon"
                >
                  {$_("Icon")}
                </label>
                <input
                  type="text"
                  name="Icon"
                  id="Icon"
                  autocomplete="given-Url"
                  bind:value={menugroup.Icon}
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
                <span
                  class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"
                >
                  <i class={menugroup.Icon} />
                </span>
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata" id="lOrder"
                  for="Order"
                >
                  {$_("Order")}
                </label>
                <input
                  type="number"
                  name="Order"
                  id="Order"
                  autocomplete="given-Url"
                  bind:value={menugroup.Order}
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                      bind:group={menugroup.Status}
                      name="inputStatus"
                      value={"ACTIVE"}
                    />
                    <span class="ml-2">{$_("Active")}</span>
                  </label>
                  <label class="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      class="form-radio"
                      bind:group={menugroup.Status}
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
