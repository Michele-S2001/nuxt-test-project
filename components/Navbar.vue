<script lang="ts" setup>

interface navLink {
  uri: string,
  pageName: string
}

const navLinks:navLink[] = [
  {
    uri: '/',
    pageName: 'home'
  },
  {
    uri: '/style-demo',
    pageName: 'colors & typography'
  },
  {
    uri: '/state-demo',
    pageName: 'state menagement'
  },
  {
    uri: '/products-demo',
    pageName: 'products'
  },
]

</script>


<template>

  <nav class="py-4">
    <ul class="flex gap-3 flex-wrap">
      <li 
        v-for="(link, i) in navLinks" :key="i" 
        class="hover:text-blue-700 capitalize bg-crimson text-white font-semibold leading-10 px-3 rounded-3xl text-lg shadow-xl">
        <NuxtLink :to="link.uri">{{ link.pageName }}</NuxtLink>
      </li>
    </ul>
  </nav>

</template>