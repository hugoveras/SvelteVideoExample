<script>
	import CardNotification from 'components/Cards/CardNotification.svelte';
  import { createEventDispatcher } from "svelte";
  import { _ } from "services/i18n.js";
  import ClearIcon from "components/Common/ClearIcon.svelte";
  import buttontodisplay from "services/buttontodisplay.js";
  import { getStorage } from "stores/store.js";
  import { ChatReqPromiseClient}   from "./../../../proto/chat_grpc_web_pb.js";
  import { UpdateButtonToDisplay } from "./../../../proto/chat_pb";

  export let data = [];
  export let title = "";
  export let viewName = "";
  export let inputStatus = "";
  
  export let allCheckDisplay = false;
  export let allCheckOnlyOwner = false;

  let color = "light";
  let searchByValue = "";
  let userData = getStorage();
  let token = localStorage.getItem("token");
  const dispatch = createEventDispatcher();
  let showNotification = false;
  let messageNotification = "";
  const handleToggleModalNotification = () => {
    showNotification = !showNotification
  }
  
  let columns = [
    { colName: "Button Id", isCheck: false, isChecked: false },
    { colName: "Name", isCheck: false, isChecked: false },
    { colName: "Display", isCheck: true, isChecked: allCheckDisplay },
    {
      colName: "Only enable for the Owner",
      isCheck: true,
      isChecked: allCheckOnlyOwner,
    },
  ];
  let ButtonToDisplay = new proto.chat.ButtonToDisplay();
  $: newData = data.filter(
    (labels) => labels.value.indexOf(searchByValue) !== -1
  );

  function allCheck(item) {
    if (item == "Display") {
      allCheckDisplay = !allCheckDisplay;
      for (var idx = 0; idx < data.length; idx++) {
        data[idx].display = allCheckDisplay;
      }
    } else {
      allCheckOnlyOwner = !allCheckOnlyOwner;
      for (var idx = 0; idx < data.length; idx++) {
        data[idx].onlyOwner = allCheckOnlyOwner;
      }
    }
  }

  function itemIsCheck(item) {
    item.display = !item.display;
    allCheckDisplay = returnIsAllCheckDisplay("display");
    columns[2].isChecked = allCheckDisplay;
  }

  function itemIsCheckOwner(item) {
    item.onlyOwner = !item.onlyOwner;
    allCheckOnlyOwner = returnIsAllCheckDisplay("owner");
    columns[3].isChecked = allCheckOnlyOwner;
  }
  function returnIsAllCheckDisplay(from) {
    let returnValue = true;
    if (from == "display") {
      for (var idx = 0; idx < data.length; idx++) {
        if (!data[idx].display) {
          returnValue = false;
        }
      }
    } else {
      for (var idx = 0; idx < data.length; idx++) {
        if (!data[idx].onlyOwner) {
          returnValue = false;
        }
      }
    }
    return returnValue;
  }

  async function myInsertButtonToDisplay() {
    var deps = {
      token,
      ButtonToDisplay,
      proto: {
        ButtonToDisplay,
        ChatReqClient: ChatReqPromiseClient,
      },
    };
    let buttonToDisplay = new buttontodisplay(deps);
    return await buttonToDisplay.insertButtonToDisplaytoDatabase();
  }

  function insertButtonToDisplay() {
    // ButtonToDisplay
    
      myInsertButtonToDisplay()
        .then((datasave) => {
          console.log("Save data",datasave);
        })
        .catch((error) => {
          console.log("Error data",error);
          
          showNotification = true
          messageNotification = error.message;
        });
    
  }

  async function myUpdateButtonToDisplay(id) {
    var deps = {
      token,
      ButtonToDisplay,
      id,
      proto: {
        UpdateButtonToDisplay,
        ChatReqClient: ChatReqPromiseClient,
      },
    };
    let buttonToDisplay = new buttontodisplay(deps);
    return await buttonToDisplay.updateButtonToDisplaytoDatabase();
  }

  
  function updateButtonToDisplay(id) {
    // ButtonToDisplay
    
      myUpdateButtonToDisplay(id)
        .then((datasave) => {
          console.log("Save data",datasave);
        })
        .catch((error) => {
          console.log("Error data",error);
          showNotification = true
          messageNotification = error.message;
        });
    
  }

  function saveData(){
    let NewDateCreated = new Date();
    let DateCreated = NewDateCreated.toISOString();
    
    for (var idx = 0; idx < data.length; idx++) {
      let displayValue = "";
      if(data[idx].display){
        displayValue ="Yes";
      }else if(!data[idx].display){
        displayValue = "No";
      }
      let onlyOwnerValue = "";
      if(data[idx].onlyOwner){
        onlyOwnerValue ="Yes";
      }else if(!data[idx].onlyOwner){
        onlyOwnerValue = "No";
      }
      ButtonToDisplay.setApplicationname("BlackLigth");
      ButtonToDisplay.setButtonname(data[idx].key);
      ButtonToDisplay.setDisplay(displayValue);
      ButtonToDisplay.setViewname(viewName);
      ButtonToDisplay.setStatus(inputStatus);
      ButtonToDisplay.setThisbuttonisonlyenabledfortheowner(onlyOwnerValue);
      if(data[idx].id != ""){        
        ButtonToDisplay.setUpdatedby(userData.Username);
        ButtonToDisplay.setUpdateddate(DateCreated);
        ButtonToDisplay.setCreatedate(data[idx].createdate);
        ButtonToDisplay.setCreatedby(data[idx].createdby);

        // console.log("User", data[idx])
        updateButtonToDisplay(data[idx].id);
      }else{
        
        ButtonToDisplay.setUpdatedby(userData.Username);
        ButtonToDisplay.setUpdateddate(DateCreated);
        ButtonToDisplay.setCreatedate(DateCreated);
        ButtonToDisplay.setCreatedby(userData.Username);
        insertButtonToDisplay();
      }
    }
    dispatch("save", data);
  }
