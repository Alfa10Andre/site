<template>
  <v-bottom-navigation v-model="value" class="menuBottom">
    <v-btn value="/" @click="goTo">
      <span>Inicio</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn value="/fale-connosco" @click="goTo">
      <span>Fale Connosco</span>
      <v-icon>mdi-message-text</v-icon>
    </v-btn>

    <v-btn value="/sobre-nos" @click="goTo">
      <span>Sobre nós</span>
      <v-icon>mdi-information</v-icon>
    </v-btn>

    <v-btn value="/case-studies" @click="goTo">
      <span>Case Studies</span>
      <v-icon>mdi-domain</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    }
  },
  watch: {
    value(_new, _hold) {
      // this.$router.push(_new);
    },
    $route(_new, _old) {
      // this.value = _new.path
    },
  },

  mounted() {
    this.value = this.$route.path
  },

  methods: {
    goTo() {
      setTimeout(() => {
        this.$router.push(this.value)
      }, 20)
    },
  },
}
</script>

<style>
.v-bottom-navigation {
  display: none !important;
  position: fixed;
  bottom: 0;
  box-shadow: -1px -1px 10px rgba(80, 80, 80, 0.26) !important;
  z-index: 9999999;
  /* padding: 30px auto; */
  display: flex;
  align-items: center;
  /* height: 60px!important; */
}

@media screen and (max-width: 950px) {
  .v-bottom-navigation {
    display: flex !important;
    width: 100%;
  }
}
</style>
