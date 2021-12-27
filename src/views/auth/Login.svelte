<script>
	import Footer  from 'components/Footers/Footer.svelte';
  import AdminNavbar from "components/Navbars/AdminNavbar.svelte";

  import { setupI18n, isLocaleLoaded, locale, dir } from 'services/i18n.js';
  import HeaderStream from 'components/Headers/HeaderStream.svelte';
  import CardPageIntermedia from '../../components/Cards/CardPageIntermedia.svelte';
  // import AuthNavbar from "components/Navbars/AuthNavbar.svelte";

  $: if (!$isLocaleLoaded) {
        setupI18n({ withLocale: 'en' });
  }
	
</script>

<div>
  <AdminNavbar class="p-2 md:p-10" />
  <HeaderStream/>
  <CardPageIntermedia placeImg={"rigth"}/>
  <CardPageIntermedia placeImg={"left"}/>
  <!-- <CardPageIntermedia/>
  <CardPageIntermedia/> -->
  <Footer/>
</div>
