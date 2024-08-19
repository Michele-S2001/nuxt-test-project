<script setup lang="ts">

const props = defineProps({
  fontClass: {
    type: String,
    default: 'text-intermediate'
  }
})

</script>

<template>

  <div class="mb-10">
    <span class="block uppercase text-mistGray">
      <slot>Insert text</slot>
    </span>
    <p :class="props.fontClass" >Lorem abcdefghij...</p>
  </div>

</template>