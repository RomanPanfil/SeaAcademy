<template>
  <div class="content">
      <Banner />
      <Benefits id="benefits" ref="benefits" />
      <div class="container">
        <div class="benefits-banner">
          <div class="benefits-banner__image">
            <img v-lazy="require('@/assets/images/male-student.webp')" alt="student" />
          </div>
          <div class="benefits-banner__text">
            Отчет для родителей каждые 2 месяца по успехам и пройденным материалам, чтобы вы могли отслеживать прогресс
          </div>
        </div>
      </div>
      <AboutUs id="about" ref="about" />
      <Privilege />
      <div class="container">
        <div class="privilege-banner">
          <div class="privilege-banner__text">
            Наша школа для тех, кто понимает, что английский дает ребенку хорошее будущее.
          </div>
          <img v-lazy="require('@/assets/images/little-girl.webp')" alt="little-girl" class="privilege-banner__image" />
        </div>
      </div>
      <Steps id="lessons" ref="lessons" />
      <entry-form
        id="entry"
        ref="entry"
        :content="'kids'"
        :title="'Записаться на пробный онлайн-урок (бесплатно)'"
        :description="'На пробном уроке наш учитель пообщается с вашим ребенком и подберет для вас индивидуальную систему обучения.'"
      >
        <img v-lazy="require('@/assets/images/classmates-friends.webp')" alt="classmates-friends" />
      </entry-form>
      <Price id="price" ref="price" />
  </div>
</template>

<script>
const Banner = () => import('./first-content/Banner')
const Benefits = () => import('./first-content/Benefits')
const AboutUs = () => import('./first-content/AboutUs')
const Privilege = () => import('./first-content/Privilege')
const Steps = () => import('./first-content/Steps')
const EntryForm = () => import('./first-content/EntryForm')
const Price = () => import('./first-content/Price')
export default {
  name: 'FirstContent',
  components: { Price, EntryForm, Steps, Privilege, AboutUs, Benefits, Banner },
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
.content {
  .benefits-banner {
    height: p2r(360);
    border-radius: p2r(40);
    background: url("../assets/images/benefits-b-bg.webp") no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    position: relative;
    margin-top: p2r(-80);
    @include sm {
      background: url("../assets/images/benefits-b-bg-sm.webp") no-repeat;
      background-size: cover;
      border-radius: p2r(24);
      flex-wrap: wrap;
      height: p2r(630);
      margin-top: p2r(0);
      padding-left: p2r(24);
      padding-right: p2r(24);
    }
    &__image {
      height: p2r(230);
      position: absolute;
      top: 0;
      left: p2r(78);
      img {
        height: p2r(360);
        width: p2r(230);
        @include sm {
          height: p2r(360);
          width: p2r(232);
        }
      }
      @include sm {
        top: unset;
        height: p2r(360);
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &__text {
      width: p2r(730);
      color: $white;
      font-family: $raleway-exta-bold;
      font-size: p2r(32);
      line-height: p2r(48);
      margin-left: p2r(390);
      @include sm {
        width: p2r(264);
        font-size: p2r(24);
        line-height: p2r(32);
        margin-left: unset;
        margin-top: p2r(-328);
      }
    }
  }

  .privilege-banner {
    height: p2r(360);
    border-radius: p2r(40);
    background: url("../assets/images/privilege-b-bg.webp") no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    position: relative;
    @include sm {
      background: url("../assets/images/privilege-b-bg-sm.webp") no-repeat;
      background-size: cover;
      height: p2r(500);
      border-radius: p2r(24);
      flex-direction: column;
    }
    &__image {
      height: p2r(360);
      position: absolute;
      top: 0;
      right: p2r(78);
      @include sm {
        height: p2r(316);
        top: unset;
        bottom: 0;
        right: 50%;
        transform: translateX(50%);
      }
    }
    &__text {
      width: p2r(587);
      color: $white;
      font-family: $raleway-exta-bold;
      font-size: p2r(32);
      line-height: p2r(48);
      margin-left: p2r(80);
      @include sm {
        width: p2r(264);
        margin-left: unset;
        font-size: p2r(24);
        line-height: p2r(32);
        margin-top: p2r(24);
      }
    }
  }
}

</style>
