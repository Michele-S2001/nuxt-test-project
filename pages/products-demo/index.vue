<script lang="ts" setup>
definePageMeta({
  layout: false,
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

useHead({
  title: 'Products - Nuxt test project'
})

const products = ref<Product[] | null>(null);
const error = ref<Error | null>(null);

async function fetchProducts() {
  await fetch('https://fakestoreapi.com/products')
    .then(async (res) => {
      if (!res.ok) {
       throw new Error('Failed to fetch products');
      }
      products.value = await res.json();
    }).catch((err) => {
      error.value = err as Error;
    })
}

onMounted(() => {
  fetchProducts();
})

</script>

<template>

  <NuxtLayout name="default">
    <section class="py-5">
      <div class="container">
        <h1 class="text-4xl mb-10 capitalize">Products showcase</h1>
        <Subheading>all products</Subheading>
        <!-- pending -->
        <Loading v-if="products === null && error === null" />
        <!-- error -->
        <div v-else-if="error">
          <p class="text-intermediate text-crimson py-4 font-semibold">{{ error }}</p>
        </div>
        <!-- success -->
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-10 py-10" v-else>
          <ProductCard 
            v-for="product in products" 
            :key="product.id"
            :product-name="product.title"
            :product-category="product.category"
            :product-img-url="product.image"
            :product-price="product.price"
            :product-rate="product.rating.rate"/>
        </div>
      </div>
    </section>
  </NuxtLayout>

</template>