<template>
  <div id="catalogo-container">
    <div class="catalogo-part catalogo-img">
      <img
        :src="
          img ?? 'https://edudigital.pt/home/images/assertividade_2-min.jpg'
        "
        alt=""
      />
    </div>
    <div class="catalogo-part catalogo-button">
      <a href="#" class="btn btn-secondary">{{
        title ?? 'Comunicação e Gestão'
      }}</a>
    </div>

    <div class="catalogo-part catalogo-text">
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img', 'title'],
}
</script>

<style lang="scss">
#catalogo-container {
  width: 300px;
  height: 450px;
  padding: 10px;
  border: 3px solid var(--color-verde);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.catalogo-part {
  margin: 5px 0;
}
.catalogo-button {
  a {
    display: block;
    text-align: center;
  }
}

.catalogo-text {
  p {
    text-align: left;
  }
}

.catalogo-img {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
