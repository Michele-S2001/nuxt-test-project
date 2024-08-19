<script lang="ts" setup>
const props = defineProps({
  colorClass: {
    type: String,
    default: 'bg-black'
  }
});
</script>

<template>
  <p :class="['py-6 px-3 text-white text-classic', props.colorClass]">
    <slot>No valid classes entered</slot>
  </p>
</template>