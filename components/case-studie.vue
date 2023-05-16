<template>
  <div :style="'background:' + data.background" class="container">
    <p class="title">{{ data.title }}</p>
    <img class="logo" :src="data.logo" width="200" alt="" />
    <p class="resume">{{ data.resume }}</p>
    <button class="btn btn-ver-projeto" @click="goTo(id)">Ver projeto</button>
  </div>
</template>

<script>
export default {
  props: ['data', 'id'],

  methods: {
    goTo(id) {
      this.$router.push({ path: '/case-studies/' + id })
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  background-image: url('~/assets/img/cartoon/case.jpeg');
  background-size: cover;
  width: 500px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 5px;

  box-shadow: 1px 1px 10px rgba(65, 65, 65, 0.459);

  transition: all, 500ms ease;

  &:hover {
    box-shadow: 1px 5px 10px rgba(65, 65, 65, 0.87);
    height: 500px;
    justify-content: space-evenly;

    .title {
      display: none;
    }
    .resume {
      display: block;
      padding: 0px 20px;
    }

    .logo {
      display: block;
      background: #fff;
      padding: 20px 10px;
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(65, 65, 65, 0.459);
    }

    .btn-ver-projeto {
      display: block;
      border: 1px solid #fff;
      color: #fff;

      &:hover {
        background: #fff;
        color: #000;
      }
    }
  }

  .title {
    color: #fff;
    font-weight: bolder;
    margin: 0;
    font-size: 2rem;
    z-index: 999;
  }

  .resume {
    color: #fff;
    display: none;
  }

  .logo {
    display: none;
  }

  .btn-ver-projeto {
    display: none;
  }
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--color-verde);
  opacity: 0.9;
}
</style>
