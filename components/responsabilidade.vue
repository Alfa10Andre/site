<template>
  <div class="responsabilidade-container">
    <div>
      <p>
        <strong :style="[color ? { color: color } : { color: '#fff' }]"
          >Nome:</strong
        >
      </p>
      <p :style="[color ? { color: color } : { color: '#fff' }]">{{ nome }}</p>
    </div>
    <div>
      <p>
        <strong :style="[color ? { color: color } : { color: '#fff' }]"
          >Região/país:</strong
        >
      </p>
      <p>{{ regiao }}</p>
    </div>
    <div>
      <p>
        <strong :style="[color ? { color: color } : { color: '#fff' }]"
          >Entidade/setor:</strong
        >
      </p>
      <p>{{ entidade }}</p>
    </div>
    <div>
      <p>
        <strong :style="[color ? { color: color } : { color: '#fff' }]"
          >Apoio EDUdigital:</strong
        >
      </p>
      <p>{{ apoio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['nome', 'regiao', 'entidade', 'setor', 'apoio', 'color'],
}
</script>

<style scoped lang="scss">
.responsabilidade-container {
  display: flex;
  flex-direction: column;
  width: max-content;
  transition: all, 400ms ease;

  box-shadow: 1px 1px 10px rgba(17, 17, 17, 0.158);

  border: 1px solid #fff;

  padding: 20px 30px;
  border-radius: 10px;

  max-width: 350px;
  margin: 10px 0;

  div {
    margin-bottom: 10px;
  }
}
</style>
