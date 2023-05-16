<template>
  <Section
    :id="id"
    :style="'color:' + color"
    :flex="'column'"
    :background="background"
  >
    <Title :title="title" class="py" />

    <Section
      :id="id + '-vantagens-content'"
      :style="`margin-top:${40}px; color:${color}`"
      :no-padding="true"
      :content-justify="'start'"
      :should-anime="false"
      @end-animation="animeIcons"
    >
      <div class="vantagem-container">
        <IconText
          v-for="(vant, j) in vantagens"
          :id="j + $id()"
          :key="j + $id()"
          :color="color"
          class="vantagem"
          :title="vant.title"
          :icon="vant.icon"
        >
          {{ vant.text }}
          {{ vant.text_1 }}
          {{ vant.text_2}}
          {{ vant.text_3 }}
          {{ vant.text_4 }}
          {{ vant.text_5 }}
        </IconText>
      </div>
    </Section>
  </Section>
</template>

<script>
import Section from '../sections/section.vue'
import IconText from './icon-text.vue'
import Title from './title.vue'
import { animeList } from '~/assets/js/animate'
export default {
  components: { IconText, Section, Title },
  props: ['id', 'color', 'background', 'vantagens', 'title'],
  methods: {
    animeIcons() {
      animeList(document.getElementsByClassName('vantagem'))
    },
  },
}
</script>

<style></style>
