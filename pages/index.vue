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
      articles: [],
    };
  },
  async mounted() {
    const baseUrl =
      location.hostname === 'localhost'
        ? 'http://localhost:9999'
        : 'https://miniblog-nuxt.netlify.app';

    const url = `${baseUrl}/.netlify/functions/articles`;
    const { articles } = await this.$http.$get(url);

    this.articles = articles.map((article) => ({
      ...article,
      author: article['author-name'][0],
      date: new Date(article.updated),
      cover: article.cover[0]?.thumbnails.large.url,
    }));
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
