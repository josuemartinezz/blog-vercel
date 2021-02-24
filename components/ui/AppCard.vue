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
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </h2>
      <p class="text-lg mt-5 text-gray-700">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quam rem
        sunt quibusdam explicabo. Ducimus et autem quas fugiat harum quos
        explicabo nulla ullam nostrum! Consequuntur nesciunt quia magni dolorem.
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
