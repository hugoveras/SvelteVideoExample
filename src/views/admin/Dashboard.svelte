<script>
  import CardBusyIndicator from "components/Cards/CardBusyIndicator.svelte";
  import ClearIcon from "components/Common/ClearIcon.svelte";

  import {
    coreserviceurl,
    MonthsName,
    stadisticDashboard,
    getCustomerSelected,
    getStorage,
    getStatusColor,
    recommendationByUser,
  } from "stores/store.js";

  // core components
  import CardTimeOut from "components/Cards/CardTimeOut.svelte";
  import CardLineChart from "components/Cards/CardLineChart.svelte";
  import CardBarChart from "components/Cards/CardBarChart.svelte";
  import CardPageVisits from "components/Cards/CardPageVisits.svelte";
  import { ReqDashboardStatistics } from "./../../../proto/chat_pb";
  import { ChatReqPromiseClient } from "./../../../proto/chat_grpc_web_pb";

  import Dashboard from "services/dashboard.js";
  import CardStats from "components/Cards/CardStats.svelte";
  
  import { exportToSpreadsheet } from "js/GeneralFuntions.js";
  import InfiniteScroll from "components/Common/InfiniteScroll.svelte";
  import { _ } from "services/i18n.js";
  import LabelMetadataBtn from "components/Common/LabelMetadataBtn.svelte";
  import ButtonToDisplayBtn from 'components/Common/ButtonToDisplayBtn.svelte';
  let title = "Dashboard";
  let documentdata = document;
  let dataLabels = [];
  let dataButtons = [];
  let viewName = "DashboardView";


  let token = localStorage.getItem("token");
  let reqDashboardStatistics = new proto.chat.ReqDashboardStatistics();
  let ReqStatisticsByUserYearMonth =
    new proto.chat.ReqStatisticsByUserYearMonth();
  let DataStadistic = [];

  let currentYear = new Date().getFullYear();
  let lastYear = currentYear - 1;
  let currentMonth = new Date().getMonth() + 1;
  let RecommendationscountbymonthyearList = {};

  let customerSelectedData = getCustomerSelected();
  let userData = getStorage();
  let columns = ["User", "Email", "Month", "Year", "Count", "Status"];
  let searchUser = "";
  let searchEmail = "";
  let lastYearCk = true;
  let currentYearCk = true;
  //Pagination
  let current_page = 1;
  let from = 1;
  let to = 1;
  let per_page = 20;
  let last_page = 1;
  let total = 0;
  ////////////////

  let showBusyIndicator = false;

  async function myGetDashboard() {
    var deps = {
      token,
      reqDashboardStatistics,
      coreserviceurl,
      proto: {
        ReqDashboardStatistics,
        ChatReqClient: ChatReqPromiseClient,
      },
    };
    let dashboard = new Dashboard(deps);

    return await dashboard.getDashboardStatistics();
  }

  async function myGetStatisticByUser() {
    var deps = {
      token,
      ReqStatisticsByUserYearMonth,
      coreserviceurl,
      proto: {
        ReqStatisticsByUserYearMonth,
        ChatReqClient: ChatReqPromiseClient,
      },
    };

    let dashStatistic = new Dashboard(deps);
    return await dashStatistic.getStatisticsByUserYearMonth();
  }
  function sentToExcelFile() {
    showBusyIndicator = true;
    let dataExport = [];
    dataExport.push(columns);
    let rowexport = [];
    ReqStatisticsByUserYearMonth.setLimit(0);
    ReqStatisticsByUserYearMonth.setSkip(0);
    myGetStatisticByUser()
      .then((dataStatic) => {
        showBusyIndicator = false;
        //console.log("Data Dashboard ==>",dataStatic)

        for (
          let i = 0;
          i < dataStatic.getRecommendationscountbyusermonthyearList().length;
          i++
        ) {
          let element =
            dataStatic.getRecommendationscountbyusermonthyearList()[i];

          rowexport = [
            element.getUsername(),
            element.getEmail(),
            MonthsName[element.getMonth() - 1],
            element.getYear(),
            element.getStatus(),
            element.getCount(),
          ];

          dataExport.push(rowexport);
        }
        showBusyIndicator = exportToSpreadsheet(dataExport, "Users");
      })
      .catch((error) => {
        showBusyIndicator = false;
        //console.log("Error get dashboard Statadistic==>",error)
      });
  }

  function getDashboardStadistic() {
    reqDashboardStatistics.setUsername(userData.userName);
    reqDashboardStatistics.setMonth(currentMonth);
    reqDashboardStatistics.setCustomerid(customerSelectedData.CustomerId);
    reqDashboardStatistics.setCustomernumber(
      customerSelectedData.CustomerNumber
    );
    reqDashboardStatistics.setYear(currentYear);

    showBusyIndicator = false;
    DataStadistic = [];

    myGetDashboard()
      .then((data) => {
        afterRespondeApi(
          data.getStatisticList(),
          data.getRecommendationscountbymonthyearList()
        );
      })
      .catch((error) => {
        showBusyIndicator = false;
        //console.log("Error get dashboard Statadistic==>",error)
      });
  }

  function getStadisticList(params) {
    ReqStatisticsByUserYearMonth.setCustomerid(customerSelectedData.CustomerId);

    const page = params.page || 1;
    const fromn = (page - 1) * per_page;

    ReqStatisticsByUserYearMonth.setLimit(per_page.toString());
    ReqStatisticsByUserYearMonth.setSkip(fromn.toString());

    ReqStatisticsByUserYearMonth.setUsernamesearch(searchUser.toString());
    ReqStatisticsByUserYearMonth.setEmailsearch(searchEmail.toString());

    ReqStatisticsByUserYearMonth.setCurrentyearsearch(0);
    ReqStatisticsByUserYearMonth.setPreviousyearsearch(0);

    if (currentYearCk) {
      ReqStatisticsByUserYearMonth.setCurrentyearsearch(currentYear);
    }
    if (lastYearCk) {
      ReqStatisticsByUserYearMonth.setPreviousyearsearch(lastYear);
    }

    showBusyIndicator = false;
    DataStadistic = [];

    myGetStatisticByUser()
      .then((dataStatic) => {
        showBusyIndicator = false;
        //console.log("Data Dashboard ==>",dataStatic)
        // total = data.getTotal();
        total = dataStatic.getRecommendationscountbyusermonthyearList().length;
        last_page = Math.ceil(total / per_page);
        current_page = page;
        from = (page - 1) * per_page;
        to = page * per_page;
        if (to > total) {
          to = total;
        }
        recommendationByUser.set(
          dataStatic.getRecommendationscountbyusermonthyearList()
        );
        //console.log("Retorno esta data==>",$recommendationByUser)
      })
      .catch((error) => {
        showBusyIndicator = false;
        //console.log("Error get dashboard Statadistic==>",error)
      });
  }

  const afterRespondeApi = (
    data,
    dataRecommendations
    // dataRecommendationscountbyusermonthyearList
  ) => {
    //console.log("dataCountUser>>>>", dataRecommendationscountbyusermonthyearList)
    for (var itemStadistic in data) {
      if (currentYear == data[itemStadistic].getYear()) {
        DataStadistic.push({
          Count: data[itemStadistic].getCount(),
          Month: data[itemStadistic].getMonth(),
          Year: data[itemStadistic].getYear(),
          Status: data[itemStadistic].getStatus(),
          Icon: data[itemStadistic].getStatusdata().getIconname(),
          IconColor: data[itemStadistic].getStatusdata().getIconcolor(),
          Arrow: "up",
          Percent: "0",
          PercentColor: "text-emerald-500",
        });
        for (var itemStadisticLast in data) {
          if (
            data[itemStadistic].getStatus() ==
              data[itemStadisticLast].getStatus() &&
            currentYear > data[itemStadisticLast].getYear()
          ) {
            let percentColor = "text-emerald-500";
            let arrow = "up";
            let percent = Math.abs(
              ((data[itemStadistic].getCount() -
                data[itemStadisticLast].getCount()) /
                data[itemStadistic].getCount()) *
                100
            );

            if (percent < 0) {
              arrow = "down";
              percentColor = "text-red-500";
            }

            let indexData = DataStadistic.length - 1;
            DataStadistic[indexData].Arrow = arrow;
            DataStadistic[indexData].Percent = Math.round(percent);
            DataStadistic[indexData].PercentColor = percentColor;
          }
        }
      }
    }

    let DataCurrent = [];
    let DataLast = [];

    for (var itemMonths in MonthsName) {
      DataCurrent.push(0);
      DataLast.push(0);
      for (var itemRecommendations in dataRecommendations) {
        if (
          MonthsName[itemMonths] ==
          MonthsName[dataRecommendations[itemRecommendations].getMonth() - 1]
        ) {
          if (
            currentYear == dataRecommendations[itemRecommendations].getYear()
          ) {
            DataCurrent[DataCurrent.length - 1] =
              dataRecommendations[itemRecommendations].getCount();
          } else if (
            currentYear > dataRecommendations[itemRecommendations].getYear()
          ) {
            DataLast[DataLast.length - 1] =
              dataRecommendations[itemRecommendations].getCount();
          }
        }
      }
    }

    RecommendationscountbymonthyearList = {
      YearCurrent: currentYear,
      YearLast: currentYear - 1,
      MonthsCurrent: MonthsName,
      DataCurrent: DataCurrent,
      DataLast: DataLast,
    };

    stadisticDashboard.set({
      StadisticPanel: DataStadistic,
      CharLine: RecommendationscountbymonthyearList,
      // RecommendationByUser: dataRecommendationscountbyusermonthyearList,
    });
    //  getData({page:1});
  };

  getDashboardStadistic();
  getStadisticList({ page: 1 });
  function getData() {
    //console.log("data==>", newData.length);
    newData = [];
    current_page = 1;
    getStadisticList({ page: 1 });
    $recommendationByUser = [];
  }

  let newData = [];
  //  $ : data =$stadisticDashboard.RecommendationByUser;//newData.filter((user)=>user.getUsername().indexOf(searchUser) !== -1 ).filter((user)=>user.getEmail().indexOf(searchEmail) !== -1 ).filter((user)=>user.getEmail().indexOf(searchEmail) !== -1 );
  $: newData = [...newData, ...$recommendationByUser]; //newData.filter((user)=>user.getUsername().indexOf(searchUser) !== -1 ).filter((user)=>user.getEmail().indexOf(searchEmail) !== -1 ).filter((user)=>user.getEmail().indexOf(searchEmail) !== -1 );

  function keypress(event) {
    if (event.charCode == 13) {
      getData({ page: current_page });
    }
  }

  
