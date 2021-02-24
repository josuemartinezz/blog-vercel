<template>
  <div
    class="rounded-lg overflow-hidden w-full h-full cursor-pointer group relative"
  >
    <div
      class="w-full h-full bg-white opacity-0 absolute hover:opacity-25 transition duration-300"
    ></div>
    <img class="w-full h-full object-cover" :src="src" :alt="alt" />
  </div>
</template>
<script>
export default {
  name: 'AppImage',
  props: {
    src: { type: String, default: null },
    alt: { type: String, default: null }
  }
};
</script>
