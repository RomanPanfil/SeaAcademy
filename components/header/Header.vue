<template>
  <div class="header">
    <HeaderTop />
    <HeaderBottom @showBurgerMenu="showBurgerMenu" />
  </div>
</template>

<script>
const HeaderTop = () => import('./Header-top')
const HeaderBottom = () => import('./Header-bottom')
export default {
  name: 'Header',
  components: { HeaderBottom, HeaderTop },
  methods: {
    showBurgerMenu (val) {
      this.$emit('showBurgerMenu', val)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';
.header {
  overflow: hidden;
}
</style>
