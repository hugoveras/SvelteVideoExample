<script>
    import { createEventDispatcher } from 'svelte';
    import { _ } from 'services/i18n.js';
    export let isOpen = false
    export let message = ''
    // export let type = ''
 
  
    const dispatch = createEventDispatcher()

  

  </script>


{#if isOpen}
    <div class="modal z-50 fixed w-full  h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0">
        <div class="modal-overlay fixed w-full h-full bg-blueGray-600 opacity-50"></div>
        <div class="bg-white w-full lg:h-max lg:w-4/12 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto">
          <div class="rounded-t bg-white mb-0 px-6 py-6">
            <div class="text-center flex justify-between">
              <h6 class="text-blueGray-700 text-xl font-bold">{$_("Alert")}</h6>
              <button type="button" on:click={() => dispatch('close')}>
                <span aria-hidden="true"></span>
                <i class="fa fa-times " aria-hidden="true"></i>
                </button>
            </div>
          </div>
          <div class="content p-8">
            <slot name="body" />

            <div class="flex justify-center items-center head  py-5 px-8 text-2xl font-extrabold">
                <i class="fa fa-exclamation-triangle fa-2x"></i>
            </div>
            <div class="flex justify-center items-center head  py-5 px-8 text-2xl font-extrabold">
                <h2 class="text-center text-blueGray-700 text-xl font-semibold">{$_(message)}</h2>
            </div>

            <div class="btn-wrapper text-right">
                <button  on:click={() => dispatch('close')}
                  class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                 
                  {$_("OK")}
                </button>
            </div>

          </div>

         

        </div>
      </div>
{/if}

