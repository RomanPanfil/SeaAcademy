<template>
  <div class="footer">
    <div class="container">
      <div
        class="footer-row"
      >
        <div class="footer-row-logo">
          <div class="footer-row-logo-main">
            <Logo />
          </div>
          <div class="footer-row-logo-sub">
            <SubLogo />
          </div>
        </div>
        <div class="footer-row-list">
          <div v-for="item of list" :key="item.id" @click="scrollTo(item.id)">
            {{ item.name }}
          </div>
          <a href="/contract_offer.pdf" target="_blank">Договор оферты</a>
        </div>
        <MainButton class="footer-row-btn hidden__mobile" @click.native="scrollTo('entry')">
          Бесплатный пробный урок
        </MainButton>
        <MainButton class="footer-row-btn hidden__desktop" :view="'form'" @click.native="scrollTo('entry')">
          Бесплатный пробный урок
        </MainButton>
      </div>
      <div
        class="footer-row"
      >
        <div class="footer-row-info">
          <div class="footer-row-info__item">
            ИП Щетинская А.Ю. ОГРНИП 322565800091915, ИНН 561019470878
          </div>
          <div class="footer-row-info__item">
            Обработка заявок:<br class="hidden__desktop"> с 09 до 17 (будни) по МСК
          </div>
          <div class="footer-row-info__item">
            Россия, Оренбург, улица 8 Марта, д. 42 (ТРЦ “Восход”, 3 этаж)
          </div>
          <div class="footer-row-info__item">
            <a href="tel:88002509655">8 800 250 96 55</a>,
            <a href="mailto:seaacademyy@gmail.com">seaacademyy@gmail.com</a>
          </div>
<!--          <div-->
<!--            class="footer-row-info-email"-->
<!--          >-->
<!--            <a href="mailto:seaacademyy@gmail.com">seaacademyy@gmail.com</a>-->
<!--          </div>-->
        </div>
        <div class="footer-row-social">
          <div>
            <a href="https://www.instagram.com/Academy_Russia/" target="_blank"><Ints /></a>
          </div>
          <div>
            <a href="https://t.me/seaacademyeng" target="_blank">
              <Tg />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const SubLogo = () => import('assets/images/sub-logo.vue')
const Logo = () => import('assets/images/logo.vue')
const Ints = () => import('assets/images/ints.vue')
const Tg = () => import('assets/images/tg.vue')
const MainButton = () => import('~/components/buttons/MainButton.vue')
export default {
  name: 'Footer',
  components: {
    MainButton,
    Logo,
    SubLogo,
    Ints,
    Tg
  },
  data () {
    return {
      list: [
        {
          id: 1,
          name: 'Почему мы?'
        },
        {
          id: 2,
          name: 'О нас'
        },
        {
          id: 3,
          name: 'Занятия'
        },
        {
          id: 4,
          name: 'Стоимость'
        }
      ]
    }
  },
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
@import '@/assets/style/_index.scss';
a[href^="tel:"] {
  font-family: $raleway-bold;
  color: $white;
  font-size: p2r(16);
}
a[href^="mailto:"] {
  font-family: $raleway-bold;
  color: $white;
  font-size: p2r(16);
}
.footer {
  background-color: $black-d;
  width: 100%;
  padding-top: p2r(86.75);
  height: p2r(362);
  @include sm {
    height: p2r(784);
    padding-top: p2r(70);
  }
  &-row {
    color: $white;
    display: flex;
    justify-content: space-between;
    @include sm {
      &:first-child {
        flex-direction: column;
        height: p2r(280);
      }
      &:last-child {

      }
    }
    &:last-child {
      margin-top: p2r(57);
      @include sm {
        margin-top: p2r(97);
      }
    }
    &-logo {
      width: p2r(208.29);
      @include sm {
        width: 100%;
      }
      &-main {
        @include sm {
          justify-content: center;
          display:flex;
          margin-bottom: p2r(7);
        }
      }
      &-sub {
        display: flex;
        justify-content: center;
        @include sm {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
    &-list {
      display: flex;
      width: p2r(521);
      justify-content: space-between;
      font-family: $raleway-medium;
      font-style: normal;
      font-weight: 700;
      height: p2r(44);
      font-size: p2r(16);
      line-height: p2r(24);
      align-items: center;
      @include sm {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: p2r(40);
        height: p2r(184);
        margin-bottom: p2r(48);
      }
      div {
        letter-spacing: p2r(0.2);
        @include sm {
          display: flex;
          margin-top: p2r(1);
          justify-content: center;
          letter-spacing: p2r(0.5);
          align-items: center;
          &:nth-child(1) {
            margin-top: p2r(1);
          }
          &:nth-child(2) {
             margin-top: p2r(17);
            letter-spacing: p2r(.3);
          }
          &:nth-child(3) {
            margin-top: p2r(16);
            letter-spacing: p2r(.5);
          }
          &:nth-child(4) {
            margin-top: p2r(16);
            letter-spacing: p2r(.5);
          }
        }
        &:hover {
          color: $blue;
          cursor: pointer;
        }
      }
      a {
        font-family: $raleway-medium;
        color: $white;
        &:hover {
          color: $blue;
          cursor: pointer;
        }
        @include sm {
          display: block;
          margin-top: p2r(16);
        }
      }
    }
    &-info {
      font-family: $raleway-medium;
      font-style: normal;
      font-weight: 500;
      color: $white;
      font-size: p2r(16);
      line-height: p2r(20);
      letter-spacing: .01px;
      &__item {
        margin-bottom: p2r(4);
      }
      @include sm {
        display:flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
      }
      &-email {
        letter-spacing: .2px;
      }

    }
    &-social {
      display: flex;
      align-items:flex-end;
      width:p2r(72);
      justify-content: space-between;
      @include sm {
        width: p2r(70);
        margin-top: p2r(32);
        margin-bottom: p2r(39);
      }
      div {
        &:hover {
          cursor: pointer;
        }
      }
    }
    &-btn {
      display: flex;
      position: relative;
      bottom: p2r(8);
      @include sm {
        width: 95%;
        display: flex;
        justify-content: center;
        letter-spacing: p2r(.7);
        margin-left: auto;
        margin-right: auto;
      }
    }
    @include sm {
      &:last-child {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
      }
    }
}
}
</style>
