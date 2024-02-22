<template>
  <div class="wrapper container">
    <div class="header-top">
      <div v-for="tab in tabs" :key="tab.id" class="header-top__item" :class="{active: activeTab === tab.id}" @click="setTab(tab.id)">
        {{ tab.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  data () {
    return {
      tabs: [
        { id: 1, title: 'Английский для детей' },
        { id: 2, title: 'Курс для взрослых' },
        { id: 3, title: 'Speaking Club' }
      ]
      // activeTab: 1
    }
  },
  computed: {
    activeTab: {
      set (id) {
        this.$store.commit('content/setContent', id)
      },
      get () {
        return this.$store.getters['content/get']
      }
    }
  },
  methods: {
    setTab (id) {
      this.activeTab = id
      this.$store.commit('content/setContent', id)

      switch(id) {
        case 1:
          this.$router.replace('/');
          break;
        case 2:
          this.$router.replace('/course');
          break;
        case 3:
          this.$router.replace('/speakingclub');
          break;
        default:
          this.$router.replace('/');
          break;
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';
.wrapper {
  @include sm {
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
.header-top {
  font-family: $raleway-bold;
  font-size: p2r(16);
  line-height: p2r(24);
  display: flex;
  justify-content: space-between;
  height: p2r(72);
  background-color: $white;
  border-radius: 0 0 p2r(16) p2r(16);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.06);
  @include sm {
    width: p2r(696);
    background-color: $white;
    height: p2r(48);
    border-radius: 0 0 p2r(16) p2r(16);
  }
  &__item {
    height: p2r(72);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: p2r(400);
    border-radius: 0 0 p2r(16) p2r(16);
    background-color: $white;
    top: p2r(0);
    z-index: 5;
    color: $black-d;
    @include sm {
      width: p2r(232);
      height: p2r(48);
    }
    &.active {
      background-color: $blue;
      color: $white;
      &:nth-child(2) {
        position: relative;
        &::before {
          position: absolute;
          content: '';
          height: 100%;
          width: p2r(30);
          background-color: $blue;
          left: p2r(-10);
        }
      }
      &:nth-child(3) {
        position: relative;
        &::before {
          position: absolute;
          content: '';
          height: 100%;
          width: p2r(50);
          background-color: $blue;
          left: p2r(-10);
        }
      }
    }
    &:nth-child(1) {
      z-index: 3;
    }
    &:nth-child(2) {
      z-index: 2;
    }
    &:nth-child(3) {
      z-index: 1;
    }
  }
}
</style>
