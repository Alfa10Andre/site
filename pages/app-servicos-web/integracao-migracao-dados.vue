<template>
  <div>
    <Banner
      :background-image="'	https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
      :title ="$translate().apps_servicos_web.banner.title1" 
      :columns-template="'2fr 1fr'"
      :button-action-text="$translate().apps_servicos_web.banner.button_action_text"
      :button-action-href="'/fale-connosco'"
    >
      <template #text>
        <p>
          {{$translate().apps_servicos_web.banner.text1}}
        </p>
      </template>
    </Banner>

    <SectiondubleCartoon
      :id="'integracao-migracao-dados-integracao'"
      :background="'#fff'"
      :img="'https://edudigital.pt/home/images/integrao-01.png'"
      :flex-direction="'row'"
      :color="'#616161'"
    >
      <template #text>
        <Title :title="$translate().apps_servicos_web.software_integration.title1" />
        <p>
          {{$translate().apps_servicos_web.software_integration.text1}}
        </p>
      </template>
    </SectiondubleCartoon>

    <VantagemServicos
      :id="'integracao-migracao-dados-vantagens'"
      :vantagens="integracaoVantagens"
      :background="'#D35640'"
      :color="'#fff'"
      :title="'Serviços e Vantagens'"
    />

    <SectiondubleCartoon
      :id="'integracao-migracao-dados-migracao'"
      :background="'#fff'"
      :img="'https://edudigital.pt/home/images/migrao-01.png'"
      :flex-direction="'row-reverse'"
      :color="'#616161'"
    >
      <template #text>
        <Title :title="$translate().apps_servicos_web.data_migration.title" />
        <p>
          {{$translate().apps_servicos_web.data_migration.text1}}
          
        </p>

      </template>
    </SectiondubleCartoon>

    <VantagemServicos
      :id="'migracao-dados-vantagens'"
      :vantagens="migracaoVantagem"
      :background="'#D35640'"
      :color="'#fff'"
      :title="'Serviços e Vantagens'"
    />

    <Contactform />
  </div>
</template>

<script>
import app from '@/config/app.js'
import VantagemServicos from '~/components/elements/vantagemServicos.vue'
import Contactform from '~/components/contactform.vue'
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue'
import Title from '~/components/elements/title.vue'
import AppServicosWebController from '~/controllers/AppServicosWebController'
export default {
  components: { VantagemServicos, Contactform, SectiondubleCartoon, Title },
  data() {
    return {
      integracaoVantagens: [],
      migracaoVantagem: []
    }
  },

  created() {
    this.loadVantagens();
  },

  methods: {
    loadVantagens() {
      const language = app().lang;
      if (language === 'en_GB') {
        this.integracaoVantagens = AppServicosWebController.integracao.vantagensEN || messages[language].vantagens;
        this.migracaoVantagem = AppServicosWebController.migracao.vantagensEN || messages[language].vantagens;
      } else {
        this.integracaoVantagens = AppServicosWebController.integracao.vantagensPT || messages[language].vantagens;
        this.migracaoVantagem = AppServicosWebController.migracao.vantagensPT || messages[language].vantagens;
      }
    }
  },
}
</script>

<style></style>
