<template>
  <div>
    <banner
      :background-image="require('~/assets/img/banner-bg.jpg')"
      :columns-template="'2fr 1fr'"
      :title="$translate().home.banner.title"
      :button-action-text="$translate().home.banner.buttonText"
      :button-action-href="'/fale-connosco'"
    >
      <template #text>
        {{ $translate().home.banner.text }}
      </template>
    </banner>

    <Section
      :id="'main-section'"
      :content-justify="'space-evenly'"
      :item-align="'center'"
      :background="'#fff'"
      :flex="'column'"
    >
      <Title
        :text-align="'center'"
        style="color: var(--color-cinza)"
        :title="$translate().home.services.title"
      />

      <intersect @enter.once="animeServices">
        <div class="index-nossos-serviços">
          <Icon
            v-for="(service, i) in links"
            :key="i + 'icon' + $id()"
            class="service"
            :img="service.img"
            :text="service.title"
            :to="service.to"
          />
        </div>
      </intersect>
    </Section>

    <Sectionduble
      :id="'index-inovacao-na-aprendizagem'"
      :background="'#d35640'"
      :img="require('static/cartoon/Inovao_na_aprendizagem.png')"
      :flex-direction="'row'"
      :color="'#fff'"
    >
      <template #text>
        <Title :title="$translate().home.innovation_in_learning.title" />
        <p>{{ $translate().home.innovation_in_learning.text }}</p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/case-studies">{{
            $translate().home.innovation_in_learning.buttonText
          }}</NuxtLink>
        </div>
      </template>
    </Sectionduble>

    <Sectionduble
      :id="'index-plataforma-elearning-personalizadas'"
      :background="'#eee'"
      :img="
        require('static/cartoon/index_plataforma_elearning_personalizada.png')
      "
      :flex-direction="'row-reverse'"
      :color="'#616161'"
    >
      <template #text>
        <Title
          :title="$translate().home.elearning_plataforms_customized.title"
        />
        <p>{{ $translate().home.elearning_plataforms_customized.text }}</p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/pkataformas_elearning">{{
            $translate().home.elearning_plataforms_customized.buttonText
          }}</NuxtLink>
        </div>
      </template>
    </Sectionduble>

    <Sectionduble
      :id="'index-curso-elearning-a-medida'"
      :background="'#00897b'"
      :img="require('static/cartoon/index_curso_elearning_a_medida.png')"
      :flex-direction="'row'"
      :color="'#fff'"
    >
      <template #text>
        <Title :title="$translate().home.curso_elearning_a_medida.title" />
        <p>{{ $translate().home.curso_elearning_a_medida.text }}</p>
        <div>
          <NuxtLink class="btn btn-gray" to="/curso-elearning-amedida">{{
            $translate().home.curso_elearning_a_medida.buttonText
          }}</NuxtLink>
        </div>
        <div>
          <NuxtLink
            class="btn btn-gray"
            to="/formacao-certificada/cursos-elearning-catalogo"
            >{{
              $translate().home.curso_elearning_a_medida.buttonText_
            }}</NuxtLink
          >
        </div>
      </template>
    </Sectionduble>

    <Sectionduble
      :id="'index-aplicacao-web-servico-academico'"
      :background="'#eee'"
      :img="
        require('static/cartoon/index_aplicacao_web_servicos_academicos.png')
      "
      :flex-direction="'row-reverse'"
      :color="'#616161'"
    >
      <template #text>
        <Title
          :title="$translate().home.web_application_academic_services.title"
        />
        <p>{{ $translate().home.web_application_academic_services.text }}</p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/app-servicos-web">{{
            $translate().home.web_application_academic_services.buttonText
          }}</NuxtLink>
        </div>
        <div>
          <NuxtLink class="btn btn-secondary" to="/">{{
            $translate().home.web_application_academic_services.buttonText_
          }}</NuxtLink>
        </div>
      </template>
    </Sectionduble>

    <Section :id="'plataformas-elearning-organograma'" :flex="'column'">
      <Title
        :title="$translate().home.how_we_work.title"
        style="margin-bottom: 50px"
      />
      <img
        src="https://edudigital.pt/home/images/Grupo_984.png"
        width=""
        alt=""
        srcset=""
      />
    </Section>
    <carousel/>
    <Contactform />
  </div>
</template>

<script>
import Vue from 'vue'
import banner from '~/components/banner.vue'
import carousel from '~/components/carousel.vue'
import Section from '~/components/sections/section.vue'
import Contactform from '~/components/contactform.vue'
import Title from '~/components/elements/title.vue'
import Icon from '~/components/elements/icon.vue'
import Sectionduble from '~/components/sections/sectiondubleCartoon.vue'
import { anime_ } from '~/assets/js/animate'
import intersect from '~/assets/js/vue-intersect'

export default Vue.extend({

  name: 'IndexPage',
  components: {
    banner,
    Section,
    Contactform,
    carousel,
    Title,
    Icon,
    Sectionduble,
    intersect,
  },

  data() {
    return {
      links: [
        {
          title: this.$translate().home.services.elearning_plataforms,
          to: '/plataformas-elearning',
          img: 'https://edudigital.pt/home/images/icone-edudigital-plataformas-novo-01.png',
        },
        {
          title: this.$translate().home.services.elearning_courses,
          to: 'curso-elearning-amedida',
          img: 'https://edudigital.pt/home/images/icone-edudigital-elearning-verde-20210309.png',
        },
        {
          title: this.$translate().home.services.certified_training,
          to: 'formacao-certificada',
          img: 'https://edudigital.pt/home/images/icone-edudigital-formacao-new-20210303-013x.png',
        },
        {
          title: this.$translate().home.services.Apps_and_web_services,
          to: 'app-servicos-web',
          img: 'https://edudigital.pt/home/images/icone-edudigital-apps-e-web-cinzento-013x.png',
        },
        {
          title: this.$translate().home.services.academic_software,
          to: 'softwares-academicos',
          img: 'https://edudigital.pt/home/images/icone-edudigital-gestao-academica-novo-20210303-013x.png',
        },
      ],
    }
  },
  mounted() {},
  methods: {
    animeServices() {
      anime_({
        targets: document.getElementsByClassName('icon-text'),
        translateY: [-50, 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 500,
        delay (el, i, l) {
          return i * 100
        },
      })
    },
  },
})
</script>

<style scoped lang="scss"></style>
