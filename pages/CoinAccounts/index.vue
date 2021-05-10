<template>
  <div class="mt-4 mb-4">
    <div
      class="flex flex-col justify-between py-2 mt-4 border border-gray-300 rounded h-100 ml-28 mr-28"
    >
      <div class="m-5">
        <label class="text-base text-gray-600 font-base">
          <span>Portfolio balance</span>
        </label>
        <h1 class="text-4xl font-base text-l">
          <span>MYR&nbsp;0.00</span>
        </h1>
      </div>

      <svg class="w-full" viewBox="0 0 800 245" fill="none" preserveAspectRatio="none">
        <path
          opacity=".5"
          d="M274.598 135.58C166.063 135.58 167.611 75.897 0 75.897V245h799V98.132S751.141 1 599.5 1 383.133 135.58 274.598 135.58z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M0 75.897c167.611 0 166.063 59.683 274.598 59.683C383.133 135.58 447.859 1 599.5 1S799 98.132 799 98.132"
          stroke="#F1F3F5"
          stroke-width="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="392.991"
            y1="1"
            x2="392.991"
            y2="245"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F1F3F5" />
            <stop offset="1" stop-color="#F1F3F5" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="flex flex-row py-2 mt-4 border border-gray-300 rounded h-100 ml-28 mr-28">
      <div class="flex flex-none h-12 h-full border-r border-gray-300">
        <div class="overflow-y-auto">
          <div class="border-l border-blue-700 h-28">
            <div class="pl-3 pr-3">
              <div class="flex flex-row items-center pt-2 ml-2">
                <img class="w-8 h-8" src="bitcoin.png" alt srcset />
                <div class="flex flex-col ml-2">
                  <span class="ml-2 text-base">BTC Wallet</span>
                  <span class="ml-2 text-sm font-light"
                    >0.0000 BTC ≈<span class="text-gray-400 "> MYR 0.00</span>
                  </span>
                </div>
              </div>
              <div class="flex items-center mt-3 ml-10 ">
                <button
                  class="flex items-center px-3 py-2 ml-1 text-sm text-black border border-gray-300 rounded opacity-50 cursor-not-allowed font-base"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    version="1.1"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path d="M2.01,21l20.99,-9l-20.99,-9l-0.01,7l15,2l-15,2Z"></path>
                    <path fill="none" d="M0,0h24v24h-24Z"></path>
                  </svg>
                  Send
                </button>
                <button
                  class="flex items-center px-3 py-2 ml-1 text-sm text-black border border-gray-300 rounded opacity-50 cursor-not-allowed font-base"
                >
                  <svg
                    class="mr-1"
                    height="14"
                    viewBox="0 0 14 14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.417 6.417H0V0h6.417zM1.167 5.25H5.25V1.167H1.167zM14 6.417H7.583V0H14zM8.75 5.25h4.083V1.167H8.75zM6.417 14H0V7.583h6.417zm-5.25-1.167H5.25V8.75H1.167zM14 11.667h-1.167V8.75h-1.166v1.75h-3.5V7.583h1.166v1.75H10.5v-1.75H14zM14 14H8.167v-2.333h1.166v1.166H14z"
                    ></path>
                    <path
                      d="M2.333 2.333h1.75v1.75h-1.75zM9.917 2.333h1.75v1.75h-1.75zM2.333 9.917h1.75v1.75h-1.75z"
                    ></path>
                  </svg>
                  Recieve
                </button>
                <button
                  class="px-3 py-2 ml-1 text-black border border-gray-300 rounded opacity-50 cursor-not-allowed font-base"
                >
                  ...
                </button>
              </div>
            </div>
          </div>

          <div class="bg-gray-100 h-28">
            <div class="pl-3 pr-3">
              <div class="flex flex-row items-center pt-2 ml-2">
                <img class="w-8 h-8" src="bitcoin.png" alt srcset />
                <div class="flex flex-col ml-2">
                  <span class="ml-2 text-base">BTC Wallet</span>
                  <span class="ml-2 text-sm font-light"
                    >0.0000 BTC ≈<span class="text-gray-400 "> MYR 0.00</span>
                  </span>
                </div>
              </div>
              <div class="flex items-center mt-3 ml-10 ">
                <button
                  class="flex items-center px-3 py-2 ml-1 text-sm text-black border border-gray-300 rounded opacity-50 cursor-not-allowed font-base"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    version="1.1"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path d="M2.01,21l20.99,-9l-20.99,-9l-0.01,7l15,2l-15,2Z"></path>
                    <path fill="none" d="M0,0h24v24h-24Z"></path>
                  </svg>
                  Send
                </button>
                <button
                  class="flex items-center px-3 py-2 ml-1 text-sm text-black border border-gray-300 rounded opacity-50 cursor-not-allowed font-base"
                >
                  <svg
                    class="mr-1"
                    height="14"
                    viewBox="0 0 14 14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.417 6.417H0V0h6.417zM1.167 5.25H5.25V1.167H1.167zM14 6.417H7.583V0H14zM8.75 5.25h4.083V1.167H8.75zM6.417 14H0V7.583h6.417zm-5.25-1.167H5.25V8.75H1.167zM14 11.667h-1.167V8.75h-1.166v1.75h-3.5V7.583h1.166v1.75H10.5v-1.75H14zM14 14H8.167v-2.333h1.166v1.166H14z"
                    ></path>
                    <path
                      d="M2.333 2.333h1.75v1.75h-1.75zM9.917 2.333h1.75v1.75h-1.75zM2.333 9.917h1.75v1.75h-1.75z"
                    ></path>
                  </svg>
                  Recieve
                </button>
                <button
                  class="px-3 py-2 ml-1 text-black border border-gray-300 rounded opacity-50 cursor-not-allowed font-base"
                >
                  ...
                </button>
              </div>
            </div>
          </div>

          <div class="bg-gray-100 h-28">
            <div class="pl-3 pr-3">
              <div class="flex flex-row items-center pt-2 ml-2">
                <img class="w-8 h-8" src="bitcoin.png" alt srcset />
                <div class="flex flex-col ml-2">
                  <span class="ml-2 text-base">BTC Wallet</span>
                  <span class="ml-2 text-sm font-light"
                    >0.0000 BTC ≈<span class="text-gray-400 "> MYR 0.00</span>
                  </span>
                </div>
              </div>
              <div class="flex items-center mt-3 ml-10 ">
                <button
                  class="flex items-center px-3 py-2 ml-1 text-sm text-black border border-gray-300 rounded opacity-50 cursor-not-allowed font-base"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    version="1.1"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path d="M2.01,21l20.99,-9l-20.99,-9l-0.01,7l15,2l-15,2Z"></path>
                    <path fill="none" d="M0,0h24v24h-24Z"></path>
                  </svg>
                  Send
                </button>
                <button
                  class="flex items-center px-3 py-2 ml-1 text-sm text-black border border-gray-300 rounded opacity-50 cursor-not-allowed font-base"
                >
                  <svg
                    class="mr-1"
                    height="14"
                    viewBox="0 0 14 14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.417 6.417H0V0h6.417zM1.167 5.25H5.25V1.167H1.167zM14 6.417H7.583V0H14zM8.75 5.25h4.083V1.167H8.75zM6.417 14H0V7.583h6.417zm-5.25-1.167H5.25V8.75H1.167zM14 11.667h-1.167V8.75h-1.166v1.75h-3.5V7.583h1.166v1.75H10.5v-1.75H14zM14 14H8.167v-2.333h1.166v1.166H14z"
                    ></path>
                    <path
                      d="M2.333 2.333h1.75v1.75h-1.75zM9.917 2.333h1.75v1.75h-1.75zM2.333 9.917h1.75v1.75h-1.75z"
                    ></path>
                  </svg>
                  Recieve
                </button>
                <button
                  class="px-3 py-2 ml-1 text-black border border-gray-300 rounded opacity-50 cursor-not-allowed font-base"
                >
                  ...
                </button>
              </div>
            </div>
          </div>

          <div class="bg-gray-100 h-28">
            <div class="pl-3 pr-3">
              <div class="flex flex-row items-center pt-2 ml-2">
                <img class="w-8 h-8" src="bitcoin.png" alt srcset />
                <div class="flex flex-col ml-2">
                  <span class="ml-2 text-base">BTC Wallet</span>
                  <span class="ml-2 text-sm font-light"
                    >0.0000 BTC ≈<span class="text-gray-400 "> MYR 0.00</span>
                  </span>
                </div>
              </div>
              <div class="flex items-center mt-3 ml-10 ">
                <button
                  class="flex items-center px-3 py-2 ml-1 text-sm text-black border border-gray-300 rounded opacity-50 cursor-not-allowed font-base"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    version="1.1"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path d="M2.01,21l20.99,-9l-20.99,-9l-0.01,7l15,2l-15,2Z"></path>
                    <path fill="none" d="M0,0h24v24h-24Z"></path>
                  </svg>
                  Send
                </button>
                <button
                  class="flex items-center px-3 py-2 ml-1 text-sm text-black border border-gray-300 rounded opacity-50 cursor-not-allowed font-base"
                >
                  <svg
                    class="mr-1"
                    height="14"
                    viewBox="0 0 14 14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.417 6.417H0V0h6.417zM1.167 5.25H5.25V1.167H1.167zM14 6.417H7.583V0H14zM8.75 5.25h4.083V1.167H8.75zM6.417 14H0V7.583h6.417zm-5.25-1.167H5.25V8.75H1.167zM14 11.667h-1.167V8.75h-1.166v1.75h-3.5V7.583h1.166v1.75H10.5v-1.75H14zM14 14H8.167v-2.333h1.166v1.166H14z"
                    ></path>
                    <path
                      d="M2.333 2.333h1.75v1.75h-1.75zM9.917 2.333h1.75v1.75h-1.75zM2.333 9.917h1.75v1.75h-1.75z"
                    ></path>
                  </svg>
                  Recieve
                </button>
                <button
                  class="px-3 py-2 ml-1 text-black border border-gray-300 rounded opacity-50 cursor-not-allowed font-base"
                >
                  ...
                </button>
              </div>
            </div>
          </div>

          <div class="bg-gray-100 h-28">
            <div class="pl-3 pr-3">
              <div class="flex flex-row items-center pt-2 ml-2">
                <img class="w-8 h-8" src="bitcoin.png" alt srcset />
                <div class="flex flex-col ml-2">
                  <span class="ml-2 text-base">BTC Wallet</span>
                  <span class="ml-2 text-sm font-light"
                    >0.0000 BTC ≈<span class="text-gray-400 "> MYR 0.00</span>
                  </span>
                </div>
              </div>
              <div class="flex items-center mt-3 ml-10 ">
                <button
                  class="flex items-center px-3 py-2 ml-1 text-sm text-black border border-gray-300 rounded opacity-50 cursor-not-allowed font-base"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    version="1.1"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path d="M2.01,21l20.99,-9l-20.99,-9l-0.01,7l15,2l-15,2Z"></path>
                    <path fill="none" d="M0,0h24v24h-24Z"></path>
                  </svg>
                  Send
                </button>
                <button
                  class="flex items-center px-3 py-2 ml-1 text-sm text-black border border-gray-300 rounded opacity-50 cursor-not-allowed font-base"
                >
                  <svg
                    class="mr-1"
                    height="14"
                    viewBox="0 0 14 14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.417 6.417H0V0h6.417zM1.167 5.25H5.25V1.167H1.167zM14 6.417H7.583V0H14zM8.75 5.25h4.083V1.167H8.75zM6.417 14H0V7.583h6.417zm-5.25-1.167H5.25V8.75H1.167zM14 11.667h-1.167V8.75h-1.166v1.75h-3.5V7.583h1.166v1.75H10.5v-1.75H14zM14 14H8.167v-2.333h1.166v1.166H14z"
                    ></path>
                    <path
                      d="M2.333 2.333h1.75v1.75h-1.75zM9.917 2.333h1.75v1.75h-1.75zM2.333 9.917h1.75v1.75h-1.75z"
                    ></path>
                  </svg>
                  Recieve
                </button>
                <button
                  class="px-3 py-2 ml-1 text-black border border-gray-300 rounded opacity-50 cursor-not-allowed font-base"
                >
                  ...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col items-center inline-block w-4/6 h-12 h-full text-center align-middle"
      >
        <img class="mt-20 bg-cover opacity-25" src="/bitcoinbig.png" alt srcset />
        <h1 class="text-2xl font-light font-base text-l">
          <span>No transactions</span>
        </h1>
        <p class="mt-2 text-sm font-light">
          Looks like there isn't any BTC in your
          <br />account yet. Coinbase is the easiest <br />place to get started.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'coinbase',
};
</script>
