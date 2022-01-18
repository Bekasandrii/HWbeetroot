<template>
  <div class='v-header'>
    <router-link :to="{name: 'mainPage'}">
      <img src="../../assets/logo-dance.png" alt="logo">
    </router-link>
    <div class="search-field">
      <input
          class="search-field__input"
          type="text"
          v-model="searchValue"
      >
      <button class="search_btn">
        <i class="material-icons" @click="search(searchValue)">search</i>
      </button>
      <button class="search_btn">
        <i class="material-icons" @click="clearSearchField">cancel</i>
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "v-header",
  props: {},
  data() {
    return {
      searchValue: ''
    }
  },
  computed: {
    ...mapGetters([
      'SEARCH_VALUE'
    ])
  },
  methods: {
    ...mapActions([
      'GET_SEARCH_VALUE_TO_VUEX'
    ]),
    search(value) {
      this.GET_SEARCH_VALUE_TO_VUEX(value);
      if (this.$route.path !== '/catalog') {
        this.$router.push('/catalog')
      }
    },
    clearSearchField() {
      this.searchValue = ''
      this.GET_SEARCH_VALUE_TO_VUEX();
      if (this.$route.path !== '/catalog') {
        this.$router.push('/catalog')
      }
    }
  }
}
</script>

<style lang="scss">
.v-header {
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1596ac;
  padding: 16px;
  position: fixed;
  width: 100%;
  height: 150px;
  top: 0;
  left: 0;
  img {
    width: 100px;
    padding-left: 20px;
  }
  .search-field {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    &__input {
      width: 100%;
      min-width: 50px;
      height: 50px;

    }
  }
  .search_btn {
    margin-left: 10px;
    background: transparent;
    border: none;
  }
  .material-icons {
    font-size: 30px;
  }
}
</style>