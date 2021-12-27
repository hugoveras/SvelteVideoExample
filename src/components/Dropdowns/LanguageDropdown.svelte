<script>
  // library for creating dropdown menu appear on click
  import { createPopper } from "@popperjs/core";
  import { afterUpdate } from "svelte";
  import {
    token,
    getStorage,
    customerSelected,
    getCustomerSelected,
    logout,
    detectionAction,
  } from "stores/store.js";
  import {
      createEventDispatcher
    } from 'svelte';
  import { _ } from "services/i18n.js";
  // core components

  const dispatch = createEventDispatcher();

  const image = "../assets/img/team-1-800x800.jpg";

  let dropdownPopoverShow = false;

  let btnDropdownRef;
  let popoverDropdownRef;
  export let value = 'en';
  const toggleDropdown = (event) => {
    event.preventDefault();
    if (dropdownPopoverShow) {
      dropdownPopoverShow = false;
    } else {
      dropdownPopoverShow = true;
      createPopper(btnDropdownRef, popoverDropdownRef, {
        placement: "bottom-start",
      });
    }
  };

  const logOut = () => {
    // localStorage.clear();
    token.set(localStorage.getItem("token"));
    open = false;
    logout();
    // navigate("/", { replace: true });
  };

  let userData = getStorage();

  let openDropdown = false;
  afterUpdate(() => {
    if (getCustomerSelected() != null) {
      customerSelected.set(getCustomerSelected());
    }
  });

  let listLanguage = [{code:"en",language:"English"},
                      {code:"es",language:"Spanish"},
                      {code:"fr",language:"French"},
                      {code:"pt",language:"Portuguese"},
                      {code:"zh",language:"Chinese"},
                      {code:"thai",language:"Thai"}];
</script>

<div>
  <div class="flex flex-wrap">
    <a
      class="text-blueGray-500 block"
      href="#pablo"
      bind:this={btnDropdownRef}
      on:click={toggleDropdown}
    >
      <div class="items-center flex">
        <div class="media-body ml-2 d-none d-lg-block">
          <span class="text-white mb-0 text-sm font-weight-bold"
            >{$_("Language")}: {$_(value)}</span>
        </div>
      </div>
    </a>

    <div
      bind:this={popoverDropdownRef}
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow
        ? 'block'
        : 'hidden'}"
    >

    {#each listLanguage as item}
      <button
      on:click={(e) => {
        e.preventDefault();
        dispatch("locale-changed", item.code);
        toggleDropdown(e);
        value= item.language;
      }}
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      {$_(item.language)}
    </button>

    <div class="h-0 my-2 border border-solid border-blueGray-100" />
    {/each}
      
      <!-- <button
        on:click={(e) => {
          e.preventDefault();
          dispatch("locale-changed", "fr");
          toggleDropdown(e);
          value='fr';
        }}
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        {$_("French")}
      </button>
      <div class="h-0 my-2 border border-solid border-blueGray-100" />
      <button
        on:click={(e) => {
          e.preventDefault();
          dispatch("locale-changed", "es");
          toggleDropdown(e);
          value='es';
        }}
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        {$_("Spanish")}
      </button>
      <div class="h-0 my-2 border border-solid border-blueGray-100" />
      <button
        on:click={(e) => {
          e.preventDefault();
          dispatch("locale-changed", "thai");
          toggleDropdown(e);
          value='es';
        }}
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        {$_("Thai")}
      </button>
      <div class="h-0 my-2 border border-solid border-blueGray-100" />
      <button
        on:click={(e) => {
          e.preventDefault();
          dispatch("locale-changed", "pt");
          toggleDropdown(e);
          value='pt';
        }}
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        {$_("Portuguese")}
      </button>
      <div class="h-0 my-2 border border-solid border-blueGray-100" />
      <button
        on:click={(e) => {
          e.preventDefault();
          dispatch("locale-changed", "zh");
          toggleDropdown(e);
          value='pt';
        }}
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        {$_("Chinese")}
      </button> -->
    </div>
  </div>
</div>
