<template>
  <div class="header-bottom container">
    <nuxt-link to="/" >
      <header-logo />
    </nuxt-link>
    <div class="header-bottom-navigation hidden__mobile">
      <div v-for="item in navItems" :key="item.id" class="header-bottom-navigation__item" @click="scrollTo(item.id)">
        {{ item.title }}
      </div>
    </div>
    <div class="header-bottom-socials">
      <a href="https://www.instagram.com/Academy_Russia/" target="_blank">
        <inst-black />
      </a>
      <a href="https://t.me/seaacademyeng" target="_blank">
        <tg-black />
      </a>
      <Burger class="hidden__desktop" :view="showMenu" @click.native="openBurgerMenu" />
    </div>
    <main-button class="hidden__mobile" @click.native="scrollTo('entry')">
      Бесплатный пробный урок
    </main-button>
    <transition name="fade">
      <div v-show="showMenu" class="header-bottom-burger__content hidden__desktop">
        <div class="header-bottom-burger__content_wrap">
          <div v-for="item in navItems" :key="item.id" class="header-bottom-burger__content_nav" @click="scrollTo(item.id)">
            {{ item.title }}
          </div>
        </div>
        <main-button class="header-bottom-burger__button" :view="'form'" @click.native="scrollTo('entry')">
          Бесплатный пробный урок
        </main-button>
      </div>
    </transition>
  </div>
</template>

<script>
const HeaderLogo = () => import('../logo/HeaderLogo')
const MainButton = () => import('../buttons/MainButton')
const InstBlack = () => import('../../assets/images/inst-black')
const TgBlack = () => import('../../assets/images/tg-black')
const Burger = () => import('../../assets/images/Burger')
export default {
  name: 'HeaderBottom',
  components: { Burger, TgBlack, InstBlack, MainButton, HeaderLogo },
  data () {
    return {
      navItems: [
        {
          id: 1,
          title: 'Почему мы?'
        },
        {
          id: 2,
          title: 'О нас'
        },
        {
          id: 3,
          title: 'Занятия'
        },
        {
          id: 4,
          title: 'Стоимость'
        }
      ],
      showMenu: false
    }
  },
  methods: {
    scrollTo (id) {
      this.showMenu = false
      const ref = id === 1 ? 'benefits' : id === 2 ? 'about' : id === 3 ? 'lessons' : id === 4 ? 'price' : id === 'entry' ? 'entry' : ''
      this.$store.commit('content/setNavIdMutations', ref)
      this.$emit('showBurgerMenu', this.showMenu)
    },
    openBurgerMenu () {
      this.showMenu = !this.showMenu
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

.header-bottom {
  font-family: $raleway-bold;
  font-size: p2r(16);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: p2r(168);
  @include sm {
    height: p2r(107);
  }
  &-navigation {
    margin-left: p2r(54);
    display: flex;
    color: $black-d;
    &__item {
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        color: $blue;
      }
    }
    &__item:not(:last-child) {
      margin-right: p2r(40);
    }
  }
  &-socials {
    margin-right: p2r(52);
    @include sm {
      margin-right: 0;
      display: flex;
    }
    a {
      &:first-child {
        margin-right: p2r(20);
      }
      @include sm {
        margin-right: p2r(26);
      }
    }
  }
  &-burger__content {
    background-color: $blue-l;
    position: absolute;
    top: p2r(150);
    right: 0;
    width: 100%;
    padding-left: p2r(24);
    padding-right: p2r(24);
    padding-bottom: p2r(24);
    //height: 81vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &_wrap {
      display: flex;
      flex-direction: column;
      margin-bottom: auto;
    }
    &_nav {
      font-size: p2r(24);
      padding-top: p2r(16);
      padding-bottom: p2r(16);
      line-height: p2r(40);
    }
  }
  &-burger__button {
    width: p2r(312) !important;
    position: fixed;
    bottom: p2r(24);
  }
}

</style>
