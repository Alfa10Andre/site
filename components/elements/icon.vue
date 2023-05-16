<template>
  <NuxtLink class="link icon-text" :to="to">
    <div class="icon-container">
      <img :width="width" :src="img" alt="" />
      <p>{{ text }}</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
      default: 'Text',
    },
    to: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 100,
    },
  },
}
</script>

<style scoped lang="scss">
.icon-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 10px 0;
  img {
    transition: all 0.4s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
}

.icon-text {
  color: var(--color-cinza);
}
</style>
