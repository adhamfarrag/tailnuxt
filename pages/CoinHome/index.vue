<template>
  <div>
    <div
      class="mt-5 ml-28 mr-28 mb-4 border rounded border-gray-200 items-center self-center"
    >
      <div
        class="py-3 items-center justify-between border-b border-gray-200 w-full flex flex-row"
      >
        <p class="ml-3 text-lg text-gray-800 font-semibold text-left">
          Following
        </p>
        <div class="flex items-center mr-6">
          <p class="ml-1 mr-2 text-sm text-gray-600 font-light text-left">
            Edit
          </p>
          <span class="flex items-center ml-2">
            <svg
              class="mr-4 text-logo-coinbase"
              fill="currentColor"
              height="18"
              viewBox="0 0 18 18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M7.044 0H.783A.783.783 0 0 0 0 .783v6.26c0 .433.35.783.783.783h6.26c.433 0 .783-.35.783-.782V.783A.783.783 0 0 0 7.044 0zM17.218 0h-6.261a.783.783 0 0 0-.783.783v6.26c0 .433.35.783.783.783h6.26c.433 0 .783-.35.783-.782V.783A.783.783 0 0 0 17.217 0zM7.044 10.174H.783a.783.783 0 0 0-.783.782v6.261c0 .433.35.783.783.783h6.26c.433 0 .783-.35.783-.783v-6.26a.783.783 0 0 0-.782-.783zM17.218 10.174h-6.261a.783.783 0 0 0-.783.782v6.261c0 .433.35.783.783.783h6.26c.433 0 .783-.35.783-.783v-6.26a.783.783 0 0 0-.783-.783z"
                />
              </g>
            </svg>
            <svg
              class
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
            <div class="mt-5 ml-3 mr-3 flex items-center justify-between">
              <div class="flex items-center flex-row">
                <img class="w-8 h-8" src="bitcoin.png" alt srcset />
                <span class="ml-2 text-sm font-bold">Bitcoin</span>
              </div>
              <div>
                <p class="font-light text-sm">24 h</p>
              </div>
            </div>
            <div class="ml-3 mr-3 flex items-center justify-between">
              <div class="mt-3 flex items-center flex-row">
                <span class="text-lg font-bold">MYR 33,089.70</span>
              </div>
              <div>
                <p class="font-light text-red-700 text-sm">-0.71%</p>
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
            <div class="mt-5 ml-3 mr-3 flex items-center justify-between">
              <div class="flex items-center flex-row">
                <img class="w-8 h-8" src="etheruem.png" alt srcset />
                <span class="ml-2 text-sm font-bold">Etheruem</span>
              </div>
              <div>
                <p class="font-light text-sm">24 h</p>
              </div>
            </div>
            <div class="ml-3 mr-3 flex items-center justify-between">
              <div class="mt-3 flex items-center flex-row">
                <span class="text-lg font-bold">MYR 33,089.70</span>
              </div>
              <div>
                <p class="font-light text-red-700 text-sm">-0.71%</p>
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
            <div class="mt-5 ml-3 mr-3 flex items-center justify-between">
              <div class="flex items-center flex-row">
                <img class="w-8 h-8" src="xrp.png" alt srcset />
                <span class="ml-2 text-sm font-bold">XRP</span>
              </div>
              <div>
                <p class="font-light text-sm">24 h</p>
              </div>
            </div>
            <div class="ml-3 mr-3 flex items-center justify-between">
              <div class="mt-3 flex items-center flex-row">
                <span class="text-lg font-bold">MYR 33,089.70</span>
              </div>
              <div>
                <p class="font-light text-red-700 text-sm">-0.71%</p>
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
            <div class="mt-5 ml-3 mr-3 flex items-center justify-between">
              <div class="flex items-center flex-row">
                <img class="w-8 h-8" src="lite.png" alt srcset />
                <span class="ml-2 text-sm font-bold">Litecoin</span>
              </div>
              <div>
                <p class="font-light text-sm">24 h</p>
              </div>
            </div>
            <div class="ml-3 mr-3 flex items-center justify-between">
              <div class="mt-3 flex items-center flex-row">
                <span class="text-lg font-bold">MYR 33,089.70</span>
              </div>
              <div>
                <p class="font-light text-red-700 text-sm">-0.71%</p>
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
            <div class="mt-5 ml-3 mr-3 flex items-center justify-between">
              <div class="flex items-center flex-row">
                <img class="w-8 h-8" src="bitcoincash.png" alt srcset />
                <span class="ml-2 text-sm font-bold">Bitcoin Cash</span>
              </div>
              <div>
                <p class="font-light text-sm">24 h</p>
              </div>
            </div>
            <div class="ml-3 mr-3 flex items-center justify-between">
              <div class="mt-3 flex items-center flex-row">
                <span class="text-lg font-bold">MYR 33,089.70</span>
              </div>
              <div>
                <p class="font-light text-red-700 text-sm">-0.71%</p>
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
            <div class="mt-5 ml-3 mr-3 flex items-center justify-between">
              <div class="flex items-center flex-row">
                <img class="w-8 h-8" src="last.png" alt srcset />
                <span class="ml-2 text-sm font-bold">Stellar Lumens</span>
              </div>
              <div>
                <p class="font-light text-sm">24 h</p>
              </div>
            </div>
            <div class="ml-3 mr-3 flex items-center justify-between">
              <div class="mt-3 flex items-center flex-row">
                <span class="text-lg font-bold">MYR 33,089.70</span>
              </div>
              <div>
                <p class="font-light text-red-700 text-sm">-0.71%</p>
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

      <div class="py-3 items-center border-t border-gray-200 w-full">
        <span
          class="flex flex-row items-center justify-center hover:text-logo-coinbase cursor-pointer text-gray-500"
        >
          <p class="text-base font-base text-center">Discover more assets</p>
          <p class="ml-1 text-sm font-semibold text-center">></p>
        </span>
      </div>
    </div>

    <div
      class="mt-10 ml-28 mr-28 mb-4 h-48 border rounded border-gray-200 items-center bg-no-repeat bg-contain bg-right"
      style="background-image: url('https://static-assets.coinbase.com/earn/earn_dash_banner.png')"
    >
      <div class="ml-6 mt-5">
        <p class="text-2xl justify-start font-base">
          Earn free crypto with Coinbase Earn
        </p>
        <p class="mt-1 text-base font-light text-gray-500 text-xl">
          Learn about different cryptocurrencies and earn them for free!
        </p>
        <button
          class="mt-3 border border-gray-200 bg-logo-coinbase flex items-center text-white text-sm font-base px-4 py-3 rounded"
        >
          Earn Crypto
        </button>
      </div>
    </div>

    <div class="flex mt-10 mb-10 flex-row justify-between">
      <div
        class="ml-28 mr-2 w-2/5 border flex flex-col rounded border-gray-200 items-center self-center"
      >
        <div
          class="items-center justify-between border-b border-gray-200 w-full flex flex-row"
        >
          <p class="ml-3 text-lg text-gray-800 font-semibold text-left">
            Recent Activity
          </p>
          <div class="flex items-center mr-6">
            <nuxt-link
              to="#"
              class="text-gray-500 text-sm border-b-2 py-3 border-transparent hover:text-logo-coinbase"
              >List</nuxt-link
            >
            <nuxt-link
              to="#"
              class="text-black text-sm ml-2 border-b-2 py-3 border-logo-coinbase hover:text-logo-coinbase"
              >Chart</nuxt-link
            >
          </div>
        </div>

        <div class="mb-10 mt-5 flex">
          <div
            class="rounded-full h-70 w-70 border-2 border-gray-400 flex justify-center items-center"
          >
            <div class="flex flex-col justify-center items-center">
              <span class="font-normal text-4xl">
                MYR
                <span class="text-5xl">0</span>.00
              </span>
              <p
                class="text-sm text-gray-500 uppercase font-semibold text-left"
              >
                Total balanace
              </p>
            </div>
          </div>
        </div>

        <div class="py-3 items-center border-t border-gray-200 w-full">
          <span
            class="flex flex-row items-center justify-center hover:text-logo-coinbase cursor-pointer text-gray-500"
          >
            <p class="text-base font-base text-center">Discover more assets</p>
            <p class="ml-1 text-sm font-semibold text-center">></p>
          </span>
        </div>
      </div>

      <div
        class="mr-28 ml-2 w-2/5 border rounded border-gray-200 items-center self-center"
      >
        <div
          class="items-center justify-between border-b border-gray-200 w-full flex flex-row"
        >
          <p class="ml-3 text-lg text-gray-800 font-semibold text-left">
            Recent Activity
          </p>
          <div class="flex items-center mr-6">
            <nuxt-link
              to="#"
              class="text-gray-500 text-sm border-b-2 py-3 border-transparent hover:text-logo-coinbase"
              >List</nuxt-link
            >
            <nuxt-link
              to="#"
              class="text-black text-sm ml-2 border-b-2 py-3 border-logo-coinbase hover:text-logo-coinbase"
              >Chart</nuxt-link
            >
          </div>
        </div>

        <div class="mb-10 mt-5 flex flex-col items-center">
          <div class="mt-5">
            <img
              class="bg-cover"
              src="https://assets.coinbase.com/assets/tothemoon.38116c02bbf54193c8f8ce085bf939e2.png"
              alt
              srcset
            />
          </div>
          <p class="mt-4 text-2xl justify-start font-base">
            No transactions yet
          </p>
          <p class="mt-1 w-8/12 text-base text-center font-light text-gray-500">
            There are lots of different ways to participate in the
            cryptocurrency ecosystem.
          </p>
        </div>

        <div class="py-3 items-center border-t border-gray-200 w-full">
          <span
            class="flex flex-row items-center justify-center hover:text-logo-coinbase cursor-pointer text-gray-500"
          >
            <p class="text-base font-base text-center">Discover more assets</p>
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
