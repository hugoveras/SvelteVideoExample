<script>
  export let  ReportUrl, ReportUrlExcel

  import { onMount } from 'svelte';
  import CardBusyIndicator from 'components/Cards/CardBusyIndicator.svelte';
    // core components
    // export let location;

    
    let showBusyIndicator = true
    
    function onLoadFrame() {
      showBusyIndicator = false
      //console.log("loaded")
    }

  function sentToExcelFile() {
    ReportUrl = ReportUrlExcel
  }
  

</script>
<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
>
<CardBusyIndicator 
title="Please wait..."
  open={showBusyIndicator}
>
</CardBusyIndicator>
  <div class="rounded-t bg-white mb-0 px-6 py-6">
    <div class="text-center flex justify-between">
        <button on:click="{sentToExcelFile}" 
            class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
            type="button"
        >
            <i class="w-5 mr-1 fas fa-download" ></i>
            Export to Excel
        </button>
      
     
    </div>
  </div>
  <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
    <iframe src={ReportUrl}  on:load="{onLoadFrame}"
    allowfullscreen 
    type="text/html"
    width="100%" title="Report"
    height="1200px" 
    frameborder="0">
    </iframe>

  </div>
</div>
