<script lang="ts" setup>
useHead({
  title: 'Products - Nuxt test project'
})

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

const { data:products, status, error } = await useFetch<Product[]>('https://fakestoreapi.com/products');

</script>

<template>
  <header>
    <div class="container">
      <Navbar />
    </div>
  </header>

  <section class="py-5">
    <div class="container">
      <h1 class="text-4xl mb-10 capitalize">Products showcase</h1>
      <Subheading>all products</Subheading>
      <!-- pending -->
      <Loading v-if="status === 'pending'" />
      <!-- error -->
      <div v-else-if="error">
        <p class="text-intermediate text-crimson py-4 font-semibold">Error: {{ error.message }}</p>
      </div>
      <!-- success -->
      <div class="py-10" v-else>
        <p v-for="product in products" :key="product.id">{{ product.title }}</p>
      </div>
    </div>
  </section>

</template>