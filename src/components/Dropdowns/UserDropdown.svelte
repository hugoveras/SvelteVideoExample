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
    detectionAction
  } from "stores/store.js";

  // core components

  const image = "../assets/img/team-1-800x800.jpg";

  let dropdownPopoverShow = false;

  let btnDropdownRef;
  let popoverDropdownRef;

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

</script>

<div>
  <div class="flex flex-wrap">
    {#if $customerSelected}
      <div class="media-body ml-2 d-none d-lg-block" style="padding-top: 12px;margin-right:10px"><span class="text-white mb-0 text-sm font-weight-bold"  >Customer: {$customerSelected.CustomerNumber}-{$customerSelected.CustomerName}</span></div>
    {/if}
  <a
    class="text-blueGray-500 block"
    href="#pablo"
    bind:this="{btnDropdownRef}"
    on:click="{toggleDropdown}"
  >
    <div class="items-center flex">
      <span
        class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
      >
        <img
          alt="..."
          class="w-full rounded-full align-middle border-none shadow-lg"
          src="{image}"
        />
        
      </span>
    
    <div class="media-body ml-2 d-none d-lg-block"><span class="text-white mb-0 text-sm font-weight-bold">{userData.Username}</span></div>
  </div>
  </a>

  

  <div
    bind:this="{popoverDropdownRef}"
    class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow ? 'block':'hidden'}"
  >
    <a
      href="#pablo" on:click={(e) => e.preventDefault()}
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Profile
    </a>
    
    <div class="h-0 my-2 border border-solid border-blueGray-100" />
    <a
    href="/" on:click={logOut}
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Logout
    </a>
  </div>
  </div>

  
</div>
