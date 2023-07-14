<template lang="">
  <v-card max-width="300" min-height="250">
    <v-img :src="info.cover_url" />
    <v-card-text class="text-h6">
      {{ info.title }}
    </v-card-text>
    <v-btn text block color="primary" dark @click="gotoDetails()">
      Borrowed
    </v-btn>
  </v-card>
</template>
<script>
export default {
  name: 'BookCard',
  props: ['info'],
  data() {
    return {}
  },
  methods: {
    gotoDetails() {
      this.$router.push('/books')
    }
  }
}
</script>
