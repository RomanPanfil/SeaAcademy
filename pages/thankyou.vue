<template>
  <div>
    <header-thank-you-page />
    <div class="thank-wrapper container">
      <div class="thank-wrapper__info">
        <h2>
          Спасибо за оплату!
        </h2>
        <p>
          Если вы приобрели уроки “Английский для детей” или “Speaking Club”,
          в ближайшее время с вами свяжется наш менеджер.
        </p>
        <main-button class="main-button" @click.native="backToMain">
          Вернуться на сайт
        </main-button>
      </div>
      <div class="thank-wrapper__image">
        <img v-lazy="require('@/assets/images/thank-image.png')" alt="man" />
      </div>
    </div>
  </div>
</template>

<script>
const HeaderThankYouPage = () => import('@/components/header/HeaderThankYouPage')
const MainButton = () => import('@/components/buttons/MainButton')
export default {
  name: 'ThankYou',
  components: { MainButton, HeaderThankYouPage },
  layout: 'empty',
  methods: {
    backToMain () {
      const id = this.$store.getters['content/get']
      switch(id) {
        case 1:
          this.$router.replace('/');
          break;
        case 2:
          this.$router.replace('/course');
          break;
        case 3:
          this.$router.replace('/speakingclub');
          break;
        default:
          this.$router.replace('/');
          break;
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/base/grid';
@import '../assets/style/base/colors';
@import '../assets/style/base/fonts';
@import '../assets/style/mixins/grid';
.thank-wrapper {
  display: flex;
  justify-content: space-between;
  height: p2r(680);
  @include sm {
    flex-direction: column;
  }
  &__info {
    width: p2r(566);
    margin-top: p2r(213);
    margin-left: p2r(-6);
    @include sm {
      margin-top: p2r(20);
      width: unset;
      margin-left: unset;
    }
    h2 {
      font-family: $raleway-black;
      font-size: p2r(48);
      line-height: p2r(64);
      color: $black-d;
      margin-bottom: p2r(16);
      @include sm {
        font-size: p2r(32);
        line-height: p2r(48);
        margin-bottom: p2r(17);
      }
    }
    p {
      font-family: $raleway-bold;
      font-size: p2r(16);
      line-height: p2r(24);
      margin-bottom: p2r(39);
    }
    .main-button {
      width: 100%;
    }
  }
  &__image {
    margin-top: p2r(-4);
    @include sm {
      margin-top: p2r(18);
      margin-left: p2r(-30);
    }
    img {
      width: p2r(560);
      height: p2r(680);
      @include sm {
        width: p2r(318);
        height: unset;
      }
    }
  }
}

</style>
