<template>
  <div class="layout-default">
    <header>
      <menu>
        <!--
        Si usamos ancla normales, esto hará que se recage la página, si no
        queremos este efecto suamos NuxtLink para ir a la ruta específica
        -->
        <NuxtLink to="/">Miniblog</NuxtLink>
        <NuxtLink to="/">Sobre mi</NuxtLink>
      </menu>
    </header>
    <!-- Nuxt es el componente index.vue que se inyectará en layout default -->
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
};
</script>

<style lang="scss" scoped>
.layout-default {
  @apply min-h-full;
  header {
    @apply sticky absolute top-0 bg-white z-10;
    menu {
      @apply m-auto flex justify-between items-center w-full max-w-5xl
      px-4 py-6;
    }
    .brand {
      @apply font-bold text-2xl;
    }
  }
}
</style>
