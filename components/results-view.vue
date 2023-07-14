<template lang="">
  <v-card outlined>
    <v-card-text>
      <v-row>
        <v-col v-for="(book, index) in books" :key="index" cols="6" lg="2">
          <Book-Card :info="book" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import BookCard from './books.vue'
export default {
  name: 'ResultView',
  components: { BookCard },
  props: ['books'],
  data() {
    return {}
  }
}
</script>
