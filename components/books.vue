<template>
  <v-card max-width="320" min-height="250" @click="gotoDetails()">
    <v-img :src="info.coverUrl" />
    <v-card-text class="subtitle-1">
      <div class="d-flex flex-column">
        <div class="d-flex justify-end">
          <v-chip x-small>
            {{ info.status }}
          </v-chip>
        </div>
        <div>{{ info.title }}</div>
      </div>
    </v-card-text>
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
      this.$router.push('/books/' + this.info.id)
    }
  }
}
</script>
