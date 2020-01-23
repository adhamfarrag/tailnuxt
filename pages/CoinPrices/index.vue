<template>
  <div>
    <div class="flex flex-row items-center justify-between px-3 py-2 mt-4 border border-gray-300 rounded ml-28 mr-28">
      <div class="flex flex-row items-center">
        <svg
          fill="currentColor"
          class="w-5 h-5 text-gray-600"
          version="1.1"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M269.46,1163.45c-6.29,0 -11.389,-5.01 -11.389,-11.2c0,-6.19 5.099,-11.21 11.389,-11.21c6.29,0 11.39,5.02 11.39,11.21c0,6.19 -5.1,11.2 -11.39,11.2v0Zm18.228,5.8l-8.259,-8.13c2.162,-2.35 3.491,-5.45 3.491,-8.87c0,-7.32 -6.026,-13.25 -13.46,-13.25c-7.434,0 -13.46,5.93 -13.46,13.25c0,7.31 6.026,13.24 13.46,13.24c3.212,0 6.158,-1.11 8.472,-2.96l8.292,8.16c0.405,0.4 1.06,0.4 1.464,0c0.405,-0.39 0.405,-1.04 0,-1.44v0Z"
            transform="matrix(1,0,0,1,-256,-1139)"
            fill-rule="evenodd"
          />
        </svg>
        <input
          class="block w-full px-4 py-2 leading-normal bg-white appearance-none"
          type="email"
          placeholder="Search all assets..."
        />
      </div>

      <div class="flex flex-row items-center">
        <p class="ml-2 text-xs font-semibold text-gray-400">1H</p>
        <p class="ml-2 text-xs font-semibold text-gray-400">24H</p>
        <p class="ml-2 text-xs font-semibold text-gray-400">1W</p>
        <p class="ml-2 text-xs font-semibold text-gray-400">1M</p>
        <p class="ml-2 text-xs font-semibold text-gray-400">1Y</p>
      </div>
    </div>

    <div class="items-center px-3 py-2 mt-4 border border-gray-300 rounded ml-28 mr-28">
      <div class="flex flex-row items-center mt-4">
        <p class="ml-2 text-lg text-center text-gray-800">Available on Coinbase</p>
      </div>

      <table class="items-center justify-center w-full mt-5 mb-5 table-auto">
        <tbody>
          <tr class="px-2 py-2 border-t border-gray-300 ">
            <td class="p-3">1</td>
            <td class="p-3">
              <img class="w-8 h-8" src="/bitcoin.png" alt srcset />
            </td>
            <td class="p-3 font-light">MYR 33,226.28</td>
            <td class="p-3 font-light">1.26%</td>
            <td class="p-3 font-light">MYR 597.7B</td>
            <td class="p-3"></td>
            <td class="p-3"><svg filled="1" class="WatchStar__StarIcon-bysljc-3 fowNbh" fill="none" height="23" viewBox="0 0 24 23" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 0 1 .44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 0 1-1.152.837L12 18.787l-5.938 3.121a.795.795 0 0 1-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 0 1 .44-1.354l6.638-.965 2.968-6.015a.795.795 0 0 1 1.425 0z" stroke="#becada"></path></svg></td>
          </tr>

          <tr class="px-2 py-2 border-t border-gray-300 ">

            <td class="p-3">1</td>

            <td class="p-3">
              <img class="w-8 h-8" src="/bitcoincash.png" alt srcset />
            </td>

            <td class="p-3 font-light">MYR 33,226.28</td>
            <td class="p-3 font-light">1.26%</td>
            <td class="p-3 font-light">MYR 597.7B</td>
            <td class="p-3"></td>
            <td class="p-3"><svg filled="1" class="WatchStar__StarIcon-bysljc-3 fowNbh" fill="none" height="23" viewBox="0 0 24 23" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 0 1 .44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 0 1-1.152.837L12 18.787l-5.938 3.121a.795.795 0 0 1-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 0 1 .44-1.354l6.638-.965 2.968-6.015a.795.795 0 0 1 1.425 0z" stroke="#becada"></path></svg></td>

          </tr>

          <tr class="px-2 py-2 border-t border-gray-300 ">

            <td class="p-3">1</td>

            <td class="p-3">
              <img class="w-8 h-8" src="/etheruem.png" alt srcset />
            </td>

            <td class="p-3 font-light">MYR 33,226.28</td>
            <td class="p-3 font-light">1.26%</td>
            <td class="p-3 font-light">MYR 597.7B</td>
            <td class="p-3"></td>
            <td class="p-3"><svg filled="1" class="WatchStar__StarIcon-bysljc-3 fowNbh" fill="none" height="23" viewBox="0 0 24 23" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 0 1 .44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 0 1-1.152.837L12 18.787l-5.938 3.121a.795.795 0 0 1-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 0 1 .44-1.354l6.638-.965 2.968-6.015a.795.795 0 0 1 1.425 0z" stroke="#becada"></path></svg></td>

          </tr>

          <tr class="px-2 py-2 border-t border-gray-300 ">

            <td class="p-3">1</td>

            <td class="p-3">
              <img class="w-8 h-8" src="/xrp.png" alt srcset />
            </td>

            <td class="p-3 font-light">MYR 33,226.28</td>
            <td class="p-3 font-light">1.26%</td>
            <td class="p-3 font-light">MYR 597.7B</td>
            <td class="p-3"></td>
            <td class="p-3"><svg filled="1" class="WatchStar__StarIcon-bysljc-3 fowNbh" fill="none" height="23" viewBox="0 0 24 23" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 0 1 .44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 0 1-1.152.837L12 18.787l-5.938 3.121a.795.795 0 0 1-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 0 1 .44-1.354l6.638-.965 2.968-6.015a.795.795 0 0 1 1.425 0z" stroke="#becada"></path></svg></td>

          </tr>

          <tr class="px-2 py-2 border-t border-gray-300 ">

            <td class="p-3">1</td>

            <td class="p-3">
              <img class="w-8 h-8" src="/xrp.png" alt srcset />
            </td>

            <td class="p-3 font-light">MYR 33,226.28</td>
            <td class="p-3 font-light">1.26%</td>
            <td class="p-3 font-light">MYR 597.7B</td>
            <td class="p-3"></td>
            <td class="p-3"><svg filled="1" class="WatchStar__StarIcon-bysljc-3 fowNbh" fill="none" height="23" viewBox="0 0 24 23" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 0 1 .44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 0 1-1.152.837L12 18.787l-5.938 3.121a.795.795 0 0 1-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 0 1 .44-1.354l6.638-.965 2.968-6.015a.795.795 0 0 1 1.425 0z" stroke="#becada"></path></svg></td>

          </tr>

          <tr class="px-2 py-2 border-t border-gray-300 ">

            <td class="p-3">1</td>

            <td class="p-3">
              <img class="w-8 h-8" src="/last.png" alt srcset />
            </td>

            <td class="p-3 font-light">MYR 33,226.28</td>
            <td class="p-3 font-light">1.26%</td>
            <td class="p-3 font-light">MYR 597.7B</td>
            <td class="p-3"></td>
            <td class="p-3"><svg filled="1" class="WatchStar__StarIcon-bysljc-3 fowNbh" fill="none" height="23" viewBox="0 0 24 23" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 0 1 .44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 0 1-1.152.837L12 18.787l-5.938 3.121a.795.795 0 0 1-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 0 1 .44-1.354l6.638-.965 2.968-6.015a.795.795 0 0 1 1.425 0z" stroke="#becada"></path></svg></td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  layout: "coinbase"
};
</script>