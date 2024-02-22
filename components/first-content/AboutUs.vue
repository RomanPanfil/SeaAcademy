<template>
  <div class="about">
    <div class="about-title container">
      О нас
    </div>
    <div class="about-content container">
      <div class="about-content__info">
        <p>Привет, меня зовут Анастасия, я основательница SEA Academy.</p>
        <p>С раннего детства я мечтала стать учителем английского. Это мое призвание.</p>
        <p>Мои родители поддержали мою мечту и очень помогли на начальном этапе, как бы сложно им это не было: я поехала изучать английский в Европу.</p>
        <p>Я прошла обучение в Американских и Британских школах и университетах, получила диплом учителя от Кембриджского университета.</p>
        <p>Английский раскрыл передо мной много карьерных дверей, я подружилась с огромным количеством интересных людей по всему миру.</p>
        <p>Весь мой опыт изучения английского в лучших школах мира помог мне составить собственную результативную программу обучения.</p>
      </div>
      <div class="about-content__image">
        <img v-lazy="require('@/assets/images/teacher.webp')" alt="teacher" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';

.about {
  background: url("../../assets/images/about-f-bg.png") no-repeat center p2r(-74);
  background-size: p2r(1440) p2r(780);
  height: p2r(770);
  margin-top: p2r(76);
  @include sm {
    background: url("../../assets/images/about-f-bg-sm.png") no-repeat center p2r(20);
    background-size: contain;
    margin-top: p2r(42);
    height: p2r(1204);
  }
  &-title {
    font-family: $raleway-exta-bold;
    font-size: p2r(32);
    line-height: p2r(48);
    color: $black-d;
    padding-top: p2r(86);
    @include sm {
      font-size: p2r(24);
      line-height: p2r(32);
    }
  }
  &-content {
    display: flex;
    @include sm {
      flex-wrap: wrap;
    }
    &__info {
      font-family: $raleway-medium;
      font-size: p2r(16);
      line-height: p2r(24);
      width: p2r(667);
      margin-top: p2r(42);
      color: $black-d;
      @include sm {
        margin-top: p2r(26);
      }
      p {
        margin-bottom: p2r(24);
      }
    }
    &__image {
      margin-top: p2r(-44);
      width: p2r(535);
      overflow: hidden;
      img {
        width: p2r(560);
        height: p2r(480);
        margin-left: p2r(-25);
      }
      @include sm {
        width: unset;
        margin-top: p2r(16);
        img {
          width: p2r(391);
          margin-left: p2r(-64);
          height: p2r(335);
        }
      }
    }
  }
}

</style>
