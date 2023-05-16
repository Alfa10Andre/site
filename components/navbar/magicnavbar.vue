<template>
  <b-navbar :shadow="true" wrapper-class="magicnavbar">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <Logo :width="120" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-dropdown
        tag="nuxt-link"
        :to="{ path: '/plataformas-elearning' }"
        label="Plataformas eLearning"
      >
        <b-navbar-item
          tag="nuxt-link"
          :to="{ path: '/plataformas-elearning/plataformas-open-source' }"
        >
          Plataformas Open-Source
        </b-navbar-item>
        <b-navbar-item
          tag="nuxt-link"
          :to="{ path: '/plataformas-elearning/plataformas-totara' }"
        >
          Plataformas Totara
        </b-navbar-item>
        <b-navbar-item href="#"> Hosting gerido & Cloud </b-navbar-item>
      </b-navbar-dropdown>

      <b-navbar-dropdown
        tag="nuxt-link"
        :to="{ path: '/curso-elearning-amedida' }"
        label="Cursos de eLearning à medida"
      >
        <b-navbar-item tag="nuxt-link" :to="{ path: '/fale-connosco' }">
          Produção eLearning Personalizado
        </b-navbar-item>
        <b-navbar-item href="#"> Motion Grafics e Gamification </b-navbar-item>
      </b-navbar-dropdown>

      <b-navbar-dropdown
        tag="nuxt-link"
        :to="{ path: '/' }"
        label="Formação Certificada"
      >
        <b-navbar-item tag="nuxt-link" :to="{ path: '/fale-connosco' }">
          Cursos eLearning de Catálogo
        </b-navbar-item>
        <b-navbar-item href="#">
          Consultoria Pedagógica & Formação
        </b-navbar-item>
        <b-navbar-item href="#">
           Educação Executiva & Cursos Udemy
        </b-navbar-item>
      </b-navbar-dropdown>

      <b-navbar-dropdown
        tag="nuxt-link"
        :to="{ path: '/' }"
        label="APPs & Serviços Web"
      >
        <b-navbar-item tag="nuxt-link" :to="{ path: '/fale-connosco' }">
          Integração e Migração de Dados
        </b-navbar-item>
        <b-navbar-item href="#">
          Config Avançadas e Autenticação
        </b-navbar-item>
        <b-navbar-item href="#"> Sistemas eLibrary </b-navbar-item>
      </b-navbar-dropdown>

      <b-navbar-dropdown
        tag="nuxt-link"
        :to="{ path: '/' }"
        label="Softwares Académicos"
      >
        <b-navbar-item tag="nuxt-link" :to="{ path: '/fale-connosco' }">
          Sistema Gestão eSchooling
        </b-navbar-item>
        <b-navbar-item href="#"> Sistema Anti-Plágio </b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template #end>
      <Flags
        style="
          width: 80%;
          margin-left: auto;
          margin-right: auto;
          margin-top: 30px;
        "
      />
    </template>
  </b-navbar>
</template>

<script>
import Logo from '../logo.vue'
import Flags from '../flags.vue'

export default {
  components: { Logo, Flags },
}
</script>

<style lang="scss" scoped>
#magicnavbar {
  a {
    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
