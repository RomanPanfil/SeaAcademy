<template>
  <div class="examples">
    <div class="examples-title container">
      Примеры тем, которые мы изучаем в клубе:
    </div>
    <div class="examples-items container">
      <div class="examples-items__item">
        <div class="examples-items__item_image">
          <img v-lazy="require('@/assets/images/healthy-food.png')" alt="healthy-food" />
        </div>
        <p>
          Guilty pleasure or gluten free?
        </p>
      </div>
      <div class="examples-items__item">
        <div class="examples-items__item_image">
          <img v-lazy="require('@/assets/images/certificate.png')" alt="certificate" />
        </div>
        <p>
          To freelance or not to freelance?
        </p>
      </div>
      <div class="examples-items__item">
        <div class="examples-items__item_image">
          <img v-lazy="require('@/assets/images/myself.png')" alt="myself" />
        </div>
        <p>
          Me, Myself and I
        </p>
      </div>
      <div class="examples-items__item">
        <div class="examples-items__item_image">
          <img v-lazy="require('@/assets/images/airplane.png')" alt="airplane" />
        </div>
        <p>
          Vitamin SEA (Holidays)
        </p>
      </div>
      <div class="examples-items__item">
        <div class="examples-items__item_image">
          <img v-lazy="require('@/assets/images/bags.png')" alt="bags" />
        </div>
        <p>
          Fashion killer
        </p>
      </div>
      <div class="examples-items__item">
        <div class="examples-items__item_image">
          <img v-lazy="require('@/assets/images/fall-in-love.png')" alt="fall-in-love" />
        </div>
        <p>
          Love is in the air & Tinder horror stories
        </p>
      </div>
    </div>
    <p class="examples-etc container">
      И множество других...
    </p>
  </div>
</template>

<script>
export default {
  name: 'ThemeExamples'
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';

.examples {
  background: url("../../assets/images/examples-t-bg.png") no-repeat center p2r(0);
  background-size: contain;
  height: p2r(944);
  @include sm {
    background: url("../../assets/images/examples-t-bg-sm.png") no-repeat center p2r(0);
    background-size: contain;
    height: p2r(1360);
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
      padding-top: p2r(64);
      padding-bottom: p2r(40);
    }
  }
  &-items {
    display: flex;
    flex-wrap: wrap;
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: p2r(400);
      margin-bottom: p2r(102);
      @include sm {
        margin-bottom: p2r(40);
      }
      &_image {
        width: p2r(104);
        height: p2r(104);
        background-color: $white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: p2r(18);
        @include sm {
          margin-bottom: p2r(16);
        }
        img {
          width: p2r(48);
          height: p2r(48);
        }
      }
      p {
        font-family: $raleway-medium;
        font-size: p2r(16);
        line-height: p2r(24);
        color: $black-d;
      }
    }
  }
  &-etc {
    font-family: $raleway-bold;
    font-size: p2r(14);
    line-height: p2r(24);
    text-align: center;
    color: $black-d;
    margin-top: p2r(-22);
    @include sm {
      margin-top: p2r(0);
    }
  }
}
</style>
