<script lang="ts" setup>
const props = defineProps({
  colorClass: {
    type: String,
    default: 'bg-black'
  }
});
</script>

<template>
  <div :class="['rounded-lg shadow-xl',colorClass]">
    <p class="py-6 px-3 bg-white w-[70%] text-mistGray text-xl text-center uppercase tracking-widest inline-block border border-mistyGray rounded-l-lg leading-10">
      <slot>Insert text</slot>
    </p>
  </div>
</template>