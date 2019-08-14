<template>
    <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-12">


            <v-flex xs12 md8>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-left">
                  <div class="headline">Shuqbara Technology</div>
                </v-card-title>
                <v-list class="transparent" style="padding-top: 100px; margin-right: 50px;">
                  <v-list-tile>
                    <div>
                  <img
                    class="align-left"
                    height="100%"
                    :src="require('@/assets/home/vuetify.png')"
                  />
                    </div>
                    <v-card-text>
                     Shuqbara inspired by its name is a small oraganization with few team mebers. 
                It is determined to deliver small software products for small buisness owners to facilitate their daily buiesness interactions.
                Additionally, we work on e-commerce and digital advertising.
                
                <p> Wethere you would like to advertise your buisness using a modern computer graphics or to find out if your buisness can benefit form digitization (automation) present your buisness to our team (Shuqbara) and we will provide you our technical expertise for free.</p>
                   
                    </v-card-text>
                  </v-list-tile>
                  </v-list>
              </v-card>
            </v-flex>



            <v-flex xs12 md4>
              <HomeCompanies />
            </v-flex>

          </v-layout>
        </v-container>
      </section>
</template>

<script>
import HomeCompanies from './HomeCompanies'
export default {
  components: {
    HomeCompanies
  }
}
</script>