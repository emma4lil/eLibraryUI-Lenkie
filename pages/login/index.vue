<template>
  <v-row>
    <v-col cols="12" class="align-center">
      <div class="d-flex justify-center">
        <v-card width="300">
          <v-card-text>
            <v-btn
              v-if="!$auth.loggedIn"
              block
              color="primary"
              dark
              @click="login()"
            >
              Login
            </v-btn>
            <v-btn
              v-if="$auth.loggedIn"
              block
              color="primary"
              dark
              @click="logout()"
            >
              Logout
            </v-btn>
          </v-card-text>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'Login',
  mounted() {
    this.$callAuthorize()
  },
  methods: {
    login() {
      this.$auth.loginWith('auth0')
    },
    logout() {
      this.$auth.logout()
    }
  }
}
</script>
