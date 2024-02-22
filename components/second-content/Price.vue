<template>
  <div class="price">
    <div class="price-title container">
      Стоимость обучения
    </div>
    <div class="price-slider container hidden__mobile">
      <div v-for="price in priceInfo" :key="price.id" class="price-slider__item">
        <div class="price-slider__item_subtitle">
          {{ price.subtitle }}
        </div>
        <div class="price-slider__item_title">
          {{ price.title }}
        </div>
        <div class="price-slider__item_sum">
          {{ price.pay }}<sup>₽</sup>
        </div>
        <div class="price-slider__item_list">
          <div v-for="item in price.list" :key="item" class="price-slider__item_list-item">
            <span>{{ item }}</span>
          </div>
        </div>
        <main-button id="button1" :view="'form'" class="price-slider__item_button" @click.native="buy(price.id - 1)">
          Купить
        </main-button>
      </div>
    </div>
    <client-only>
      <div ref="priceSwiper" v-swiper:priceSwiper="swiperOption" class="price-slider container hidden__desktop">
        <div class="swiper-wrapper">
          <div v-for="price in priceInfo" :key="price.id" class="price-slider__item swiper-slide">
            <div class="price-slider__item_subtitle">
              {{ price.subtitle }}
            </div>
            <div class="price-slider__item_title">
              {{ price.title }}
            </div>
            <div class="price-slider__item_sum">
              {{ price.pay }}<sup>₽</sup>
            </div>
            <div class="price-slider__item_list">
              <div v-for="item in price.list" :key="item" class="price-slider__item_list-item">
                <span>{{ item }}</span>
              </div>
            </div>
            <main-button :view="'form'" class="price-slider__item_button" @click.native="buy(price.id - 1)">
              Купить
            </main-button>
          </div>
        </div>
        <div class="swiper-pagination" />
      </div>
    </client-only>
  </div>
</template>

