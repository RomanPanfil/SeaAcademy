<template>
  <div class="benefits">
    <div class="benefits-title container">
      Хороший разговорный английский - это лучший капитал, который может дать каждый родитель своему ребенку.
    </div>
    <div class="benefits-items container">
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/house.png')" alt="house" />
        </div>
        <div class="benefits-items__item_text">
          Возможность выбрать <span>иностранный ВУЗ</span> для обучения
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/airplane.png')" alt="airplane" />
        </div>
        <div class="benefits-items__item_text">
          Возможность <span>путешествовать и заводить друзей</span> по<br class="hidden__mobile"> всему миру
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/job.png')" alt="job" />
        </div>
        <div class="benefits-items__item_text">
          Возможность получить <span>высокооплачиваемую<br class="hidden__mobile"> работу</span> в будущем
        </div>
      </div>
      <div class="benefits-items__item">
        <div class="benefits-items__item_image">
          <img v-lazy="require('@/static/icons/leave.png')" alt="leave" />
        </div>
        <div class="benefits-items__item_text">
          Возможность выбирать <span>любую страну</span><br class="hidden__mobile"> для проживания
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
    background: url("../../assets/images/privileges-f-bg.png") no-repeat center p2r(0);
    background-size: contain;
    height: p2r(584);
    margin-top: p2r(-74);
    @include sm {
      background: url("../../assets/images/privileges-f-bg-sm.png") no-repeat center p2r(-64);
      background-size: cover;
      height: p2r(760);
      margin-top: p2r(58);
    }
    &-title {
      width: p2r(986);
      text-align: center;
      font-family: $raleway-exta-bold;
      font-size: p2r(32);
      line-height: p2r(48);
      @include sm {
        width: unset;
        font-size: p2r(24);
        line-height: p2r(32);
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
      }
      &__item {
        display: flex;
        align-items: center;
        width: p2r(560);
        margin-bottom: p2r(40);
        &:nth-child(odd) {
          margin-right: p2r(80);
          @include sm {
            margin-right: unset;
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
            img {
              width: p2r(32);
              height: p2r(32);
            }
          }
        }
        &_text {
          @include sm {
            width: p2r(216);
          }
          span {
            font-family: $raleway-bold;
          }
        }
      }
    }
  }
</style>
