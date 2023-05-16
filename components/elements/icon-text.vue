<template>
  <div :id="id" class="d-flex icon-text">
    <div>
      <img :width="iconWidth ? iconWidth : 50" :src="icon" alt="" />
    </div>
    <div class="icon-text-body">
      <p>
        <strong :style="[color ? { color: color } : { color: '#fff' }]">{{
          title
        }}</strong>
      </p>
      <p :style="[color ? { color: color } : { color: '#fff' }]">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
import Title from './title.vue'
export default {
  components: { Title },

  props: ['title', 'icon', 'id', 'iconWidth', 'color'],
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="scss">
img {
}
.icon-text {
  padding: 10px;
  div {
    padding: 5px !important;
  }

  .icon-text-body {
    width: 400px !important;
    flex-wrap: wrap;

    p:last-child {
      padding: 10px 0;
    }

    p {
      strong {
        font-size: 1.5rem;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  p {
    text-align: justify;
  }

  .icon-text-body {
    flex-wrap: wrap;

    p:last-child {
      padding: 10px 0;
    }

    p {
      strong {
        font-size: 1.5rem;
      }
    }
  }

  .icon-text {
    padding: 0 10px;
    overflow: hidden;
    margin: 0 !important;
    width: 100%;
    margin: 0;
    // display:none;
  }
}
</style>
