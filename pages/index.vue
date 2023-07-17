<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card height="" outlined elevation="0">
        <v-card-text class="text-h2 d-flex justify-center">
          Martha's eLibrary
        </v-card-text>
        <v-card-text>
          <div v-if="loading" class="text-center">
            searching...
          </div>
          <div class="d-flex justify-center rounded-lg">
            <search-bar @ev:search="doSearch" />
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <div v-if="books.length == 0" class="text-center">
        No books to display
      </div>
      <results-view :books="books" />
    </v-col>
  </v-row>
</template>

<script>
import ResultsView from '~/components/results-view.vue'
import searchBar from '~/components/Search/search-bar.vue'
export default {
  name: 'IndexPage',
  components: { searchBar, ResultsView },
  data() {
    return {
      books: [],
      loading: false
    }
  },
  async mounted() {
    const result = await this.$getBookList()
    this.books = result.data
  },
  methods: {
    Login() {},
    async doSearch(key) {
      if (key.length === 0) { key = 'all' }
      this.loading = true
      const result = await this.$searchBooks(key)
      this.books = result.data
      this.loading = false
    }
  }
}
</script>
