<template>
  <div class="grid grid-cols-1 lg:grid-cols-5">
    <div class="col-span-3 p-5" style="height: 450px">
      <AppImage
        src="https://images.unsplash.com/photo-1489110804417-276c3f517515?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />
    </div>
    <div class="col-span-2 p-5">
      <div class="font-semibold text-gray-800 flex items-center">
        Culture
        <div class="h-1 rounded-full mx-2 w-1 bg-gray-800"></div>
        <span class="font-normal">January 28, 2021</span>
      </div>
      <div>
        <h2
          class="text-2xl font-semibold mt-5 cursor-pointer transition duration-300 hover:text-indigo-700"
        >
          Meet the brand new Blogjos
        </h2>
        <p class="text-lg mt-5 text-gray-700">
          It all started with a dream of doing things well. 7 years have passed,
          and Blogjos has grown into a more bold, technical, and mature company.
        </p>
      </div>
      <div class="mt-8">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBanner'
};
</script>
