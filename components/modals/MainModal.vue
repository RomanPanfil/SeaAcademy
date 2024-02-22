<template>
  <transition name="fade">
    <div v-if="show" class="modal" @click.self="close">
      <div class="modal-wrapper">
        <svg
          width="71"
          height="52"
          viewBox="0 0 71 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M69.05 2.05001C68.5852 1.58136 68.0322 1.20939 67.4229 0.955548C66.8136 0.701704 66.16 0.571014 65.5 0.571014C64.8399 0.571014 64.1864 0.701704 63.5771 0.955548C62.9678 1.20939 62.4148 1.58136 61.95 2.05001L24.7 39.35L9.04999 23.65C8.56739 23.1838 7.99768 22.8172 7.3734 22.5712C6.74913 22.3252 6.08251 22.2046 5.4116 22.2162C4.7407 22.2278 4.07865 22.3714 3.46326 22.6389C2.84787 22.9063 2.29119 23.2924 1.82499 23.775C1.3588 24.2576 0.99223 24.8273 0.74621 25.4516C0.50019 26.0759 0.379538 26.7425 0.391145 27.4134C0.402753 28.0843 0.546392 28.7463 0.813859 29.3617C1.08133 29.9771 1.46738 30.5338 1.94999 31L21.15 50.2C21.6148 50.6686 22.1678 51.0406 22.7771 51.2945C23.3864 51.5483 24.0399 51.679 24.7 51.679C25.3601 51.679 26.0136 51.5483 26.6229 51.2945C27.2322 51.0406 27.7852 50.6686 28.25 50.2L69.05 9.40001C69.5575 8.9318 69.9626 8.36354 70.2396 7.73104C70.5166 7.09854 70.6597 6.41552 70.6597 5.72501C70.6597 5.0345 70.5166 4.35147 70.2396 3.71897C69.9626 3.08648 69.5575 2.51822 69.05 2.05001Z"
            fill="#79DD2B"
          />
        </svg>
        <div class="modal-wrapper__title">
          {{ title }}
        </div>
        <main-button :view="'form'" @click.native="close">
          OK
        </main-button>
      </div>
    </div>
  </transition>
</template>

<script>
const MainButton = () => import('../buttons/MainButton')
export default {
  name: 'MainModal',
  components: { MainButton },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/base/grid';
@import '../../assets/style/base/colors';
@import '../../assets/style/base/fonts';
@import '../../assets/style/mixins/grid';

.modal {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  &-wrapper {
    width: p2r(423);
    background-color: $white;
    border-radius: p2r(24);
    padding: p2r(74) p2r(40) p2r(40);
    display: flex;
    flex-direction: column;
    align-items: center;
    @include sm {
      width: p2r(312);
      padding: p2r(47) p2r(24) p2r(24);
    }
    svg {
      margin-bottom: p2r(74);
      width: p2r(71);
      height: p2r(52);
      @include sm {
        margin-bottom: p2r(46);
        width: p2r(47);
        height: p2r(34);
      }
    }
    &__title {
      font-family: $raleway-exta-bold;
      font-size: p2r(32);
      line-height: p2r(48);
      margin-bottom: p2r(40);
      color: $black-d;
      text-align: center;
      @include sm {
        font-size: p2r(24);
        line-height: p2r(32);
        margin-bottom: p2r(26);
      }
    }
  }
}
</style>
