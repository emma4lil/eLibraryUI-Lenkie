import bookService from '~/services/book-controller'

export default ({ $axios }, inject) => {
  const allMethods = {
    ...bookService($axios)
  }

  const methods = Object.keys(allMethods)
  methods.forEach((method) => {
    inject(method, allMethods[method])
  })
}
