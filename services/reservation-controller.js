export default ($axios) => {
  return {
    reserveBook: async (params) => {
      return await $axios.post('api/reservations/reserve', params)
    }
  }
}
