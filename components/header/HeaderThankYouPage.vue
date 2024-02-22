<template>
  <div class="header-bottom container">
    <nuxt-link to="/">
      <header-logo />
    </nuxt-link>
    <div class="header-bottom-socials">
      <a href="https://www.instagram.com/Academy_Russia/" target="_blank">
        <inst-black />
      </a>
      <a href="https://t.me/seaacademyeng" target="_blank">
        <tg-black />
      </a>
    </div>
  </div>
</template>

<script>
const HeaderLogo = () => import('../logo/HeaderLogo')
const InstBlack = () => import('../../assets/images/inst-black')
const TgBlack = () => import('../../assets/images/tg-black')
export default {
  name: 'HeaderThankYouPage',
  components: { TgBlack, InstBlack, HeaderLogo }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';

.header-bottom {
  font-family: $raleway-bold;
  font-size: p2r(16);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: p2r(124);
  @include sm {
    height: p2r(76);
  }
  &-socials {
    @include sm {
      display: flex;
    }
    a {
      &:first-child {
        margin-right: p2r(20);
        @include sm {
          margin-right: p2r(24);
        }
      }
    }
  }
}
</style>
