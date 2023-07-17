export default ($axios) => {
  return {
    getBookList: async (params) => {
      return await $axios.get('api/book/get-books')
    },
    searchBooks: async (params) => {
      return await $axios.get('api/book/search/' + params)
    },
    getBookDetail: async (params) => {
      return await $axios.get('api/book/detail/' + params)
    }
  }
}
