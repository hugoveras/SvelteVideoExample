
<script>
  

  import CardBusyIndicator from 'components/Cards/CardBusyIndicator.svelte';
    // core components
    // export let location;

    
    let showBusyIndicator = true
    
    function onLoadFrame() {
      showBusyIndicator = false
    }

</script>

<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
>
  <CardBusyIndicator 
  title="Please wait..."
    open={showBusyIndicator}
  >
  </CardBusyIndicator>
  <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
    <iframe src="https://dataflix.looker.com/embed/dashboards/34?Owner=&filter_config=%7B%22Owner%22:%5B%7B%22type%22:%22%3D%22,%22values%22:%5B%7B%22constant%22:%22%22%7D,%7B%7D%5D,%22id%22:1%7D%5D%7D" 
    allowfullscreen  on:load="{onLoadFrame}"
    type="text/html"
    width="100%" title="Report"
    height="1200px" 
    frameborder="0">
    </iframe>

  </div>
</div>
