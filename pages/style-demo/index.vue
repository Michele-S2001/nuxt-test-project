<script lang="ts" setup>
definePageMeta({
  layout: false,
})

useHead({
  title: 'Colors and Typography - Nuxt test project'
})

interface colorStr {
  colorCustomClass: string,
  colorCustomCode: string
}

interface fontsizeDataType {
  fontsizeCustomClass: string,
  fontSizeCustomLabel: string
}

const colorsPalette:colorStr[] = [
  {
    colorCustomClass: 'bg-deepBlue',
    colorCustomCode: '#0073B4'
  },
  {
    colorCustomClass: 'bg-mistGray',
    colorCustomCode: '#969696'
  },
  {
    colorCustomClass: 'bg-crimson',
    colorCustomCode: '#B82631'
  },
  {
    colorCustomClass: 'bg-saharaOcre',
    colorCustomCode: '#FFAD00'
  },
];

const fontsizesList:fontsizeDataType[] = [
  {
    fontsizeCustomClass: 'text-titan',
    fontSizeCustomLabel: 'titan'
  },
  {
    fontsizeCustomClass: 'text-intermediate',
    fontSizeCustomLabel: 'intermediate'
  },
  {
    fontsizeCustomClass: 'text-classic',
    fontSizeCustomLabel: 'classic'
  }
]

</script>

<template>
  <NuxtLayout name="default">
    <section class="py-5">
      <div class="container">
        <h1 class="text-4xl mb-10">Colors & Typography</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <!-- TYPOGRAPHY -->
          <article>
            <header class="mb-8">
              <Subheading>Typography</Subheading>
            </header>
            <TypographySample 
              v-for="(fontSize, i) in fontsizesList" 
              :key="i" 
              :fontClass="fontSize.fontsizeCustomClass">
              {{ fontSize.fontSizeCustomLabel }}
            </TypographySample>
          </article>
          <!-- COLORS -->
          <article>
            <header class="mb-5">
              <Subheading>Colors</Subheading>
            </header>
            <div class="flex flex-col gap-3">
              <ColorBox 
                v-for="(color, i) in colorsPalette" 
                :key="i" 
                :colorClass="color.colorCustomClass">
                {{ color.colorCustomCode }}
              </ColorBox>
            </div>
          </article>
        </div>
      </div>
    </section>
  </NuxtLayout>


</template>