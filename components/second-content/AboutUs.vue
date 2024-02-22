<template>
  <div class="about">
    <div class="about-title container">
      О нас
    </div>
    <div class="about-content container">
      <div class="about-content__info">
        <p>Привет, меня зовут Анастасия, я основательница SEA Academy.</p>
        <p>Английский раскрыл передо мной много карьерных дверей, я подружилась с огромным количеством интересных людей по всему миру.</p>
        <p>Английский - это лучшая инвестиция в себя, в свое будущее.</p>
        <p>Я прошла обучение в Американских и Британских школах и университетах, получила диплом учителя от Кембриджского университета.</p>
        <p>Весь мой опыт изучения английского в лучших школах мира помог мне составить собственную результативную программу обучения.</p>
      </div>
      <div class="about-content__image">
        <img v-lazy="require('@/assets/images/second-teacher.webp')" alt="teacher" />
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
  background: url("../../assets/images/second-about-f-bg.png") no-repeat center p2r(-68);
  background-size: cover;
  height: p2r(770);
  margin-top: p2r(70);
  padding-top: p2r(76);
  @include sm {
    background: url("../../assets/images/second-about-f-bg-sm.png") no-repeat center p2r(0);
    background-size: cover;
    margin-top: p2r(0);
    height: p2r(1038);
    padding-top: unset;
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
      padding-top: p2r(64);
    }
  }
  &-content {
    display: flex;
    justify-content: space-between;
    @include sm {
      flex-wrap: wrap;
    }
    &__info {
      font-family: $raleway-medium;
      font-size: p2r(16);
      line-height: p2r(24);
      width: p2r(667);
      margin-top: p2r(42);
      @include sm {
        margin-top: p2r(26);
      }
      p {
        margin-bottom: p2r(24);
      }
    }
    &__image {
      margin-top: p2r(-120);
      img {
        width: p2r(453);
      }
      @include sm {
        margin-top: p2r(16);
        img {
          width: p2r(294);
          margin-left: p2r(7);
        }
      }
    }
  }
}

</style>
