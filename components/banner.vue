<template>
  <section id="section-banner" class="section-banner" :style="section_style">
    <div class="bradcrumbs">
      <Breadcrumbs />
    </div>
    <div :style="style" class="container">
      <div>
        <intersect @enter.once="enter">
          <div id="banner-content">
            <Title :title="title"></Title>
            <p>
              <slot name="text"></slot>
            </p>

            <a
              v-if="buttonActionText"
              :href="buttonActionHref"
              class="btn btn-primary"
              >{{ buttonActionText }}</a
            >
          </div>
        </intersect>
      </div>
      <div class="banner-cartoon">
        <slot name="cartoon"></slot>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from './breadcrumbs.vue'
import Title from '~/components/elements/title'
import Intersect from '~/assets/js/vue-intersect'

import { anime_ } from '~/assets/js/animate'
export default {
  components: { Breadcrumbs, Intersect, Title },
  props: {
    buttonActionText: {
      type: String,
    },
    buttonActionHref: {
      type: String,
      default: '/',
    },
    title: {
      type: String,
      required: true,
    },
    columnsTemplate: {
      type: String,
      default: '1fr 1fr',
    },

    backgroundImage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },

  computed: {
    style() {
      return {
        gridTemplateColumns: this.columnsTemplate,
      }
    },

    section_style() {
      return {
        backgroundImage: `url(${this.backgroundImage})`,
      }
    },
  },

  mounted() {
    anime_({
      targets: '.section-banner',
      opacity: [0, 1],
      duration: 800,
      easing: 'linear',
    })
  },

  methods: {
    enter() {
      anime_({
        targets: document.querySelector('#banner-content')?.children,
        translateX: [-50, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 500,
        delay (el, i, l) {
          return i * 400
        },
      })

      this.$emit('after-enter')
    },
  },
}
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;

  background-size: cover;

  padding: 20px 0;
}

.bradcrumbs {
  width: 75%;
  margin: auto;
}

.container {
  width: 75%;
  min-height: 300px;
  margin: auto;
  display: grid;

  grid-template-rows: 1fr;

  div {
    // border: 1px solid green;
    display: flex;
    padding: 20px;
    color: #fff;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    h1 {
      font-size: 3rem;
      line-height: 50px;
    }
  }
}

#banner-content {
  * {
    margin-bottom: 30px;
  }
}

.banner-cartoon {
  display: none;
  justify-content: center;

  img {
    margin: auto;
  }
}

@media screen and (max-width: 950px) {
  .container {
    margin: 0;
    .banner-cartoon {
      display: none;
    }

    #banner-content {
      width: 100%;
      flex: none;
      margin: auto !important;
    }

    margin: auto;
    width: 100%;

    grid-template-columns: 1fr !important;
  }
}
</style>
