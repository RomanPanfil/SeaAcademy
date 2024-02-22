<template>
  <div>
      <Banner />
      <Benefits id="benefits" ref="benefits" />
      <div class="container">
        <div class="circle hidden__desktop" />
        <div class="benefits-banner">
          <div class="benefits-banner__image">
            <img v-lazy="require('@/assets/images/blonde-sitting-grass-with-headphones.webp')" alt="blonde-sitting-grass-with-headphones.jpg" />
          </div>
          <div class="benefits-banner__text">
            Наш курс позволяет изучать английский в любом месте<br>
            и в любое время.
          </div>
        </div>
      </div>
      <Steps id="lessons" ref="lessons" />
      <Privilege />
      <entry-form
        id="entry"
        ref="entry"
        :title="'Запишитесь на пробный урок-собеседование'"
        :description="'Мы определим ваш уровень и посоветуем персональную программу изучения языка под вас.'"
      >
        <img v-lazy="require('@/assets/images/classmates-friends-bag-school-education.webp')" alt="classmates-friends-bag-school-education.jpg" />
      </entry-form>
      <Price id="price" ref="price" />
      <DownloadBanner />
      <AboutUs id="about" ref="about" />
  </div>
</template>

<script>
const Banner = () => import('@/components/second-content/Banner.vue')
const Benefits = () => import('@/components/second-content/Benefits.vue')
const Steps = () => import('@/components/second-content/Steps.vue')
const Privilege = () => import('@/components/second-content/Privilege.vue')
const EntryForm = () => import('@/components/first-content/EntryForm.vue')
const Price = () => import('@/components/second-content/Price.vue')
const AboutUs = () => import('@/components/second-content/AboutUs.vue')
const DownloadBanner = () => import('@/components/second-content/DownloadBanner')

export default {
  name: 'SecondContent',
  components: { DownloadBanner, AboutUs, Price, EntryForm, Privilege, Steps, Benefits, Banner },
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
.container {
  position: relative;
}
.circle {
  width: p2r(104);
  height: p2r(104);
  border-radius: 50%;
  opacity: 0.1;
  background-color: $blue;
  position: absolute;
  top: p2r(-64);
  left: p2r(-26);
}
.benefits-banner {
  height: p2r(360);
  border-radius: p2r(40);
  display: flex;
  align-items: center;
  background-color: #206AB9;
  position: relative;
  margin-top: p2r(-160);
  @include sm {
    border-radius: p2r(24);
    flex-wrap: wrap;
    height: p2r(416);
    margin-top: p2r(0);
    padding-left: p2r(24);
    padding-right: p2r(24);
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  &__image {
    height: p2r(360);
    width: p2r(600);
    position: absolute;
    top: 0;
    img {
      border-top-left-radius: p2r(40);
      border-bottom-left-radius: p2r(40);
      height: p2r(360);
      @include sm {
        border-top-left-radius: p2r(0);
        border-bottom-left-radius: p2r(0);
        height: p2r(208);
        position: unset;
      }
      justify-content: space-between;
    }
    @include sm {
      top: unset;
      height: p2r(208);
      width: p2r(312);
      //bottom: 0;
      //left: 50%;
      //transform: translateX(-50%);
    }
  }
  &__text {
    width: p2r(440);
    color: $white;
    font-family: $raleway-exta-bold;
    font-size: p2r(32);
    display: flex;
    position: absolute;
    right: p2r(80);
    margin: auto p2r(0);
    line-height: p2r(48);
    @include sm {
      width: p2r(264);
      font-size: p2r(24);
      line-height: p2r(32);
      margin-left: unset;
      //margin-top: p2r(-328);
      position: unset;
      margin-top: p2r(250);
    }
  }
}
</style>
