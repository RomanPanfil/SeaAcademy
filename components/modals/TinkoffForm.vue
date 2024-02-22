<template>
  <transition name="fade">
    <div v-show="show" class="modal" @click.self="close">
      <div class="modal-wrapper">
        <TincoffIcon class="icon" />
        <div class="info">
          <div class="info-item">
            <span class="info-item__title">Сумма заказа</span>
            <span class="info-item__desc">{{ priceString }} ₽</span>
          </div>
          <div class="info-item">
            <span class="info-item__title">Номер заказа</span>
            <span class="info-item__desc">{{ orderNumber }}</span>
          </div>
          <div class="info-item">
            <span class="info-item__title">Описание заказа</span>
            <span class="info-item__desc">{{ title }}</span>
          </div>
        </div>
        <form name="TinkoffPayForm">
          <input class="tinkoffPayRow" type="hidden" name="terminalkey" :value="terminalKey">
          <input class="tinkoffPayRow" type="hidden" name="frame" value="false">
          <input class="tinkoffPayRow" type="hidden" name="language" value="ru">
          <input
            v-show="false"
            class="tinkoffPayRow input"
            type="text"
            placeholder="Сумма заказа"
            name="amount"
            required :value="selectedPrice"
            disabled
          >
          <input
            v-show="false"
            class="tinkoffPayRow input"
            type="text"
            placeholder="Номер заказа"
            name="order"
            :value="orderNumber"
            disabled
          >
          <input
            v-show="false"
            class="tinkoffPayRow input"
            type="text"
            placeholder="Описание заказа"
            name="description"
            :value="title"
            disabled
          >
          <input v-show="false" class="tinkoffPayRow input" type="hidden" placeholder="ФИО плательщика" name="name">
          <label>
            <input
              required
              class="tinkoffPayRow input email"
              type="email"
              placeholder="E-mail"
              name="email"
              :class="{'no-valid': isEmaiNoValid}"
              @input="(e) => emailInput(e.target.value)"
            >
            <span v-show="!emailValue" class="custom-placeholder">E-mail <span>*</span></span>
          </label>
          <label>
            <input
              required
              class="tinkoffPayRow input phone"
              type="text"
              placeholder="Контактный телефон"
              name="phone"
              :class="{'no-valid': isPhoneNoValid}"
              maxlength="50"
              @input="(e) => phoneInput(e.target.value)"
              @keydown="allowDigitsAndPlus"
            >
            <span v-show="!phoneValue" class="custom-placeholder">Контактный телефон <span>*</span></span>
          </label>
          <input class="tinkoffPayRow" type="hidden" name="receipt" value="">
          <input
            class="tinkoffPayRow submit"
            type="button"
            value="Оплатить"
            @click = "(event) => tinkoffPayFunction(event.target)"
          >
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import TincoffIcon from "@/components/icons/TincoffIcon";
export default {
  name: "TinkoffForm",
  components: {TincoffIcon},
  data() {
    return {
      terminalKey: '1676629541754DEMO',
      isEmaiNoValid: false,
      isPhoneNoValid: false,
      phoneValue: null,
      emailValue: null
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    selectedPrice: {
      type: Number,
      default: null
    },
    priceString: {
      type: String,
      default: ''
    },
    orderNumber: {
      type: Number,
      default: null
    }
  },
  beforeDestroy() {
    this.isEmaiNoValid = false
    this.isPhoneNoValid = false
  },
  methods: {
    emailInput (value) {
      this.isEmaiNoValid = false
      this.emailValue = value
    },
    phoneInput (value) {
      this.phoneValue = value
    },
    close () {
      this.$emit('close')
      this.isEmaiNoValid = false
      this.isPhoneNoValid = false
    },
    allowDigitsAndPlus(event) {
      this.isPhoneNoValid = false

      const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete', '+']
      const keyCode = event.key

      if (!allowedKeys.includes(keyCode) && isNaN(parseInt(keyCode))) {
        event.preventDefault()
      }
    },
    tinkoffPayFunction(target) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const phoneRegex = /^(\+|\d)\d+$/

      let form = target.parentElement;
      let name = form.description.value || "Оплата";
      let amount = form.amount.value;
      let email = form.email.value;
      let phone = form.phone.value;

      if (emailRegex.test(email) && phoneRegex.test(phone)) {
        this.$emit('close')
        this.isEmaiNoValid = false
        this.isPhoneNoValid = false
        if (amount && email && phone) {
          form.receipt.value = JSON.stringify({
            "Email": email,
            "Phone": phone,
            "EmailCompany": "mail@mail.com",
            "Taxation": "osn",
            "Items": [
              {
                "Name": name,
                "Price": amount + '00',
                "Quantity": 1.00,
                "Amount": amount + '00',
                "PaymentMethod": "full_prepayment",
                "PaymentObject": "service",
                "Tax": "vat20"
              }
            ]
          });
          pay(form);
        } else alert("Не все обязательные поля заполнены")
        return false;
      } else {
        this.isEmaiNoValid = !emailRegex.test(email);
        this.isPhoneNoValid = !phoneRegex.test(phone);
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
    width: p2r(480);
    background-color: $white;
    border-radius: p2r(24);
    padding: p2r(40);
    display: flex;
    flex-direction: column;
    align-items: center;
    @include sm {
      width: p2r(312);
      padding: p2r(24);
    }

    .icon {
      margin-bottom: p2r(42);
      @include sm {
        margin-bottom: p2r(26);
      }
    }

    .info {
      width: 100%;
      margin-bottom: p2r(22);
      @include sm {
        margin-bottom: p2r(6);
      }
      &-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: p2r(16);
        &__title {
          font-family: $raleway-medium;
          font-size: p2r(16);
          line-height: p2r(24);
          color: $black-d;
        }
        &__desc {
          font-family: $outfit-bold;
          font-weight: 800;
          font-size: p2r(16);
          line-height: p2r(24);
          color: $black-d;
        }
      }
    }
  }
}

form {
  width: 100%;
}
label {
  position: relative;
  display: block;
  width: 100%;
  .custom-placeholder {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    font-family: $raleway-medium;
    font-size: p2r(16);
    line-height: p2r(18);
    letter-spacing: p2r(0.10);
    padding: p2r(18) p2r(24);
    color: $gray;
    span {
      color: $pink;
      font-size: p2r(26);
      font-family: $raleway-medium;
    }
  }
}
.tinkoffPayRow {
  display: block;
  width: 100%;

  &.input {
    border: p2r(1) solid #E8E8E8;
    font-family: $raleway-medium;
    font-size: p2r(16);
    line-height: p2r(18);
    letter-spacing: p2r(0.10);
    padding: p2r(18) p2r(20);
    border-radius: p2r(16) !important;
    margin-bottom: p2r(16);
    cursor: text;
    &.email::placeholder, &.phone::placeholder {
      opacity: 0;
    }
    @include sm {
      padding: p2r(18) p2r(23);
    }
    &.no-valid {
      border-color: $pink;
    }
  }
  &.submit {
    cursor: pointer;
    font-family: $raleway-bold;
    font-size: p2r(16);
    line-height: p2r(18);
    letter-spacing: p2r(0.10);
    padding: p2r(19) p2r(20);
    background-color: $blue;
    color: $white;
    border-radius: p2r(16) !important;
    box-shadow: 0 p2r(24) p2r(32) rgba(30, 78, 128, 0.12);
    margin-top: p2r(40);
    &:hover {
      opacity: 0.9;
    }
    @include sm {
      margin-top: p2r(24);
    }
  }
}
</style>
