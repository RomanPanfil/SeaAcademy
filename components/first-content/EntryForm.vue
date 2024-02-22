<template>
  <div class="form" :class="{kids: content === 'kids'}">
    <div class="form-content">
      <div class="form-content__title">
        {{ title }}
      </div>
      <div class="form-content__description">
        {{ description }}
      </div>
      <form>
        <div class="inputs-wrap">
          <label>
            <p v-if="!nameValid && name.length">Недопустимые символы</p>
            <input v-model="name" placeholder="Имя" type="text" maxlength="50" @input="handleInput" :class="{error: !isValidFormData.name || !nameValid}">
          </label>
          <label>
            <p v-if="!phoneValid && phone.length">Недопустимые символы</p>
            <input v-model="phone" placeholder="Телефон" type="text" maxlength="50" @keydown="allowDigitsAndPlus" :class="{error: !isValidFormData.phone || !phoneValid}">
          </label>
        </div>
        <main-button :view="'form'" class="form-button" @click.native.prevent="entry">
          Записаться
        </main-button>
        <div class="agree">
          Оставляя заявку, вы принимаете <a href="/personal_data_processing.pdf" target="_blank">условия</a>
          обработки персональных данных и <a href="/contract_offer.pdf" target="_blank">договора оферты</a>
        </div>
      </form>
    </div>
    <div class="form-bg">
      <slot />
    </div>
    <main-modal
      :show="isShowEntryModal"
      :title="'Успешно отправлено'"
      @close="isShowEntryModal = false"
    />
  </div>
</template>

<script>
import axios from "axios";

