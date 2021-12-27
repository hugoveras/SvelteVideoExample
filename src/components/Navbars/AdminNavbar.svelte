<script>
	import LanguageDropdown from './../Dropdowns/LanguageDropdown.svelte';
  import { _,setupI18n, locale } from 'services/i18n.js';
  const logoimg = "../assets/img/blacklighttransp.png";
  let listLanguage = [{code:"en",language:"English"},
                      {code:"es",language:"Spanish"},
                      {code:"fr",language:"French"},
                      {code:"pt",language:"Portuguese"},
                      {code:"zh",language:"Chinese"},
                      {code:"thai",language:"Thai"}];
</script>

<!-- Navbar -->
<nav
  class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
>
  <div
    class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
  >
    <!-- Brand -->
    <div class="flex flex-wrap justify-center">
        <img alt="..." src={logoimg} />
    </div>
   
    

    <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
     

      <li class="flex items-center">
        <select class="flex-col md:flex-row  labelsMetadata border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring  ease-linear transition-all duration-150">
        {#each listLanguage as item}
          <option>{item.language}</option>
        {/each}
      </select>
      </li>

      <li class="flex items-center">
        <button
          class="bg-black text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
          type="button"
        >
         Sign in
        </button>
      </li>
    </ul>
  </div>
</nav>
<!-- End Navbar -->
