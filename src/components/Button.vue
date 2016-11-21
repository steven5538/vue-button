<template>
  <button
    class="v-btn"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  border: none;
  background: 0 0;
  box-shadow: 0 0 0 1px #9f9f9f inset;
  border-radius: 3.5px;
  color: #9f9f9f;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  padding: 6px 24px;
  text-decoration: none;
  outline: 0;

  &:hover {
    box-shadow: 0 0 0 1px #2c3e50 inset;
    color: #2c3e50;
  }
}
</style>
