<template>
  <Section
    :id="'section-contactform'"
    class=""
    :background="'var(--color-verde)'"
  >
    <div v-show="loading" class="form-overlay">
      <v-progress-circular
        indeterminate
        size="50"
        color="#008072"
      ></v-progress-circular>
    </div>
    <intersect @enter.once="animeInputs">
      <div id="form-contact" class="form-contact">
        <Title
          class="form-title"
          :type="'sub'"
          :title="$translate().contactform.title"
        ></Title>

        <div id="form-content" class="form-content">
          <input
            v-model="name"
            :placeholder="$translate().contactform.name"
            type="text"
            class="form-control"
          />
          <input
            v-model="email"
            :placeholder="$translate().contactform.email"
            type="text"
            class="form-control"
          />
          <input
            v-model="tel"
            :placeholder="$translate().contactform.phone"
            type="text"
            class="form-control"
          />
          <input
            v-model="empresa"
            :placeholder="$translate().contactform.company"
            type="text"
            class="form-control"
          />
          <input
            v-model="cargo"
            :placeholder="$translate().contactform.office"
            type="text"
            class="form-control"
          />
          <input
            v-model="assunto"
            :placeholder="$translate().contactform.subjet"
            type="text"
            class="form-control"
          />
          <textarea
            id=""
            v-model="mensagem"
            :placeholder="$translate().contactform.message"
            class="form-control text-area"
            name=""
            cols="30"
            rows="10"
          ></textarea>
          <span>*{{ $translate().contactform.required_fields }}</span>
          <button type="button" class="btn btn-gray" @click="sendForm">
            {{ $translate().contactform.sendButton }}
          </button>
        </div>
      </div>
    </intersect>
  </Section>
</template>

<script>
import Swal from 'sweetalert2'
import Section from './sections/section.vue'
import Title from './elements/title.vue'
import { anime_ } from '~/assets/js/animate'
import Intersect from '~/assets/js/vue-intersect'
export default {
  components: { Section, Intersect, Title },

  data() {
    return {
      name: null,
      email: null,
      tel: null,
      empresa: null,
      cargo: null,
      assunto: null,
      mensagem: null,

      loading: false,
    }
  },

  mounted() {},

  methods: {
    sendForm() {
      const { valide, errors } = this.validateFields()
      let msg = ''

      if (valide) {
        if (this.validEmail(this.email)) {
          msg += 'Mensagem enviado com sucesso'
          this.loading = true

          this.$axios
            .post('https://mail.edudigital-learn.com', {
              name: this.name,
              email: this.email,
              tel: this.tel,
              empresa: this.empresa,
              cargo: this.cargo,
              assunto: this.assunto,
              mensagem: this.mensagem,
            })
            .then((res) => {
              res = res.data
              this.loading = false
              Swal.fire({
                title: res.success ? 'Sucesso' : 'Erro',
                html: res.success
                  ? this.$translate().contactform.messageSent
                  : this.$translate().contactform.messageUnSent,
                icon: res.success ? 'success' : 'error',
                confirmButtonColor: '#008072',
              }).then(() => {
                this.cleanInputs()
              })
            })
        } else {
          msg = 'Email inválido'
          Swal.fire({
            title: 'Atenção',
            html: msg,
            icon: 'warning',
            confirmButtonColor: '#008072',
          })

          this.loading = false
          s
        }
      } else {
        msg += this.$translate().contactform.required

        // errors.forEach(error => {
        //     msg+=`<br>${error}`
        // });

        Swal.fire({
          title: 'Atenção',
          html: msg,
          icon: 'warning',
          confirmButtonColor: '#008072',
        })
      }
    },

    validateFields() {
      let valide = true
      const errors = []

      if (!this.name) {
        valide = false
        errors.push('nome')
      }

      if (!this.email) {
        valide = false
        errors.push('email')
      }

      if (!this.tel) {
        valide = false
        errors.push('telefone')
      }

      if (!this.assunto) {
        valide = false
        errors.push('assunto')
      }

      if (!this.mensagem) {
        valide = false
        errors.push('mensagem')
      }

      return { valide, errors }
    },

    validEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },

    cleanInputs() {
      this.name = null
      this.email = null
      this.tel = null
      this.empresa = null
      this.cargo = null
      this.assunto = null
      this.mensagem = null
    },

    animeInputs() {
      anime_
        .timeline({
          targets: document.querySelector('#form-contact h1'),
          translateX: [-50, 0],
          opacity: [0, 1],
          easing: 'linear',
          duration: 400,
        })
        .add({
          targets: document.querySelector('#form-content')?.children,
          translateX: [-50, 0],
          opacity: [0, 1],
          easing: 'linear',
          duration: 300,
          delay (el, i, l) {
            return i * 100
          },
        })
    },
  },
}
</script>

<style scoped lang="scss">
#section-contactform {
  position: relative;
}
.form-contact {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
  align-items: center;
  border-width: 2px;

  border-color: green;

  .form-title {
    margin-bottom: 15px;
    font-weight: 500;
  }
}

.form-content {
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  button {
    border: none;
    // padding: 15px 30%;
    width: 50%;
    max-width: 200px;
    padding: 15px 0;
  }
}
.form-control {
  transition: border, 200ms ease;
  padding: 0 10px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--color-light);
  outline-color: var(--color-verde);
  // color: var(--color-cinza);
  color: #fff !important;
  font-size: 1rem;
  margin-bottom: 15px;
  &::placeholder {
    color: #fff;
  }
  &:focus {
    border: 2px solid var(--color-cinza);
    outline: none;
  }
}

.text-area {
  padding: 10px 10px;
  height: auto;
  resize: none;
}

.form-overlay {
  position: absolute;
  width: 100%;
  background: rgba($color: #000, $alpha: 0.5);
  height: 100%;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 700px) {
  .form-content {
    width: 100%;
  }
}
</style>
