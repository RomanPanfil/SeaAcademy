<template>
  <div class="benefits">
    <div class="benefits-title container">
      Почему наши ученики начинают говорить на английском в более сжатые сроки?
    </div>
    <div class="benefits-items container">
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/speaking.png')" alt="speaking" />
        </div>
        <div class="benefits-items__item_text">
          Мы сразу погружаем ученика в языковую<br class="hidden__mobile"> среду, он <span>получает практический опыт</span><br class="hidden__mobile"> и начинает говорить
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/exam.png')" alt="exam" />
        </div>
        <div class="benefits-items__item_text">
          <span>Регулярность самое важное</span> в изучении.<br class="hidden__mobile"> Уроки у нас проходят 5 раз в неделю
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/dictionary.png')" alt="dictionary" />
        </div>
        <div class="benefits-items__item_text">
          Программа построена по <span>европейским<br class="hidden__mobile"> стандартам</span> обучения
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/certificate.png')" alt="certificate" />
        </div>
        <div class="benefits-items__item_text">
          Уроки построены на опыте <span>Европейской школы</span><br class="hidden__mobile"> английского языка
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/conversation.png')" alt="conversation" />
        </div>
        <div class="benefits-items__item_text">
          По пятницам - день общения с <span>носителем языка</span>
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/exam2.png')" alt="exam2" />
        </div>
        <div class="benefits-items__item_text">
          Для нас важен <span>результат и правильный<br class="hidden__mobile"> подход</span> к обучению
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Benefits'
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';
.benefits {
  background: url("../../assets/images/benefits-f-bg.png") no-repeat center p2r(-80);
  background-size: cover;
  height: p2r(808);
  margin-top: p2r(76);
  @include sm {
    background: url("../../assets/images/benefits-f-bg-sm.png") no-repeat center p2r(-66);
    background-size: cover;
    height: p2r(952);
  }
  &-title {
    width: p2r(900);
    text-align: center;
    font-family: $raleway-exta-bold;
    font-size: p2r(32);
    line-height: p2r(48);
    @include sm {
      font-size: p2r(24);
      line-height: p2r(32);
      width: p2r(322);
    }
  }
  &-items {
    font-family: $raleway-medium;
    font-size: p2r(16);
    line-height: p2r(24);
    display: flex;
    flex-wrap: wrap;
    margin-top: p2r(80);
    @include sm {
      margin-top: p2r(40);
    }
    &__item {
      display: flex;
      align-items: center;
      width: p2r(560);
      margin-bottom: p2r(40);
      @include sm {
        width: unset;
      }
      &:nth-child(odd) {
        margin-right: p2r(80);
        @include sm {
          margin-right: 0;
        }
      }
      &_image {
        width: p2r(104);
        height: p2r(104);
        border-radius: 50%;
        background-color: $white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: p2r(24);
        img {
          width: p2r(48);
          height: p2r(48);
        }
        @include sm {
          width: p2r(72);
          height: p2r(72);
          margin-right: p2r(16);
          img {
            width: p2r(32);
            height: p2r(32);
          }
        }
      }
      &_text {
        @include sm {
          width: p2r(224);
        }
        span {
          font-family: $raleway-bold;
        }
      }
    }
  }
}
</style>
