<template>
  <div>
    <Banner
      :background-image="'https://edudigital.pt/images/bigstock-Group-Of-Young-Mixed-Race-Busi-336010132-.png'"
      :columns-template="'2fr 1fr'"
      :title="$translate().elearning_platform.banner.title2"
      :button-action-text="$translate().elearning_platform.banner.buttonText2"
      :button-action-href="'/fale-connosco'"
    >
      <template #text>
        {{ $translate().elearning_platform.banner.text2 }}
      </template>
    </Banner>

    <SectiondubleCartoon
      :id="'plataformas-totara-parceiros'"
      :background="'#eee'"
      :img="'https://edudigital.pt/home/images/Grupo_976.png'"
      :flex-direction="'row-reverse'"
      :color="'#616161'"
    >
      <template #text>
        <Title
          :title="$translate().elearning_platform.totara_platforms.title1"
        />
        <p>
          {{ $translate().elearning_platform.totara_platforms.text1 }}
        </p>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'plataformas-totara-melhora-equipa'"
      :background="'#fff'"
      :img="'https://edudigital.pt/home/images/z1.PNG'"
      :flex-direction="'row'"
      :color="'#616161'"
    >
      <template #text>
        <Title
          :title="$translate().elearning_platform.totara_platforms.title2"
        />
        <p>
          {{ $translate().elearning_platform.totara_platforms.text2 }}
        </p>
      </template>
    </SectiondubleCartoon>

    <VantagemServicos
      :id="'plataformas-totara-servicos-vantagens'"
      :vantagens="vantagens"
      :background="'#d35640'"
      :color="'#fff'"
      :title="'Serviços e Vantagens'"
    />

    <SectiondubleCartoon
      :id="'plataformas-totara-partilha'"
      :background="'#fff'"
      :img="'https://edudigital.pt/home/images/z2.PNG'"
      :flex-direction="'row-reverse'"
      :color="'#616161'"
    >
      <template #text>
        <Title
          :title="$translate().elearning_platform.totara_platforms.title3"
        />
        <p>
          {{ $translate().elearning_platform.totara_platforms.text3 }}
        </p>
      </template>
    </SectiondubleCartoon>

    <VantagemServicos
      :id="'plataformas-totara-vantagens-plataforma'"
      :vantagens="vantagensPlataforma"
      :background="'#00897B'"
      :color="'#fff'"
      :title="'Vantagens da Plataforma'"
    />

    <SectiondubleCartoon
      :id="'plataformas-totara-facilite'"
      :background="'#fff'"
      :img="'https://edudigital.pt/home/images/z3.PNG'"
      :flex-direction="'row-reverse'"
      :color="'#616161'"
    >
      <template #text>
        <Title
          :title="$translate().elearning_platform.totara_platforms.title4"
        />
        <p>
          {{ $translate().elearning_platform.totara_platforms.text4 }}
        </p>
      </template>
    </SectiondubleCartoon>

    <VantagemServicos
      :id="'plataformas-totara-vantagens-servicos_'"
      :vantagens="vantagensServicos_"
      :background="'#d35640'"
      :color="'#fff'"
      :title="'Vantagens da Plataforma'"
    />

  <contactform />
  </div>
</template>

<script>
import app from '@/config/app.js'
import Banner from '~/components/banner.vue'
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue'
import Title from '~/components/elements/title.vue'
import Contactform from '~/components/contactform.vue'
import PlataformaseLearningController from '~/controllers/PlataformaseLearningController'
import IconText from '~/components/elements/icon-text.vue'
import { animeList } from '~/assets/js/animate'
import Section from '~/components/sections/section.vue'
import VantagemServicos from '~/components/elements/vantagemServicos.vue'
export default {
  components: {
    Banner,
    SectiondubleCartoon,
    Title,
    IconText,
    Section,
    VantagemServicos,
    Contactform,
  },

  /*data() {
    return {
      vantagens:
        PlataformaseLearningController.plataformasTotara.servicosVantagens,
      vantagensPlataforma:
        PlataformaseLearningController.plataformasTotara.vantagemPlataforma,
      vantagensServicos_:
        PlataformaseLearningController.plataformasTotara.vantagensServico_,
    }
  },*/
  mounted() {
    document.title = 'EDUdigital - Plataformas Totara'
  },

  methods: {
    animeIcons() {
      animeList(document.getElementsByClassName('vantagem'))
    },
  },



  data() {
    return {
      vantagens: [],
      vantagensPlataforma: [],
      vantagensServicos_:[]
    }
  },

  created() {
    this.loadVantagens();
  },

  methods: {
    loadVantagens() {
      const language = app().lang;
      if (language === 'en_GB') {
        this.vantagens = PlataformaseLearningController.plataformasTotara.servicosVantagensEN || messages[language].vantagens;
        this.vantagensPlataforma = PlataformaseLearningController.plataformasTotara.vantagemPlataformaEN || messages[language].vantagens;
        this.vantagensServicos_ = PlataformaseLearningController.plataformasTotara.vantagensServico_EN || messages[language].vantagens;
      } else {
        this.vantagens = PlataformaseLearningController.plataformasTotara.servicosVantagensPT || messages[language].vantagens;
        this.vantagensPlataforma = PlataformaseLearningController.plataformasTotara.vantagemPlataformaPT || messages[language].vantagens;
        this.vantagensServicos_ = PlataformaseLearningController.plataformasTotara.vantagensServico_PT || messages[language].vantagens;
      }
    }
  },
  

}
</script>

<style>
#plataformas-totara-servicos-vantagens-content {
  margin-top: 30px;
}
</style>
