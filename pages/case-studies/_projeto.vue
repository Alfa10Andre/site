<template>
  <main>
    <Section
      :id="'case-studie-container'"
      style="color: #fff"
      :flex="'column'"
      :background="'#D35B40'"
    >
      <Title :title="projeto.title" style="margin-bottom: 30px" />

      <Sectiondouble
        :no-padding="true"
        :img-width="500"
        :flex-direction="'row-reverse'"
      >
        <template #left>
          <img :src="projeto.img" width="" class="case-studie-image" alt="" />
        </template>

        <template #right>
          <div class="dados-container" style="">
            <p>
              <strong class="keys">Nome do cliente:</strong>
              {{ projeto.cliente }}
            </p>
            <p><strong class="keys">País/Região:</strong> {{ projeto.pais }}</p>
            <p><strong class="keys">Setor:</strong> {{ projeto.setor }}</p>
            <p><strong class="keys">Assunto:</strong> {{ projeto.assunto }}</p>
            <p><strong class="keys">Público alvo</strong> {{ projeto.alvo }}</p>
          </div>
        </template>
      </Sectiondouble>

      <div style="width: 97% !important; margin-top: 30px">
        <v-expansion-panels accordion focusable>
          <v-expansion-panel>
            <v-expansion-panel-header> Enquadramento </v-expansion-panel-header>
            <v-expansion-panel-content v-html="projeto.enquadramento">
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header> Desafios </v-expansion-panel-header>
            <v-expansion-panel-content v-html="projeto.desafios">
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header> A solução </v-expansion-panel-header>
            <v-expansion-panel-content v-html="projeto.solucao">
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header> Resultado </v-expansion-panel-header>
            <v-expansion-panel-content v-html="projeto.resultado">
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </Section>
  </main>
</template>

<script>
import CaseStudieController from './CaseStudieController'
import Section from '~/components/sections/section.vue'
import Title from '~/components/elements/title.vue'
import Sectiondouble from '~/components/sections/sectiondouble.vue'
export default {
  components: { Section, Title, Sectiondouble },
  data() {
    return {
      projeto: '',
    }
  },
  mounted() {
    const projeto = this.$route.params.projeto
    if (CaseStudieController.cases[projeto] == undefined) {
      error({ statusCode: 404, message: 'Post not found' })
    }

    this.projeto = CaseStudieController.cases[projeto]
  },
}
</script>

<style scoped lang="scss">
.case-studie-image {
  border-radius: 7px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.404);
}
.dados-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-evenly;

  .keys {
    font-size: 1.3rem;
    color: #fff !important;
    display: block;
  }
}

.v-expansion-panel-content {
  padding: 10px 20px;
}
</style>
