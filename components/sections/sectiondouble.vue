<template>
  <Section
    :id="id"
    class="section-double"
    :flex="flexDirection"
    :background="background"
    :no-padding="noPadding"
    @end-animation="$emit('end-animation')"
  >
    <div :style="{ color: color || 'inherit' }">
      <slot name="left"> </slot>
    </div>

    <div :style="{ color: color || 'inherit' }" class="">
      <slot name="right"></slot>
    </div>
  </Section>
</template>

<script>
import Section from './section.vue'
import { upDownAnimation } from '~/assets/js/animate'

export default {
  components: { Section },
  props: ['id', 'background', 'flexDirection', 'color', 'noPadding'],
  methods: {},
}
</script>

<style scoped lang="scss">
.section-double {
  flex-direction: row-reverse !important;

  div {
    flex: 1;
    padding: 20px 20px;
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 900px) {
  .section-double {
    display: flex;
    flex-direction: row-reverse !important;

    div {
      text-align: center;
    }
    // .sectiondoubleCartoon-text{

    //     display: flex;
    //     flex-direction: column!important;
    // }
  }
}
</style>
