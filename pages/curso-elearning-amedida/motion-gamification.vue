<template>
  <div>
    <Banner
      :background-image="'	https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
      :title="$translate().curso_elearning_amedida.banner.title2"
      :columns-template="'2fr 1fr'"
      :button-action-text="$translate().curso_elearning_amedida.banner.buttonText1"
      :button-action-href="'/fale-connosco'"
    >
      <template #text>
        {{ $translate().curso_elearning_amedida.banner.text2}}
      </template>
    </Banner>

    <SectiondubleCartoon
      :id="'elearning-personalizado-design'"
      :background="'#fff'"
      :img="'https://edudigital.pt/home/images/Grupo_815.png'"
      :flex-direction="'row'"
      :color="'#616161'"
    >
      <template #text>
        <Title
          :title="$translate().curso_elearning_amedida.audiovisual_production.title1"
        />
        <p>
          {{ $translate().curso_elearning_amedida.audiovisual_production.text1 }}
        </p>
      </template>
    </SectiondubleCartoon>

    <VantagemServicos
      :id="'hosting-gerido-servicos-vantagens'"
      :vantagens="vantagens"
      :background="'#D35640'"
      :color="'#fff'"
      :title="'Serviços e Vantagens'"
    />

    <Contactform />
  </div>
</template>

<script>
import app from '@/config/app.js'

import CursoseLearningMedidaController from '~/controllers/CursoseLearningMedidaController'
import VantagemServicos from '~/components/elements/vantagemServicos.vue'
import Contactform from '~/components/contactform.vue'
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue'
import Title from '~/components/elements/title.vue'
export default {
  components: { VantagemServicos, Contactform, SectiondubleCartoon, Title },

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
      this.vantagens = CursoseLearningMedidaController.motionGamification.vantagensEN || messages[language].vantagens;
    } else {
      this.vantagens = CursoseLearningMedidaController.motionGamification.vantagensPT || messages[language].vantagens;
    }
  },
}
</script>

<style></style>
