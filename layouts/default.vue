<template>
  <v-app dark>
    <v-main>
      <v-system-bar class="mb-10" lights-out height="100" color="">
        <span class="ml-2 mt-1 text-h4">eLibrary</span>
        <v-spacer />
        <v-btn icon color="success">
          <v-icon color="black">
            mdi-bell
          </v-icon>
        </v-btn>
      </v-system-bar>
      <v-container fluid>
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
