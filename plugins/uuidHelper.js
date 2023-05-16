import { id } from '~/helpers/helpers'

export default ({ app }, inject) => {
  inject('id', () => {
    return id()
  })
}
