
<script>
  import ClearIcon from "components/Common/ClearIcon.svelte";
  import { getStatusColor, MonthsName } from "stores/store.js";
  import { afterUpdate } from "svelte";
  
  let currentYear = new Date().getFullYear();
  let lastYear = currentYear-1;
  
  let columns = ["User", "Email", "Month", "Year","Count",  "Status"];
  export let dataUser = {};
  var dataForFilter = [];
  let searchUser = "";
  
  $ : data = dataUser;
  afterUpdate(()=>{
    console.log("Entre al after")
    dataForFilter = dataUser;
  })
  function filterData(){
    console.log("Filter data for filter==>",dataForFilter)
    dataUser = data.filter(user=>user.getUsername().indexOf(searchUser) !== -1);
  }
  </script>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            User's Performance
          </h3>
  
        </div>
        <div class="w-full lg:w-3/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              for="searchUser">
            Search By Email
            </label>
            {#if searchUser != ""}
              <ClearIcon
                on:click={() => {
                  searchUser = "";
                }}
              />
            {/if}
            <input
            type="text"
            name="searchUser"
            id="searchUser"
            autocomplete="given-name"
            placeholder="Search By Name"
            on:change={filterData}
            bind:value={searchUser}
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            
            />
          </div>
        </div>
        <div class="w-full lg:w-3/12 px-4">
          <div class="relative w-full mt-3">
            <label
                    class="inline-flex justify-items-stretch cursor-pointer" >
                    <input
                      id="customCheckLogin"
                      type="checkbox"  
                      on:keypress="{filterData}" 
                      class="form-checkbox border-b-1 border-blueGray-300 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 mr-2"/>
                      <span class="pl-2">{lastYear}</span> 
                    </label>
                    <label
                    class="inline-flex justify-items-stretch cursor-pointer" >
                    <input
                      id="customCheckLogin"
                      type="checkbox"   
                      class="form-checkbox border-b-1 border-blueGray-300 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 mr-2"/>
                      <span class="pl-2">{currentYear}</span> 
                    </label>
          </div>
        </div>
        <!-- <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button
            class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            See all
          </button>
        </div> -->
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            {#each columns as colName}
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              {colName}
            </th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each data as item}
          <tr>
            <!-- <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"  >
  
            <label
            class="inline-flex justify-items-stretch cursor-pointer"
          >
            <input
              id="customCheckSelect"
              type="checkbox"
              class="form-checkbox border-b-1 border-blueGray-300 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
            />
          </label>
        </td> -->
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" > {item.getUsername()}</td>
            <!-- <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" > </td> -->
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" > {item.getEmail()}</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" > {MonthsName[item.getMonth()-1]}</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{item.getYear()}</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" > {item.getCount()} </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" > 
              
              <i class="fas fa-circle {getStatusColor(item.getStatus())} mr-2"></i>
              {item.getStatus()}
            </td>
           
          </tr>
        {/each}
          
         
        </tbody>
      </table>
    </div>
  </div>
  