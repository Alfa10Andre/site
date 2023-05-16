<template>
  <div class="counter">
    <p class="counter-title">{{ title }}</p>
    <intersect @enter.once="onChange">
      <p ref="counter" class="counter-value"></p>
    </intersect>
  </div>
</template>

<script>
import { animeNumber } from '~/assets/js/animate'
import Intersect from '~/assets/js/vue-intersect'
export default {
  components: {
    Intersect,
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'title',
    },/*
    val: {
      type: Number,
      required: true,
    },*/
  },
/*
  data() {
    return {
      counter: this.val,
    }
  },*/

  mounted() {
    this.onChange()
  },

  methods: {
    onChange() {
      animeNumber(this.$refs.counter)
    },
  },
}
</script>

<style scoped lang="scss">
.counter-title {
  font-size: 1.6rem;
  font-weight: 600;
}
.counter-value {
  font-size: 1.4rem;
}
</style>
