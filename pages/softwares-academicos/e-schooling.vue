<template>
  <div>
    <Banner
      :background-image="'	https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
      :title ="$translate().software_academico.banner.title1" 
      :columns-template="'2fr 1fr'"
      :button-action-text="$translate().software_academico.banner.buttonText1"
      :button-action-href="'/fale-connosco'"
    >
     

        <template #text>
          {{$translate().software_academico.banner.text1}}
         </template>
        <img
          style="display: block; margin-top: 15px"
          src="https://edudigital.pt/home/images/eschooling-branco.png"
          width="130"
          alt=""
        />
      
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
import app from '@/config/app.js'
import VantagemServicos from '~/components/elements/vantagemServicos.vue'
import Contactform from '~/components/contactform.vue'
import SoftwareAcademicoController from '~/controllers/SoftwareAcademicoController'
export default {
  components: { VantagemServicos, Contactform },
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
      this.vantagens = SoftwareAcademicoController.eSchooling.vantagensEN || messages[language].vantagens;
    } else {
      this.vantagens = SoftwareAcademicoController.eSchooling.vantagensPT || messages[language].vantagens;
    }
  },
}
</script>

<style></style>
