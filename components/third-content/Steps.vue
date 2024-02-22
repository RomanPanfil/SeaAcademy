<template>
  <div class="steps">
    <div class="steps-title container">
      Как проходят занятия
    </div>
    <div class="steps-items container">
      <div class="steps-items__item">
        <div class="steps-items__item_title">
          Шаг 1
        </div>
        <div class="steps-items__item_text">
          Мы берем <span>тему из реальной жизни</span> (каждый урок новую). Например, “To freelance or not to freelance”.
        </div>
        <img v-lazy="require('@/assets/images/boy.png')" alt="boy" class="steps-items__item_image" />
      </div>
      <div class="steps-items__item">
        <div class="steps-items__item_title">
          Шаг 2
        </div>
        <div class="steps-items__item_text">
          Перед уроком вы получаете <span>список лексики</span> по этой теме.
        </div>
        <img v-lazy="require('@/assets/images/list.png')" alt="list" class="steps-items__item_image" />
      </div>
      <div class="steps-items__item">
        <div class="steps-items__item_title">
          Шаг 3
        </div>
        <div class="steps-items__item_text">
          <span>Моделируем ролевую игру по ситуации</span>, которая могла бы произойти в жизни. Например, общение
          с иностранным заказчиком.
        </div>
        <img v-lazy="require('@/assets/images/game.png')" alt="game" class="steps-items__item_image" />
      </div>
      <div class="steps-items__item">
        <div class="steps-items__item_title">
          Шаг 4
        </div>
        <div class="steps-items__item_text">
          Смотрим видео, читаем англоязычные статьи и форумы по этой теме, затем <span>ведем обсуждение</span>.
        </div>
        <img v-lazy="require('@/assets/images/read.png')" alt="read" class="steps-items__item_image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steps'
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';

.steps {
  background: url("../../assets/images/steps-t-bg.png") no-repeat center p2r(0);
  background-size: cover;
  height: p2r(736);
  @include sm {
    //background: url("../../assets/images/steps-f-bg-sm.png") no-repeat center p2r(35);
    background: url("../../assets/images/steps-t-bg.png") no-repeat p2r(-700) p2r(-34);
    background-size: 328%;
    height: p2r(1800);
    //margin-bottom: p2r(25);
  }
  &-title {
    font-family: $raleway-exta-bold;
    font-size: p2r(32);
    line-height: p2r(48);
    color: $black-d;
    text-align: center;
    padding-top: p2r(160);
    padding-bottom: p2r(80);
    @include sm {
      font-size: p2r(24);
      line-height: p2r(32);
      padding-top: p2r(131);
      padding-bottom: p2r(40);
    }
  }
  &-items {
    display: flex;
    justify-content: space-between;
    @include sm {
      flex-wrap: wrap;
    }
    &__item {
      width: p2r(240);
      height: p2r(448);
      background-color: $blue-ll;
      border-radius: p2r(24);
      padding-top: p2r(24);
      padding-right: p2r(24);
      padding-left: p2r(24);
      position: relative;
      @include sm {
        width: p2r(312);
        height: unset;
        margin-bottom: p2r(40);
      }
      &_title {
        font-family: $raleway-exta-bold;
        font-size: p2r(32);
        line-height: p2r(48);
        margin-bottom: p2r(25);
        color: $black-d;
        @include sm {
          font-size: p2r(32);
          line-height: p2r(48);
          margin-bottom: p2r(24);
        }
      }
      &_text {
        font-family: $raleway-medium;
        font-size: p2r(16);
        line-height: p2r(24);
        color: $black-d;
        @include sm {
          margin-bottom: p2r(184);
        }
        span {
          font-family: $raleway-bold;
        }
      }
      img {
        position: absolute;
        bottom: 0;
        transform: translateX(50%);
        right: 50%;
        width: p2r(192);
      }
    }
  }
}
</style>
