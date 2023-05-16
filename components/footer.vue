<template>
  <footer>
    <div id="footer-top">
      <div class="fast-access-menu">
        <ul class="menu-footer">
          <li><a class="link">O que fazemos</a></li>
          <li>
            <NuxtLink to="/plataformas-elearning" class="link">{{
              $translate().menus.elearning_platforms
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/curso-elearning-amedida" class="link">{{
              $translate().menus.elearning_courses
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/formacao-certificada" class="link">{{
              $translate().menus.certified_training
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/app-servicos-web" class="link">{{
              $translate().menus.apps_e_web_services
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/softwares-academicos" class="link"
              >{{ $translate().menus.academic_software }}s</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="fast-access-menu">
        <ul class="menu-footer">
          <li>
            <NuxtLink to="/sobre-nos" class="link">{{
              $translate().menus.about_us
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/fale-connosco" class="link">{{
              $translate().menus.talk_to_us
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/case-studies" class="link">{{
              $translate().menus.case_studies
            }}</NuxtLink>
          </li>
          <li>
            <a href="https://recrutamento.edudigital-learn.com/" class="link"
              >Recrutamento
              <v-icon color="#616161" size="17" dark>mdi-open-in-new</v-icon></a
            >
          </li>
        </ul>
      </div>
      <div class="fast-access-menu">
        <ul class="menu-footer">
          <li><a href="#" class="link">Plataformas</a></li>
          <li>
            <NuxtLink
              to="/plataformas-elearning/plataformas-opens-source"
              class="link"
              >{{
                $translate().menus._elearning_platforms.open_source_platforms
              }}</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/plataformas-elearning/plataformas-totara"
              class="link"
              >{{
                $translate().menus._elearning_platforms.totara_platforms
              }}</NuxtLink
            >
          </li>
          <li>
            <a href="#" class="link"
              >Área Reservada
              <v-icon color="#616161" size="17" dark>mdi-open-in-new</v-icon></a
            >
          </li>
          <li>
            <a href="#" class="link"
              >Agendamento
              <v-icon color="#616161" size="17" dark>mdi-open-in-new</v-icon></a
            >
          </li>
          <li>
            <a href="#" class="link"
              >Marketplace
              <v-icon color="#616161" size="17" dark>mdi-open-in-new</v-icon></a
            >
          </li>
        </ul>
      </div>
      <div class="fast-access-menu">
        <ul class="menu-footer">
          <li><a href="#" class="link">Contacte-nos</a></li>
          <li>
            <a href="#" class="link"
              >Portugal - Oeiras
              <v-icon color="#616161" size="17" dark>mdi-open-in-new</v-icon></a
            >
          </li>
          <li>
            <a href="#" class="link"
              >Moçambique - Maputo
              <v-icon color="#616161" size="17" dark>mdi-open-in-new</v-icon></a
            >
          </li>
          <li>
            <a href="#" class="link"
              >Angola - Luanda
              <v-icon color="#616161" size="17" dark>mdi-open-in-new</v-icon></a
            >
          </li>
          <li>
            <a href="#" class="link"
              >Cabo Verde - Praia
              <v-icon color="#616161" size="17" dark>mdi-open-in-new</v-icon></a
            >
          </li>
        </ul>
      </div>
      <div class="footer-brand">
        <nuxt-link to="/"><Logo :width="200" /></nuxt-link>
        <p><strong>Encontre-nos nas nossas redes sociais</strong></p>
        <div class="social">
          <a target="_blank" href="https://www.facebook.com/EDUdigitalPT/"
            ><img width="30" src="~/assets/img/social/facebook.png" alt=""
          /></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/edudigital/mycompany/"
            ><img width="30" src="~/assets/img/social/linkedin.png" alt=""
          /></a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCxgJZFGXdhDZKVUCDChmmDw"
            ><img width="30" src="~/assets/img/social/youtube.png" alt=""
          /></a>
          <a target="_blank" href="https://www.instagram.com/edudigital_learn/"
            ><img width="30" src="~/assets/img/social/instagram.png" alt=""
          /></a>
        </div>
      </div>
    </div>
    <div id="footer-bottom">
      <p>&copy; Copyright EDUdigital | Todos direitos reservados</p>
    </div>
  </footer>
</template>

<script>
import Logo from './logo.vue'
export default {
  components: { Logo },
}
</script>

<style lang="scss">
footer {
  display: grid;
  grid-template-rows: 6fr 1fr;
  grid-template-columns: 1fr;
  background: var(--color-light);
  padding: 15px;

  div {
    padding: 10px 0;
  }
}

#footer-top {
  display: flex;
  justify-content: space-evenly;
}

#footer-bottom {
  display: flex;
  justify-content: center;

  p {
    color: var(--color-cinza);
  }
}

.menu-footer {
  display: flex;
  flex-direction: column;
  text-align: center;

  li:first-child {
    font-weight: 700;
  }
  li {
    padding: 6px 0;

    a {
      color: var(--color-cinza);
    }
  }
}

.footer-brand {
  text-align: center;
  p {
    color: var(--color-cinza);
  }
}

.social {
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    transition: all, 100ms ease;
    padding: 0 5px;

    &:hover {
      transform: scale(1.1);
    }
  }
}

@media screen and (max-width: 950px) {
  .fast-access-menu {
    display: none;
  }
}
</style>
