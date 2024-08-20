<script lang="ts" setup>
useHead({
  title: 'Home - Nuxt test project'
})

</script>

<template>

  <section class="pt-8">
    <div class="container text-center">
      <h1 class="text-5xl mb-24">Nuxt test project</h1>
      <p class="text-xl tracking-wide mb-10">This project demonstrates different features using nuxt, tailwind, and pinia</p>
      <div class="flex justify-center">
        <Navbar />
      </div>
    </div>
  </section>

</template>