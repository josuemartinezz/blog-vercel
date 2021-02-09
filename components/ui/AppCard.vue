<template>
  <section class="p-5 w-full">
    <AppImage style="height: 320px !important" :src="src" />
    <div class="font-semibold text-gray-800 flex items-center mt-6">
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
  </section>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    src: { type: String, default: null },
    alt: { type: String, default: null }
  }
};
</script>
