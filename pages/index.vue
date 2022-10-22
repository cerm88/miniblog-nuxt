<template>
  <div class="container">
    <AboutMe />
    <div class="content">
      <main>
        <!-- <ArticleCard
          v-for="article in articles"
          :key="article.slug"
          :title="article.title"
          :slug="article.slug"
          :date="article.date"
        /> -->
        <ArticleCard
          v-for="article in articles"
          :key="article.slug"
          v-bind="article"
        />
      </main>
    </div>
  </div>
</template>

<script>
// No es necesario importar los componentes, Nuxt lo encuentra en automático
// import AboutMe from '~/components/AboutMe.vue';
export default {
  name: 'IndexPage',
  data() {
    return {
      articles: [
        {
          title: 'Mi primer post',
          slug: 'mi-primer-post',
          date: new Date(),
          abuot: 5,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.container {
  @apply m-auto;
}
.container .content {
  @apply flex flex-col justify-center items-center sm:p-2 md:p-4 lg:p-8 xl:p-16;
  main {
    @apply max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6;
  }
}
</style>
<style lang="scss">
.container {
  @apply m-auto;
}
.container .content {
  @apply flex flex-col justify-center items-center sm:p-2 md:p-4 lg:p-8 xl:p-16;
  main {
    @apply max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6;
  }
}
</style>
