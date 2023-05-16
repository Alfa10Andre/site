<template>
  <ul class="flags">
    <li v-for="flag in flags" :key="'flags-' + flag">
      <a @click="redirect(flag)"
        ><img :src="require(`~/assets/img/flags/${flag}.png`)" alt="" srcset=""
      /></a>
    </li>
  </ul>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      flags: ['ao', 'cv', 'mz', 'pt', 'en'],
    }
  },

  methods: {
    /**
     *
     * @param {string} flag
     */
    redirect(flag) {
      flag = flag.toUpperCase()

      let timerInterval
      Swal.fire({
        html: `Está a ser redirecionado para o site de ${flag} `,
        icon: 'info',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
        }

        switch (flag) {
          case 'PT':
            window.location = 'https://edudigital.pt'
            break
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.flags {
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
}

li {
  a {
    img {
      width: 25px;
    }
  }
  transition: all 400ms ease;
  &:hover {
    cursor: pointer;
  }
}

li:hover {
  transform: translateY(5px) !important;
}

@media screen and (max-width: 1159px) and (min-width: 900) {
  li {
    a {
      img {
        width: 20px;
      }
    }
  }
}
</style>
