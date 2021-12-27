<script>
  // core components
  import CardStats from "components/Cards/CardStats.svelte";
</script>

<!-- Header -->
<div class="relative shadow-lg md:pt-32 pb-32 pt-20">
  <div class="px-4 md:px-10 mx-auto w-full">
    <div>
      <!-- Card stats -->
      <div class="flex flex-wrap">
       
          <div class="w-full text-center  md:bg-black">
            <p class="p-3 text-4xl">Unlimited movies, TV shows, and more.</p>
            <p class="p-2 text-3xl">Watch anywhere. Cancel anytime.</p>
            <p class="p-2 text-2xl">Ready to watch? Enter your email to create or restart your membership.</p>
            <div class="flex inline-block w-full items-center justify-center mt-3">
              <div class="w-6/12">
                <input name="email" type="email"  
                class="border-1 px-6 py-6 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Email"/>
              </div>
              <div class="w-2/12">
                <button class="border-1 px-6 py-6 placeholder-white text-white bg-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                >Get Started ></button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
