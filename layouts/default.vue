<template>
  <v-app dark>
    <v-main>
      <v-system-bar class="mb-10" lights-out height="100" color="">
        <span class="ml-2 mt-1 text-h4" @click="$router.push('/')">eLibrary</span>
        <v-spacer />
        <v-btn icon color="success" @click.stop="$router.push('/login')">
          <v-icon color="primary">
            mdi-login
          </v-icon>
        </v-btn>
        <v-btn icon color="success" @click.stop="$router.push('/notifications')">
          <v-icon color="primary">
            mdi-bell
          </v-icon>
        </v-btn>
        <v-btn icon color="success" @click.stop="$router.push('/admin')">
          <v-icon color="primary">
            mdi-menu
          </v-icon>
        </v-btn>
      </v-system-bar>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Marthas Library'
    }
  }
}
</script>
