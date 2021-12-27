<script>
  import { createEventDispatcher } from "svelte";
  import CardTimeOut from "components/Cards/CardTimeOut.svelte";
  import CardBusyIndicator from "components/Cards/CardBusyIndicator.svelte";

  import CardNotification from "components/Cards/CardNotification.svelte";
  import SuccessToast from "components/Toast/SuccessToast.svelte";

  import { getStorage, workingWithDashboardsSelected } from "stores/store.js";

  import { UpdateDashboard } from "./../../../../proto/chat_pb";
  import { ChatReqPromiseClient } from "./../../../../proto/chat_grpc_web_pb";
  import WorkingWithDashboards from "services/workingwithdashboards.js";
  import { _ } from "services/i18n.js";

  export let isOpen = false;

  import LabelMetadataBtn from "components/Common/LabelMetadataBtn.svelte";
  import ButtonToDisplayBtn from "components/Common/ButtonToDisplayBtn.svelte";

  let title = "Working with Dashboards";
  let documentdata = document;
  let dataLabels = [];
  let dataButtons = [];
  let viewName = "WorkingWithDashboardsView";

  let inputDashboardName = "";
  let inputDashboardUrl = "";
  let inputStatus = "Active";
  let inputWasUpdated = false;
  let inputId = "";
  let inputCreateDate = "";
  let inputStatusDate = "";
  let showBusyIndicator = false;
  let messageNotification = "";
  let showToastSuccess = false;

  if ($workingWithDashboardsSelected.hasData) {
    inputWasUpdated = true;
    //console.log("dashboardSelected==>",$workingWithDashboardsSelected.dashboardSelected)

    inputId = $workingWithDashboardsSelected.dashboardSelected.getId();
    //console.log(inputId)
    inputDashboardName =
      $workingWithDashboardsSelected.dashboardSelected.getName();
    inputDashboardUrl =
      $workingWithDashboardsSelected.dashboardSelected.getUrl();
    inputStatus = $workingWithDashboardsSelected.dashboardSelected.getStatus();
    inputCreateDate =
      $workingWithDashboardsSelected.dashboardSelected.getCreatedate();
    inputStatusDate =
      $workingWithDashboardsSelected.dashboardSelected.getStatusdate();
  }

  const dispatch = createEventDispatcher();

  let inputWorkingWithDashboard = new proto.chat.Dashboard();
  let userData = getStorage();
  let msg_error = "";

  async function myInsertDashboardToMongo() {
    let token = localStorage.getItem("token");
    var deps = {
      token,
      inputWorkingWithDashboard,
      proto: {
        inputWorkingWithDashboard,
        ChatReqClient: ChatReqPromiseClient,
      },
    };
    //console.log("before sendMsg .........", deps);
    let workingWithDashboards = new WorkingWithDashboards(deps);
    //console.log("after sendMsg .........", keyobservation);
    return await workingWithDashboards.insertDashboardToMongo();
  }
  function insertDashboardToMongo() {
    showBusyIndicator = true;
    myInsertDashboardToMongo()
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
    let NewDateCreated = new Date();
    let DateCreated = NewDateCreated.toISOString();

    if (inputDashboardName == "") {
      showNotification = true;
      messageNotification = "Error, the dashboard name is required";
      return;
    }

    inputWorkingWithDashboard.setUpdatedate(DateCreated);
    inputWorkingWithDashboard.setName(inputDashboardName);
    inputWorkingWithDashboard.setUrl(inputDashboardUrl);
    inputWorkingWithDashboard.setStatus(inputStatus);
    inputWorkingWithDashboard.setUpdatedby(userData.userName);
    //console.log("Antes del insert",inputWorkingWithDashboard)
    if (inputWasUpdated) {
      inputWorkingWithDashboard.setCreatedate(inputCreateDate);
      //console.log("CreateDate==>",inputCreateDate);
      inputWorkingWithDashboard.setStatusdate(inputStatusDate);
      //console.log("StatusDate==>",inputStatusDate);
      workingWithDashboardUpdated();
    } else {
      inputWorkingWithDashboard.setCreatedate(DateCreated);
      inputWorkingWithDashboard.setCreatedby(userData.userName);
      inputWorkingWithDashboard.setStatusdate(DateCreated);

      insertDashboardToMongo();
    }
  }

  async function myUpdate() {
    //console.log("inputId==>", inputId);
    let id = inputId;
    let token = localStorage.getItem("token");
    var deps = {
      inputWorkingWithDashboard,
      token,
      id,
      proto: {
        UpdateDashboard,
        inputWorkingWithDashboard,
        ChatReqClient: ChatReqPromiseClient,
      },
    };
    //console.log("before update .........", deps);
    let update = new WorkingWithDashboards(deps);
    //console.log("after update .........", update);
    return await update.updateDashboardToMongo();
  }
  function workingWithDashboardUpdated() {
    myUpdate()
      .then((data) => {
        //console.log(" respuesta en svelte del update ", data);
        showBusyIndicator = false;
        showToastSuccess = true;
        closeMaintenance();
      })
      .catch((error) => {
        if (error.message != undefined) {
          showNotification = true;
          messageNotification = error.message;
        }
      });
  }

  let showNotification = false;
  const handleToggleModalNotification = () => {
    showNotification = !showNotification;
  };

  const closeMaintenance = () => {
    setTimeout(function () {
      showToastSuccess = false;
      dispatch("close");
    }, 1000);
  };

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

