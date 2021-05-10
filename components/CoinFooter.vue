<template>
  <div
    class="bottom-0 flex flex-row justify-between object-bottom w-full px-3 py-4 border-t border-gray-200"
  >
    <div class="flex flex-row items-center justify-start ml-24">
      <div class="text-sm font-light">
        <nuxt-link to="#" class="text-logo-coinbase hover:text-logo-coinbase">Home</nuxt-link>
        <nuxt-link to="#" class="ml-3  text-logo-coinbase hover:text-logo-coinbase"
          >Careers</nuxt-link
        >
        <nuxt-link to="#" class="ml-3  text-logo-coinbase hover:text-logo-coinbase"
          >Legal & Privacy</nuxt-link
        >
      </div>
    </div>
    <dir class="justify-between"></dir>
    <dir class="justify-between"></dir>
    <dir class="justify-between"></dir>
    <dir class="justify-between"></dir>
    <div class="flex items-center justify-end ml-16">
      <p class="mr-3 text-sm font-light text-gray-600 ">© 2019 Coinbase</p>
      <button
        class="flex items-center px-4 text-sm font-light text-black border border-gray-200 rounded"
      >
        <span>English</span>

        <svg
          class="h-2 ml-24 text-gray-100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 129 129"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          enable-background="new 0 0 129 129"
        >
          <g>
            <path
              d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
            />
          </g>
        </svg>
      </button>
      <button
        class="flex items-center px-2 ml-3 text-xs font-semibold text-white border border-gray-200 rounded bg-logo-coinbase"
      >
        <span class="m-1">Need Help?</span>
      </button>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
