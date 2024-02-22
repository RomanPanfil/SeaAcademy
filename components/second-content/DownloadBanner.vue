<template>
  <div class="section">
    <div class="container">
      <div class="banner">
        <div class="banner-info">
          <div class="banner-info-title">
            Скачайте бесплатно гайд “Путешествия и иммиграция”
          </div>
          <div class="banner-info-text">
            Вы изучите 100% лексики, необходимой при переезде в<br class="hidden__mobile"> другую страну и для путешествий.
          </div>
          <download-button class="banner-info-button" :link="'/travel_guide.pdf'">
            Скачать <span>(PDF 8MB)</span>
          </download-button>
        </div>
        <img v-lazy="require('@/assets/images/flat-lay.webp')" alt="drake" />
      </div>
    </div>
  </div>
</template>

<script>
const DownloadButton = () => import('../buttons/DownloadButton')
export default {
  name: 'DownloadBanner',
  components: { DownloadButton }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';

.section {
  height: p2r(432);
 // padding-top: p2r(88);
  @include sm {
    padding-top: p2r(63);
    height: p2r(848);
  }
  .banner {
    background: linear-gradient(180deg, #206AB9 0%, #2B82DD 100%);
    border-radius: p2r(40);
    height: p2r(432);
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    @include sm {
      flex-wrap: wrap;
      height: p2r(720);
      border-radius: p2r(24);
      padding-left: p2r(24);
      padding-right: p2r(24);
      padding-top: p2r(24);
    }
    &-info {
      margin-top: auto;
      margin-bottom: auto;
      margin-left: p2r(80);
      @include sm {
        margin-top: unset;
        margin-bottom: unset;
        margin-left: unset;
      }
      &-title {
        font-family: $raleway-exta-bold;
        font-size: p2r(32);
        line-height: p2r(48);
        color: $white;
        width: p2r(500);
        margin-bottom: p2r(32);
        @include sm {
          font-size: p2r(24);
          line-height: p2r(32);
          width: p2r(264);
          margin-bottom: p2r(25);
        }
      }
      &-text {
        font-family: $raleway-medium;
        font-size: p2r(16);
        line-height: p2r(24);
        color: $white;
        width: p2r(587);
        margin-bottom: p2r(40);
        @include sm {
          width: p2r(264);
        }
      }
      &-button {
        position: relative;
        z-index: 3;
        @include sm {
          width: 100%;
          text-align: center;
        }
        span {
          font-family: $outfit-bold;
        }
      }
    }
    img {
      width: p2r(766);
      height: p2r(432);
      margin-left: p2r(-300);
      @include sm {
       // width: p2r(312);
        //height: p2r(292);
        width: p2r(556);
        height: p2r(314);
        margin-left: p2r(-145);
        margin-top: p2r(-168);
        transform: rotate(90deg);
      }
    }
  }
}
</style>
