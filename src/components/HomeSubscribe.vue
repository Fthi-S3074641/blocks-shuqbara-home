<template>
<section>
  <v-container
    id="subscribe"
    tag="section"
  >
  <v-flex xs12>

      <v-container
        grid-list-xl
        pa-0
      >
        <v-layout wrap>
          <v-flex
            xs12
            md5
          >
            <div class="headline mt-5">
              Subscribe
            </div>
            <p>
              Enter your email address to subscribe to our Website
              and receive notifications of useful information by email.
            </p>

            <v-layout
              wrap
              pa-2
            >
              <v-text-field
                solo
                hide-details
                style="max-width: 400px;"
              />
              <v-btn
                :block="$vuetify.breakpoint.xsOnly"
                class="ma-0"
                color="secondary"
                style="height: 48px"
              >
                Subscribe
              </v-btn>
            </v-layout>
          </v-flex>
          <v-flex xs12 md5 offset-md2 >
              <v-card flat class="transparent">
                <div primary-title class="layout justify-left">
                  <div class="headline mt-5">Contact us</div>
                </div>
                <v-list class="transparent">
                  <v-list-tile>
                    <div>
                      <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                    </div>
                    <div>
                     +25195-316-6155
                    </div>
                  </v-list-tile>
                  <v-divider ></v-divider>
                  <v-list-tile>
                    <div>
                      <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                    </div>
                    <div>
                     Axum, Ethiopia (East of Ezana park)
                    </div>
                  </v-list-tile>
                  <v-divider ></v-divider>
                  <v-list-tile>
                    <div>
                      <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                    </div>
                    <div>
                      fthialem@gmail.com
                    </div>
                  </v-list-tile>
                </v-list>
              </v-card>
          </v-flex>


        </v-layout>
      </v-container>
    </v-flex>
  </v-container>
  </section>
</template>
