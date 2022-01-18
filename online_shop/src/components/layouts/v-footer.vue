<template>
  <div class="v-footer">
    <div class="v-footer-social">
      <div class="v-footer-social__btn"
           v-for="(icon, id) in icons"
           :key="id">
        <div class="v-footer-social__icon">
          <a :href="icon.link"><i :class='icon.icon'></i></a>
        </div>
      </div>
    </div>

    <div class="v-footer-info">
      <p class="v-footer-info__subtitle">Вы выбираете комфорт, изысканный вкус и высокое качество? Добро пожаловать в
        DANCE BOUTIQUE</p>
    </div>
<!--    <div class="v-footer-info__divider">-->
<!--            <v-divider></v-divider>-->
<!--    </div>-->
    <div class="v-footer-info__year">
      {{ new Date().getFullYear() }} <strong>DANCE BOUTIQUE</strong>
    </div>
  </div>
</template>

<script>

export default {
  name: "v-footer",
  props: {},
  data: () => ({
    icons: [
      {
        id: 1,
        icon: 'fab fa-facebook',
        link: 'https://www.facebook.com',
        name: 'Facebook'
      },
      {
        id: 2,
        icon: 'fab fa-twitter',
        link: 'https://twitter.com',
        name: 'Twitter'
      },
      {
        id: 3,
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com',
        name: 'Linkedin'
      },
      {
        id: 4,
        icon: 'fab fa-instagram',
        link: 'https://www.instagram.com',
        name: 'Instagram'
      }
    ],
  }),

  computed: {},
  methods: {},
}
</script>


<style lang="scss">
.v-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background: #1596ac;
  padding: 10px;
  width: 100%;
}

.v-footer-social {
  display: flex;
  justify-content: space-around;

  &__icon {
    .fab {
      color: white;
      font-size: 40px;
      height: 40px;
      width: 40px;
      text-align: center;
      cursor: pointer;
    }
  }
}

.v-footer-info {
  &__subtitle {
    font-size: 30px;
    background-color: #c4e18d;
  }
  &__divider {
  }
}


</style>