<template>
    <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-12">


            <v-flex xs12 sm4>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company information</div>
                </v-card-title>
                <v-card-text>
                Shuqbara inspired by its name is a small oraganization with few team mebers. 
                It is determined to deliver small software products for small buisness owners to facilitate their daily interactions.
                Additionally, we work on e-commerce and digital advertising.
                </v-card-text>
              </v-card>
            </v-flex>

                <v-flex xs12 md4>
                  <v-card flat class="transparent">

                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Consultancy</div>
                    </v-card-title>
                    <v-card-text>
                     Wethere you would like to advertise your buisness using a modern computer graphics or wethere you would like to find out if your buisness and your current system will benefit form digitization or automation bring your buisness to us and we will provide you our technical expertise for free.
                    </v-card-text>
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