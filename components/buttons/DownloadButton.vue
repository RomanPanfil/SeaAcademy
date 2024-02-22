<template>
  <a
    class="download-button"
    target="_blank"
    :href="link"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'DownloadButton',
  props: {
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';

.download-button {
  display: inline-block;
  background-color: $yellow;
  font-family: $raleway-bold;
  font-size: p2r(16);
  line-height: p2r(24);
  border-radius: p2r(16);
  color: $black-d;
  padding: p2r(16) p2r(25);
}
</style>
