<template lang="">
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-row>
          <v-col cols="12" lg="2">
            <v-img width="300" max-height="600" src="https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-12523.jpg?itok=e3xgi2G2" />
            <div class="ma-2 d-flex flex-column">
              <div>
                <span class="font-weigth-thin">AUTHOR: </span><span class="text-h6">C. Collodi</span>
              </div>
              <div>
                <div>
                  <span class="font-weigth-thin">PAGES: </span><span class="text-h6">123</span>
                </div>
                <span class="font-weigth-thin">ISBN: </span><span class="text-h6">NIG-MEL200323</span>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="10">
            <v-card-title primary-title class="text-h2">
              Pinochio <v-chip color="green" class="ml-5 white--text">
                Avialable
              </v-chip>
            </v-card-title>
            <v-card-text class="d-flex flex-column">
              <v-sheet max-width="600">
                A skinny, red-haired, and freckled orphan girl is mistakenly sent to live with a shy, elderly bachelor and his spinster sister on the north shore of Canada's Prince Edward Island; The elderly siblings had asked to adopt a young boy who could work on the family farm, but the imaginitive and rambunctious Anne Shirley arrives instead, and becomes the center of a series of entertaining adventures.
              </v-sheet>
              <v-sheet class="mt-4 align-center">
                <v-btn height="80" width="200" color="primary" @click="showBorrowDialog()">
                  Borrow
                </v-btn>
                <v-btn height="80" width="200" color="primary">
                  Notify me
                </v-btn>
              </v-sheet>
            </v-card-text>
          </v-col>
        </v-row>
        <v-card-actions />
      </v-card>
    </v-col>
    <!-- Dialogs -->
    <v-dialog
      v-model="showDialog"
      scrollable
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-text>
          time picker
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: 'BookDetails',
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    showBorrowDialog() {
      this.showDialog = true
    }
  }
}
</script>
