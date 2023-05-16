<template>
  <div>
    <h1 v-if="type == 'head'" class="title-text" :style="style">{{ title }}</h1>
    <h2 v-if="type == 'sub'" class="title-text" :style="style">{{ title }}</h2>
    <h3 v-if="type == 'title'" class="title-text" :style="style">
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title',
      required: true,
    },
    type: {
      type: String,
      default: 'head',
    },

    textAlign: {
      type: String,
      default: 'inherit',
    },
  },
  computed: {
    style() {
      return {
        textAlign: this.textAlign,
      }
    },
  },
}
</script>

<style scoped>
div {
  padding: 0 !important;
}

.title-text {
  line-height: 50px;
}

h1 {
  font-size: 2.8rem;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
}

h3 {
  font-size: 1.5rem;
}
</style>
