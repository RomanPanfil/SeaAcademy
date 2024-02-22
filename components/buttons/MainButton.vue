<template>
  <button
    class="main-button"
    :class="{
      [view]: true
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    view: {
      type: String,
      default: 'main',
      validator (value) {
        return ['main', 'form'].includes(
          value
        )
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
.main-button {
  cursor: pointer;
  font-family: $raleway-bold;
  font-size: p2r(16);
  line-height: p2r(18);
  letter-spacing: p2r(0.10);
  padding: p2r(19) p2r(23);
  background-color: $blue;
  color: $white;
  border-radius: p2r(16) !important;
  box-shadow: 0 p2r(24) p2r(32) rgba(30, 78, 128, 0.12);
  &:hover {
    opacity: 0.9;
  }
  &.form {
    width: 100%;
    justify-content: center;
  }
}
</style>
