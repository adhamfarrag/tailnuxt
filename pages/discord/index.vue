<template>
  <div class="flex">
    <div class="flex flex-col flex-none w-20 h-screen min-h-screen px-2 py-2 bg-gray-900">
      <div class="overflow-y-auto channel-bar">
        <ul class="text-center">
          <li>
            <a href="#">
              <img
                src="/icon_discord.svg"
                alt="discord"
                class="inline-block w-12 h-12 mx-auto rounded-full hover:hideen"
              />
            </a>
          </li>

          <li class="mx-4 mt-3 border-b border-gray-700"></li>
          <li class="mt-3">
            <a href="#">
              <img src="/icon_laravel.svg" alt="laravel" class="w-12 h-12 mx-auto rounded-full" />
            </a>
          </li>
          <li class="mt-3">
            <a href="#">
              <img src="/icon_tailwind.svg" alt="tailwind" class="w-12 h-12 mx-auto rounded-full" />
            </a>
          </li>
          <li class="mt-3">
            <a href="#">
              <img src="/icon_vue.svg" alt="vue" class="w-12 h-12 mx-auto rounded-full" />
            </a>
          </li>
          <li class="mt-3">
            <a
              href="#"
              class="inline-block w-12 h-12 text-teal-500 bg-gray-800 rounded-full hover:bg-teal-500 hover:text-white"
            >
              <svg
                fill="currentColor"
                class="mx-auto mt-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </a>
          </li>
          <li class="mt-2">
            <a
              href="#"
              class="inline-block w-12 h-12 text-teal-500 bg-gray-800 rounded-full hover:bg-teal-500 hover:text-white"
            >
              <svg
                fill="currentColor"
                class="mx-auto mt-3"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  class="heroicon-ui"
                  d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                />
              </svg>
            </a>
          </li>
          <li class="mx-4 mt-3 border-b border-gray-700"></li>
          <li class="mt-3">
            <a
              href="#"
              class="inline-block w-12 h-12 text-teal-500 bg-gray-800 rounded-full hover:bg-teal-500 hover:text-white"
            >
              <svg
                fill="currentColor"
                class="mx-auto mt-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  class="heroicon-ui"
                  d="M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col h-screen min-h-screen">
      <div class="flex">
        <div
          class="flex items-center justify-between flex-none w-56 px-3 py-2 text-white bg-gray-800 border-b border-gray-900"
        >
          <div>Tailwind CSS</div>
          <button>
            <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path
                class="heroicon-ui"
                d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex items-center justify-between flex-1 px-4 border-b border-gray-900 bg-gray-750"
        >
          <div class="flex items-center">
            <div class="text-2xl text-gray-500">#</div>
            <div class="ml-2 text-sm text-white">general</div>
            <div class="pl-3 ml-3 text-xs text-gray-400 border-l border-gray-600">
              general discussion of Tailwind CSS
            </div>
          </div>
          <div class="flex items-center">
            <a href="#" class="ml-4">
              <svg
                class="w-6 h-6 text-gray-500 hover:text-gray-200"
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                />
              </svg>
            </a>
            <a href="#" class="ml-4">
              <svg
                class="w-6 h-6 text-gray-500 hover:text-gray-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  class="secondary"
                  d="M2.24 20.35l6.5-7.5a1 1 0 0 1 1.47-.06l1 1a1 1 0 0 1-.06 1.47l-7.5 6.5c-.93.8-2.22-.48-1.4-1.41z"
                />
                <path
                  class="primary"
                  d="M15 15.41V18a1 1 0 0 1-.3.7l-1 1a1 1 0 0 1-1.4 0l-8-8a1 1 0 0 1 0-1.4l1-1A1 1 0 0 1 6 9h2.59L13 4.59V3a1 1 0 0 1 1.7-.7l7 7A1 1 0 0 1 21 11h-1.59L15 15.41z"
                />
              </svg>
            </a>
            <a href="#" class="ml-4">
              <svg
                class="w-6 h-6 text-gray-500 hover:text-gray-200"
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                />
              </svg>
            </a>
            <a href="#" class="ml-4">
              <form action="#" class="relative">
                <input
                  type="text"
                  placeholder="Search"
                  class="px-2 py-1 text-xs text-gray-200 bg-gray-900 rounded"
                />
                <span class="absolute top-0 right-0 mr-1" style="top:6px">
                  <svg
                    class="w-4 h-4 text-gray-500 hover:text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      class="heroicon-ui"
                      d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    />
                  </svg>
                </span>
              </form>
            </a>
            <a href="#" class="ml-4">
              <svg
                class="w-6 h-6 text-gray-500 hover:text-gray-200"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  class="heroicon-ui"
                  d="M15.6 15.47A4.99 4.99 0 0 1 7 12a5 5 0 0 1 10 0v1.5a1.5 1.5 0 1 0 3 0V12a8 8 0 1 0-4.94 7.4 1 1 0 1 1 .77 1.84A10 10 0 1 1 22 12v1.5a3.5 3.5 0 0 1-6.4 1.97zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>
            </a>
            <a href="#" class="ml-4">
              <svg
                class="w-6 h-6 text-gray-500 hover:text-gray-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <g data-name="Layer 2">
                  <g data-name="menu-arrow-circle">
                    <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
                    <path
                      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5.16V14a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.5-1.5 1 1 0 0 1-2 0 3.5 3.5 0 1 1 4.5 3.34z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-1 overflow-y-hidden bg-blue-500">
        <div class="flex flex-col justify-between flex-none w-56 overflow-y-auto bg-gray-800">
          <div class="overflow-y-auto text-sm leading-relaxed hashtag-bar">
            <ul class="px-2 py-3">
              <li class="px-2 text-gray-500 hover:text-gray-200 hover:bg-gray-900">
                <a href="#" class="flex items-center">
                  <span class="text-xl">#</span>
                  <span class="ml-2">welcome</span>
                </a>
              </li>
              <li class="px-2 text-gray-500 hover:text-gray-200 hover:bg-gray-900">
                <a href="#" class="flex items-center">
                  <span class="text-xl">#</span>
                  <span class="ml-2">faq</span>
                </a>
              </li>
            </ul>

            <button class="flex items-center text-gray-500 hover:text-gray-200">
              <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path
                  class="heroicon-ui"
                  d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                ></path>
              </svg>
              <h3 class="text-xs font-semibold tracking-wide uppercase">
                Tailwind CSS
              </h3>
            </button>

            <ul class="px-2 py-3 pt-2">
              <li
                class="px-2 text-gray-200 rounded hover:text-gray-200 hover:bg-gray-900 bg-gray-750"
              >
                <a href="#" class="flex items-center">
                  <span class="text-xl">#</span>
                  <span class="ml-2">general</span>
                </a>
              </li>
              <li class="px-2 text-gray-200 hover:text-gray-200 hover:bg-gray-900">
                <a href="#" class="flex items-center">
                  <span class="text-xl">#</span>
                  <span class="ml-2">core-dev</span>
                </a>
              </li>
              <li class="px-2 text-gray-500 hover:text-gray-200 hover:bg-gray-900">
                <a href="#" class="flex items-center">
                  <span class="text-xl">#</span>
                  <span class="ml-2">course</span>
                </a>
              </li>
              <li class="px-2 text-gray-500 hover:text-gray-200 hover:bg-gray-900">
                <a href="#" class="flex items-center">
                  <span class="text-xl">#</span>
                  <span class="ml-2">plugins</span>
                </a>
              </li>
              <li class="px-2 text-gray-200 hover:text-gray-200 hover:bg-gray-900">
                <a href="#" class="flex items-center">
                  <span class="text-xl">#</span>
                  <span class="ml-2">docs</span>
                </a>
              </li>
              <li class="px-2 text-gray-500 hover:text-gray-200 hover:bg-gray-900">
                <a href="#" class="flex items-center">
                  <span class="text-xl">#</span>
                  <span class="ml-2">showcase</span>
                </a>
              </li>
              <li class="px-2 text-gray-200 hover:text-gray-200 hover:bg-gray-900">
                <a href="#" class="flex items-center">
                  <span class="text-xl">#</span>
                  <span class="ml-2">help</span>
                </a>
              </li>
            </ul>

            <button class="flex items-center text-gray-500 hover:text-gray-200">
              <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path
                  class="heroicon-ui"
                  d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                ></path>
              </svg>
              <h3 class="text-xs font-semibold tracking-wide uppercase">
                Community
              </h3>
            </button>

            <ul class="px-2 py-3 pt-2">
              <li class="px-2 text-gray-500 hover:text-gray-200 hover:bg-gray-900">
                <a href="#" class="flex items-center">
                  <span class="text-xl">#</span>
                  <span class="ml-2">feedback</span>
                </a>
              </li>
              <li class="px-2 text-gray-500 hover:text-gray-200 hover:bg-gray-900">
                <a href="#" class="flex items-center">
                  <span class="text-xl">#</span>
                  <span class="ml-2">jobs</span>
                </a>
              </li>
            </ul>

            <button class="flex items-center text-gray-500 hover:text-gray-200">
              <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path
                  class="heroicon-ui"
                  d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                ></path>
              </svg>
              <h3 class="text-xs font-semibold tracking-wide uppercase">
                Off Topic
              </h3>
            </button>

            <ul class="px-2 py-3 pt-2">
              <li class="px-2 text-gray-500 hover:text-gray-200 hover:bg-gray-900">
                <a href="#" class="flex items-center">
                  <span class="text-xl">#</span>
                  <span class="ml-2">design</span>
                </a>
              </li>
              <li class="px-2 text-gray-500 hover:text-gray-200 hover:bg-gray-900">
                <a href="#" class="flex items-center">
                  <span class="text-xl">#</span>
                  <span class="ml-2">development</span>
                </a>
              </li>
              <li class="px-2 text-gray-500 hover:text-gray-200 hover:bg-gray-900">
                <a href="#" class="flex items-center">
                  <span class="text-xl">#</span>
                  <span class="ml-2">random</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="flex items-center justify-between px-3 py-2 bg-gray-900">
            <div class="flex items-center">
              <a href="#"><img src="/avatar.jpg" alt="avatar" class="w-8 h-8 rounded-full"/></a>
              <div class="ml-2 text-xs">
                <div class="text-white">adhamfarrag</div>
                <div class="text-gray-500 text-xxs">#9589</div>
              </div>
            </div>
            <div class="flex items-center text-gray-500">
              <a href="#" class="hover:text-white">
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
                  ></path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
              </a>
              <a href="#" class="ml-3 hover:text-white">
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" opacity=".1" fill="none"></path>
                  <path
                    d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"
                  ></path>
                </svg>
              </a>
              <a href="#" class="ml-3 hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="flex justify-between flex-1 bg-green-500">
          <div class="flex flex-col justify-between flex-1 bg-indigo-300">
            <div class="overflow-y-auto text-sm chat bg-gray-750">
              <div class="flex py-4 mx-6 my-3 border-t border-gray-700">
                <div class="flex-none">
                  <a href="#"
                    ><img src="/avatar.jpg" alt="avatar" class="w-10 h-10 rounded-full"
                  /></a>
                </div>
                <div class="ml-5">
                  <div>
                    <a href="#" class="text-white hover:underline">adhamfarrag</a>
                    <span class="ml-1 text-xs text-gray-600">07/17/2019</span>
                  </div>
                  <div>
                    <div>yeah hahaha</div>
                    <div>some other comment</div>
                    <div>why are you so awesome</div>
                  </div>
                </div>
              </div>
              <div class="flex py-4 mx-6 my-3 border-t border-gray-700">
                <div class="flex-none">
                  <a href="#"
                    ><img src="/avatar.jpg" alt="avatar" class="w-10 h-10 rounded-full"
                  /></a>
                </div>
                <div class="ml-5">
                  <div>
                    <a href="#" class="text-white hover:underline">adhamfarrag</a>
                    <span class="ml-1 text-xs text-gray-600">07/17/2019</span>
                  </div>
                  <div>
                    <div>
                      Here are the
                      <a href="#" class="text-blue-400 hover:underline">Tailwind docs</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex py-4 mx-6 my-3 border-t border-gray-700">
                <div class="flex-none">
                  <a href="#"
                    ><img src="/avatar.jpg" alt="avatar" class="w-10 h-10 rounded-full"
                  /></a>
                </div>
                <div class="ml-5">
                  <div>
                    <a href="#" class="text-white hover:underline">adhamfarrag</a>
                    <span class="ml-1 text-xs text-gray-600">07/17/2019</span>
                  </div>
                  <div>
                    <div>
                      Does that result in the raw svg being inlined in the DOM?
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex py-4 mx-6 my-3 border-t border-gray-700">
                <div class="flex-none">
                  <a href="#"
                    ><img src="/avatar.jpg" alt="avatar" class="w-10 h-10 rounded-full"
                  /></a>
                </div>
                <div class="ml-5">
                  <div>
                    <a href="#" class="text-white hover:underline">adhamfarrag</a>
                    <span class="ml-1 text-xs text-gray-600">07/17/2019</span>
                  </div>
                  <div>
                    <div>
                      This is handy if you don't want to load SVG as a separate file.
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex py-4 mx-6 my-3 border-t border-gray-700">
                <div class="flex-none">
                  <a href="#"
                    ><img src="/avatar.jpg" alt="avatar" class="w-10 h-10 rounded-full"
                  /></a>
                </div>
                <div class="ml-5">
                  <div>
                    <a href="#" class="text-white hover:underline">adhamfarrag</a>
                    <span class="ml-1 text-xs text-gray-600">07/17/2019</span>
                  </div>
                  <div>
                    <div>
                      Exactly the same way as in Vue
                      <a href="#" class="text-indigo-400 hover:underline">@impulse</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex py-4 mx-6 my-3 border-t border-gray-700">
                <div class="flex-none">
                  <a href="#"
                    ><img src="/avatar.jpg" alt="avatar" class="w-10 h-10 rounded-full"
                  /></a>
                </div>
                <div class="ml-5">
                  <div>
                    <a href="#" class="text-white hover:underline">adhamfarrag</a>
                    <span class="ml-1 text-xs text-gray-600">07/17/2019</span>
                  </div>
                  <div>
                    <div>
                      I think it can slow down the page if there's too much bloat in the document.
                    </div>
                    <div>Compared to loading it externally.</div>
                  </div>
                </div>
              </div>
              <div class="flex py-4 mx-6 my-3 border-t border-gray-700">
                <div class="flex-none">
                  <a href="#"
                    ><img src="/avatar.jpg" alt="avatar" class="w-10 h-10 rounded-full"
                  /></a>
                </div>
                <div class="ml-5">
                  <div>
                    <a href="#" class="text-white hover:underline">adhamfarrag</a>
                    <span class="ml-1 text-xs text-gray-600">07/17/2019</span>
                  </div>
                  <div>
                    <div>
                      Comparison would be better if it's not also comparing an vector svg to a
                      raster gif, it's a difference in rendering too.
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex py-4 mx-6 my-3 border-t border-gray-700">
                <div class="flex-none">
                  <a href="#"
                    ><img src="/avatar.jpg" alt="avatar" class="w-10 h-10 rounded-full"
                  /></a>
                </div>
                <div class="ml-5">
                  <div>
                    <a href="#" class="text-white hover:underline">adhamfarrag</a>
                    <span class="ml-1 text-xs text-gray-600">07/17/2019</span>
                  </div>
                  <div>
                    <div>
                      Thank you that works perfectly! Turns out my z-index (or lack of setting one)
                      was also messing things up on the navbar.
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex py-4 mx-6 my-3 border-t border-gray-700">
                <div class="flex-none">
                  <a href="#"
                    ><img src="/avatar.jpg" alt="avatar" class="w-10 h-10 rounded-full"
                  /></a>
                </div>
                <div class="ml-5">
                  <div>
                    <a href="#" class="text-white hover:underline">adhamfarrag</a>
                    <span class="ml-1 text-xs text-gray-600">07/17/2019</span>
                  </div>
                  <div>
                    <div>yeah i never really use z-index</div>
                    <div>for anything heh</div>
                  </div>
                </div>
              </div>
              <div class="flex py-4 mx-6 my-3 border-t border-gray-700">
                <div class="flex-none">
                  <a href="#"
                    ><img src="/avatar.jpg" alt="avatar" class="w-10 h-10 rounded-full"
                  /></a>
                </div>
                <div class="ml-5">
                  <div>
                    <a href="#" class="text-white hover:underline">adhamfarrag</a>
                    <span class="ml-1 text-xs text-gray-600">07/17/2019</span>
                  </div>
                  <div>
                    <div>awesome thats cool to hear!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-none w-56 px-3 py-3 overflow-y-auto text-sm bg-gray-800 sidebar-users">
            <h3 class="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
              Core Team — 1
            </h3>
            <ul class="mb-6 truncate">
              <li class="px-2 py-1 my-2 text-gray-500 hover:text-gray-200 hover:bg-gray-750">
                <a href="#" class="flex items-center">
                  <span class="flex-none"
                    ><a href="#"
                      ><img src="/avatar2.jpg" alt="avatar" class="w-8 h-8 rounded-full"/></a
                  ></span>
                  <span class="ml-2">mmahrous</span>
                </a>
              </li>

              <li class="px-2 py-1 my-2 text-gray-500 hover:text-gray-200 hover:bg-gray-750">
                <a href="#" class="flex items-center">
                  <span class="flex-none"
                    ><a href="#"
                      ><img src="/avatar.jpg" alt="avatar" class="w-8 h-8 rounded-full"/></a
                  ></span>
                  <span class="ml-2">adhamfarrag</span>
                </a>
              </li>
            </ul>
            <h3 class="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
              Online — 20
            </h3>

            <ul class="mb-6 truncate">
              <li class="px-2 py-1 my-2 text-gray-500 hover:text-gray-200 hover:bg-gray-750">
                <a href="#" class="flex items-center">
                  <span class="flex-none"
                    ><a href="#"
                      ><img src="/avatar2.jpg" alt="avatar" class="w-8 h-8 rounded-full"/></a
                  ></span>
                  <div class="ml-2">
                    <div>mmahrous</div>
                    <div class="text-gray-600 text-xxs">
                      Playing <span class="font-bold">Visual Studio Code</span>
                    </div>
                  </div>
                </a>
              </li>

              <li class="px-2 py-1 my-2 text-gray-500 hover:text-gray-200 hover:bg-gray-750">
                <a href="#" class="flex items-center">
                  <span class="flex-none"
                    ><a href="#"
                      ><img src="/avatar2.jpg" alt="avatar" class="w-8 h-8 rounded-full"/></a
                  ></span>
                  <span class="ml-2">mmahrous</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Discord UI Clone',
    };
  },
};
</script>
