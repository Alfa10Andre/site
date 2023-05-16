<template>
  <div>
    <Banner
      :background-image="'	https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
      :title="'Deteção e prevenção do Plágio'"
      :columns-template="'2fr 1fr'"
      :button-action-text="'Agenda a sua reunião'"
      :button-action-href="'/fale-connosco'"
    >
      <template #text>
        O Ouriginal é um sistema anti-plágio destinado às instituições de ensino
        superior e outras organizações que, através do reconhecimento de texto
        com machine learning, analisa documentos e deteta, previne e lida com o
        plágio, em trabalhos ou teses submetidas através de um LMS.
        <img
          style="display: block; margin-top: 15px"
          src="https://edudigital.pt/home/images/RGB_our_logo_full_color.png"
          width="130"
          alt=""
        />
      </template>
    </Banner>

    <VantagemServicos
      :id="'hosting-gerido-servicos-vantagens'"
      :vantagens="processoDetencao"
      :background="'#d35640'"
      :color="'#fff'"
      :title="'Processo de detenção de plágio'"
    />

    <VantagemServicos
      :id="'hosting-gerido-servicos-vantagens'"
      :vantagens="vantagens"
      :background="'#fff'"
      :color="'#616161'"
      :title="'Serviços e Vantagens'"
    />

    <Contactform />
  </div>
</template>

<script>
import VantagemServicos from '~/components/elements/vantagemServicos.vue'
import Contactform from '~/components/contactform.vue'
import SoftwareAcademicoController from '~/controllers/SoftwareAcademicoController'
export default {
  components: { VantagemServicos, Contactform },
  data() {
    return {
      processoDetencao: SoftwareAcademicoController.antiPlagio.processoDetencao,
      vantagens: SoftwareAcademicoController.antiPlagio.vantagens,
    }
  },
}
</script>

<style></style>
