<template>
  <div class="flex items-center">
    <div class="h-12 w-12 rounded-full overflow-hidden">
      <img class="w-full h-full object-cover" :src="src" :alt="alt" />
    </div>
    <div class="ml-3">
      <p class="font-semibold">Josué Ayala</p>
      <p class="">Frontend developer</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAvatar',
  props: {
    name: { type: String, default: null },
    info: { type: String, default: null },
    src: { type: String, default: null },
    alt: { type: String, default: null }
  }
};
</script>
