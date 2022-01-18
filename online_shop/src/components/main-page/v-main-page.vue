<template>
  <div class='v-main-page'>
    <img
        class="v-main-page__img"
        src="../../assets/images/bg-1.png" alt="Картинка"
    >
    <h1 class="v-main-page__title">DANCE BOUTIQUE</h1>
    <p class="v-main-page__go-to-catalog">
      <router-link :to="{name: 'catalog'}">
        CATALOGUE
      </router-link>
    </p>
    <div class="slider-size">
      <div class="slick-slider">
        <VueSlickCarousel :arrows="true" :dots="true">
          <div class="slick-slider__item">
            <img class="slick-slider__image" src="../../assets/images/0.jpeg" alt="Бабочка">
            <p class="slick-slider__text">
              В отделе готовых изделий Вы сможете приобрести костюмы для выступлений, тренировочные костюмы, рубашки,
              платья, брюки и аксессуары: пуговицы, запонки, атласные бабочки, фрачные пояса и все необходимое для
              занятий бальными танцами.
            </p>
          </div>
          <div class="slick-slider__item">
            <img class="slick-slider__image" src="../../assets/images/0.1.jpeg" alt="Запонки">
            <p class="slick-slider__text">
              В отделе камней и тесьмы представлены камни и пуговицы «SWAROVSKI» и «PRECIOSA», камневая тесьма,
              аппликации, накладные узоры и кружевные мотивы.
            </p>
          </div>
          <div class="slick-slider__item">
            <img class="slick-slider__image" src="../../assets/images/0.2.jpeg" alt="Платок">
            <p class="slick-slider__text">
              В отделе перьев большой выбор боа марабу, страуса и шанделл различных расцветок. В продаже имеются
              отдельные перья павлина и страуса.
            </p>
          </div>
          <div class="slick-slider__item">
            <img class="slick-slider__image" src="../../assets/images/0.3.jpeg" alt="Воротник">
            <p class="slick-slider__text">
               Огромный выбор кружева и тесьмы, простой и эластичной, блесточной и бисерной.Также всегда в наличии широкий ассортимент театральных париков и масок.
            </p>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "v-main-page",
  components: { VueSlickCarousel },
  props: {},
  data() {
    return {}
  },
  computed: {}
}
</script>



<style lang="scss">
.v-main-page {

  &__title {
    margin-top: 40px;

  }
  &__img {
    margin: 0 10px;
    width: 100%;
  }
  &__go-to-catalog {
    font-size: 30px;
    cursor: pointer;
  }
  .slider-size {
    min-height: 800px;
    width: 100%;
  }
  .slick-slider {
    //margin-top: 100px;
    &__item {
      position: relative;
      display: flex;

    }
    &__image {
      margin-left: 10px;
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
    &__text {
      position: absolute;
      font-size: 30px;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      color: #1596ac;
      width: 80%;

    }
  }
.slick-dots li button:before {
  font-size: 20px;
  margin-top: 50px;
}

}
</style>