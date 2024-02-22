<template>
  <div class="steps">
    <div class="steps-title container">
      Как проходят занятия в нашей онлайн школе
    </div>
    <div class="steps-items container">
      <div class="steps-items__item">
        <div class="steps-items__item_title">
          Шаг 1
        </div>
        <div class="steps-items__item_text">
          Вы записываетесь на пробный онлайн-урок (<span>это бесплатно</span>), где учитель подберет группу, соответствующую
          уровню знаний вашего ребенка. Или же <span>составит индивидуальную программу</span> занятий.
        </div>
        <img v-lazy="require('assets/images/online-education.png')" alt="online-education" class="steps-items__item_image" />
      </div>
      <div class="steps-items__item">
        <div class="steps-items__item_title">
          Шаг 2
        </div>
        <div class="steps-items__item_text">
          Предлагаем вам <span>варианты времени</span> для посещения онлайн-занятий (утром, днем или вечером).
        </div>
        <img v-lazy="require('assets/images/note.png')" alt="note" class="steps-items__item_image" />
      </div>
      <div class="steps-items__item">
        <div class="steps-items__item_title">
          Шаг 3
        </div>
        <div class="steps-items__item_text">
          Уже через месяц регулярных занятий ребенок начнет чувствовать себя увереннее в английском и <span>получать
            лучшие оценки</span> по предмету в школе.
        </div>
        <img v-lazy="require('assets/images/award.png')" alt="award" class="steps-items__item_image" />
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
  background: url("../../assets/images/steps-f-bg.png") no-repeat center p2r(0);
  background-size: cover;
  height: p2r(872);
  @include sm {
    background: url("../../assets/images/steps-f-bg-sm.png") no-repeat center p2r(35);
    background-size: contain;
    height: p2r(1504);
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
      padding-top: p2r(128);
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
      width: p2r(347);
      height: p2r(424);
      background-color: $blue-ll;
      border-radius: p2r(24);
      padding-top: p2r(24);
      padding-right: p2r(24);
      padding-left: p2r(24);
      position: relative;
      @include sm {
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
          font-size: p2r(24);
          line-height: p2r(32);
          margin-bottom: p2r(18);
        }
      }
      &_text {
        font-family: $raleway-medium;
        font-size: p2r(16);
        line-height: p2r(24);
        color: $black-d;
        @include sm {
          margin-bottom: p2r(174);
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
        height: p2r(160);
      }
    }
  }
}
</style>
