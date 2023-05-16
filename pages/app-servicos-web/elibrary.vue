<template>
  <main>
    <Banner
      :background-image="'	https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
      :title="$translate().apps_servicos_web.banner.title3"
      :columns-template="'2fr 1fr'"
      :button-action-text="$translate().apps_servicos_web.banner.button_action_text"
      :button-action-href="'/fale-connosco'"
    >
      <template #text>
        {{$translate().apps_servicos_web.banner.text3}}
      </template>
    </Banner>

    <SectiondubleCartoon
      :id="'configuracao-avancada'"
      :background="'#fff'"
      :img="'https://edudigital.pt/home/images/eLibrary_blco1.png'"
      :flex-direction="'row'"
      :color="'#616161'"
    >
      <template #text>
        <Title :title="$translate().apps_servicos_web.library_system.title1" />
        <p>
          {{$translate().apps_servicos_web.library_system.text1}}
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
    

    <VantagemServicos
      :id="'integracao-migracao-dados-vantagens'"
      :vantagens="vantagens"
      :background="'#D35640'"
      :color="'#fff'"
      :title="'Serviços e Vantagens'"
    />
    <contactform />
   </main>
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
      //vantagens: SoftwareAcademicoController.eSchooling.vantagens,
      vantagens: []
    }
  },

  created() {
    //const language = this.app.lang;
    const language = app().lang;
    if (language === 'en_GB') {
      this.vantagens = AppServicosWebController.elibrary.vantagensEN || messages[language].vantagens;
    } else {
      this.vantagens = AppServicosWebController.elibrary.vantagensPT || messages[language].vantagens;
    }
  },
}
</script>

<style></style>
