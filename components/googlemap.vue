<template>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4401.026530139118!2d-9.305932661456595!3d38.74086081510683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1eda82f399fd89%3A0x8f54398a8943b2be!2sEDUdigital+Portugal+-+Educa%C3%A7%C3%A3o+e+Tecnologias+Lda.!5e0!3m2!1spt-PT!2scv!4v1563876206647!5m2!1spt-PT!2scv"
    frameborder="0"
  ></iframe>
</template>

<script>
import Section from './sections/section.vue'
export default {
  components: { Section },
}
</script>

<style scoped>
iframe {
  width: 100%;
  height: 500px;
}
</style>
