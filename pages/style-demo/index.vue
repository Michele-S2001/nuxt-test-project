
<template>
  <header>
    <div class="container">
      <Navbar />
    </div>
  </header>

  <section class="pt-5">
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
        </article>
      </div>
    </div>
  </section>

</template>