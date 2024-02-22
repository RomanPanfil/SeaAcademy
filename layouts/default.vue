<template>
  <div class="index-page colors__background_blue-l" :class="{burger: isShowBurgerMenu}">
    <Header @showBurgerMenu="showBurgerMenu" />
    <nuxt v-show="!isShowBurgerMenu" />
    <Footer v-show="!isShowBurgerMenu" />
  </div>
</template>

<script>
const Header = () => import('~/components/header/Header')
const Footer = () => import('~/components/footer/Footer.vue')

export default {
  components: { Header, Footer },
  data () {
    return {
      isShowBurgerMenu: false
    }
  },
  methods: {
    showBurgerMenu (val) {
      this.isShowBurgerMenu = val
    }
  }
}
</script>

<style scoped lang="scss">
.index-page {
  &.burger {
    height: 100vh;
  }
}
</style>
