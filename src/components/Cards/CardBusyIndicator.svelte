<script>
    import { createEventDispatcher } from 'svelte'
    export let open = false
    export let title = ''
 
  
    const dispatch = createEventDispatcher()
  </script>


{#if open}
    <div class="modal z-50 fixed w-full  h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0">
        <div class="modal-overlay fixed w-full h-full bg-blueGray-600 opacity-50"></div>
        <div class="bg-white w-full lg:h-max lg:w-4/12 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto">
          <div class="content p-8">
            <slot name="body" />

            <div class="flex justify-center items-center head  py-5 px-8 text-2xl font-extrabold">
                <i class="fa fa-spinner fa-spin fa-2x"></i>
            </div>
            <div class="flex justify-center items-center head  py-5 px-8 text-2xl font-extrabold">
                <h2 class="text-center text-blueGray-700 text-xl font-semibold">{title}</h2>
            </div>

          </div>
        </div>
      </div>
{/if}

