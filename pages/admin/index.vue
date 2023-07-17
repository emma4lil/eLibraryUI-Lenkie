<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title primary-title>
          Manage Reservations
        </v-card-title>
        <v-data-table
          dense
          :headers="reservationHeaders"
          :items="datasets.reservations"
          :items-per-page="5"
          class="elevation-1"
        >
          <template #item.action="{item}">
            <v-select
              v-model="item.status"
              :disabled="item.status == 'Borrowed'"
              class="mt-3"
              solo
              hidden
              :items="['Approved','Deny','Pending', 'Borrowed']"
              label="Select state"
            />
          </template>
        </v-data-table>
      </v-card>
    </v-col>
    <v-col>
      <v-card>
        <v-card-title primary-title>
          Manage Borrowed Books
        </v-card-title>
        <div class="d-flex justify-end ma-2 mb-2">
          <v-btn height="50" color="primary" @click="openDialog = true">
            New entry
          </v-btn>
        </div>
        <v-data-table
          :headers="borrowedHeaders"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        />
      </v-card>
    </v-col>
    <v-dialog
      v-model="openDialog"
      scrollable
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <book-borrow-entry />
    </v-dialog>
  </v-row>
</template>
<script>
import BookBorrowEntry from '~/components/BookBorrowEntry.vue'
export default {
  name: 'Control Panel',
  components: { BookBorrowEntry },
  data() {
    return {
      openDialog: false,
      reservationHeaders: [
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Email',
          value: 'email'
        },
        {
          text: 'Requested on',
          value: 'date'
        },
        {
          text: 'Book/ISBN',
          value: 'book'
        },
        {
          text: 'Action',
          value: 'action'
        }
      ],
      borrowedHeaders: [
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
        reservations: [
          {
            email: 'adminone@domain.com',
            name: 'Harry, Emmanuel',
            date: new Date().toDateString(),
            book: 'Pinochio/NIG123212',
            status: 'Borrowed'
          },
          {
            email: 'johndoe@domain.com',
            name: 'John, Doe',
            date: new Date(3).toDateString(),
            book: 'Pink Panther/RUS123212',
            status: 'Pending'
          }
        ],
        borrowed: [{}],
        books: [{}]
      }
    }
  },
  methods: {

  }
}
</script>
