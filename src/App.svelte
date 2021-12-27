<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";
  import { logout } from 'stores/store.js';
  // Admin Layout
  import Admin from "./layouts/Admin.svelte";
  // Auth Layout
  import Auth from "./layouts/Auth.svelte";
  import Login from "./views/auth/Login.svelte";

  // No Layout Pages
  import Index from "./views/Index.svelte";
  import Landing from "./views/Landing.svelte";
  import Profile from "./views/Profile.svelte";
  import { setupI18n, isLocaleLoaded, locale, dir } from './services/i18n';
  export let url = "";

  const pageAccessedByReload = (
	(window.performance.navigation && window.performance.navigation.type === 1) ||
		window.performance
		.getEntriesByType('reload')
		.includes('reload')
	);
	console.log("pageAccessedByReload==>",pageAccessedByReload)

	if(pageAccessedByReload){
		logout();		
	}

  $: if (!$isLocaleLoaded) {
      setupI18n({ withLocale: 'en' });
  }
  // $: { document.dir = $dir; }
</script>
<svelte:head>

<title>Blacklight Administration 
</title>

</svelte:head>
<Router url="{url}">
  <!-- admin layout -->
  <Route path="admin/*admin" component="{Admin}" />
  <!-- auth layout -->
  <Route path="auth/*auth" component="{Auth}" />
  
  <!-- no layout pages -->
  <Route path="landing" component="{Landing}" />
  <Route path="profile" component="{Profile}"  />
  <Route path="main" component="{Index}"  />
 
  <Route path="/" component="{Login}" />
</Router>
