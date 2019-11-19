<template>
  <div>
    <div class="border-b border-gray-200 flex flex-row justify-between px-3 py-1">
    <div class="flex flex-row items-center justify-start">
      <div>
        <nuxt-link to="/reddit">
          <img class="text-logo-coinbase ml-2 w-24" src=" https://cdn.worldvectorlogo.com/logos/reddit-1.svg" />
        </nuxt-link>
      </div>

      <div class="ml-4 w-64 py-1 flex border-transparent justify-between hover:border-gray-200">
        <button class="flex ">
          <svg class="w-4 mr-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
            <polygon points="12.5 3.5 20 3.5 20 11 17.5 8.5 11.25 14.75 7.5 11 2.5 16 0 13.5 7.5 6 11.25 9.75 15 6">
            </polygon>
          </svg>
          <span class="text-sm font-semibold">
            Popular
          </span>
        </button>

        <svg class="w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path d="M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85" />
        </svg>
      </div>

      <div class="ml-10 text-sm py-1 w-101 border text-center rounded-lg border-gray-200 bg-gray-100">
        <form action="#" class="relative">
          <span class="absolute left-0 top-0 ml-3" style="top:7px">
            <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" >
              <path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </span>
          <input type="text" placeholder="Search Reddit" class="rounded bg-gray-100 text-black -ml-10 text-sm py-1" />
        </form>
      </div>

      <div class="ml-5 w-8 h-8 flex align-middle bg-white justify-center hover:bg-gray-100 hover:rounded-full" >
        <svg class="w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12.5 3.5 20 3.5 20 11 17.5 8.5 11.25 14.75 7.5 11 2.5 16 0 13.5 7.5 6 11.25 9.75 15 6" />
        </svg>
      </div>

      <div class="ml-2 w-8 h-8 flex align-middle bg-white justify-center hover:bg-gray-100 hover:rounded-full" >
        <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M1.25,17.5V7.5h5v10Zm11.25,0h-5V5H5l5-5,5,5H12.5Zm1.25,0v-5h5v5Z" />
        </svg>
      </div>

      <div class="ml-1 border border-gray-300 h-8"></div>
      <div class="ml-3">
        
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold text-sm hover:text-white py-1 px-8 border border-blue-500 hover:border-transparent rounded" >
          Login
        </button>
        
        <button class="ml-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm hover:text-white py-1 px-8 border border-blue-500 hover:border-transparent rounded" >
          Signup
        </button>
      
      </div>

      <div class="ml-5 align-middle items-center flex flex-row justify-between">
       <button class="flex ">
           <svg class="w-6" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" ><g fill="inherit"><path d="M146.8 142.6h-37.6c-31.1 0-56.5 25.3-56.5 56.5 0 5.2 4.2 9.4 9.4 9.4h131.8c5.2 0 9.4-4.2 9.4-9.4 0-31.2-25.3-56.5-56.5-56.5zM128 130.7c20.1 0 36.4-16.3 36.4-36.4v-9.4c0-20.1-16.3-36.4-36.4-36.4S91.6 64.8 91.6 84.9v9.4c0 20.1 16.3 36.4 36.4 36.4z"></path></g></svg>
           <svg class="w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path d="M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85" />
        </svg>
        </button>
      </div>

    </div>    
  </div>
  
    <div class="border-b border-gray-200 flex flex-row justify-between px-3 py-2">
      <div class="ml-48">
        <div class="flex flex-row items-center">
          <p class=" font-semibold uppercase text-xs text-gray-600">VIEW</p>
          <svg class="ml-2 w-5" viewBox="0 0 20 20" ><path d="M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"></path></svg>
          <svg class="ml-1 w-5" viewBox="0 0 20 20" ><path d="M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"></path></svg>
          <svg class="ml-1 w-5" viewBox="0 0 20 20" ><path d="M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"></path></svg>
          <div class="ml-2 border-l border-gray-500 h-5"></div>
          <p class="ml-2 font-semibold text-xs text-gray-600">SORT</p>
          <svg class="ml-2 w-4" viewBox="0 0 20 20"><path d="M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"></path><path d="M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"></path></svg>
          <p class="ml-2 font-semibold text-xs text-gray-600">Best</p>
          <svg class="w-4" version="1.1" viewBox="0 0 48 48"><path d="M14,20l10,10l10,-10Z" fill="#000"></path><path fill="none" d="M0,0h48v48h-48Z"></path></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
a.nuxt-link-active {
  @apply border-b-2 py-5 border-logo-coinbase;
}
</style>
