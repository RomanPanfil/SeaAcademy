<template>
  <div class="benefits">
    <div class="benefits-title container">
      В каждом уроке
    </div>
    <div class="benefits-items container">
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/tutorials.png')" alt="tutorials" />
        </div>
        <div class="benefits-items__item_text">
          Видео урок
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/information.png')" alt="information" />
        </div>
        <div class="benefits-items__item_text">
          Гайд
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/audio-book.png')" alt="audio-book" />
        </div>
        <div class="benefits-items__item_text">
          Словарик с аудио <br>произношением
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/exam2.png')" alt="exam2" />
        </div>
        <div class="benefits-items__item_text">
          Тест на проверку <br>усвоения материала
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/exam.png')" alt="exam" />
        </div>
        <div class="benefits-items__item_text">
          Домашнее задание
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/teach.png')" alt="teach" />
        </div>
        <div class="benefits-items__item_text">
          Проверка домашних заданий <br>
          (если тариф с обратной связью)
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/rumor.png')" alt="rumor" />
        </div>
        <div class="benefits-items__item_text">
          Практика речи в <br>каждом уроке
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/conversation.png')" alt="conversation" />
        </div>
        <div class="benefits-items__item_text">
          Раз в неделю урок в <br>спикинг клабе
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Privilege'
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';
.benefits {
  background: url("../../assets/images/second-privileges-f-bg.png") no-repeat center p2r(-160);
  background-size: cover;
  height: p2r(704);
  @include sm {
    background: url("../../assets/images/second-privileges-f-bg-sm.png") no-repeat center p2r(60);
    background-size: contain;
    height: p2r(1816);
  }
  &-title {
    width: p2r(900);
    text-align: center;
    font-family: $raleway-exta-bold;
    font-size: p2r(32);
    margin-top: p2r(160);
    line-height: p2r(48);
    @include sm {
      width: unset;
      font-size: p2r(24);
      line-height: p2r(32);
      margin-top: p2r(0);
      padding-top: p2r(128);
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
      margin-bottom: p2r(88);
      justify-content: center;
    }
    &__item {
      display: block;
      align-items: center;
      width: p2r(300);
      margin-bottom: p2r(80);
      @include sm {
        width: unset;
        margin-bottom: p2r(40);
      }
      &:nth-child(odd) {
        //margin-right: p2r(80);
        @include sm {
          //margin-right: 0;
        }
      }
      &_image {
        width: p2r(104);
        height: p2r(104);
        border-radius: 50%;
        background-color: $white;
        display: flex;
        align-items: center;
        margin: p2r(0) auto;
        justify-content: center;
        margin-bottom: p2r(16);
        img {
          width: p2r(48);
          height: p2r(48);
        }
        @include sm {
          img {
            width: p2r(48);
            height: p2r(48);
          }
        }
      }
      &_text {
        display: flex;
        justify-content:center;
        text-align: center;
        @include sm {
          width: p2r(250);
        }
        span {
          font-family: $raleway-bold;
        }
      }
    }
  }
}
</style>