<SuccessToast showToast={showToastSuccess} />
{#if isOpen}
  <CardBusyIndicator title="Please wait..." open={showBusyIndicator} />
  <CardNotification
    isOpen={showNotification}
    message={messageNotification}
    on:close={() => handleToggleModalNotification()}
  />
  <CardTimeOut />
  <div class="flex flex-wrap">
    <div class="w-full lg:w-12/12 px-4 py-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
      >
        <div class="rounded-t bg-white mb-0 px-6 py-6">
          <div class="text-center flex justify-between">
            <h6
              class="text-blueGray-700 text-xl font-bold labelsMetadata"
              id="hTitle"
            >
              {$_("Working with Dashboards")}
            </h6>

            <div>
              <button
                on:click|preventDefault={saveData}
                class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 labelsMetadata"
                id="bSave"
                type="button"
              >
                {$_("Save")}
              </button>
              <button
                on:click={closeMaintenance}
                class="bg-red-400 text-white active:bg-red-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 labelsMetadata"
                id="bBack"
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
            <h6
              class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase labelsMetadata"
              id="hDashboardInformation"
            >
              {$_("Dashboard Information")}
            </h6>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata"
                    id="lDashobardName"
                    for="iDashboardName"
                  >
                    {$_("Dashboard Name")}
                  </label>
                  <input
                    type="text"
                    name="iDashboardName"
                    id="iDashboardName"
                    autocomplete="given-name"
                    bind:value={inputDashboardName}
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 labelsMetadata"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata"
                    id="lDashboardUrl"
                    for="iDashboardUrl"
                  >
                    {$_("Dashboard URL")}
                  </label>
                  <input
                    type="text"
                    name="DashboardUrl"
                    id="DashboardUrl"
                    autocomplete="given-Url"
                    bind:value={inputDashboardUrl}
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 labelsMetadata"
                  />
                </div>
              </div>

              <div class="w-full lg:w-6/12 px-4">
                <div class="mt-4">
                  <span
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata"
                    id="sStatus">{$_("Status")}</span
                  >
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        type="radio"
                        class="form-radio"
                        bind:group={inputStatus}
                        name="inputStatus"
                        value={"Active"}
                      />
                      <span class="ml-2">{$_("Active")}</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        class="form-radio"
                        bind:group={inputStatus}
                        name="inputStatus"
                        value={"Inactive"}
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
{/if}
