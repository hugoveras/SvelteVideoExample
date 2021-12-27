<script>
    import { _ } from 'services/i18n.js';
    export let current_page;
    export let last_page;
    // export let per_page;
    export let from;
    export let to;
    export let total;
  
    let startF = 1;
    let StartL = last_page;
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
  
    function range(size, startAt = 0) {
      return [...Array(size).keys()].map(i => i + startAt);
    }
  
    function changePage(page){
      if (page > last_page ) {
        return
      }
      console.log("Page==>", page);
      console.log("Current Page==>",current_page);
      
      
      if(page > current_page){
        if(page % 4 == 0){
          startF = current_page + 1;  
        }
      } else{
        
        if(current_page > 4){
          if(current_page % 4 == 0){
            startF = current_page -4;  
          }
        }else{
          startF = 1;  
        }
      }

      if (page !== current_page) {
        dispatch('change', page);
      }

    }
  </script>
  
 
    <nav class="block">
      <div class="py-2 flex justify-end">
      <ul class="flex pl-0 rounded list-none flex-wrap" style=" margin-right: 5px">
        <p class="text-sm text-blueGray-400 mt-4" style=" margin-top: 5px;  margin-right: 5px">
          {$_("Page")} <code>{current_page}</code> {$_("of")} <code>{last_page}</code> (<code>{from + 1}</code> - <code>{to}</code> {$_("on")} <code>{total}</code> {$_("items")})
        </p>
      
       
        
        <li  class="disabled:opacity-50 ... " disabled="{true}" >
          <button type="button"  on:click="{() => changePage(current_page - 1)}" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center 
            leading-tight relative border border-solid border-orange-500 bg-white {current_page === last_page ? 'opacity-75 disabled' : 'text-orange-500'}">
            <i class="fas fa-chevron-left -mr-px"></i>
          </button>
        </li>
        

        
        {#each range(4, startF) as page}
        <li>
          <button type="button" on:click="{() => changePage(page)}" 
            class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight 
            relative border border-solid border-orange-500 text-white  {current_page === page ? 'opacity-75 text-orange-500' : 'bg-blueGray-600 '} ">
            {page}
          </button>
        </li>
        {/each}
          
        
        {#if last_page > 6 }
        <li>
          <button type="button"
            class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight 
            relative border border-solid border-orange-500 text-orange-500">
            ...
          </button>
        </li>
        {/if}
        {#if last_page > 7 }
          {#each range(4, StartL-4) as page}
            <li>
              <button type="button" on:click="{() => changePage(page)}" 
                class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight 
                relative border border-solid border-orange-500 text-white  {current_page === page ? 'opacity-75 text-orange-500' : 'bg-blueGray-600 '} ">
                {page}
              </button>
            </li>
          {/each}
        {/if}
        <li  >
          <button type="button"  on:click="{() => changePage(current_page + 1)}" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center 
            leading-tight relative border border-solid border-orange-500 bg-white {current_page === last_page ? 'opacity-75 disabled' : 'text-orange-500'}">
            <i class="fas fa-chevron-right -mr-px"></i>
          </button>
        </li>
      </ul>
  </div>
  </nav>
  