<template>
      <section>
        <v-parallax :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'" height="380">
          <v-layout column align-center justify-center>
            <div class="display-2 font-weight-black black--text mb-4 text-center">Take advantage of the latest technology</div>
            <div class="display-1 font-weight-black">Take your buisness to the next level</div>
            <v-btn
              class="mt-5"
              color="blue lighten-2"
              large
              href="/home"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
</template>