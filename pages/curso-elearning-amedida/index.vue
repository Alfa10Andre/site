<template>
  <main>
    <banner
      :title="$translate().curso_elearning_amedida.banner.title"
      :background-image="'https://edudigital.pt/images/bigstock-Smiling-African-American-Girl-blue.png'"
      :button-action-text="$translate().curso_elearning_amedida.banner.buttonText"
      :button-action-href="'/fale-connosco'"
      @after-enter="animeCartoon"
    >
      <template #text>
        {{ $translate().curso_elearning_amedida.banner.text }}
      </template>
      <template #cartoon>
        <img
          ref="cartoon"
          width="400"
          src="https://edudigital.pt/home/images/Grupo_821.png"
          alt=""
          srcset=""
        />
      </template>
    </banner>

    <Section :id="'cusrsos-medida-organograma'">
      <img
        :src="getImageURL()"
        width=""
        alt=""
        srcset=""
      />
    </Section>

    <SectiondubleCartoon
      :id="'cursos-medida-producao'"
      :background="'#008072'"
      :img="'https://edudigital.pt/home/images/PCcomCurso-04-11.png'"
      :flex-direction="'row'"
      :color="'#fff'"
    >
      <template #text>
        <Title
          :title="
            $translate().curso_elearning_amedida.customized_elearning.title
          "
        />
        <p>
          {{ $translate().curso_elearning_amedida.customized_elearning.text }}
        </p>
        <div>
          <NuxtLink
            to="/curso-elearning-amedida/elearning-personalizado"
            class="btn btn-primary"
            >{{
              $translate().curso_elearning_amedida.customized_elearning
                .buttonText
            }}</NuxtLink
          >
        </div>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'cursos-medida-gamification'"
      :background="'#D35640'"
      :img="require('~/assets/img/cartoon/Grupo_819_.png')"
      :flex-direction="'row-reverse'"
      :color="'#fff'"
    >
      <template #text>
        <Title
          :title="
            $translate().curso_elearning_amedida.audiovisual_production.title
          "
        />
        <p>
          {{ $translate().curso_elearning_amedida.audiovisual_production.text }}
        </p>
        <div>
          <NuxtLink
            to="/curso-elearning-amedida/motion-gamification"
            class="btn btn-secondary"
            >{{
              $translate().curso_elearning_amedida.audiovisual_production
                .buttonText
            }}</NuxtLink
          >
        </div>
      </template>
    </SectiondubleCartoon>


    <contactform />
  </main>
</template>

<script>
import app from '@/config/app.js'
import banner from '~/components/banner.vue'
import Contactform from '~/components/contactform.vue'
import Section from '~/components/sections/section.vue'
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue'
import Title from '~/components/elements/title.vue'
import { upDownAnimation } from '~/assets/js/animate'

export default {
  components: { banner, Contactform, Section, SectiondubleCartoon, Title },

  mounted() {},
  methods: {
    animeCartoon() {
      upDownAnimation(this.$refs.cartoon, true)
    },
  },

  methods: {
    

    getImageURL() {

      const language = app().lang;
      if (language === 'en_GB') {
        return require('~/assets/img/infografia_ingles/EDUdigital_InfografiaIngles_eLearning20211027.png');
      } else {
        return require('~/assets/img/infografia_portugues/EDUdigital_Infografia_eLearning20211228-01.png');
      }
    }


  },
}
</script>

<style></style>
