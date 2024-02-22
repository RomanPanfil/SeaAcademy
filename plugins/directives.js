import Vue from 'vue'
import Inputmask from 'inputmask'

Vue.config.ignoredElements = ['noindex']

Vue.directive('click-outside', {
  bind (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his childrens
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  }
})

Vue.directive('mask', {
  bind (el, binding, vnode) {
    Inputmask(binding.value).mask(el)
  },
  update (el, { oldValue, value }, vnode) {
    if (value.$shouldUpdate?.(oldValue)) {
      Inputmask.remove(el)
      Inputmask(value).mask(el)
    }
  },
  unbind (el) {
    Inputmask.remove(el)
  }
})
