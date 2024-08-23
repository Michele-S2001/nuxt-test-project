<script lang="ts" setup>
useHead({
  title: 'Home - Nuxt test project'
})

</script>

<template>

  <section class="pt-8">
    <div class="container text-center">
      <h1 class="text-5xl mb-9 font-semibold">Nuxt test project</h1>
      <div class="flex gap-8 sm:gap-10 justify-center py-10">
        <img class="max-w-14"src="/public/imgs/nuxt-logo.svg" alt="Nuxt logo image">
        <img class="max-w-14"src="/public/imgs/pinia-logo.svg" alt="Pinia logo image">
        <img class="max-w-14"src="/public/imgs/tailwindcss-logo.svg" alt="Tailwind css logo image">
      </div>
      <p class="text-xl tracking-wide mb-10">This project demonstrates different features using nuxt, tailwind, and pinia</p>
      <div class="flex justify-center">
        <Navbar />
      </div>
    </div>
  </section>

</template>