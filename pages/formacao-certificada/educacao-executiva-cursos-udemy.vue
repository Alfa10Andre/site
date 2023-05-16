<template>
    <div>
      <Banner
        :background-image="'https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
        :title="$translate().formacao_certificada.banner.title3"
        :columns-template="'2fr 1fr'"
        :button-action-text="$translate().formacao_certificada.banner.buttonText3"
        :button-action-href="'/fale-connosco'"
      >
        <template #text>
          {{$translate().formacao_certificada.banner.text3}}
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
          <Title :title="$translate().formacao_certificada.cursos_udemy.title" />
          <p>
            {{$translate().formacao_certificada.cursos_udemy.text}}
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
  import FormacaoCertificadaController from '~/controllers/FormacaoCertificadaController'
  import VantagemServicos from '~/components/elements/vantagemServicos.vue'
  import Contactform from '~/components/contactform.vue'
  import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue'
  import Title from '~/components/elements/title.vue'
  export default {
    components: { VantagemServicos, Contactform, SectiondubleCartoon, Title },

    data() {
    return {
      //vantagens: SoftwareAcademicoController.eSchooling.vantagens,
      vantagens: []
    }
    },

    created() {
      //const language = this.app.lang;
      const language = app().lang;
      if (language === 'en_GB') {
        this.vantagens = FormacaoCertificadaController.cursosUdemy.vantagensEN || messages[language].vantagens;
      } else {
        this.vantagens = FormacaoCertificadaController.cursosUdemy.vantagensPT || messages[language].vantagens;
      }
    },
  }
  </script>
  
  <style></style>
  