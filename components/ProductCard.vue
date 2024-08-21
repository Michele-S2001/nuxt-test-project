<script lang="ts" setup>

defineProps({
  productName: String,
  productCategory: String,
  productPrice: Number,
  productImgUrl: String,
  productRate: Number
})

</script>

<template>

  <div class="max-w-xs w-full flex flex-col justify-between text-center shadow-xl">
    <figure class="relative p-3">
      <img class="max-h-52 w-full object-contain" :src="productImgUrl">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute top-1 right-1 text-crimson">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      </button>
    </figure>
    <div class="flex flex-col gap-5 pt-1">
      <h5 class="text-xl font-semibold px-1">{{ productName }}</h5>
      <p class="text-classic p-3 bg-mistGray text-white self-center leading-3 rounded-lg first-letter:capitalize">{{ productCategory }}</p>
      <div class="flex justify-around">
        <div class="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
          <strong>{{ productRate }}</strong>
        </div>
        <strong class="text-deepBlue text-intermediate">{{ productPrice }} &euro;</strong>
      </div>
      <button class="bg-saharaOcre hover:bg-[#E59B00] text-white text-2xl leading-10 capitalize mt-auto">
        add to cart
      </button>
    </div>
  </div>

</template>