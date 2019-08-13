<template>
      <section>
        <v-parallax :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
          <v-img :src="require('@/assets/logo.png')"/> 
            <h1 class="white--text mb-2 display-1 text-center">Shuqbara Foundations</h1>
            <div class="subheading mb-4 text-center">Mobile apps | Web design | CGI products </div>
            <v-btn fab class="mt-5 brown darken-4">
            <v-icon large color="white">expand_more</v-icon>
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
</template>