<script lang="ts" setup>
definePageMeta({
  layout: false,
})

useHead({
  title: 'State Menagement - Nuxt test project'
})
</script>

<template>
  
  <NuxtLayout name="default">
    <section class="py-5">
      <div class="container">
        <h1 class="text-4xl mb-10 capitalize">Global state menagement</h1>
        <Subheading>customize the message</Subheading>
        <MessageEditor />
      </div>
    </section>
  </NuxtLayout>

</template>