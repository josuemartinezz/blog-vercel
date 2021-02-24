<template>
  <div class="grid grid-cols-1 lg:grid-cols-5">
    <div class="col-span-3 p-5" style="height: 450px">
      <AppImage
        src="https://images.unsplash.com/photo-1511553677255-ba939e5537e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=541&q=80"
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
          Lorem ipsum dolor sit, amet consectetur.
        </h2>
        <p class="text-lg mt-5 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          amet ad ab quisquam, ipsum dolore porro nemo quaerat, distinctio, modi
          corporis libero laudantium repellendus quam iure? Ipsam fuga iusto
          repudiandae?
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
