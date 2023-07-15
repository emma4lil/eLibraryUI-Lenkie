<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title primary-title>
          Manage Reservations
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        />
      </v-card>
    </v-col>
    <v-col>
      <v-card>
        <v-card-title primary-title>
          Manage Borrowed Books
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'Control Panel',
  data() {
    return {
      reservationHeaders: [
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Email',
          value: 'email'
        }
      ],
      datasets: {
        metrics: {},
        reservations: [{}],
        borrowed: [{}],
        books: [{}]
      }
    }
  }
}
</script>
