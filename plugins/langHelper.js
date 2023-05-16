import langs from '~/lang'

export default ({ app }, inject) => {
  inject('translate', () => {
    return langs()
  })
}
