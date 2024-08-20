<script lang="ts" setup>

function modifyMessage() {
  globalStore.setMessage(inputValue.value);
  inputValue.value = '';
}

const globalStore = useGlobalStore();
const inputValue = ref('');

</script>

<template>

  <div class="mt-8">
    <div class="searchbar flex items-center justify-center mx-auto mb-10 px-2 gap-3 border-2 border-saharaOcre rounded-3xl max-w-[480px] lg:max-w-[680px]">
      <input 
        v-model="inputValue"
        type="text" 
        @keyup.enter="modifyMessage"
        placeholder="Type something..."
        class="leading-10 text-classic sm:text-intermediate bg-transparent w-full px-5 outline-none">
      <button @click="modifyMessage">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-mistGray hover:text-saharaOcre">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>
    </div>

    <fieldset class="bg-saharaOcre p-4 rounded sm:max-w-[90%] mx-auto">
      <legend class="font-bold uppercase text-sm bg-white border-2 px-3 border-saharaOcre">message</legend>
      <p class="text-intermediate first-letter:uppercase">{{ globalStore.message }}</p>
    </fieldset>
  </div>

</template>