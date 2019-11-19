<template>
  <div
    class="min-h-full max-h-full align-middle text-center justify-center mt-40"
  >
    <div class="flex text-center justify-center">
      <vue-typed-js
        :startDelay="500"
        :typeSpeed="70"
        :strings="[
          'Hello! 👋🏻',
          '^1000 Thanks for checking my stuff 🙏🏻',
          '^1000 I made these UI clones and components using Nuxt and TailwindCSS',
          '^1000 Maybe I forgot to share a direct link to an example.',
          '^1000 Logos will do the job.'
        ]"
        :cursorChar="'_'"
        :smartBackspace="true"
        @onComplete="showLogos()"
      >
        <h2 class="font-mono text-xl text-gray-800 typing"></h2>
      </vue-typed-js>

    </div>

    <transition name="fade">
      <div v-show="isHidden" class="mt-10 mb-10 flex justify-center">
        <div class="text-gray-700 flex flex-row items-center text-center">
          <nuxt-link to="/CoinHome">
            <img
              role="button"
              class="text-logo-coinbase mt-5 w-64"
              src="https://cdn.worldvectorlogo.com/logos/coinbase.svg"
              title="Coinbase UI Clone"
            />
          </nuxt-link>

          <nuxt-link to="/discord">
            <img
              role="button"
              class="text-logo-coinbase mt-10 w-70"
              src="https://cdn.worldvectorlogo.com/logos/discord-logo-color-wordmark-1.svg"
              title="Discord UI"
            />
          </nuxt-link>

          <nuxt-link to="/reddit">
            <img
              role="button"
              class="text-logo-coinbase mt-10 w-64"
              src=" https://cdn.worldvectorlogo.com/logos/reddit-1.svg"
              title="Reddit UI Clone"
            />
          </nuxt-link>
        </div>
      </div>
    </transition>

 
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: false
    };
  },
  methods: {
    showLogos() {
      this.isHidden = !this.isHidden;
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