</script>

<CardNotification
isOpen={showNotification}
message={messageNotification}
on:close={() => handleToggleModalNotification()}>
</CardNotification>

<div  class="modal z-50 fixed w-full  h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0"
>
  <div class="modal-overlay fixed w-full h-full bg-blueGray-600 opacity-50" />
  <div
    class="bg-white w-full lg:h-max lg:w-8/12 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">
          {$_("Button to Display")}: {$_(title)}
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
        <div class="w-full lg:w-4/12 px-4">
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
        <div class="w-full lg:w-4/12 px-4">
          <div class="relative w-full mb-3 text-left">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              for="grid-name"
            >
              {$_("Status")}
            </label>
            {#if inputStatus != ""}
              <ClearIcon
                on:click={() => {
                  inputStatus = "";
                }}
              />
            {/if}
            <input
              id="iStatus"
              type="text"
              name="iStatus"
              autocomplete="given-name"
              placeholder={$_("Type Status for Button to Display")}
              bind:value={inputStatus}
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
                {#each columns as colObject}
                  <th
                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold {colObject.isCheck
                      ? 'text-center'
                      : 'text-left'} {color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-red-700 text-red-200 border-red-600'}"
                  >
                    {#if colObject.isCheck}
                      <label
                        class="inline-flex justify-items-stretch cursor-pointer"
                      >
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          bind:checked={colObject.isChecked}
                          on:click={() => {
                            allCheck(colObject.colName);
                          }}
                          class="form-checkbox border-b-1 border-blueGray-300 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 mr-2"
                        />
                        {$_(colObject.colName)}</label
                      >
                    {:else}
                      {$_(colObject.colName)}
                    {/if}
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
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                  >
                    {itemData.value}
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
                  >
                    <label
                      class="inline-flex justify-items-stretch cursor-pointer"
                    >
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        bind:checked={itemData.display}
                        on:click={() => {
                          itemIsCheck(itemData);
                        }}
                        class="form-checkbox border-b-1 border-blueGray-300 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 mr-2"
                      />
                    </label>
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
                  >
                    <label
                      class="inline-flex justify-items-stretch cursor-pointer"
                    >
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        bind:checked={itemData.onlyOwner}
                        on:click={() => {
                          itemIsCheckOwner(itemData);
                        }}
                        class="form-checkbox border-b-1 border-blueGray-300 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 mr-2"
                      /></label
                    >
                  </td>
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
