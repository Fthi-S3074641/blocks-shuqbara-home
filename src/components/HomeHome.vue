<template>
      <section>
        <v-parallax :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'" height="600">
 
                <v-layout
                 justify-center 
                 align-center 
                 column>
                       <img
                        height="200"
                        :src="'https://raw.githubusercontent.com/Fthi-S3074641/aksumitetours/master/vuetify.png'"
                      />
                    <div class="display-3 font-weight-black white--text text-xs-center">Easy Get TECHNOLOGY</div>
                    <div class="display-1 white--text text-xs-center mb-3">MOBILE APPS | WEB DESIGN | CGI PRODUCTS</div>
                  <v-btn fab 
                  class="mt-5 brown darken-4"
                  >
                    <v-icon large color="white">expand_more</v-icon>
                    </v-btn>
                </v-layout>
        </v-parallax>
      </section>
</template>

<script>
export default {
  data () {
    return {
      logo: 'vuetify.png'
    }
  }
}
</script>