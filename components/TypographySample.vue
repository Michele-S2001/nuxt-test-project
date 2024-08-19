<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  size: {
    type: String as PropType<'s' | 'm' | 'b'>,
    default: 'm'
  }
})

const fontSizeDetails = computed(() => {
  switch(props.size) {
    case 'b':
      return {
        label: 'titan',
        styleClass: 'text-titan'
      }
    case 'm':
      return {
        label: 'intermediate',
        styleClass: 'text-intermediate'
      }
    case 's':
      return {
        label: 'classic',
        styleClass: 'text-classic'
      }
    default:
      return {
        label: 'intermediate',
        styleClass: 'text-intermediate'
      }
  }
})

</script>

<template>

  <div class="mb-10">
    <span class="block uppercase text-mistGray">{{ fontSizeDetails.label }}</span>
    <p :class="fontSizeDetails.styleClass" >Lorem abcdefghij...</p>
  </div>

</template>