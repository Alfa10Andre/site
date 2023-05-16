<template>
  <main>
    <banner
      :title="$translate().apps_servicos_web.banner.title"
      :background-image="'https://edudigital.pt/images/img-top.png'"
      :button-action-text="$translate().apps_servicos_web.banner.buttonText"
      @after-enter="animeCartoon" 
    >
      <template #text>
        {{$translate().apps_servicos_web.banner.text}}
      </template>
      <template #cartoon>
        <img
          ref="cartoon"
          width="400"
          src="https://edudigital.pt/home/images/Grupo_1032.png"
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
      :background="'#d35640'"
      :img="'https://edudigital.pt/home/images/Integrao_entre_softwares-01.png'"
      :flex-direction="'row-reverse'"
      :color="'#fff'"
    >
      <template #text>
        <Title :title="$translate().apps_servicos_web.software_integration.title" />
        <p>
          {{$translate().apps_servicos_web.software_integration.text2}}
        </p>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'app-servico-web-base-dados'"
      :background="'#e1e1e1'"
      :img="'https://edudigital.pt/home/images/migrao-01.png'"
      :flex-direction="'row'"
      :color="'#616161'"
    >
      <template #text>
        <Title :title="$translate().apps_servicos_web.data_migration.title" />
        <p>
          {{$translate().apps_servicos_web.data_migration.text}}
        </p>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'app-servico-web-config'"
      :background="'#008072'"
      :img="'https://edudigital.pt/home/images/Grupo_1026.png'"
      :flex-direction="'row'"
      :color="'#fff'"
    >
      <template #text>
        <Title :title="$translate().apps_servicos_web.advanced_configuration.title" />
        <p>
          {{$translate().apps_servicos_web.advanced_configuration.text}}
        </p>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'app-servico-web-autenticacao'"
      :background="'#e1e1e1'"
      :img="'https://edudigital.pt/home/images/autenticaao-02.png'"
      :flex-direction="'row-reverse'"
      :color="'#616161'"
    >
      <template #text>
        <Title :title="$translate().apps_servicos_web.autentication_systems.title" />
        <p>
          {{$translate().apps_servicos_web.autentication_systems.text2}}
        </p>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'app-servico-web-elibrary'"
      :background="'#d35640'"
      :img="require('~/assets/img/cartoon/Grupo_1030_.png')"
      :flex-direction="'row'"
      :color="'#fff'"
    >
      <template #text>
        <Title :title="$translate().apps_servicos_web.library_system.title" />
        <p>
          {{$translate().apps_servicos_web.library_system.text}}
        </p>
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
import Sectiondouble from '~/components/sections/sectiondouble.vue'

export default {
  components: {
    banner,
    Contactform,
    Section,
    SectiondubleCartoon,
    Title,
    Sectiondouble,
  },

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
        return require('~/assets/img/infografia_ingles/EDUdigital InfografiaIngles APPs 20230515.png');
      } else {
        return require('~/assets/img/infografia_portugues/EDUdigital Infografia APPs 20211228.png');
      }
    }


  },
}
</script>

<style></style>
