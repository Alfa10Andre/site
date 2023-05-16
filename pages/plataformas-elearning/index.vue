<template>
  <main>
    <banner
      :title="$translate().elearning_platform.banner.title"
      :background-image="'https://edudigital.pt//images/top-plataformaseLearning%2020210318.png'"
      :button-action-text="$translate().elearning_platform.banner.buttonText"
      :button-action-href="'/fale-connosco'"
      @after-enter="animeCartoon"
    >
      <template #text>
        {{ $translate().elearning_platform.banner.text }}
      </template>
      <template #cartoon>
        <img
          ref="cartoon"
          width="400"
          src="https://edudigital.pt/home/images/Grupo_450.png"
          alt=""
          srcset=""
        />
      </template>
    </banner>

    <Section :id="'plataformas-elearning-organograma'">
      <img
        :src="getImageURL()"
        width=""
        alt=""
        srcset=""
      />
    </Section>

    <SectiondubleCartoon
      :id="'plataformas-elearning-open-source'"
      :img="'https://edudigital.pt/home/images/PCcomCurso-04-1.png'"
      :background="'#d35640'"
      style="color: #fff"
    >
      <template #text>
        <Title
          :title="$translate().elearning_platform.open_source_platform.title"
        />
        <p>{{ $translate().elearning_platform.open_source_platform.text }}</p>
        <div>
          <NuxtLink
            class="btn btn-secondary"
            to="/plataformas-elearning/plataformas-open-source"
            >{{
              $translate().elearning_platform.open_source_platform.buttonText
            }}</NuxtLink
          >
        </div>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'plataformas-elearning-totara'"
      :img="'https://edudigital.pt/home/images/totara_pc-28.png'"
      :background="'#eee'"
      :flex-direction="'row-reverse'"
    >
      <template #text>
        <Title
          :title="$translate().elearning_platform.totara_platforms.title"
        />
        <p>{{ $translate().elearning_platform.totara_platforms.text }}</p>
        <div>
          <NuxtLink
            class="btn btn-secondary"
            to="/plataformas-elearning/plataformas-totara"
            >{{
              $translate().elearning_platform.totara_platforms.buttonText
            }}</NuxtLink
          >
        </div>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'plataformas-elearning-cloud'"
      :img="'https://edudigital.pt/home/images/Grupo_4492x.png'"
      :background="'#d35640'"
      style="color: #fff"
    >
      <template #text>
        <Title :title="$translate().elearning_platform.cloud_learn.title" />
        <p>{{ $translate().elearning_platform.cloud_learn.text }}</p>
        <div>
          <NuxtLink
            class="btn btn-secondary"
            to="/plataformas-elearning/hosting-gerido"
            >{{
              $translate().elearning_platform.cloud_learn.buttonText
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
import PlataformaseLearningController from '../../controllers/PlataformaseLearningController'
import { upDownAnimation } from '~/assets/js/animate'
import banner from '~/components/banner.vue'
import Contactform from '~/components/contactform.vue'
import Section from '~/components/sections/section.vue'
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue'
import Title from '~/components/elements/title.vue'
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
        return require('~/assets/img/infografia_ingles/EDUdigital_InfografiaIngles_Plataformas20230510.png');
      } else {
        return require('~/assets/img/infografia_portugues/EDUdigital_Infografia_Plataformas20211228.png');
      }
    }


  },
}
</script>

<style></style>
