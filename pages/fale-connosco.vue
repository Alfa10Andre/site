<template>
  <div>
    <banner
      :background-image="'https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
      :columns-template="'2fr 1fr'"
      :title="'Estamos aqui para ajudar'"
    >
      <template #text>
        Seja para começar a planificar uma plataforma eLearning, seja para
        adquirir novos cursos eLearning para a sua organização, ou porque
        necessita de alguma orientação na formação online que quer iniciar – nós
        ficamos felizes por poder ajudar! Alguém da nossa equipa vai falar
        consigo em breve.
      </template>
    </banner>

    <SectiondubleCartoon
      :id="'sobre-nos-recrutamento'"
      :img="'https://edudigital.pt/home/images/Recrutamento.png'"
      :flex-direction="'row-reverse'"
      :color="'var(--color-cinza)'"
    >
      <template #text>
        <Title :title="'Recrutamento'" />
        <p>
          Interessado em pertencer à nossa equipa? Na EDUdigital, trabalhamos em
          várias geografias, partilhamos projetos comuns e valorizamos o
          trabalho em equipa sem fronteiras, numa visão de liderar o setor das
          tecnologias na aprendizagem nos países de língua portuguesa
        </p>
        <div>
          <a
            class="btn btn-secondary"
            target="_blank"
            href="https://recrutamento.edudigital-learn.com/"
            >Candidatura espontânea
            <v-icon dark right> mdi-open-in-new </v-icon></a
          >
        </div>
      </template>
    </SectiondubleCartoon>

    <Section :id="'cont'" :background="'#eee'" :fluid="true" :no-padding="true">
      <div>
        <div class="fale-connosco-locale-info">
          <strong><Title :title="'Escritórios'" /></strong>
          <Title :type="'title'" :title="'Portugal'"></Title>
          <div>
            <p>+351 214391476</p>
            <p>*Chamada para a rede fixa nacional</p>
            <p>geral@edudigital.pt</p>
            <p>Taguspark - Parque da Ciência e Tecnologia</p>
            <p>Núcleo Central, nº 302</p>
            <p>2740-122 Oeiras</p>
          </div>
        </div>
      </div>

      <div>
        <Googlemap />
      </div>
    </Section>

    <contactform />
  </div>
</template>

<script>
import contactform from '~/components/contactform.vue'
import Section from '~/components/sections/section.vue'
import Title from '~/components/elements/title.vue'
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue'
export default {
  components: { contactform, Section, Title, SectiondubleCartoon },
}
</script>

<style socped lang="scss">
#cont {
  div {
    div {
      flex: 1;
    }
  }
}

.fale-connosco-locale-info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h1,
  h3 {
    margin-bottom: 10px;
  }
  width: 50%;
  margin: auto;
  color: #616161;
}

@media screen and (max-width: 900px) {
  .fale-connosco-locale-info {
    padding: 30px 0;
  }
  #cont {
    & > div {
      & > div {
        width: 100%;
      }
    }
  }
}
</style>
