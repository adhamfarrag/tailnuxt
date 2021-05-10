<template>
  <div class="flex flex-row justify-center mt-40 align-middle">
    <div class="flex w-5/12 mt-10 mb-10">
      <div class="flex flex-col text-gray-700">
        <nuxt-link to="/CoinHome">
          <img
            role="button"
            class="w-30"
            src="https://camo.githubusercontent.com/cb05b9638b1a87f26746810d414fa106a8a92f89/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667"
          />
        </nuxt-link>
        <p class="font-mono text-3xl font-light">Tailwind CSS Examples</p>

        <vue-typed-js
          :startDelay="500"
          :typeSpeed="70"
          :strings="[
            'Hello! 👋🏻',
            '^1000 Thanks for checking my examples! ^1000',
            '^1000 Feel free to request apps you like ',
          ]"
          :cursorChar="'_'"
          :smartBackspace="true"
          @onComplete="showSocial()"
        >
          <h2 class="font-mono text-xl text-gray-800 typing"></h2>
        </vue-typed-js>

        <transition name="fade">
          <div v-if="isHidden" class="flex flex-row mt-1">
            <a href="https://github.com/adhamfarrag" target="_blank">
              <img
                role="button"
                class="w-6"
                src="https://cdn.worldvectorlogo.com/logos/github-1.svg"
              />
            </a>
            <a href="https://twitter.com/adham_farrag" target="_blank">
              <img
                role="button"
                class="w-6 ml-2"
                src="https://cdn.worldvectorlogo.com/logos/twitter.svg"
              />
            </a>
          </div>
        </transition>
      </div>
    </div>
    <div class="relative flex mt-20 mb-10">
      <div class="flex flex-col items-center text-gray-700">
        <div class="flex flex-row items-center">
          <nuxt-link to="/CoinHome">
            <img
              role="button"
              class="w-40 mt-6 mr-2 text-logo-coinbase"
              src="https://cdn.worldvectorlogo.com/logos/coinbase.svg"
            />
          </nuxt-link>

          <nuxt-link to="/discord">
            <img
              role="button"
              class="w-48 mt-10 mr-2 text-logo-coinbase"
              src="https://cdn.worldvectorlogo.com/logos/discord-logo-color-wordmark-1.svg"
            />
          </nuxt-link>

          <nuxt-link to="/reddit">
            <img
              role="button"
              class="w-40 mt-10 text-logo-coinbase"
              src=" https://cdn.worldvectorlogo.com/logos/reddit-1.svg"
            />
          </nuxt-link>
        </div>

        <transition name="fade">
          <div v-if="isHidden" class="flex flex-row mt-1">
            <p class="font-mono text-lg font-light"></p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Tailwind CSS Examples',
  },
  data() {
    return {
      isHidden: false,
    };
  },
  methods: {
    showSocial() {
      this.isHidden = true;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
