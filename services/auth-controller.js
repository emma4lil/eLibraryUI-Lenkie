export default ($axios) => {
  return {
    getBookList: async (params) => {
      return await $axios.get('/books')
    },
    findBook: async (params) => {
      return await $axios.get('/books/search' + params)
    },
    getBookDetails: async (params) => {
      return await $axios.get('/books/detail' + params)
    }
  }
}
