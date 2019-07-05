<template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    height="100%"
  >
  <div>
  <v-layout class="display-2 font-weight-thin mb-3">

      <v-spacer/>
        <v-btn flat class=" flat white--text" v-for="(item, index) in menuItems" :key="index" :to="item.link" >
          {{item.title}}
        </v-btn>
    </v-layout>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

</div>
  </v-parallax>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goHome(){
      this.$router.push('/')
    },
    add(){
      this.$router.push('/newItem')
    }
  },
  computed: {
    menuItems(){
      let menuItems = []
      menuItems = [
        {title: "Shuqbara", link: "/" },
          { title: "New Item", link: "/newItem" },
          { title: "Items", link: "/items" },
          { title: "Restock", link: "/restock" },
          { title: "Activity", link: "/activity"}

        ]
      return menuItems
    }
  }
}
</script>