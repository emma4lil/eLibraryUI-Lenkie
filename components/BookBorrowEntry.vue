<template lang="">
  <v-card width="600">
    <v-card-title>
      Enter borrower details
    </v-card-title>
    <v-card-text>
      <v-text-field
        id="id"
        outlined
        name="name"
        label="Email"
      />
      <v-slider
        v-model="borrowedDays"
        label="Days to borrow"
        ticks="always"
        tick-size="2"
        min="1"
        max="60"
        step="1"
        thumb-label="always"
      />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn block color="primary">
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'NewBorrowEntry',
  data() {
    return {
      borrowedDays: 1
    }
  }
}
</script>
<style lang="">
</style>
