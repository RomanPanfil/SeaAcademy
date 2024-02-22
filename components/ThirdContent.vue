<template>
  <div class="content">
      <Banner />
      <div id="benefits" ref="benefits" class="benefits-banner">
        <div class="container">
          <div class="benefits-banner-content">
            <div class="benefits-banner-content__image">
              <img src="../assets/images/blonde-sitting.webp" alt="student">
            </div>
            <div class="benefits-banner-content__text">
              Лучший способ начать говорить на английском это…. говорить!
            </div>
          </div>
        </div>
      </div>
      <Steps id="lessons" ref="lessons" />
      <div class="zoom">
        <div class="zoom-title">
          Все занятия проходят онлайн через Zoom конференции. Ученики распределяются по группам (до 6 человек)
          в зависимости от уровня владения разговорным английским. Продолжительность каждого урока - 90 минут.
        </div>
        <img class="hidden__mobile" src="../assets/images/zoom.png" alt="zoom">
        <img class="hidden__desktop" src="../assets/images/zoom-sm.png" alt="zoom">
      </div>
      <entry-form
        id="entry"
        ref="entry"
        class="entry-form"
        :title="'Запишитесь на пробный урок-собеседование'"
        :description="'Мы определим ваш уровень и посоветуем персональную программу изучения языка под вас.'"
      >
        <img
          v-lazy="require('@/assets/images/school-education.webp')"
          alt="school-education.jpg"
        />
      </entry-form>
      <ThemeExamples />
      <Price id="price" ref="price" />
      <DownloadBanner />
      <AboutUs id="about" ref="about" />
  </div>
</template>

<script>
const Banner = () => import('./third-content/Banner')
const Steps = () => import('./third-content/Steps')
const EntryForm = () => import('./first-content/EntryForm')
const ThemeExamples = () => import('./third-content/ThemeExamples')
const Price = () => import('./third-content/Price')
const DownloadBanner = () => import('./third-content/DownloadBanner')
const AboutUs = () => import('./third-content/AboutUs')
export default {
  name: 'ThirdContent',
  components: { AboutUs, DownloadBanner, Price, ThemeExamples, EntryForm, Steps, Banner },
  computed: {
    navId () {
      return this.$store.getters['content/getNavId']
    }
  },
  watch: {
    navId (val) {
      if (val.length) {
        this.scrollMeTo(val)
        this.$store.commit('content/setNavIdMutations', '')
      }
    }
  },
  methods: {
    scrollMeTo (ref) {
      const el = document.getElementById(ref)
      if (el) {
        window.scroll({
          top: el.offsetTop,
          left: 0,
          behavior: 'smooth'
        })
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

.benefits-banner {
  height: p2r(460);
  padding-top: p2r(100);
  background: url("../assets/images/benefits-banner-t-bg.png") no-repeat center p2r(0);
  background-size: cover;
  margin-top: p2r(-42);
  @include sm {
    padding-top: p2r(87);
    background: url("../assets/images/benefits-banner-t-bg.png") no-repeat p2r(-68) p2r(29);
    background-size: 226%;
    height: p2r(500);
  }
  &-content {
    font-family: $raleway-exta-bold;
    font-size: p2r(32);
    line-height: p2r(48);
    display: flex;
    border-radius: p2r(40);
    background-color: $yellow;
    overflow: hidden;
    color: $white;
    height: p2r(360);
    @include sm {
      flex-direction: column;
      height: p2r(416);
      border-radius: p2r(24);
      font-size: p2r(24);
      line-height: p2r(32);
    }
    &__image {
      img {
        padding: 0;
        margin: 0;
        height: 100%;
        @include sm {
          height: p2r(208);
        }
      }
    }
    &__text {
      padding: p2r(108) p2r(80);
      @include sm {
        padding: p2r(32) p2r(24);
      }
    }
  }
}

.zoom {
  background: url("../assets/images/zoom-t-bg.png") no-repeat center p2r(0);
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: p2r(960);
  @include sm {
    background: url("../assets/images/zoom-t-bg-sm.png") no-repeat center p2r(56);
    background-size: contain;
    height: p2r(875);
  }
  img {
    width: p2r(370);
    @include sm {
      width: p2r(298);
    }
  }
  &-title {
    font-family: $raleway-exta-bold;
    font-size: p2r(32);
    line-height: p2r(48);
    color: $black-d;
    width: p2r(986);
    text-align: center;
    margin-bottom: p2r(79);
    padding-top: p2r(160);
    @include sm {
      font-size: p2r(24);
      line-height: p2r(32);
      width: p2r(312);
      padding-top: p2r(130);
      margin-bottom: p2r(40);
    }
  }
}
.entry-form {
  img {
    height: p2r(560);
    @include sm {
      width: auto;
      height: p2r(320);
    }
  }
}
</style>
