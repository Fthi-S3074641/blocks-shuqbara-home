<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-3 font-weight-black white--text text-xs-center">SHUQBARA TECHNOLOGY SOULUTIONS</div>
            <div class="display-1 white--text text-xs-center mb-3">MOBILE APPS | WEB DESIGN | SOFTWARE SERVICES | CGI PRODUCTS</div>
          <v-btn fab 
          class="mt-5 brown darken-4"
          >
            <v-icon large color="white">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
