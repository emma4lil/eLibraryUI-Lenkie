<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card height="" outlined elevation="0">
        <v-card-text class="text-h2 d-flex justify-center">
          Martha's eLibrary
        </v-card-text>
        <v-card-text>
          <div class="d-flex justify-center rounded-lg">
            <search-bar />
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
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
      books: [
        {
          title: 'Aladin and the seven scrolls',
          pages: 214,
          isbn: '233KNKO223',
          cover_url: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-auto-5349.jpg?itok=-w4gFXdq',
          date_published: '2003'
        },
        {
          title: 'The hand of God',
          pages: 300,
          isbn: 'LNNIG12322',
          cover_url: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-498.jpg?itok=zY7xCyMC',
          date_published: '2003'
        },
        {
          title: 'Aladin and the seven scrolls',
          pages: 214,
          isbn: '233KNKO223',
          cover_url: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-14299.jpg?itok=wPpEKSe6',
          date_published: '2003'
        },
        {
          title: 'The hand of God',
          pages: 300,
          isbn: 'LNNIG12322',
          cover_url: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-12523.jpg?itok=e3xgi2G2',
          date_published: '2003'
        },
        {
          title: 'Aladin and the seven scrolls',
          pages: 214,
          isbn: '233KNKO223',
          cover_url: '/cover.png',
          date_published: '2003'
        },
        {
          title: 'The hand of God',
          pages: 300,
          isbn: 'LNNIG12322',
          cover_url: '/cover.png',
          date_published: '2003'
        }
      ]
    }
  },
  methods: {
    Login() {}
  }
}
</script>
