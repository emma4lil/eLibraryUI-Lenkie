<template>
  <v-row>
    <v-col cols="12">
      <p class="text-h4 grey--text text-center">
        You have {{ notifications.unread }} unread notifications
      </p>
    </v-col>
    <v-col>
      <v-card
        v-for="(message, index) in notifications?.messages"
        :key="index"
        max-width="800"
        class="ma-4 px-2 mx-auto"
      >
        <v-card-text>
          <v-subheader>{{ message.header }}</v-subheader>
          <v-sheet
            :class="[message.isRead ? 'text--disabled' : '']"
            min-height="100"
            class="ml-1 text-h6 lighten-5 ma-1 pa-2"
          >
            {{ message.body }}
          </v-sheet>
          <div class="d-flex justify-space-between">
            <span class="ml-2">{{ message.createdAt }}</span>
            <v-chip color="green" small class="ml-2">
              {{ !message.isRead ? 'Unread' : null }}
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'Notifications',
  data() {
    return {
      isRead: true,
      notifications: {
        unread: 10,
        total: 25,
        messages: [
          {
            id: '112233',
            header: 'Book reservation approved',
            isRead: false,
            body: "Your reservation for 'Alibaba and the seven dragons' has been approved",
            createdAt: new Date().toLocaleTimeString()
          },
          {
            id: '112233',
            header: 'Book reservation approved',
            isRead: true,
            body: "Your reservation for 'Alibaba and the seven dragons' has been approved",
            createdAt: new Date().toLocaleTimeString()
          },
          {
            id: '112233',
            header: 'Book reservation approved',
            isRead: false,
            body: "Your reservation for 'Alibaba and the seven dragons' has been approved",
            createdAt: new Date().toLocaleTimeString()
          }
        ]
      }
    }
  }
}
</script>
