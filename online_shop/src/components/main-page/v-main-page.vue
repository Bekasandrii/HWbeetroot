<template>
  <div class='v-main-page'>
    <img
        class="v-main-page__img"
        src="../../assets/images/bg-1.png" alt=""

    >
    <h1 class="v-main-page__title">DANCE BOUTIQUE</h1>
    <p class="v-main-page__go-to-catalog">
      <router-link :to="{name: 'catalog'}">
        CATALOGUE
      </router-link>
    </p>
  </div>

</template>

<script>
export default {
  name: "v-main-page",
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
    width: 100%;
  }
  &__go-to-catalog {
    font-size: 30px;
    cursor: pointer;
  }

}
</style>