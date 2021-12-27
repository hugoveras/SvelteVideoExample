<script>
	import CardVideo from 'components/Cards/CardVideo.svelte';
  export let Title = "Enjoy on your TV.";
  export let SubTitle =
    "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.";
  export let urlImage = "../assets/img/blacklighttransp.png";
  export let placeImg = "left";
</script>

<div class="relative shadow-lg md:pt-32 pb-32 pt-20">
  <div class="flex flex-wrap">
    <div class="w-full flex justify-center md:bg-black content-center">
      <div class="flex inline-block w-6/12 items-center justify-center mt-3">
        {#if placeImg == "left"}
            <div class="w-6/12">
                <!-- <img alt="..." src={urlImage} /> -->
                <CardVideo/>
            </div>
        {/if}
        
        <div class="w-6/12">
          <p class="text-5xl">{Title}</p>
          <p class="text-2xl">{SubTitle}</p>
        </div>
        {#if placeImg == "rigth"}
        <div class="w-6/12">
            <!-- <img alt="..." src={urlImage} /> -->
            <CardVideo/>
        </div>
    {/if}
      </div>
    </div>
  </div>
</div>
