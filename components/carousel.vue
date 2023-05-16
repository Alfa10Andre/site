<template>
  <div class ="slider">
    <div class="items">
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/totara_gold_partner.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/microsoft-education.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/eschooling.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/visforms/cambridge-fundoless1.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/DGERT.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/Ouriginal.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
      <!---->
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/totara_gold_partner.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/microsoft-education.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/eschooling.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/visforms/cambridge-fundoless1.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/DGERT.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/Ouriginal.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Title from './elements/title.vue'
export default {
  components: { Title },
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="scss">
/*.items {
  display: flex;
  gap: 50px;
  //flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
  }
}
img {
  width: 100%;
  transition: scale, 200ms ease;
  &:hover {
    scale: 1.1;
  }
}*/
.slider{
  height: 250px;
  margin:auto;
  position: relative;
  width: 90%;
  display: grid;
  place-items: center;
}
.items{
  display: flex;
  width: calc(250px*12);
  animation: scroll 40s linear infinite;
}

.items:hover{
  animation-play-state: paused;
}
@keyframes scroll{
  0% {
    transform: translateX(0);
  }
  100%{
    transform: translateX(calc(-250px*12));
  }
}
.img-container{
  height: 200px;
  width: 250px;
  display: flex;
  align-items: center;
  padding: 30px;
  perspective: 100px;
}

img{
  width: 100%;
  transition: transform 1s;
}
img:hover{
  transform: translateZ(20px);
}
/*GRADIENT SHADOWS */
.slider::before,
.slider::after{
  background: linear-gradient(to rigth, rgba(255,255,255,1) 0%, 
  rgba(255,255,255,0)100%);
  content: '';
  height: 100%;
  position: absolute;
  width: 15%;
  z-index:2;
}
.slider::before{
  left: 0;
  top: 0;
}

.slider::after{
  right: 0;
  top: 0;
  transform: rotateZ('180deg');
}
</style>
