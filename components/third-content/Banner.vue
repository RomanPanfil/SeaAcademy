<template>
  <div class="banner">
    <div class="content container">
      <div class="banner-info">
        <h2 class="banner-info__title">
          Speaking Club
        </h2>
        <div class="banner-info__text">
          для тех, кто хочет повысить уровень своего разговорного английского
        </div>
        <main-button class="hidden__desktop" :view="'form'" @click.native="scrollTo('entry')">
          Бесплатный пробный урок
        </main-button>
      </div>
      <div class="banner-image">
        <img v-lazy="require('@/assets/images/banner-image-t.webp')" alt="banner" />
      </div>
    </div>
  </div>
</template>

<script>
const MainButton = () => import('../buttons/MainButton')
export default {
  name: 'Banner',
  components: { MainButton },
  methods: {
    scrollTo (id) {
      this.showMenu = false
      const ref = id === 1 ? 'benefits' : id === 2 ? 'about' : id === 3 ? 'lessons' : id === 4 ? 'price' : id === 'entry' ? 'entry' : ''
      this.$store.commit('content/setNavIdMutations', ref)
      this.$emit('showBurgerMenu', this.showMenu)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';

.banner {
  background: url("../../assets/images/banner-t-bg.png") no-repeat center p2r(-24);
  background-size: cover;
  height: p2r(680);
  @include sm {
    background: url("../../assets/images/banner-t-bg-sm.png") no-repeat center p2r(-20);
    background-size: cover;
    height: p2r(764);
  }
  .content {
    display: flex;
    //align-items: center;
    justify-content: space-between;
    @include sm {
      flex-wrap: wrap;
    }
  }
  .banner-info {
    width: p2r(453);
    margin-top: p2r(205);
    @include sm {
      margin-top: p2r(5);
    }
    &__title {
      font-family: $raleway-black;
      font-size: p2r(48);
      line-height: p2r(64);
      color: $blue;
      margin-bottom: p2r(15);
      @include sm {
        font-size: p2r(32);
        line-height: p2r(48);
        margin-bottom: p2r(16);
      }
    }
    &__text {
      font-family: $raleway-exta-bold;
      font-size: p2r(32);
      line-height: p2r(48);
      @include sm {
        font-size: p2r(24);
        line-height: p2r(32);
        margin-bottom: p2r(40);
      }
    }
  }
  .banner-image {
    margin-top: p2r(18);
    width: p2r(627);
    @include sm {
      width: unset;
    }
    img {
      width: p2r(573);
      @include sm {
        width: p2r(360);
        margin-left: p2r(-34);
      }
    }
  }
}
</style>
