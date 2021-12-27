<script>
  import { createEventDispatcher } from "svelte";

  import { _ } from "services/i18n.js";
  import LabelMetadataBtn from "../Common/LabelMetadataBtn.svelte";
  import ButtonToDisplayBtn from "../Common/ButtonToDisplayBtn.svelte";
  import { FileUploadRequest } from "./../../../proto/chat_pb";
  import {
    ChatReqPromiseClient,
  } from "./../../../proto/chat_grpc_web_pb";
  import Upload from "services/upload.js";

  let newData = [];
  let columns = ["Name", "Content Type", "Status", "Date"];
  let color = "light";
  let searchByName = "";
  let dataLabels = [];
  let dataButtons = {};
  let title = "View Attachments";
  let documentdata = document;
  let viewName = "KeyObservationsView";
  let fileinput;
  let token = localStorage.getItem("token");
  let inputUploadRequest;
  let filename;
  let filetype;
  
  const dispatch = createEventDispatcher();
  const onKeyPress = () => {};

  function clear() {
    searchByName = "";
  }

  function reloadButtons() {
    let reloadDocument = document.getElementsByTagName("button");
    for (var idx = 0; idx < dataButtons.length; idx++) {
      for (var ridx = 0; ridx < reloadDocument.length; ridx++) {
        if (dataButtons[idx].key == reloadDocument[ridx].id) {
          if (dataButtons[idx].display) {
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
          } else {
            reloadDocument[ridx].style.display = "none";
          }
        }
      }
    }
  }

  async function myUpload() {
    var deps = {
      token,
      inputUploadRequest,
      filename,
      filetype,
      proto: {
        FileUploadRequest,
        ChatReqClient: ChatReqPromiseClient,
      },
    };

    let upload = new Upload(deps);
    console.log("after upload .........", upload);
    return await upload.UploadFile();
  }

  function submitstream() {
    console.log("submit button");
    console.log("aqui");
    myUpload()
      .then((response) => {
        console.log("Response de la data ......", response);
      })
      .catch((error) => {
        console.log("error------------>", error);
      });
  }

  const onFileSelected = (e) => {
    console.log("ya seleccione el archivo");
    let image = e.target.files[0];
    filename = image.name;
    filetype = image.type;
    console.log(image);
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = (e) => {
      inputUploadRequest = e.target.result;
      //se le debe quitar la parte de data, y estos caracteres
      inputUploadRequest = inputUploadRequest
        .replace("data:", "")
        .replace(/^.+,/, "");
      // inputUploadRequest=inputUploadRequest.replace(/^.+,/, "");
      console.log("inputUploadRequest==>", inputUploadRequest);
      submitstream();
    };
  };
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
          {$_(title)}
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
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata text-left"
              for="iSearchByName"
              id="lSearchByName"
            >
              {$_("Search by Name")}
            </label>
            <input
              id="iSearchByName"
              type="text"
              name="searchByName"
              autocomplete="given-name"
              placeholder={$_("Search by Name")}
              on:keypress={onKeyPress}
              bind:value={searchByName}
              class="labelsMetadata border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>
        </div>
        <div class="w-full lg:w-3/12">
          <div class="relative w-full mb-3">
            <div class="text-center flex justify-between">
              <div style="margin-top: 20px;">
                <input
                  style="display:none"
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                  on:change={(e) => onFileSelected(e)}
                  bind:this={fileinput}
                />
                <button
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blueGray-700"
                  on:click={() => {
                    fileinput.click();
                  }}
                >
                  <i class="w-5 mr-1 fa fa-cloud-upload-alt" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-3/12 px-4">
          <div class="relative w-full mb-3">
            <div class="text-center flex justify-between">
              <div style="margin-top: 20px;">
                <button
                  id="bClear"
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
                  on:click|preventDefault={clear}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <span class="sr-only">{$_("Clear")}</span>
                </button>
                <button
                  id="bSearch"
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blueGray-700"
                >
                  <i class="w-5 mr-1 fa fa-search" />
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
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <div style="position: relative;max-height: 480px;min-height: 480px;">
          <table class="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  id="cSelect"
                  class="labelsMetadata px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                  'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-red-700 text-red-200 border-red-600'}"
                >
                  {$_("Select")}
                </th>
                {#each columns as colName}
                  <th
                    id="c{colName}"
                    class="labelsMetadata px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
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
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                  >
                    {itemData.value}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>

      <div class="btn-wrapper text-right">
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