function reloadButtons(){
 console.log("Data button DAshboard ==>", dataButtons);
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

<CardBusyIndicator title="Please wait..." open={showBusyIndicator} />
<CardTimeOut />
<div class="relative bg-red-500 md:pt-32 pb-32 pt-12">
  <div class="px-4 md:px-10 mx-auto w-full">
    <div>
      <!-- Card stats -->
      <div class="flex flex-wrap">
        {#each $stadisticDashboard.StadisticPanel as itemStadistic}
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <CardStats
              statSubtitle={itemStadistic.Status}
              statTitle={itemStadistic.Count}
              statArrow={itemStadistic.Arrow}
              statPercent={itemStadistic.Percent}
              statPercentColor={itemStadistic.PercentColor}
              statDescripiron={$_("Since last month")}
              statIconName={itemStadistic.Icon}
              statIconColor={itemStadistic.IconColor}
            />
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
<div class="px-4 md:px-10 mx-auto w-full -m-24">
  <div class="flex flex-wrap">
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
      <CardLineChart dataCharLine={$stadisticDashboard.CharLine} />
    </div>
    <div class="w-full xl:w-4/12 px-4">
      <CardBarChart dataCharLine={$stadisticDashboard.CharLine} />
    </div>
  </div>
  <div class="flex flex-wrap mt-4">
    <div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
      <!-- <CardPageVisits dataUser={$stadisticDashboard.RecommendationByUser} /> -->
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
      >
        <div class="rounded-t mb-0 px-4 py-3 border-0">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 class="font-semibold text-base text-blueGray-700 labelsMetadata" id="hUsersPerformance">
                {$_("User's Performance")}
              </h3>
            </div>
            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata"
                  for="iSearchByName"
                  id="lSearchByName"
                >
                  {$_("Search by Name")}
                </label>
                {#if searchUser != ""}
                  <ClearIcon
                    on:click={() => {
                      searchUser = "";
                      getData({ page: current_page });
                    }}
                  />
                {/if}
                <input
                  type="text"
                  name="searchUser"
                  id="iSearchByName"
                  autocomplete="given-name"
                  placeholder={$_("Press key 'Enter' for Search By Name")}
                  bind:value={searchUser}
                  on:keypress={keypress}
                  class="labelsMetadata border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>
            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2 labelsMetadata"
                  id="lSearchByEmail"
                  for="searchEmail"
                >
                  {$_("Search By Email")}
                </label>
                {#if searchEmail != ""}
                  <ClearIcon
                    on:click={() => {
                      searchEmail = "";
                      getData({ page: current_page });
                    }}
                  />
                {/if}
                <input
                  type="text"
                  name="searchEmail"
                  id="iSearchByEmail"
                  autocomplete="given-name"
                  placeholder={$_("Press key 'Enter' for Search By Email")}
                  on:keypress={keypress}
                  bind:value={searchEmail}
                  class="labelsMetadata border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>
            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mt-3">
                <label class="inline-flex justify-items-stretch cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    bind:checked={lastYearCk}
                    on:click={() => {
                      lastYearCk = !lastYearCk;
                      getData({ page: current_page });
                    }}
                    class="form-checkbox border-b-1 border-blueGray-300 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 mr-2"
                  />
                  <span class="pl-2 labelsMetadata" id="sLastYear">{lastYear}</span>
                </label>
                <label class="inline-flex justify-items-stretch cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    bind:checked={currentYearCk}
                    on:click={() => {
                      currentYearCk = !currentYearCk;
                      getData({ page: current_page });
                    }}
                    class="form-checkbox border-b-1 border-blueGray-300 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 mr-2"
                  />
                  <span class="pl-2 labelsMetadata" id="sCurrentYear">{currentYear}</span>
                </label>
                <LabelMetadataBtn id="bLabelsMetadata" {title} Document={documentdata} bind:dataLabels={dataLabels} {viewName}/>
                <ButtonToDisplayBtn  {title} Document={documentdata} bind:dataButtons={dataButtons} on:loadButtons={reloadButtons} {viewName}/>
              </div>
              
            </div>
           
          </div>
        </div>
        <div class="block w-full overflow-x-auto">
         

          <ul id="UsersTablePerformanceList" class="divide-y divide-gray-100">
            {#each newData as item}
              <article class="p-4 flex space-x-4">
                <div
                  class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20"
                >
                  <h2 class="text-lg font-semibold text-black mb-0.5">
                    {item.getUsername()}
                  </h2>
                  <dl class="flex flex-wrap text-sm font-medium whitespace-pre">
                    <div>
                      <dt class="sr-only">Month</dt>
                      <dd>
                        <abbr title={`${item.getMonth()} month`}
                          >{MonthsName[item.getMonth() - 1]}</abbr
                        >
                      </dd>
                    </div>
                    <div>
                      <dt class="sr-only">Year</dt>
                      <dd>· {item.getYear()}</dd>
                    </div>
                    <div>
                      <dt class="sr-only">Status</dt>
                      <dd>
                        . <i
                          class="fas fa-circle {getStatusColor(
                            item.getStatus()
                          )} mr-2"
                        />
                        {item.getStatus()}
                      </dd>
                    </div>
                    <div class="flex-none w-full mt-0.5 font-normal">
                      <dt class="inline">{$_("Email")}</dt>
                      {" "}
                      <dd class="inline text-black">{item.getEmail()}</dd>
                    </div>
                    <div
                      class="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900"
                    >
                      <dt class="text-amber-500">
                        <span class="labelsMetadata" id="sCount">{$_("Count")}</span>
                        <!-- <svg width="16" height="20" fill="currentColor">
                      <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                    </svg> -->
                      </dt>
                      <dd>({item.getCount()})</dd>
                    </div>
                  </dl>
                </div>
              </article>
            {/each}
            <InfiniteScroll
              hasMore={$recommendationByUser.length}
              threshold={8}
              on:loadMore={() => {
                current_page++;
                getStadisticList({ page: current_page });
              }}
            />
          </ul>
          <nav class="block">
            <div class="py-2 flex justify-end">
              <div
                class="flex pl-0 rounded  flex-wrap"
                style=" margin-right: 5px"
              >
                <p
                  class="text-sm text-blueGray-400 mt-4 "
                  style=" margin-top: 5px;  margin-right: 5px"
                  
                >
                  <span class="labelsMetadata" id='sPage'>{$_("Page")}</span> <code>{current_page}</code> ( {newData.length})
                </p>
              </div>
            </div>
          </nav>
          <!-- <h1 class="shadow-lg right-0"> El total de items es {newData.length}</h1> -->
          {#if total > 0}
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-center flex justify-between">
                <button
                  on:click={sentToExcelFile}
                  class="labelsMetadata bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
                  id="bExportToExcel"
                >
                  <i class="w-5 mr-1 fas fa-download" />
                  {$_("Export to Excel")}
                </button>

              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
