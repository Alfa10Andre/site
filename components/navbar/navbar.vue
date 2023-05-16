<template>
  <header>
    <div id="top">
      <div class="top-1">
        <flags />
      </div>
      <div class="top-2">
        <NuxtLink to="/">
          <logo :width="150" />
        </NuxtLink>
      </div>
      <div class="top-3">
        <nav>
          <ul class="menus-top">
            <li :class="{ active: menuActive == '/fale-connosco' }">
              <NuxtLink class="menu link" to="/fale-connosco">{{
                $translate().menus.talk_to_us
              }}</NuxtLink>
            </li>
            <li :class="{ active: menuActive == '/sobre-nos' }">
              <NuxtLink class="menu link" to="/sobre-nos">{{
                $translate().menus.about_us
              }}</NuxtLink>
            </li>
            <li :class="{ active: menuActive == '/case-studies' }">
              <NuxtLink class="menu link" to="/case-studies">{{
                $translate().menus.case_studies
              }}</NuxtLink>
            </li>
            <li>
              <a
                class="menu link"
                target="_blank"
                href="https://marketplace.edudigital-learn.com"
                >{{ $translate().menus.marketplace }}
                <v-icon size="17">mdi-open-in-new</v-icon></a
              >
            </li>
            <li>
              <NuxtLink class="btn btn-primary btn-menu" to="/"
                >{{ $translate().menus.elearning }}
                <v-icon size="17" dark>mdi-open-in-new</v-icon></NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div id="bottom">
      <ul class="menu-bottom">
        <li
          class="drop-parent"
          :class="{ active: menuActive == '/plataformas-elearning' }"
        >
          <NuxtLink to="/plataformas-elearning" class="menu link">{{
            $translate().menus.elearning_platforms
          }}</NuxtLink>
          <div class="drop-down">
            <ul>
              <li>
                <NuxtLink
                  class="menu link"
                  to="/plataformas-elearning/plataformas-open-source"
                  >{{
                    $translate().menus._elearning_platforms
                      .open_source_platforms
                  }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="menu link"
                  to="/plataformas-elearning/plataformas-totara"
                  >{{
                    $translate().menus._elearning_platforms.totara_platforms
                  }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="menu link"
                  to="/plataformas-elearning/hosting-gerido"
                  >{{
                    $translate().menus._elearning_platforms
                      .managed_hosting_cloud
                  }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </li>
        <li
          class="drop-parent"
          :class="{ active: menuActive == '/curso-elearning-amedida' }"
        >
          <NuxtLink to="/curso-elearning-amedida" class="menu link">{{
            $translate().menus.elearning_courses
          }}</NuxtLink>
          <div class="drop-down">
            <ul>
              <li>
                <NuxtLink
                  class="menu link"
                  to="/curso-elearning-amedida/elearning-personalizado"
                  >{{
                    $translate().menus._elearning_courses.elearning_production
                  }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="menu link"
                  to="/curso-elearning-amedida/motion-gamification"
                  >{{
                    $translate().menus._elearning_courses.video_motion_graphics
                  }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </li>

        <li
          class="drop-parent"
          :class="{ active: menuActive == '/formacao-certificada' }"
        >
          <NuxtLink class="menu link" to="/formacao-certificada">{{
            $translate().menus.certified_training
          }}</NuxtLink>
          <div class="drop-down">
            <ul>
              <li>
                <NuxtLink
                  class="menu link"
                  to="/formacao-certificada/cursos-elearning-catalogo"
                  >{{
                    $translate().menus._certified_training
                      .catalog_elearning_courses
                  }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="menu link"
                  to="/formacao-certificada/consultoria-pedagogica-formacao"
                  >{{
                    $translate().menus._certified_training
                      .pedagogical_consulting_training
                  }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="menu link"
                  to="/formacao-certificada/educacao-executiva-cursos-udemy"
                  >{{
                    $translate().menus._certified_training
                      .executive_education_udemy_course
                  }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </li>

        <li
          class="drop-parent"
          :class="{ active: menuActive == '/app-servicos-web' }"
        >
          <NuxtLink class="menu link" to="/app-servicos-web">{{
            $translate().menus.apps_e_web_services
          }}</NuxtLink>
          <div class="drop-down">
            <ul>
              <li>
                <NuxtLink
                  class="menu link"
                  to="/app-servicos-web/integracao-migracao-dados"
                  >{{
                    $translate().menus._apps_e_web_services
                      .system_integration_data_migration
                  }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="menu link"
                  to="/app-servicos-web/configuracao-avancada"
                  >{{
                    $translate().menus._apps_e_web_services
                      .advanced_settings_authentication
                  }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="menu link" to="/app-servicos-web/elibrary">{{
                  $translate().menus._apps_e_web_services.elibrary_system
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </li>

        <li
          class="drop-parent"
          :class="{ active: menuActive == '/softwares-academicos' }"
        >
          <NuxtLink class="menu link" to="/softwares-academicos">{{
            $translate().menus.academic_software
          }}</NuxtLink>
          <div class="drop-down">
            <ul>
              <li>
                <NuxtLink
                  class="menu link"
                  to="/softwares-academicos/e-schooling"
                  >{{
                    $translate().menus._academic_software.eSchooling_system
                  }}</NuxtLink
                >
              </li>
              <!--
              <li>
                <NuxtLink
                  class="menu link"
                  to="/softwares-academicos/anti-plagio"
                  >{{
                    $translate().menus._academic_software.anti_plagiarism_sytem
                  }}</NuxtLink
                >
              </li>-->
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import Flags from '../flags.vue'
import logo from '../logo.vue'
export default {
  components: { logo, Flags },

  computed: {
    /**
     * var String:route
     */
    menuActive() {
      let route = this.$route.path
      route = route.split('/')
      return '/' + route[route.length - 1]
    },
  },
}
</script>

<style scoped lang="scss">
.active {
  & > a {
    transform: scale(1.3);
    color: var(--color-verde-light) !important;
  }
  border-bottom-color: var(--color-vermelho) !important;
}
.menus-top {
}

.btn-menu {
  padding: 10px 40px;
}

header {
  display: grid;
  height: 150px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;

  // transform: translateY(-90px);

  grid-template-rows: 3fr 2fr;
  grid-template-columns: 1fr;

  box-shadow: var(--shadow-md);

  div {
    display: flex;
    padding: 5px 10px;
  }

  // z-index: 999;
}

#bottom {
  background: var(--color-light);
  ul {
    display: flex;
    width: 100%;
    flex-direction: row;
    // border: 1px solid red;
    justify-content: space-around;
    list-style: none;
    align-items: center;

    li {
      display: flex;
      justify-content: center;
      flex: 1;
      text-align: center;
      a {
        width: 100%;
        color: var(--color-verde);
        font-size: 0.85rem;
      }
    }
  }
  // box-shadow: 1px 3px 6px var(--color-cinza-light);
}

#top {
  flex-direction: row;
  background: #fff;
  div {
    display: flex;
    // border: 1px solid red;
  }

  .top-1 {
    flex: 1;
    align-items: center;
  }

  .top-2 {
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .top-3 {
    flex: 6;
    align-items: center;
    nav {
      width: 100%;
      ul {
        display: flex;
        justify-content: space-around;

        li {
          border-bottom: 3px solid transparent;
          box-sizing: border-box;

          &:hover {
            border-bottom-color: var(--color-vermelho);
          }
        }
      }
    }
  }
}
</style>
