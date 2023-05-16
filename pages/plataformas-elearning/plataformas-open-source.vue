<template>
  <div>
    <banner
      :background-image="'https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
      :columns-template="'3fr 1fr'"
      :title="$translate().elearning_platform.banner.title1"
      :button-action-text="$translate().elearning_platform.banner.buttonText1"
      :button-action-href="'/fale-connosco'"
    >
      <template #text>
        {{ $translate().elearning_platform.banner.text1 }}
      </template>
    </banner>

    <Section
      :id="'plataformas-open-source-servicos-vantagens'"
      style="color: var(--color-cinza)"
      :flex="'column'"
    >
      <Title :title="'Serviços e Vantagens'" class="py" />

      <Section
        id="plataformas-open-source-servicos-vantagens-content"
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
            color="#616161"
            class="vantagem"
            :title="vant.title"
            :icon="vant.icon"
          >
            {{ vant.text }}
          </IconText>
        </div>
      </Section>
    </Section>

    <Sectionduble
      :id="'plataformas-open-source-app-mobile'"
      :background="'var(--color-verde)'"
      :img="'https://edudigital.pt/home/images/Grupo_4665x.png'"
      :flex-direction="'row'"
      :color="'#fff'"
    >
      <template #text>
        <Title
          :title="$translate().elearning_platform.open_source_platform.title1"
        />
        <p>
          {{ $translate().elearning_platform.open_source_platform.text2 }}
        </p>
        <div>
          <NuxtLink class="btn btn-primary" to="/fale-connosco"
            >{{
              $translate().elearning_platform.open_source_platform.button_action_text
            }}</NuxtLink
          >
        </div>
      </template>
    </Sectionduble>

    <Sectionduble
      :id="'plataformas-open-source-app-formacao-lms'"
      :background="'var(--color-light)'"
      :img="'https://edudigital.pt/home/images/autenticaao-02.png'"
      :flex-direction="'row-reverse'"
      :color="'var(--color-cinza)'"
    >
      <template #text>
        <Title
          :title="$translate().elearning_platform.open_source_platform.title2"
        />
        <p>
          {{ $translate().elearning_platform.open_source_platform.text1 }}
        </p>
        <div>
          <NuxtLink class="btn btn-primary" to="/fale-connosco"
          >{{
              $translate().elearning_platform.open_source_platform.button_action_text
            }}</NuxtLink
          >
        </div>
      </template>
    </Sectionduble>

    <contactform />
  </div>
</template>

<script>
import app from '@/config/app.js'
import Section from '~/components/sections/section.vue'
import Title from '~/components/elements/title.vue'
import IconText from '~/components/elements/icon-text.vue'

import Contactform from '~/components/contactform.vue'
import Sectionduble from '~/components/sections/sectiondubleCartoon.vue'
import { animeList } from '~/assets/js/animate'
import PlataformaseLearningController from '~/controllers/PlataformaseLearningController'
export default {
  components: { Section, Title, IconText, Contactform, Sectionduble },
  
  methods: {
    animeIcons() {
      animeList(document.getElementsByClassName('vantagem'))
    },
  },

  data() {
    return {
      vantagens: []
    }
  },

  created() {
    //const language = this.app.lang;
    const language = app().lang;
    if (language === 'en_GB') {
      this.vantagens = PlataformaseLearningController.plataformasOpenSource.ServicosVantagensEN || messages[language].vantagens;
    } else {
      this.vantagens = PlataformaseLearningController.plataformasOpenSource.ServicosVantagensPT || messages[language].vantagens;
    }
  },
}
</script>

<style>
#plataformas-open-source-servicos-vantagens-content {
  margin-top: 30px;
}
</style>
