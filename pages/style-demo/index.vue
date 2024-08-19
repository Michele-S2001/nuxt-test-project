<script lang="ts" setup>

interface colorStr {
  colorCustomClass: string,
  colorCustomCode: string
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
]

</script>

<template>
  <header>
    <div class="container">
      <Navbar />
    </div>
  </header>

  <section class="py-5">
    <div class="container">
      <h1 class="text-4xl mb-10">Colors & Typography</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- TYPOGRAPHY -->
        <article>
          <header class="mb-8">
            <Subheading>Typography</Subheading>
          </header>
          <TypographySample size="b" />
          <TypographySample size="m" />
          <TypographySample size="s" />
        </article>
        <!-- COLORS -->
        <article>
          <header class="mb-5">
            <Subheading>Colors</Subheading>
          </header>
          <div class="flex flex-col gap-4">
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

</template>