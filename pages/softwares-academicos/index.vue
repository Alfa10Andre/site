<template>
  <main>
    <banner
      :title="$translate().software_academico.banner.title"
      :background-image="'https://edudigital.pt/images/bigstock-Group-Of-College-Students-With-361644217%20.png'"
      :button-action-text="$translate().software_academico.banner.buttonText"
      :button-action-href="'fale-connosco'"
      @after-enter="animeCartoon"
    >
      <template #text>
        {{$translate().software_academico.banner.text}}
      </template>
      <template #cartoon>
        <img
          ref="cartoon"
          width="400"
          src="https://edudigital.pt/home/images/Grupo_1012.png"
          alt=""
          srcset=""
        />
      </template>
    </banner>

    <Section :id="'softwares accademicos'">
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
      :flex-direction="'row-reverse'"
    >
      <template #text>
        <Title :title="$translate().software_academico.eSchooling_management_system.title" />
        <p>
          {{$translate().software_academico.eSchooling_management_system.text}}
        </p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/">{{$translate().software_academico.eSchooling_management_system.buttonText}}</NuxtLink>
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
        return require('~/assets/img/infografia_ingles/EDUdigital_InfografiaIngles_softwares académicos20230222-02.png');
      } else {
        return require('~/assets/img/infografia_portugues/EDUdigital Infografia softwares académicos 20230210-01.png');
      }
    }


  },
}
</script>

<style></style>
