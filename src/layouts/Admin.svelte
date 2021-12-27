<script>
	
  import { Router, Route } from "svelte-routing";

  // components for this layout
  import AdminNavbar from "components/Navbars/AdminNavbar.svelte";
  import Sidebar from "components/Sidebar/Sidebar.svelte";
  // import HeaderStats from "components/Headers/HeaderStats.svelte";
  // import FooterAdmin from "components/Footers/FooterAdmin.svelte";

  // pages for this layout
  import Dashboard from "views/admin/Dashboard.svelte";
  import Settings from "views/admin/Settings.svelte";
  import SearchWorkWithDashboard from "views/admin/WorkWithDashboard/SearchWorkWithDashboard.svelte";
  import SearchWorkWithUser from "views/admin/WorkWithUser/SearchWorkWithUser.svelte";
  import Maps from "views/admin/Maps.svelte";
  import Report from "views/admin/Report.svelte";
  import ExternalDashboard from 'views/admin/ExternalDashboard.svelte';
  import SearchKeyObservation from "views/admin/KeyObservation/SearchKeyObservation.svelte";
  import SearchMenuGroup from 'views/admin/MenuGroup/SearchMenuGroup.svelte';
  import SearchMenuOption from 'views/admin/MenuOption/SearchMenuOption.svelte';
 
  export let location;
  // export let admin = "";

</script>

<div>
  <Sidebar location={location}/>
  <div class="relative md:ml-64 bg-blueGray-100">
    <AdminNavbar />
    <!-- <HeaderStats /> -->
    
    <!-- <div class="px-4 md:px-10 mx-auto w-full -m-24"> -->
      <Router url="admin">
        <Route path="dashboard" component="{Dashboard}" />
        <Route path="settings" component="{Settings}" />
        <Route path="workingwithusers" component="{SearchWorkWithUser}" />
        <Route path="searchworkwithdashboard" component="{SearchWorkWithDashboard}" />
        <Route path="searchkeyobservation" component="{SearchKeyObservation}" />
        <Route path="maps" component="{Maps}" />
        <Route path="report" component="{Report}" />
        <Route path="externalDashboard" component="{ExternalDashboard}" />
        <Route path="searchmenugroup" component="{SearchMenuGroup}" />
        <Route path="searchmenuoption" component="{SearchMenuOption}" />
        <Route path="searchattachmenttype" component="{SearchAttachmentType}"/>
      </Router>
      <!-- <FooterAdmin /> -->
    <!-- </div> -->
  </div>
  
</div>