const MainButton = () => import('../buttons/MainButton')
const MainModal = () => import('../modals/MainModal')
export default {
  name: 'EntryForm',
  components: { MainModal, MainButton },
  props: {
    content: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShowEntryModal: false,
      name: '',
      phone: '',
      isValidFormData: {
        name: true,
        phone: true
      },
      nameValid: true,
      phoneValid: true
    }
  },
  methods: {
    isNameValid () {
      const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s\-]+$/u
      this.nameValid = nameRegex.test(this.name)
    },
    isPhoneValid () {
      const phoneRegex = /^(\+|\d)\d+$/
      this.phoneValid = phoneRegex.test(this.phone)
    },
    allowDigitsAndPlus(event) {
      this.nameValid = true
      this.phoneValid = true

      const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete', '+']
      const keyCode = event.key

      if (!allowedKeys.includes(keyCode) && isNaN(parseInt(keyCode))) {
        event.preventDefault()
      }
    },
    handleInput(event) {
      this.nameValid = true
      this.phoneValid = true

      const validChars = /[a-zA-Zа-яА-ЯёЁ ]/
      let newValue = ''
      for (let i = 0; i < event.target.value.length; i++) {
        const char = event.target.value[i]
        if (validChars.test(char)) {
          newValue += char
        }
      }
      this.name = newValue
    },
    // async entry () {
    //   if (this.name.length > 0 && this.phone.length > 0) {
    //     try {
    //       let data = {
    //         id: this.$store.getters['content/get'],
    //         name: this.name,
    //         phone: this.phone
    //       }
    //
    //       let response = await fetch(`${Constants.URL_BASE}/send`, {
    //         method: 'POST',
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //       })
    //
    //       let result = await response.json()
    //
    //       if (result.success === true) {
    //         this.isShowEntryModal = true
    //         this.name = ''
    //         this.phone = ''
    //       }
    //     } catch (e) {
    //       console.error(e)
    //     }
    //   }
    // }

    async entry () {
      this.isNameValid()
      this.isPhoneValid()

      if (this.name.length > 0 && this.phone.length > 0) {
        this.isValidFormData.name = true
        this.isValidFormData.phone = true
        try {
          this.isValidFormData.name = this.name.length
          this.isValidFormData.phone = this.phone.length
          const data = {
            id: this.$store.getters['content/get'],
            name: this.name,
            phone: this.phone
          }

          const response = await axios.post(`https://api.seacademia.com/send`, data, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })

          const result = response.data

          if (result.success === true) {
            this.isShowEntryModal = true
            this.name = ''
            this.phone = ''
            this.isValidFormData.name = true
            this.isValidFormData.phone = true
          }
        } catch (e) {
          this.name = ''
          this.phone = ''
          this.isValidFormData.name = true
          this.isValidFormData.phone = true
          console.error(e)
        }
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

.form {
  &.kids {
    background-image: url("data:image/svg+xml,%3Csvg width='80' height='62' viewBox='0 0 80 62' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.5' clip-path='url(%23clip0_34_748)'%3E%3Cpath d='M50.5753 6.67433L38.6026 3.17606C38.1056 3.03085 37.585 3.31604 37.4397 3.81301C37.2945 4.30998 37.5797 4.8306 38.0767 4.97581L50.0495 8.47408C50.5464 8.61929 51.0671 8.33411 51.2123 7.83714C51.3575 7.34017 51.0724 6.81958 50.5753 6.67433ZM48.1549 50.7641L47.4346 50.5537L57.489 16.143C57.9388 14.6036 57.0888 12.9879 55.5857 12.4748L57.3947 6.28371C58.9374 6.66063 60.5237 5.75674 60.9735 4.21736L61.9026 1.03744C62.2621 -0.193105 61.9874 -1.50011 61.1678 -2.45871C58.9647 -5.03563 54.7581 -7.24495 48.6651 -9.02523C45.5949 -9.92232 42.8283 -10.475 40.4425 -10.6682C39.9264 -10.71 39.4741 -10.3254 39.4325 -9.80933C39.3908 -9.29318 39.7754 -8.84104 40.2913 -8.79931C42.5505 -8.61649 45.1909 -8.08695 48.1393 -7.22549C53.7956 -5.57278 57.8081 -3.50313 59.7427 -1.24023C60.1497 -0.764241 60.2843 -0.109331 60.1028 0.511702L59.1737 3.6915C59.0012 4.28193 58.3806 4.62189 57.7901 4.44938L33.7208 -2.58335C33.1303 -2.75587 32.7904 -3.37649 32.9629 -3.96693L33.892 -7.14685C34.0735 -7.76776 34.5395 -8.24717 35.1389 -8.42926C35.4057 -8.51042 35.6909 -8.58128 35.9866 -8.64007C36.4944 -8.74096 36.8243 -9.23449 36.7235 -9.74229C36.6225 -10.2501 36.1292 -10.5802 35.6212 -10.4791C35.2652 -10.4084 34.9196 -10.3223 34.5939 -10.2233C33.3871 -9.85686 32.4519 -8.90338 32.0923 -7.67283L31.1632 -4.49303C30.7134 -2.95365 31.5634 -1.33792 33.0665 -0.824906L31.2575 5.36635C29.7147 4.9894 28.1285 5.89332 27.6787 7.4327L17.6244 41.8433L16.9041 41.6328C15.6398 41.2634 14.3106 41.9915 13.9412 43.2559L13.4673 44.8776C13.0979 46.1419 13.826 47.4711 15.0903 47.8405L39.9701 55.11C40.4672 55.2553 40.9877 54.9701 41.1329 54.4731C41.2781 53.9761 40.993 53.4555 40.4959 53.3103L15.6162 46.0408C15.3442 45.9613 15.1876 45.6754 15.2671 45.4034L15.7409 43.7817C15.8204 43.5097 16.1063 43.3531 16.3783 43.4326L47.6291 52.5636C47.9011 52.6431 48.0577 52.929 47.9782 53.201L47.5044 54.8227C47.4249 55.0947 47.1389 55.2513 46.867 55.1718L44.8087 54.5704C44.3116 54.4252 43.7911 54.7104 43.6459 55.2074C43.5007 55.7043 43.7858 56.2249 44.2829 56.3702L46.3412 56.9716C47.6056 57.341 48.9347 56.613 49.3042 55.3486L49.778 53.7269C50.1475 52.4628 49.4193 51.1336 48.1549 50.7641ZM34.8651 -0.2956L55.5941 5.76113L53.787 11.9458L33.058 5.88906L34.8651 -0.2956ZM45.6349 50.0278L19.424 42.3694L29.4783 7.95865C29.6508 7.36821 30.2714 7.02825 30.8619 7.20077L54.9313 14.2335C55.5218 14.406 55.8617 15.0267 55.6892 15.6171L45.6349 50.0278ZM53.1494 -0.87003L53.4541 -1.91292C53.5993 -2.40989 53.3143 -2.93049 52.8172 -3.07573C52.3201 -3.22097 51.7996 -2.93576 51.6544 -2.43878L51.3496 -1.39589C51.2044 -0.898919 51.4895 -0.378328 51.9866 -0.233086C52.4837 -0.0878428 53.0042 -0.373059 53.1494 -0.87003ZM50.3273 15.5391L34.0389 10.7798C33.1704 10.5261 32.2575 11.0261 32.0038 11.8945L23.9841 39.3417C23.7304 40.2101 24.2304 41.123 25.0989 41.3767L41.3873 46.136C42.2556 46.3897 43.1686 45.8897 43.4224 45.0212L51.442 17.5741C51.6958 16.7057 51.1956 15.7928 50.3273 15.5391ZM29.9714 40.847L25.8495 39.6426L28.1584 31.7404L32.2803 32.9448L29.9714 40.847ZM32.8062 31.1449L28.6843 29.9406L30.903 22.3471L35.0249 23.5514L32.8062 31.1449ZM35.5507 21.7518L31.4288 20.5474L33.7377 12.6452L37.8596 13.8496L35.5507 21.7518ZM35.7667 42.5403L31.7711 41.3729L34.08 33.4706L38.0756 34.6381L35.7667 42.5403ZM38.6015 32.8382L34.6059 31.6708L36.8246 24.0773L40.8202 25.2447L38.6015 32.8382ZM41.346 23.4451L37.3505 22.2777L39.6594 14.3754L43.6549 15.5429L41.346 23.4451ZM41.6883 44.2705L37.5664 43.0662L39.8753 35.164L43.9972 36.3683L41.6883 44.2705ZM44.5231 34.5684L40.4012 33.3641L42.6199 25.7706L46.7418 26.9749L44.5231 34.5684ZM47.2677 25.1753L43.1458 23.971L45.4547 16.0687L49.5766 17.2731L47.2677 25.1753ZM42.2951 -4.0415L42.5998 -5.08439C42.745 -5.58136 42.4599 -6.10199 41.9629 -6.2472C41.4659 -6.3924 40.9453 -6.10722 40.8001 -5.61025L40.4954 -4.56736C40.3501 -4.07039 40.6353 -3.54976 41.1323 -3.40455C41.6293 -3.25935 42.1499 -3.54453 42.2951 -4.0415ZM46.3782 -1.19813C47.1865 -0.961946 48.0575 -1.08732 48.7679 -1.5422C49.204 -1.82136 49.3312 -2.4012 49.0519 -2.83728C48.7727 -3.27348 48.1928 -3.40059 47.7568 -3.12127C47.5029 -2.95871 47.1921 -2.9137 46.904 -2.99788C46.6159 -3.08205 46.3782 -3.28721 46.2519 -3.56087C46.0349 -4.03109 45.4777 -4.2361 45.0077 -4.01908C44.5376 -3.80209 44.3325 -3.245 44.5495 -2.7749C44.9031 -2.0091 45.5696 -1.43438 46.3782 -1.19813Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_34_748'%3E%3Crect width='64' height='64' fill='white' transform='translate(17.9494 -18) rotate(16.2876)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: p2r(80) p2r(62);
    background-position: p2r(618) top;
    @include sm {
      background-image: url("data:image/svg+xml,%3Csvg width='37' height='60' viewBox='0 0 37 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.5' clip-path='url(%23clip0_355_1912)'%3E%3Cpath d='M37.9315 18.5055L28.9519 15.8818C28.5792 15.7729 28.1887 15.9868 28.0798 16.3595C27.9709 16.7322 28.1848 17.1227 28.5575 17.2316L37.5371 19.8553C37.9099 19.9642 38.3003 19.7503 38.4092 19.3776C38.5181 19.0049 38.3043 18.6144 37.9315 18.5055ZM36.1162 51.5729L35.576 51.415L43.1168 25.607C43.4541 24.4524 42.8166 23.2407 41.6893 22.8559L43.046 18.2125C44.2031 18.4952 45.3928 17.8173 45.7301 16.6628L46.427 14.2778C46.6966 13.3549 46.4906 12.3747 45.8758 11.6557C44.2235 9.72303 41.0686 8.06604 36.4989 6.73083C34.1962 6.05802 32.1213 5.64349 30.3319 5.49864C29.9448 5.46729 29.6056 5.75573 29.5744 6.14276C29.5431 6.52987 29.8316 6.86898 30.2185 6.90028C31.9129 7.03738 33.8932 7.43454 36.1045 8.08064C40.3468 9.32017 43.3561 10.8724 44.8071 12.5696C45.1123 12.9266 45.2132 13.4178 45.0771 13.8835L44.3803 16.2684C44.2509 16.7112 43.7855 16.9662 43.3426 16.8368L25.2906 11.5622C24.8478 11.4329 24.5928 10.9674 24.7222 10.5246L25.4191 8.13962C25.5551 7.67394 25.9046 7.31438 26.3542 7.17781C26.5543 7.11694 26.7682 7.06379 26.99 7.0197C27.3709 6.94404 27.6183 6.57389 27.5426 6.19304C27.4669 5.81217 27.097 5.56461 26.716 5.64042C26.449 5.69348 26.1897 5.758 25.9455 5.83225C25.0403 6.10711 24.3389 6.82222 24.0693 7.74513L23.3724 10.13C23.0351 11.2845 23.6726 12.4963 24.7999 12.8811L23.4431 17.5245C22.286 17.2418 21.0964 17.9197 20.7591 19.0743L13.2183 44.8822L12.6781 44.7244C11.7299 44.4473 10.733 44.9934 10.4559 45.9417L10.1005 47.1579C9.82345 48.1062 10.3695 49.1031 11.3178 49.3802L29.9776 54.8323C30.3504 54.9412 30.7408 54.7273 30.8497 54.3546C30.9586 53.9818 30.7448 53.5914 30.372 53.4825L11.7122 48.0303C11.5082 47.9707 11.3907 47.7563 11.4503 47.5523L11.8057 46.336C11.8653 46.132 12.0797 46.0146 12.2837 46.0742L35.7219 52.9225C35.9259 52.9821 36.0433 53.1965 35.9837 53.4005L35.6283 54.6168C35.5687 54.8208 35.3542 54.9382 35.1503 54.8786L33.6066 54.4276C33.2338 54.3186 32.8434 54.5326 32.7345 54.9053C32.6256 55.278 32.8394 55.6685 33.2122 55.7774L34.7559 56.2284C35.7042 56.5055 36.7011 55.9595 36.9782 55.0112L37.3335 53.7949C37.6106 52.8468 37.0645 51.8499 36.1162 51.5729ZM26.1488 13.2781L41.6956 17.8206L40.3403 22.4591L24.7935 17.9165L26.1488 13.2781ZM34.2262 51.0206L14.568 45.2768L22.1087 19.4687C22.2381 19.0259 22.7036 18.7709 23.1464 18.9003L41.1985 24.1749C41.6414 24.3043 41.8963 24.7698 41.7669 25.2126L34.2262 51.0206ZM39.8621 12.8472L40.0906 12.0651C40.1995 11.6923 39.9857 11.3019 39.6129 11.193C39.2401 11.084 38.8497 11.2979 38.7408 11.6707L38.5123 12.4528C38.4034 12.8256 38.6171 13.216 38.99 13.3249C39.3628 13.4339 39.7532 13.22 39.8621 12.8472ZM37.7455 25.154L25.5292 21.5846C24.8778 21.3943 24.1932 21.7693 24.0029 22.4207L17.9881 43.006C17.7978 43.6573 18.1729 44.342 18.8242 44.5323L31.0405 48.1017C31.6917 48.292 32.3765 47.917 32.5668 47.2657L38.5816 26.6803C38.7719 26.029 38.3967 25.3443 37.7455 25.154ZM22.4785 44.135L19.3871 43.2317L21.1188 37.3051L24.2102 38.2083L22.4785 44.135ZM24.6047 36.8584L21.5132 35.9552L23.1773 30.26L26.2687 31.1633L24.6047 36.8584ZM26.6631 29.8136L23.5716 28.9103L25.3033 22.9837L28.3947 23.8869L26.6631 29.8136ZM26.825 45.405L23.8284 44.5294L25.56 38.6027L28.5567 39.4783L26.825 45.405ZM28.9511 38.1284L25.9545 37.2528L27.6185 31.5577L30.6152 32.4333L28.9511 38.1284ZM31.0095 31.0836L28.0129 30.208L29.7446 24.2813L32.7412 25.1569L31.0095 31.0836ZM31.2663 46.7027L28.1748 45.7994L29.9065 39.8727L32.998 40.776L31.2663 46.7027ZM33.3924 39.4261L30.301 38.5228L31.965 32.8277L35.0564 33.731L33.3924 39.4261ZM35.4508 32.3812L32.3594 31.478L34.091 25.5513L37.1825 26.4546L35.4508 32.3812ZM31.7214 10.4686L31.9499 9.68646C32.0588 9.31373 31.8449 8.92326 31.4722 8.81436C31.0995 8.70545 30.709 8.91934 30.6001 9.29207L30.3715 10.0742C30.2626 10.447 30.4765 10.8374 30.8493 10.9463C31.222 11.0552 31.6125 10.8414 31.7214 10.4686ZM34.7836 12.6012C35.3899 12.7783 36.0431 12.6843 36.576 12.3431C36.903 12.1337 36.9984 11.6989 36.789 11.3718C36.5795 11.0446 36.1446 10.9493 35.8177 11.1588C35.6272 11.2807 35.3941 11.3145 35.178 11.2513C34.962 11.1882 34.7837 11.0343 34.6889 10.8291C34.5262 10.4764 34.1083 10.3227 33.7558 10.4854C33.4032 10.6482 33.2494 11.066 33.4121 11.4186C33.6774 11.9929 34.1772 12.424 34.7836 12.6012Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_355_1912'%3E%3Crect width='48' height='48' fill='white' transform='translate(13.462) rotate(16.2876)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
      background-position: p2r(300) p2r(146);
    }
  }
  background-color: $yellow;
  display: flex;
  justify-content: space-between;
  @include sm {
    flex-wrap: wrap;
  }
  &-content {
    padding: p2r(80) p2r(120);
    margin-left: auto;
    margin-right: auto;
    @include sm {
      padding: p2r(64) p2r(24);
    }
    &__title {
      font-family: $raleway-exta-bold;
      font-size: p2r(32);
      line-height: p2r(48);
      width: p2r(480);
      margin-bottom: p2r(32);
      @include sm {
        width: unset;
        font-size: p2r(24);
        line-height: p2r(32);
        margin-bottom: p2r(25);
      }
    }
    &__description {
      font-family: $raleway-medium;
      font-size: p2r(16);
      line-height: p2r(24);
      width: p2r(480);
      margin-bottom: p2r(40);
      @include sm {
        width: unset;
      }
    }
  }
  &-bg {
    width: p2r(720);
    overflow: hidden;
    @include sm {
      overflow: hidden;
      display: flex;
      justify-content: center;
    }
    img {
      display: block;
      width: 100%;
      //height: p2r(584);
      height: 100%;
      @include sm {
        //width: 110%;
        width: auto;
        height: p2r(320);
      }
    }
  }
  form {
    .inputs-wrap {
      display: flex;
      justify-content: space-between;
      margin-bottom: p2r(24);
      label {
        position: relative;
        width: p2r(228);
        @include sm {
          width: 100%;
        }
      }
      p {
        font-family: $raleway-medium;
        font-size: p2r(14);
        line-height: p2r(24);
        color: $pink;
        position: absolute;
        top: p2r(-26);
        @include sm {
          font-size: p2r(12);
          top: p2r(-20);
        }
      }
      @include sm {
        flex-wrap: wrap;
        margin-bottom: unset;
      }
    }
    input {
      font-family: $raleway-medium;
      font-size: p2r(16);
      padding: p2r(18) p2r(24);
      width: 100%;
      background-color: $white;
      border-radius: p2r(16) !important;
      color: $black-d;
      border: p2r(1) solid transparent;
      @include sm {
        margin-bottom: p2r(16);
      }
      &::placeholder {
        color: $gray;
      }
      &.error {
        border-color: $pink;
      }
    }
    .form-button {
      background-color: $blue;
    }
    .agree {
      font-family: $raleway-medium;
      font-size: p2r(14);
      line-height: p2r(24);
      text-align: center;
      margin-top: p2r(24);
      max-width: p2r(480);
      @include sm {
        padding-left: p2r(32);
        padding-right: p2r(32);
        margin-top: p2r(18);
      }
      a {
        font-family: $raleway-exta-bold;
        color: $black-d;
      }
    }
  }
}
</style>
