<template>
<div class="v-select">
  <p
      class="title"
      @click="areOptionsVisible=!areOptionsVisible"
  >{{ selected }}</p>
  <div
      class="options"
      v-if="areOptionsVisible || isExpanded"

  >
    <p
      v-for="option in options"
      :key="option.value"
      @click="selectOption(option)"
    >
      {{option.name}}
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: "v-select",

  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    },
    isExpanded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.areOptionsVisible = false
    },
    hideSelect() {
      this.areOptionsVisible = false
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style>
.v-select {
  position: relative;
  width: 200px;
  cursor: pointer;
  text-align: left;
  margin-bottom: 100px;
}
.title {
  border: solid 1px #1596ac;
  padding: 8px;
  text-align: center;
}
.v-select p {
  margin: 0;
}
.options {
  border: solid 1px #1596ac;
  position: absolute;
  top: 38px;
  right: 0;
  width: 100%;
  padding: 8px;
}

.options p:hover {
  background: #e7e7e7;
}

</style>