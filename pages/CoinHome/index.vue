<template>
  <div>
    <div class="items-center self-center mt-5 mb-4 border border-gray-200 rounded ml-28 mr-28" >
      <div class="flex flex-row items-center justify-between w-full py-3 border-b border-gray-200" >
        <p class="ml-3 text-lg font-semibold text-left text-gray-800">Following</p>
        <div class="flex items-center mr-6">
          <p class="ml-1 mr-2 text-sm font-light text-left text-gray-600">Edit</p>
          <span class="flex items-center ml-2">
            <svg class="mr-4 text-logo-coinbase" fill="currentColor" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg" >
              <g>
                <path d="M7.044 0H.783A.783.783 0 0 0 0 .783v6.26c0 .433.35.783.783.783h6.26c.433 0 .783-.35.783-.782V.783A.783.783 0 0 0 7.044 0zM17.218 0h-6.261a.783.783 0 0 0-.783.783v6.26c0 .433.35.783.783.783h6.26c.433 0 .783-.35.783-.782V.783A.783.783 0 0 0 17.217 0zM7.044 10.174H.783a.783.783 0 0 0-.783.782v6.261c0 .433.35.783.783.783h6.26c.433 0 .783-.35.783-.783v-6.26a.783.783 0 0 0-.782-.783zM17.218 10.174h-6.261a.783.783 0 0 0-.783.782v6.261c0 .433.35.783.783.783h6.26c.433 0 .783-.35.783-.783v-6.26a.783.783 0 0 0-.783-.783z"/>
              </g>
            </svg>
            <svg class width="19"
              height="16"
              viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path
                d="M0 10.286c0 .63.512 1.143 1.143 1.143h16.714a1.143 1.143 0 0 0 0-2.286H1.143C.512 9.143 0 9.655 0 10.286zm0 4.571C0 15.488.512 16 1.143 16h16.714a1.143 1.143 0 0 0 0-2.286H1.143c-.631 0-1.143.512-1.143 1.143zm0-9.143c0 .631.512 1.143 1.143 1.143h16.714a1.143 1.143 0 1 0 0-2.286H1.143C.512 4.571 0 5.083 0 5.714zM1.143 0a1.143 1.143 0 1 0 0 2.286h16.714a1.143 1.143 0 1 0 0-2.286H1.143z"
                fill="#BECADA"
              />
            </svg>
          </span>
        </div>
      </div>

      <div class="flex flex-row">
        <div class="w-4/12">
          <div class="border border-gray-200">
            <div class="flex items-center justify-between mt-5 ml-3 mr-3">
              <div class="flex flex-row items-center">
                <img class="w-8 h-8" src="bitcoin.png" alt srcset />
                <span class="ml-2 text-sm font-bold">Bitcoin</span>
              </div>
              <div>
                <p class="text-sm font-light">24 h</p>
              </div>
            </div>
            <div class="flex items-center justify-between ml-3 mr-3">
              <div class="flex flex-row items-center mt-3">
                <span class="text-lg font-bold">MYR 33,089.70</span>
              </div>
              <div>
                <p class="text-sm font-light text-red-700">-0.71%</p>
              </div>
            </div>

            <trend 
                :data="[0, 2, 4,3, 5, 7, 3, 5, 4, 2, 1, 8, 2, 9, 0, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0 ]" 
                :gradient="['#F7931A']" auto-draw smooth>
            </trend>
          </div>
        </div>

        <div class="w-4/12">
          <div class="border border-gray-200">
            <div class="flex items-center justify-between mt-5 ml-3 mr-3">
              <div class="flex flex-row items-center">
                <img class="w-8 h-8" src="etheruem.png" alt srcset />
                <span class="ml-2 text-sm font-bold">Etheruem</span>
              </div>
              <div>
                <p class="text-sm font-light">24 h</p>
              </div>
            </div>
            <div class="flex items-center justify-between ml-3 mr-3">
              <div class="flex flex-row items-center mt-3">
                <span class="text-lg font-bold">MYR 33,089.70</span>
              </div>
              <div>
                <p class="text-sm font-light text-red-700">-0.71%</p>
              </div>
            </div>

            <trend
              :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
              :gradient="['#627EEA']"
              auto-draw
              smooth
            ></trend>
          </div>
        </div>

        <div class="w-4/12">
          <div class="border border-gray-200">
            <div class="flex items-center justify-between mt-5 ml-3 mr-3">
              <div class="flex flex-row items-center">
                <img class="w-8 h-8" src="xrp.png" alt srcset />
                <span class="ml-2 text-sm font-bold">XRP</span>
              </div>
              <div>
                <p class="text-sm font-light">24 h</p>
              </div>
            </div>
            <div class="flex items-center justify-between ml-3 mr-3">
              <div class="flex flex-row items-center mt-3">
                <span class="text-lg font-bold">MYR 33,089.70</span>
              </div>
              <div>
                <p class="text-sm font-light text-red-700">-0.71%</p>
              </div>
            </div>

            <trend
              :data="[9, 6, 9, 5, 2, 3, 5, 0, 0, 1, 3, 2, 6, 13]"
              :gradient="['#000000', '#38a169']"
              auto-draw
              smooth
            ></trend>
          </div>
        </div>
      </div>

      <div class="flex flex-row">
        <div class="w-4/12">
          <div class="border border-gray-200">
            <div class="flex items-center justify-between mt-5 ml-3 mr-3">
              <div class="flex flex-row items-center">
                <img class="w-8 h-8" src="lite.png" alt srcset />
                <span class="ml-2 text-sm font-bold">Litecoin</span>
              </div>
              <div>
                <p class="text-sm font-light">24 h</p>
              </div>
            </div>
            <div class="flex items-center justify-between ml-3 mr-3">
              <div class="flex flex-row items-center mt-3">
                <span class="text-lg font-bold">MYR 33,089.70</span>
              </div>
              <div>
                <p class="text-sm font-light text-red-700">-0.71%</p>
              </div>
            </div>

            <trend
              :data="[20, 2, 5, 9, 5, 4, 3, 5, 0, 0, 1, 5, 2, 3, 0]"
              :gradient="['#A5A8A9', '#c53030', '#A5A8A9']"
              auto-draw
              smooth
            ></trend>
          </div>
        </div>

        <div class="w-4/12">
          <div class="border border-gray-200">
            <div class="flex items-center justify-between mt-5 ml-3 mr-3">
              <div class="flex flex-row items-center">
                <img class="w-8 h-8" src="bitcoincash.png" alt srcset />
                <span class="ml-2 text-sm font-bold">Bitcoin Cash</span>
              </div>
              <div>
                <p class="text-sm font-light">24 h</p>
              </div>
            </div>
            <div class="flex items-center justify-between ml-3 mr-3">
              <div class="flex flex-row items-center mt-3">
                <span class="text-lg font-bold">MYR 33,089.70</span>
              </div>
              <div>
                <p class="text-sm font-light text-red-700">-0.71%</p>
              </div>
            </div>

            <trend
              :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
              :gradient="['#8DC351']"
              auto-draw
              smooth
            ></trend>
          </div>
        </div>

        <div class="w-4/12">
          <div class="border border-gray-200">
            <div class="flex items-center justify-between mt-5 ml-3 mr-3">
              <div class="flex flex-row items-center">
                <img class="w-8 h-8" src="last.png" alt srcset />
                <span class="ml-2 text-sm font-bold">Stellar Lumens</span>
              </div>
              <div>
                <p class="text-sm font-light">24 h</p>
              </div>
            </div>
            <div class="flex items-center justify-between ml-3 mr-3">
              <div class="flex flex-row items-center mt-3">
                <span class="text-lg font-bold">MYR 33,089.70</span>
              </div>
              <div>
                <p class="text-sm font-light text-red-700">-0.71%</p>
              </div>
            </div>

            <trend
              :data="[0, 2, 5, 0, 1, 8, 2, 9, 0, 9, 5, 10, 3, 5, 0]"
              :gradient="['#000000']"
              auto-draw
              smooth
            ></trend>
          </div>
        </div>
      </div>

      <div class="items-center w-full py-3 border-t border-gray-200">
        <span
          class="flex flex-row items-center justify-center text-gray-500 cursor-pointer hover:text-logo-coinbase"
        >
          <p class="text-base text-center font-base">Discover more assets</p>
          <p class="ml-1 text-sm font-semibold text-center">></p>
        </span>
      </div>
    </div>

    <div
      class="items-center h-48 mt-10 mb-4 bg-right bg-no-repeat bg-contain border border-gray-200 rounded ml-28 mr-28"
      style="background-image: url('https://static-assets.coinbase.com/earn/earn_dash_banner.png')"
    >
      <div class="mt-5 ml-6">
        <p class="justify-start text-2xl font-base">
          Earn free crypto with Coinbase Earn
        </p>
        <p class="mt-1 text-base text-xl font-light text-gray-500">
          Learn about different cryptocurrencies and earn them for free!
        </p>
        <button
          class="flex items-center px-4 py-3 mt-3 text-sm text-white border border-gray-200 rounded bg-logo-coinbase font-base"
        >
          Earn Crypto
        </button>
      </div>
    </div>

    <div class="flex flex-row justify-between mt-10 mb-10">
      <div
        class="flex flex-col items-center self-center w-2/5 mr-2 border border-gray-200 rounded ml-28"
      >
        <div
          class="flex flex-row items-center justify-between w-full border-b border-gray-200"
        >
          <p class="ml-3 text-lg font-semibold text-left text-gray-800">
            Recent Activity
          </p>
          <div class="flex items-center mr-6">
            <nuxt-link
              to="#"
              class="py-3 text-sm text-gray-500 border-b-2 border-transparent hover:text-logo-coinbase"
              >List</nuxt-link
            >
            <nuxt-link
              to="#"
              class="py-3 ml-2 text-sm text-black border-b-2 border-logo-coinbase hover:text-logo-coinbase"
              >Chart</nuxt-link
            >
          </div>
        </div>

        <div class="flex mt-5 mb-10">
          <div
            class="flex items-center justify-center border-2 border-gray-400 rounded-full h-70 w-70"
          >
            <div class="flex flex-col items-center justify-center">
              <span class="text-4xl font-normal">
                MYR
                <span class="text-5xl">0</span>.00
              </span>
              <p
                class="text-sm font-semibold text-left text-gray-500 uppercase"
              >
                Total balanace
              </p>
            </div>
          </div>
        </div>

        <div class="items-center w-full py-3 border-t border-gray-200">
          <span
            class="flex flex-row items-center justify-center text-gray-500 cursor-pointer hover:text-logo-coinbase"
          >
            <p class="text-base text-center font-base">Discover more assets</p>
            <p class="ml-1 text-sm font-semibold text-center">></p>
          </span>
        </div>
      </div>

      <div
        class="items-center self-center w-2/5 ml-2 border border-gray-200 rounded mr-28"
      >
        <div
          class="flex flex-row items-center justify-between w-full border-b border-gray-200"
        >
          <p class="ml-3 text-lg font-semibold text-left text-gray-800">
            Recent Activity
          </p>
          <div class="flex items-center mr-6">
            <nuxt-link
              to="#"
              class="py-3 text-sm text-gray-500 border-b-2 border-transparent hover:text-logo-coinbase"
              >List</nuxt-link
            >
            <nuxt-link
              to="#"
              class="py-3 ml-2 text-sm text-black border-b-2 border-logo-coinbase hover:text-logo-coinbase"
              >Chart</nuxt-link
            >
          </div>
        </div>

        <div class="flex flex-col items-center mt-5 mb-10">
          <div class="mt-5">
            <img
              class="bg-cover"
              src="https://assets.coinbase.com/assets/tothemoon.38116c02bbf54193c8f8ce085bf939e2.png"
              alt
              srcset
            />
          </div>
          <p class="justify-start mt-4 text-2xl font-base">
            No transactions yet
          </p>
          <p class="w-8/12 mt-1 text-base font-light text-center text-gray-500">
            There are lots of different ways to participate in the
            cryptocurrency ecosystem.
          </p>
        </div>

        <div class="items-center w-full py-3 border-t border-gray-200">
          <span
            class="flex flex-row items-center justify-center text-gray-500 cursor-pointer hover:text-logo-coinbase"
          >
            <p class="text-base text-center font-base">Discover more assets</p>
            <p class="ml-1 text-sm font-semibold text-center">></p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "coinbase"
};
</script>
