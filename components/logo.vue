<template>
  <div class="logo">
    <img
      :width="width ? width : 100"
      :src="require('~/assets/img/logo.png')"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    width: { type: Number },
  },
}
</script>

<style scoped lang="scss">
.logo {
  padding: 10px 0px;
  display: flex;
  justify-content: center;

  img {
    height: auto !important;
  }
}
</style>
