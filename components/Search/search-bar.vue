<template>
  <v-card width="800" elevation="0" color="grey-lighten-5">
    <v-card-text class="d-flex column">
      <v-text-field
        v-model="searchKey"
        outlined
        density="compact"
        label="Search publications, articles, keywords, authors, etc."
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
      />
    </v-card-text>
    <div class="d-flex justify-center">
      <v-btn
        class="mr-2"
        elevation="0"
        width="200"
        height="50"
        color="primary"
        @click="search()"
      >
        Search
      </v-btn>
      <v-btn elevation="0" width="200" height="50" color="primary">
        Advance search
      </v-btn>
    </div>
  </v-card>
</template>
<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchKey: ''
    }
  },
  methods: {
    search () {
      this.$emit('ev:search', this.searchKey)
    }
  }
}
</script>
