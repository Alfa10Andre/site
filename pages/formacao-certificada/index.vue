<template>
  <main>
    <banner
      :title="$translate().formacao_certificada.banner.title"
      :background-image="'https://edudigital.pt//images/top-plataformaseLearning%2020210318.png'"
      :button-action-text="$translate().formacao_certificada.banner.buttonText"
      :button-action-href="'/fale-connosco'"
      @after-enter="animeCartoon"
    >
      <template #text>
        {{$translate().formacao_certificada.banner.text}}
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
        <Title :title="$translate().formacao_certificada.catalog_elearning_courses.title" />
        <p>
          {{$translate().formacao_certificada.catalog_elearning_courses.text}}
        </p>
        <div>
          <NuxtLink
            class="btn btn-secondary"
            to="/formacao-certificada/cursos-elearning-catalogo"
            >{{$translate().formacao_certificada.catalog_elearning_courses.buttonText}}</NuxtLink
          >
        </div>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'plataformas-elearning-totara'"
      :img="'https://edudigital.pt/home/images/live_training-01.png'"
      :background="'#eee'"
      :flex-direction="'row-reverse'"
    >
      <template #text>
        <Title :title="$translate().formacao_certificada.live_training.title" />
        <p>
          {{$translate().formacao_certificada.live_training.text}}
        </p>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'plataformas-elearning-cloud'"
      :img="'https://edudigital.pt/home/images/gamification-01.png'"
      :background="'#d35640'"
      style="color: #fff"
    >
      <template #text>
        <Title
          :title="$translate().formacao_certificada.cambridge_english_Training.title"
        />
        <p>
          {{$translate().formacao_certificada.cambridge_english_Training.text}}
        </p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/">{{$translate().formacao_certificada.cambridge_english_Training.buttonText}}</NuxtLink>
        </div>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'formacao-certificada-eformadores'"
      :img="'https://edudigital.pt/home/images/lms-form.png'"
      :background="'#eee'"
      :flex-direction="'row-reverse'"
    >
      <template #text>
        <Title :title="$translate().formacao_certificada.etrainers_lms_administrators_courses.title" />
        <p>
          {{$translate().formacao_certificada.etrainers_lms_administrators_courses.text}}
        </p>
      </template>
    </SectiondubleCartoon>

    <contactform />
  </main>
</template>

<script>
import app from '@/config/app.js'
import { upDownAnimation } from '~/assets/js/animate'
import banner from '~/components/banner.vue'
import Contactform from '~/components/contactform.vue'
import Section from '~/components/sections/section.vue'
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue'
import Title from '~/components/elements/title.vue'

export default {
  components: { banner, Contactform, Section, SectiondubleCartoon, Title},

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
        return require('~/assets/img/infografia_ingles/EDUdigital InfografiaIngles Formação 20230515.png');
      } else {
        return require('~/assets/img/infografia_portugues/EDUdigital Infografia Formação 20211228.png');
      }
    }


  },
}
</script>

<style></style>
