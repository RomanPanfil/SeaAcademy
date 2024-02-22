<template>
  <div class="about">
    <div class="about-title container">
      От основателя
    </div>
    <div class="about-content container">
      <div class="about-content__info">
        <p>
          Привет. Меня зовут Анастасия, я основательница SEA Academy.
        </p>
        <p>
          Замечали ли вы, как кто-то, пройдя обучение, начинает легко разговаривать на английском,
          а кто-то не может связать и пары слов? Обучение и жизнь в разных странах помогли мне понять,
          что именно нужно для успешного изучения иностранного языка.
        </p>
        <p>
          Важное преимущество нашей академии: мы готовим вас к общению на языке в реальном мире и с
          реальными людьми.
        </p>
        <p>
          Как правило, в школах и университетах нас тренируют понимать британский английский с его специфическим
          произношением - какова вероятность того, что в повседневной жизни и работе вы будете сталкиваться именно
          с этой вариацией языка? Возможно, 1%.
        </p>
        <p>
          В остальных 99% случаев вы будете встречать людей с европейским акцентом, для которых, так же, как для вас,
          английский изначально не был родным языком. Наши учителя из разных стран с разными акцентами помогут вам
          адаптироваться к реальной англоязычной речи.
        </p>
        <p>
          Знание английского дает множество возможностей в нашем мире - проверено лично! Наш подход к обучению научит
          вас языку, на котором говорят не на страницах учебников, а в реальной жизни.
        </p>
        <p>
          Welcome!
        </p>
      </div>
      <div class="about-content__image">
        <img v-lazy="require('@/assets/images/third-teacher.webp')" alt="third-teacher" />
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
  background: url("../../assets/images/about-t-bg.png") no-repeat center top;
  background-size: cover;
  height: p2r(1080);
  @include sm {
    background: url("../../assets/images/about-t-bg-sm.png") no-repeat center p2r(160);
    background-size: contain;
    margin-top: p2r(59);
    height: p2r(1744);
  }
  &-title {
    font-family: $raleway-exta-bold;
    font-size: p2r(32);
    line-height: p2r(48);
    color: $black-d;
    padding-top: p2r(232);
    @include sm {
      font-size: p2r(24);
      line-height: p2r(32);
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
          width: p2r(310);
          margin-left: p2r(2);
        }
      }
    }
  }
}
</style>
