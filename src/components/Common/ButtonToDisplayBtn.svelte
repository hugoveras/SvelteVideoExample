<script>
  import { createEventDispatcher, onMount } from "svelte";
  import ButtonToDisplayModal from "components/Modals/ButtonToDisplayModal.svelte";
  import buttontodisplay from "services/buttontodisplay.js";
  import { Search } from "./../../../proto/chat_pb.js";
  import { ChatReqPromiseClient } from "./../../../proto/chat_grpc_web_pb.js";
  export let title = "";
  export let Document;
  export let dataButtons = [];
  export let viewName = "";
  export let statusButton = "";
  let allCheckDisplay = false;
  let allCheckOnlyOwner = false;
  let showButtonToDisplay = false;
  let dataButtonToDisplay = [];
  let search = new proto.chat.Search();
  let token = localStorage.getItem("token");
  const handleToggleModalButton = () => {
    showButtonToDisplay = !showButtonToDisplay;
  };

  const dispatch = createEventDispatcher();

  function getObjectInPage() {
    allCheckDisplay = true;
    allCheckOnlyOwner = true;
    showButtonToDisplay = true;
    dataButtonToDisplay = [];
    let elements = Document.getElementsByTagName("button");
    for (var index = 0; index < elements.length; index++) {
      let key = elements[index].id;
      let value = elements[index].innerText;
      let display = true;
      let onlyOwner = false;
      let id = "";
      let createdby = "";
      let createddate = "";
      let status = "";
      for (var indx = 0; indx < dataButtons.length; indx++) {
        if (dataButtons[indx].key == key) {
          id = dataButtons[indx].id;
          display = dataButtons[indx].display;
          onlyOwner = dataButtons[indx].onlyOwner;
          createdby = dataButtons[indx].createdby;
          createddate = dataButtons[indx].createdate;
          status = dataButtons[indx].status;
          // console.log("Entre data buttons==>", dataButtons[indx]);
        }
      }

      if (display == false) {
        allCheckDisplay = false;
      }

      if (onlyOwner == false) {
        allCheckOnlyOwner = false;
      }
      if (key != "") {
        dataButtonToDisplay.push({
          id:id,
          viewName: viewName,
          key: key,
          value: value,
          display: display,
          onlyOwner: onlyOwner,
          status: status,
          createdby: createdby,
          createdate: createddate,
        });
      }
    }
  }

  function handlesSaveModalButton(data) {
    dataButtons = data.detail;
    handleToggleModalButton();
    // console.log("HandlesSave == >", dataButtons)
    dispatch("loadButtons");
  }

  async function myButtonToDisplay() {
    var q = {};
    q["$and"] = [];
    var cond = { $regex: viewName, $options: "i" };

    q["$and"].push({ ViewName: cond });

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

    let buttonToDisplayfn = new buttontodisplay(deps);
    return await buttonToDisplayfn.selectButtonToDisplayfromDatabase();
  }
  onMount(() => {
    myButtonToDisplay()
      .then((getdata) => {
        for (var idxi = 0; idxi < getdata.getTotal(); idxi++) {
          let dataList = getdata.getButtontodisplaydataList()[idxi];
          
          dataButtons.push({
            id: dataList.getId(),
            viewName: dataList.getViewname(),
            createdby: dataList.getCreatedby(),
            createdate: dataList.getCreatedate(),
            key: dataList.getButtonname(),
            status:dataList.getStatus(),
            display: dataList.getDisplay() == "Yes" ? true : false,
            onlyOwner:
              dataList.getThisbuttonisonlyenabledfortheowner() == "Yes"
                ? true
                : false,
          });
        }
       
        dispatch("loadButtons");
      })
      .catch((error) => {
        console.log("Error-->", error);
      });
  });
</script>

{#if showButtonToDisplay}
  <ButtonToDisplayModal
    data={dataButtonToDisplay}
    {allCheckDisplay}
    {allCheckOnlyOwner}
    {title}
    {viewName}
    inputStatus={statusButton}
    on:close={() => handleToggleModalButton()}
    on:save={(data) => handlesSaveModalButton(data)}
  />
  <!-- content here -->
{/if}

<button
  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blueGray-700"
  on:click={getObjectInPage}
>
  <i class="w-5 mr-1 fa fa-tools" />
</button>
