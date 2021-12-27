<script>
  import { onMount, createEventDispatcher } from 'svelte'
  import LabelMetadataModal from "components/Modals/LabelMetadataModal.svelte";
  import { _ } from 'services/i18n.js';
  import { Search } from "./../../../proto/chat_pb.js";
  import { ChatReqPromiseClient } from "./../../../proto/chat_grpc_web_pb.js";
  import labelsmetadata from "services/labelsmetadata.js";
  
  export let title = "";
  export let Document;
  export let dataLabels = {};
  export let viewName = "";
  export let statusButton = "";
  let showLabelsMetadata = false;
  let dataLabelMetadata = [];
  const handleToggleModalLabels = () => {
    showLabelsMetadata = !showLabelsMetadata;
  };
  let search = new proto.chat.Search();
  let token = localStorage.getItem("token");

  const dispatch = createEventDispatcher();

  function getObjectInPage() {
    showLabelsMetadata = true;
    dataLabelMetadata = [];
    let elements = Document.getElementsByClassName("labelsMetadata");
    for(var index =0;index < elements.length; index++){
        let key  = elements[index].id;
        let value = elements[index].innerText;
        

        if (value == ''){
            value = elements[index].placeholder;
        }

        for(var indx = 0 ; indx < dataLabels.LabelsElements.length ; indx++){
          let dataLabelsInt = dataLabels.LabelsElements[indx];
            if(dataLabelsInt.getKey() == key){
                value = dataLabelsInt.getValue();
               
            }
        }
        dataLabelMetadata.push({
          key:key,
          value:value,
          type: ""
        })
    }

    dataLabels.dataLabelMetadata = dataLabelMetadata;
   
  }

  function handleSaveModalLabels(data){
      dataLabels = data.detail;
      handleToggleModalLabels();
      reloadLabels();
  }

  async function myLabelsMetadata() {
    var q = {};
    q["$and"] = [];
    var cond = { $regex: "^"+viewName, $options: "i" };

    q["$and"].push({ FormName: cond });

    if(statusButton != ""){
      var cond = { $regex: statusButton, $options: "i" };
      q["$and"].push({ Status: cond });
    }
    search.setSearch(JSON.stringify(q));
    search.setSkip("0");
    search.setLimit("0");
    search.setSort("");
    search.setProjection("");
    var deps = {
      token,
      search,
      proto: {
        Search,
        ChatReqClient: ChatReqPromiseClient,
      },
    };

    let labelsmetadatafn = new labelsmetadata(deps);
    return await labelsmetadatafn.selectLabelMetadatafromDatabase();
  }
  onMount(() => {
    getLabelsMetadata();
  });

  function getLabelsMetadata(){
    myLabelsMetadata()
      .then((getdata) => {
        if( getdata.getTotal() == 0){
          dataLabels ={LabelsElements: [], id:""}
        }
        for (var idxi = 0; idxi < getdata.getTotal(); idxi++) {
          let dataList = getdata.getLabelmetadatadataList()[idxi];
          dataLabels ={ 
            id: dataList.getId(),
            applicationName: dataList.getApplicationname(),
            formName: dataList.getFormname(),
            createdby: dataList.getCreatedby(),
            createdate: dataList.getCreatedate(),
            LabelsElements: dataList.getLabelselementsList(),
            status:dataList.getStatus(),
            statusdate:dataList.getStatusdate()
          };
          // dataLabels.push({
          //   id: dataList.getId(),
          //   applicationName: dataList.getApplicationname(),
          //   formName: dataList.getFormname(),
          //   createdby: dataList.getCreatedby(),
          //   createdate: dataList.getCreatedate(),
          //   LabelsElements: dataList.getLabelselementsList(),
          //   status:dataList.getStatus(),
          //   statusdate:dataList.getStatusdate()
          // });
        }
        reloadLabels();// dispatch('loadlabels');
      })
      .catch((error) => {
        console.log("Error-->", error);
      });
  }

  
function reloadLabels(){
 
 let reloadDocument = document.getElementsByClassName("labelsMetadata");
 for(var idx=0; idx < dataLabels.LabelsElements.length;idx++){
   for(var ridx = 0; ridx < reloadDocument.length;ridx++){
     
     if(dataLabels.LabelsElements[idx].getKey() == reloadDocument[ridx].id){
      
       reloadDocument[ridx].innerHTML = dataLabels.LabelsElements[idx].getValue();
       reloadDocument[ridx].placeholder = dataLabels.LabelsElements[idx].getValue();
     
     }
   }
 
 }

}
</script>

{#if showLabelsMetadata}
  <LabelMetadataModal
    data={dataLabels}
    {title}
    {viewName}
    inputStatus={statusButton}
    on:close={() => handleToggleModalLabels()}
    on:save={(data) => handleSaveModalLabels(data)}
  />
  <!-- content here -->
{/if}

<button id="bLabelsMetadata"
  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blueGray-700"
  on:click={getObjectInPage}
>
  <i class="w-5 mr-1 fa fa-cogs" />
  <span class="sr-only">{$_("Labels Metadata")}</span>
</button>