<script>
const MainButton = () => import('../buttons/MainButton')
export default {
  name: 'Price',
  components: { MainButton },
  data () {
    return {
      getCourseWidjetShow: false,
      swiperOption: {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 24,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        }
      },
      priceInfo: [
        {
          id: 1,
          subtitle: 'Пакет',
          title: 'Самостоятельный',
          pay: '24 800',
          list: [
            'Доступ ко всем урокам',
            'Доступ к словарику',
            'Домашние задание + тесты',
            'Доступ в телеграмм-канал для общения на английском'
          ]
        },
        {
          id: 2,
          subtitle: 'Пакет',
          title: 'С обратной связью',
          pay: '31 900',
          list: [
            'Доступ ко всем урокам',
            'Доступ к словарику',
            'Домашние задание + тесты',
            'Доступ в телеграмм-канал для общения на английском',
            'Обратная связь от куратора',
            'Проверка домашних заданий',
            'Спикинг клаб раз в неделю',
            'Планер-учебник в подарок'
          ]
        },
        {
          id: 3,
          subtitle: 'Пакет',
          title: 'С учителем',
          pay: '44 700',
          list: [
            'Доступ ко всем урокам',
            'Доступ к словарику',
            'Домашние задание + тесты',
            'Доступ в телеграмм-канал для общения на английском',
            'Персональная помощь учителя',
            'Обратная связь от куратора',
            'Проверка домашних заданий',
            'Спикинг клаб раз в неделю',
            'Планер-учебник в подарок'
          ]
        }
      ]
    }
  },
  methods: {
    buy (id) {
      this.$router.push(`/getCourse?id=${id}`)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';

.price {
  background: url("../../assets/images/second-price-f-bg.png") no-repeat center p2r(0);
  background-size: cover;
  height: p2r(1128);
  @include sm {
    background: url("../../assets/images/second-price-f-bg-sm.png") no-repeat center p2r(0);
    background-size: cover;
    height: p2r(880);
  }
  &-title {
    font-family: $raleway-exta-bold;
    font-size: p2r(32);
    line-height: p2r(48);
    margin-bottom: p2r(80);
    text-align: center;
    padding-top: p2r(160);
    @include sm {
      font-size: p2r(24);
      line-height: p2r(32);
      padding-top: p2r(63);
      margin-bottom: p2r(40);
    }
  }
  &-description {
    font-family: $raleway-bold;
    font-size: p2r(16);
    line-height: p2r(24);
    width: p2r(730);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: p2r(40);
    @include sm {
      width:unset;
      padding-left: p2r(23);
      padding-right: p2r(23);
      margin-bottom: p2r(38);
    }
  }
  &-button {
    margin-right: auto;
    margin-left: auto;
    margin-bottom: p2r(80);
    display: block;
    @include sm {
      display: block;
      width: p2r(312);
      margin-left: p2r(24);
      margin-right: p2r(24);
      margin-bottom: p2r(40);
    }
  }
  &-slider {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    @include sm {
      display: block;
      justify-content: unset;
    }
    .swiper-wrapper {
      display: flex;
      justify-content: space-between;
      @include sm {
        width: max-content;
      }
    }
    &__item {
      width: p2r(347);
      background-color: $white;
      padding: p2r(40) p2r(24) p2r(24);
      border-radius: p2r(24);
      //box-shadow: 0 p2r(24) p2r(40) rgba(0, 0, 0, 0.04);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @include sm {
        width: p2r(320);
        margin-right: p2r(20);
      }
      &_subtitle {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-size: p2r(16);
        font-family: $raleway-exta-bold;
        line-height: p2r(24);
      }
      &_title {
        font-family: $raleway-exta-bold;
        font-size: p2r(32);
        width: p2r(307);
        line-height: p2r(48);
        margin-bottom: p2r(40);
        text-align: center;
        @include sm {
          font-size: p2r(24);
          line-height: p2r(32);
          margin-bottom: p2r(24);
          width: unset;
        }
      }
      &_sum {
        font-family: $outfit-exta-bold;
        font-size: p2r(56);
        line-height: p2r(64);
        color: $blue;
        text-align: center;
        margin-bottom: p2r(40);
        position: relative;
        @include sm {
          font-size: p2r(48);
          line-height: p2r(56);
          margin-bottom: p2r(24);
        }
        sup {
          font-family: $raleway-exta-bold;
          font-size: p2r(24);
          position: absolute;
          top: p2r(-17);
          margin-left: p2r(9);
          @include sm {
            top: p2r(-12);
          }
        }
      }
      &_list {
        font-family: $raleway-medium;
        font-size: p2r(16);
        line-height: p2r(24);
        display: flex;
        flex-direction: column;
        margin-bottom: p2r(31);
        padding-left: p2r(9);
        @include sm {
          margin-bottom: p2r(16);
        }
        &-item {
          display: flex;
          align-items: center;
          margin-bottom: p2r(8);
          position: relative;
          span {
            width: p2r(266);
            @include sm {
              width: p2r(232);
            }
            margin-left: p2r(24);
          }
          &::before {
            content: '';
            position: absolute;
            display: block;
            width: p2r(6);
            height: p2r(6);
            background-color: $blue;
            border-radius: 50%;
            margin-right: p2r(16);
            top: p2r(10);
          }
        }
      }
      &_button {
        // margin-top: auto;
        display: block;
        margin-top: auto;
        margin-bottom: 0;
      }
    }
  }
}

</style>
<style lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';

.swiper-pagination {
  @include sm {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: p2r(73);
    margin-top: p2r(33);
  }
}
.swiper-pagination-bullet {
  @include sm {
    border-radius: 50%;
    width: p2r(6);
    height: p2r(6);
    background: $gray;
    &:not(:last-child) {
      margin-right: p2r(18);
    }
  }
}
.swiper-pagination-bullet-active {
  @include sm {
    background: $blue;
  }
}
</style>
