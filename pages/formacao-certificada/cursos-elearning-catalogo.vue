<template>
  <main>
    <Banner
      :title="$translate().formacao_certificada.banner.title1"
      :background-image="'https://edudigital.pt//images/top-plataformaseLearning%2020210318.png'"
      :button-action-text="$translate().formacao_certificada.banner.buttonText1"
      :button-action-href="'/fale-connosco'"
      :columns-template="'2fr 1fr'"
    >
      <template #text>
        {{$translate().formacao_certificada.banner.text1}}
      </template>
    </Banner>

    <Section :id="'curso-elearning-catalogo'" :flex="'column'">
      <Title :title="'Catálogo de cursos eLearning'" />

      <div class="catalogo-group">
        <Catalogo
          v-for="(catalogo, i) in catalogos"
          :key="i + $id"
          :img="catalogo.img"
          :title="catalogo.title"
        >
          {{ catalogo.text }}
        </Catalogo>
      </div>
    </Section>

    <VantagemServicos
        :id="'cursos-elearning-catalogo-servicos-vantagens'"
        :vantagens="ServicosVantagens"
        :background="'#D35640'"
        :color="'#fff'"
        :title="'Serviços e Vantagens'"
    />
      <Contactform />
  </main>
</template>

<script>
import app from '@/config/app.js'
import Catalogo from '../../components/elements/catalogo.vue'
import VantagemServicos from '~/components/elements/vantagemServicos.vue'
import Section from '~/components/sections/section.vue'
import Title from '~/components/elements/title.vue'
import FormacaoCertificadaController from '~/controllers/FormacaoCertificadaController'

export default {
  components: { Section, Title, Catalogo, VantagemServicos },

  data() {
    return { 
      catalogos: [],
      ServicosVantagens: []
    }
  },

  created() {
    this.loadVantagens();
  },

  methods: {
    loadVantagens() {
      const language = app().lang;
      if (language === 'en_GB') {
        this.catalogos = FormacaoCertificadaController.cursoElearningCatalogo.catalogosEN || messages[language].vantagens;
        this.ServicosVantagens = FormacaoCertificadaController.cursoElearningCatalogo.ServicosVantagensEN || messages[language].vantagens;
      } else {
        this.catalogos = FormacaoCertificadaController.cursoElearningCatalogo.catalogosPT || messages[language].vantagens;
        this.ServicosVantagens = FormacaoCertificadaController.cursoElearningCatalogo.ServicosVantagensPT || messages[language].vantagens;
      }
    }
  },

}
</script>

<style>
.catalogo-group {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 50px;
}

@media screen and (max-width: 950px) {
  .catalogo-group {
    justify-content: center !important;
  }
}
</style>
