<template>
  <v-container
    pa-0
    grid-list-md
  >
      <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-left">
                  <div class="headline">Our Clients</div>
                </v-card-title>

    <v-layout wrap>

      <v-flex v-for="(post, i) in posts" :key="i" xs4 >
        <v-card
          tag="a"
          :href="post.href"
          height="88"
          color="grey lighten-2"
        >
          <v-img
            v-if="post.src"
            height="100%"
            :src="require(`@/assets/instagram/${post.src}`)"
          />
        </v-card>
      </v-flex>

    </v-layout>

    </v-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      posts: [
        { src: 'adventurealtitude.jpg' },
        { src: 'garden.jpg' },
        { src: 'pigduck.jpg' },
        { src: 'rain.jpg' },
        { src: 'spices.jpg' },
        { src: 'sunset.jpg' }
      ]
    })
  }
</script>
