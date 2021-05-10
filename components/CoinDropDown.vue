<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="relative z-10 flex items-center block w-8 h-8 overflow-hidden rounded-full "
    >
      <img class="h-full" src="/avatar.jpg" alt="Your avatar" />
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        class="w-5 h-5"
      >
        <path
          d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
          class="heroicon-ui"
        ></path>
      </svg>
    </button>
    <button
      v-if="isOpen"
      @click="isOpen = false"
      tabindex="-1"
      class="fixed inset-0 w-full h-full bg-black opacity-50 cursor-default"
    ></button>
    <div v-if="isOpen" class="absolute right-0 w-48 mt-2 bg-white rounded-lg shadow-xl">
      <div
        class="block px-4 py-2 text-gray-800 rounded-t-lg hover:bg-logo-coinbase hover:text-white"
      >
        <a href="#">Adham Farrag</a>
        <a href="#" class="text-xs">adham.farrag@email.com</a>
      </div>
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-800 hover:bg-logo-coinbase hover:text-white"
        >Account settings</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-800 hover:bg-logo-coinbase hover:text-white"
        >Settings</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-800 hover:bg-logo-coinbase hover:text-white"
        >Help</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-800 text-red-700 border-t border-gray-300 rounded-b-lg hover:bg-logo-coinbase hover:text-white"
        >Sign out</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
