import bookService from '~/services/book-controller'
import authService from '~/services/auth-controller'
import reservationService from '~/services/reservation-controller'

export default ({ $axios }, inject) => {
  const allMethods = {
    ...bookService($axios),
    ...authService($axios),
    ...reservationService($axios)
  }

  const methods = Object.keys(allMethods)
  methods.forEach((method) => {
    inject(method, allMethods[method])
  })
}
