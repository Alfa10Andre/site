<template>
  <div>
    <Banner
      :background-image="'	https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
      :title="$translate().elearning_platform.banner.title3"
      :columns-template="'2fr 1fr'"
      :button-action-text="$translate().elearning_platform.banner.buttonText2"
      :button-action-href="'/fale-connosco'"
    >
      <template #text>
        {{ $translate().elearning_platform.banner.text3 }}
      </template>
    </Banner>

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
import PlataformaseLearningController from '~/controllers/PlataformaseLearningController'
import VantagemServicos from '~/components/elements/vantagemServicos.vue'
import Contactform from '~/components/contactform.vue'
export default {
  components: { VantagemServicos, Contactform },
  data() {
    return {
      vantagens:
        PlataformaseLearningController.hostingGerido.servicosVantagens_hosting,
    }
  },
}
</script>

<style></style>
