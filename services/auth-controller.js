export default ($axios) => {
  return {
    callAuthorize: async (params) => {
      return await $axios.get('api/iam/auth')
    }
  }
}
