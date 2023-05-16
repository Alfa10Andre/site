<template>
  <div class="container_">
    <logo :width="300" />
    <!-- <h1 class="error-code">Error {{error.statusCode}}</h1> -->
    <h1 v-if="error.statusCode === 404" class="error-text">
      Página não encontrada
    </h1>
    <h1 v-else class="error-text">An error occurred</h1>
    <NuxtLink class="btn btn-primary btn-return" to="/">Página incial</NuxtLink>
  </div>
</template>

<script>
import logo from '~/components/logo.vue'
export default {
  components: { logo },
  layout: 'empty',
  props: ['error'], // you can set a custom layout for the error page
}
</script>

<style scoped lang="scss">
.container_ {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-light);
}

.error-code {
  color: var(--color-black);
}

.error-text {
  letter-spacing: 2px;
  word-spacing: 5px;
  padding: 10px 0;
}

.btn-return {
  border: 1px solid var(--color-vermelho);
  background: var(--color-vermelho);
  margin-top: 7px;
}
</style>
