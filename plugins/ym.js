export default () => {
  // eslint-disable-next-line no-unused-expressions
  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) }
    m[i].l = 1 * new Date()
    for (let j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return } }
    // eslint-disable-next-line no-unused-expressions,no-sequences
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
    // eslint-disable-next-line func-call-spacing
  })
  // eslint-disable-next-line no-unexpected-multiline
  (window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym')

  // eslint-disable-next-line no-undef
  ym(92475448, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    ecommerce: 'dataLayer'
  })
}
