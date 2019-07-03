<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height grid-list-md>
        <v-layout wrap align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title class="headline">Shuqbara Consultancy</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon large>person</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn icon large href="https://www.facebook.com" target="_blank" v-on="on">
                      <v-icon large>person</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>
              <v-img 
              src="https://github.com/Fthi-S3074641/Shuqbara-axum/blob/master/shuqbara.png?raw=true"
              height="200px"
              > </v-img>
                
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Download APP</v-btn>
                <v-btn color="primary">Scan QR code</v-btn>
                <v-btn color="primary">Web version</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>