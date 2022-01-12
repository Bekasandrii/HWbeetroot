<template>
<div class="v-footer">
  <div class="v-footer-social">
    <div class="v-footer-social__btn" v-for="icon in icons" :key="icon">
      <div class="v-footer-social__icon">
        {{ icon }}
      </div>
    </div>
  </div>

  <div class="v-footer-info">
    <p class="v-footer-info__subtitle">Вы выбираете комфорт, изысканный вкус и высокое качество? Добро пожаловать в DANCE BOUTIQUE</p>
    <p class="v-footer-info__text">Огромный выбор кружева и тесьмы, простой и эластичной, блесточной и бисерной. В отделе камней и тесьмы представлены камни и пуговицы «SWAROVSKI» и «PRECIOSA», камневая тесьма, аппликации, накладные узоры и кружевные мотивы, как простые, так и расшитые бисером, стеклярусом и стразами. Для украшения платьев и костюмов Вы можете приобрести эксклюзивные цветы  из ткани ручной работы.
      Предлагаем Вам большой выбор боа марабу, страуса и шанделл различных расцветок. В продаже имеются отдельные перья павлина и страуса.
      В отделе готовых изделий Вы сможете приобрести костюмы для выступлений, тренировочные костюмы, рубашки, платья, брюки и аксессуары: пуговицы, запонки, атласные бабочки, фрачные пояса и все необходимое для занятий  бальными танцами. Также всегда в наличии широкий ассортимент театральных париков и масок.</p>
  </div>
  <div class="divider">
    <v-divider></v-divider>
  </div>
  <div class="v-footer-info__year">
    {{ new Date().getFullYear() }} — <strong>DANCE BOUTIQUE</strong>
  </div>

  </div>


</template>

<script>

export default {
  name: "v-footer",
  props: {},
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-linkedin',
      'fab fa-instagram',
    ],
  }),

  computed: {},
  methods: {},
}
</script>

<style lang="scss">
.v-footer {
  //display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  background: #1596ac;
  padding: 16px;
  position: fixed;
  width: 100%;
  height: 400px;
  bottom: 0;
  left: 0;

  .v-footer-social {
    &__btn {

    }
    &__icon {

    }
  }

  .v-footer-info {
    &__subtitle {
      font-size: 30px;
      background-color: #c4e18d;
    }

    &__text {
      font-size: 25px;
      background-color: #c4e18d;

    }
  }
}
</style>