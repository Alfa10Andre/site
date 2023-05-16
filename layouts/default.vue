<template>
  <div class="app">
    <navbar id="navbar" ref="navbar" class="" />
    <Magicnavbar id="magicnavbar" @fixed="addPadding" />
    <Nuxt id="body-content" ref="body_content" />
    <Footer />

    <transition name="fade" mode="out-in">
      <a
        v-show="!onTop"
        class="btn btn-primary btnGoTop"
        href=""
        @click="
          (e) => {
            goTop(e)
          }
        "
        ><fa :icon="['fas', 'fa-circle-arrow-up']"
      /></a>
    </transition>

    <BottomNav id="bottomNav" :route="route" />
  </div>
</template>

<script>
import navbar from '~/components/navbar/navbar.vue'
import Footer from '~/components/footer.vue'
import Magicnavbar from '~/components/navbar/magicnavbar.vue'
import BottomNav from '~/components/navbar/bottomNav.vue'
export default {
  components: { navbar, Footer, Magicnavbar, BottomNav },

  data() {
    return {
      onTop: true,
      route: '/',
    }
  },

  watch: {
    route(_new, _hold) {
      this.route = _new
    },
  },

  mounted() {
    window.addEventListener('scroll', (e) => {
      const scrollTop = window.scrollY

      const navbar = document.getElementById('navbar')

      if (scrollTop > 100) {
        navbar.classList.add('translated')
      } else {
        navbar.classList.remove('translated')
      }

      if (scrollTop > 500) {
        // navbar.classList.add("translated");

        this.onTop = false
      } else {
        // navbar.classList.remove("translated");

        this.onTop = true
      }
    })
  },

  methods: {
    goTop(e) {
      e.preventDefault()

      window.scrollTo({ top: 0, behavior: 'smooth' })
    },

    addPadding() {
      const padding = document.getElementById('body-content').style.paddingTop
      document.getElementById('body-content').style.paddingTop =
        padding == '61px' ? '0' : '61px'
    },
  },
}
</script>

<style lang="scss">
#navbar {
  transition: all, 400ms;
}

.translated {
  transform: translateY(-90px);
}

.paddinned {
  margin-top: 61px;
}

#bottomNav {
  display: none;
}

#magicnavbar {
  display: none;
}

#body-content {
  transition: all, 400ms ease;
  margin-top: 151px;
}

@media screen and (max-width: 950px) {
  #body-content {
    margin-top: 0;
  }
  #magicnavbar {
    display: block;
  }

  #bottomNav {
    display: block;
  }

  #navbar {
    display: none;
  }

  .app {
    padding-bottom: 50px;
  }
}
</style>
