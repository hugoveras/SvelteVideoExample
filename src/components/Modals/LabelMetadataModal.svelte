<script>
  import CardNotification from "components/Cards/CardNotification.svelte";
  import labelsmetadata from "services/labelsmetadata.js";
  import { getStorage } from "stores/store.js";
  import { ChatReqPromiseClient } from "./../../../proto/chat_grpc_web_pb.js";
  import { UpdateLabelMetadata } from "./../../../proto/chat_pb";

  import { createEventDispatcher } from "svelte";
  import { _ } from "services/i18n.js";
  import ClearIcon from "../Common/ClearIcon.svelte";
  let columns = ["Key", "Value"];
  export let data = {};
  export let title = "";
  export let viewName = "";
  export let inputStatus = "";
  let token = localStorage.getItem("token");
  let LabelsMetadata = new proto.chat.LabelMetadata();
  let elementsLabels = new proto.chat.LabelsElements();
  let color = "light";
  let searchByValue = "";
  let userData = getStorage();
  let showNotification = false;
  let messageNotification = "";
  const handleToggleModalNotification = () => {
    showNotification = !showNotification;
  };
  const dispatch = createEventDispatcher();
  $: newData = data.dataLabelMetadata.filter(
    (labels) => labels.value.indexOf(searchByValue) !== -1
  );

  async function myInsertLabelMetadata() {
    var deps = {
      token,
      LabelsMetadata,
      proto: {
        LabelsMetadata,
        ChatReqClient: ChatReqPromiseClient,
      },
    };
    let labelsMetadata = new labelsmetadata(deps);
    return await labelsMetadata.insertLabelMetadatatoDatabase();
  }

  function insertLabelMetadata() {
    // LabelMetadata

    myInsertLabelMetadata()
      .then((datasave) => {
        console.log("Save data", datasave);
      })
      .catch((error) => {
        console.log("Error data", error);

        showNotification = true;
        messageNotification = error.message;
      });
  }

  async function myUpdateLabelMetadata(id) {
    var deps = {
      token,
      LabelsMetadata,
      id,
      proto: {
        UpdateLabelMetadata,
        ChatReqClient: ChatReqPromiseClient,
      },
    };
    let labelMetadata = new labelsmetadata(deps);
    return await labelMetadata.updateLabelMetadatatoDatabase();
  }

  function updateLabelMetadata(id) {
    // LabelMetadata

    myUpdateLabelMetadata(id)
      .then((datasave) => {
        console.log("Save data", datasave);
      })
      .catch((error) => {
        console.log("Error data", error);
        showNotification = true;
        messageNotification = error.message;
      });
  }

  function saveData() {
    let NewDateCreated = new Date();
    let DateCreated = NewDateCreated.toISOString();
    data.LabelsElements = [];
    for (var idx = 0; idx < data.dataLabelMetadata.length; idx++) {
      elementsLabels = new proto.chat.LabelsElements();
      elementsLabels.setKey(data.dataLabelMetadata[idx].key);
      elementsLabels.setValue(data.dataLabelMetadata[idx].value);
      elementsLabels.setType("");

      LabelsMetadata.addLabelselements(elementsLabels);
      data.LabelsElements.push(elementsLabels);
      console.log(elementsLabels);
    }

    LabelsMetadata.setApplicationname("BlackLigth");

    LabelsMetadata.setFormname(viewName);
    LabelsMetadata.setStatus(inputStatus);
    if (data.id != "") {
      LabelsMetadata.setUpdatedby(userData.Username);
      LabelsMetadata.setUpdateddate(DateCreated);
      LabelsMetadata.setCreatedate(data.createdate);
      LabelsMetadata.setCreatedby(data.createdby);
      LabelsMetadata.setStatusdate(data.statusdate);

      updateLabelMetadata(data.id);
    } else {
      LabelsMetadata.setUpdatedby(userData.Username);
      LabelsMetadata.setUpdateddate(DateCreated);
      LabelsMetadata.setCreatedate(DateCreated);
      LabelsMetadata.setCreatedby(userData.Username);
      LabelsMetadata.setStatusdate(DateCreated);
      insertLabelMetadata();
    }
    dispatch("save", data);
  }
</script>

<div
  class="modal z-50 fixed w-full  h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0"
>
  <div class="modal-overlay fixed w-full h-full bg-blueGray-600 opacity-50" />
  <div
    class="bg-white w-full lg:h-max lg:w-8/12 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">
          {$_("Labels Metadata")}: {$_(title)}
        </h6>
        <button type="button" on:click={() => dispatch("close")}>
          <span aria-hidden="true" />
          <i class="fa fa-times " aria-hidden="true" />
        </button>
      </div>
    </div>

    <div class="content p-8">
      <!--Start Content -->
      <slot name="body" />
      <div class="flex flex-wrap">
        <div class="w-full lg:w-9/12 px-4">
          <div class="relative w-full mb-3 text-left">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              for="grid-name"
            >
              {$_("Search by Value")}
            </label>
            {#if searchByValue != ""}
              <ClearIcon
                on:click={() => {
                  searchByValue = "";
                }}
              />
            {/if}
            <input
              id="grid-name"
              type="text"
              name="searchByValue"
              autocomplete="given-name"
              placeholder={$_("Search by Value")}
              bind:value={searchByValue}
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <div style="position: relative;max-height: 480px;min-height: 480px;">
          <table class="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {#each columns as colName}
                  <th
                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                    'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-red-700 text-red-200 border-red-600'}"
                  >
                    {$_(colName)}
                  </th>
                {/each}
              </tr>
            </thead>
            <tbody>
              {#each newData as itemData}
                <tr>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                  >
                    {itemData.key}
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  >
                    <input
                      type="text"
                      bind:value={itemData.value}
                      class="w-full border-1 p-2 border-gray shadow-xs"
                    /></td
                  >
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>

      <div class="btn-wrapper text-right">
        <button
          on:click={saveData}
          class="bg-red-400 text-white active:bg-red-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          {$_("Save")}
        </button>
        <button
          on:click={() => dispatch("close")}
          class="bg-red-400 text-white active:bg-red-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          {$_("Close")}
        </button>
      </div>
    </div>
    <!--End Content -->
  </div>
</div>
