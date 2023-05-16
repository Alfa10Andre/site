<template>
  <intersect @enter.once="enterSection" @leave="leaveSection">
    <section :id="id" :style="style" class="container-section">
      <div
        :class="flexDirection"
        :style="content_style"
        class="content-section"
      >
        <slot></slot>
      </div>
    </section>
  </intersect>
</template>

<script>
import Intersect from '~/assets/js/vue-intersect'
import { anime_ } from '~/assets/js/animate'

export default {
  components: { Intersect },
  props: {
    contentJustify: {
      type: String,
      default: 'inherit',
    },
    itemAlign: {
      type: String,
      default: 'center',
    },
    shouldAnime: {
      type: Boolean,
      required: false,
      default: true,
    },
    background: {
      type: String,
      default: 'transparent',
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      required: true,
    },
    flex: {
      type: String,
      default: 'inherit',
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      animation: null,
    }
  },
  computed: {
    style() {
      return {
        background: this.background,
        padding: this.noPadding ? '0!important' : '60px 0',
      }
    },

    flexDirection() {
      if (this.flex == 'inherit') return ''

      if (this.flex == 'column') return 'flex-column'

      if (this.flex == 'row') return 'flex-row'

      if (this.flex == 'column-reverse') return 'flex-column-reverse'

      if (this.flex == 'row-reverse') return 'flex-row-reverse'
    },

    content_style() {
      return {
        width: this.fluid ? '100%' : '75%',
        padding: this.noPadding ? '0!important' : '15px',
        alignItems: this.itemAlign,
      }
    },
  },

  methods: {
    enterSection() {
      if (this.shouldAnime)
        this.animation = anime_({
          targets: document.getElementById(this.id),
          duration: 500,
          opacity: [0, 1],
          // translateY:[-50,0],
          easing: 'linear',
        })

      this.$emit('end-animation')
    },

    leaveSection() {
      this.$emit('leave-screen')
    },
  },
}
</script>

<style scoped lang="scss">
.container-section {
  display: flex;
  padding: 60px 0;
}

.content-section {
  margin: auto;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    flex: 1;
    border-width: 10px;
  }
}

@media screen and (max-width: 1000px) {
  .content-section {
    flex-direction: column;
    width: 100% !important;

    div {
      width: 100% !important;
    }
  }
}
</style>
