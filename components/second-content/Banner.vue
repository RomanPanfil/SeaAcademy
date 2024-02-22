<template>
  <div class="second-content">
    <div class="second-content__background"></div>
    <div class="content container">
      <img v-lazy="require('@/assets/images/second-banner-image-f.webp')" alt="banner" />
      <div class="content-title">
        <div class="colors__font_blue content-title_upper">
          Курс</div>
        <div class="content-title_bolder">
          Английский для <br>начинающих</div>
        <div class="content-title_sub">
          или для тех, кто учил,<br class="hidden__desktop"> но так и не выучил
        </div>
        <main-button class="content-button hidden__desktop" @click.native="scrollTo('entry')">
          Бесплатный пробный урок
        </main-button>
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

.second-content {
  background-size: cover;
  margin-top: p2r(0);
  height: p2r(680);
  position: relative;
  @include sm {
    height: p2r(688);
    margin-top: p2r(-19);
  }
  &__background {
    position: absolute;
    background-color: $white;
    height: p2r(680);
    width: 50%;
    top: 0;
    left: 50%;
    @include sm {
      height: p2r(688);
    }
  }
}
.content {
  font-family: $raleway-black;
  font-size: p2r(32);
  display: flex;
  align-items: center;
  border-radius: p2r(40) 0 0 p2r(40);
  background: $white url("../../assets/images/banner-s-bg.png") no-repeat p2r(6) top;
  background-size: cover;
  height: p2r(680);
  width: px2rem(1200);
  position: relative;
  z-index: 1;
  @include sm {
    background: $white url("../../assets/images/banner-s-bg-sm.png") no-repeat p2r(-18) top;
    background-size: cover;
    flex-direction: column-reverse;
    width: p2r(312);
    height: p2r(688);
    border-radius: p2r(24) 0 0 p2r(24);
    padding-top: p2r(40);
    &-button {
      position: absolute;
      width: p2r(288);
    }
  }
  img {
    width: p2r(428);
    height: p2r(600);
    margin-top: auto;
    margin-left: p2r(128);
    @include sm {
      width: p2r(218);
      height: p2r(304);
      margin-left: p2r(60);
    }
  }
  &-title {
    height: 100%;
    right: p2r(188);
    top: p2r(315);
    margin-left: p2r(204);
    margin-top: p2r(465);
    z-index: 1;
    @include sm {
      margin-top: unset;
      margin-left: unset;
    }
    &_upper {
      letter-spacing: p2r(0.01);
      line-height: p2r(42);
      text-align: left;
      font-size: p2r(32);
      @include sm {
        font-size: p2r(24);
        line-height: p2r(40);
      }
    }
    &_bolder {
      letter-spacing: p2r(.1);
      margin-top: px2rem(12);
      font-size: p2r(48);
      color: $black-d;
      align-items: center;
      display: flex;
      line-height: p2r(64);
      @include sm {
        font-size: p2r(32);
        line-height: p2r(48);
        margin-top: p2r(8);
      }
    }
    &_sub {
      font-size: p2r(15);
      margin-top: p2r(17);
      line-height: p2r(24);
      color: $black-d;
      letter-spacing: p2r(0.3);
      @include sm {
        margin-bottom: p2r(40);
      }
    }
  }
  &-image {
    height: 100%;
    margin-top: p2r(80);
    margin-left: p2r(32);
    img {
      margin-top: p2r(80);
      margin-left: p2r(160);
      width: p2r(428);
      height: p2r(600);
    }
  }
}
</style>
