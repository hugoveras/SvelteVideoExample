<script>
    import { createEventDispatcher } from 'svelte'
    import { _ } from 'services/i18n.js';
    import { Router, Route, navigate } from "svelte-routing";
    import IdleTracker from 'idle-tracker';
    import {idelTimeout} from 'stores/store.js'

    export let open = false
    // export let title = ''

    const clockIcon = "../assets/img/clock-fill.svg";

    let idelTimeoutLocal;

	idelTimeout.subscribe(value => {
		idelTimeoutLocal = value;
	});

    const idelTracker = new IdleTracker({
        timeout: idelTimeoutLocal,
        onIdleCallback: idleFunction,
        throttle: 500,
        //events: activeEvents.default
    });
    idelTracker.start();

    function idleFunction() {
        idelTracker.end()
        open = true
    }

    const dispatch = createEventDispatcher()


    function signOut() {
        navigate("/", { replace: true });
    }

  </script>


{#if open}
    <div class="modal z-50 fixed w-full  h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0">
        <div class="modal-overlay fixed w-full h-full bg-blueGray-600 opacity-50"></div>
        <div class="bg-white w-full lg:h-max lg:w-4/12 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto">
          <div class="content p-8">
            <slot name="body" />

            <div class="flex justify-center items-center head  py-5 px-8 text-2xl font-extrabold">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#182359" class="bi bi-alarm" viewBox="0 0 16 16">
                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
                </svg>
            </div>
            <div class="flex justify-center items-center head  py-5 px-8 text-2xl font-extrabold">
                <h2 class="text-center text-blueGray-700 text-xl font-semibold">{$_("Session Timeout")}</h2>
            </div>

            <div class="btn-wrapper text-right">
                <button  on:click="{signOut}" 
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


