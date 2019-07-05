<template>
     <v-app style="background: rgba(0,0,0,0);">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-layout row class="primary" wrap>
          <v-flex xs12 sm6 offset-sm3>
            <h3 class="mt-2  mb-2 white--text">Would you like to remove from the list: {{this.item.itemcode }}</h3>
          </v-flex>
        </v-layout>
        <v-divider class="mb-3"></v-divider>

        <v-layout row>
        <v-flex xs12 sm6 offset-sm3 mb-3>
        <h4 class="error" v-show="isAboveZero"> You have {{ item.quantity}} items in store. <br> Do you really want to restock this item </h4>
        </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <form @submit="editProducts(item,to)">
              <v-layout row>
                <v-flex xs12 sm6 offset-sm3 mb-3>
                  <v-btn small class="primary mr-2" type="submit">Ok</v-btn>
                  <v-btn small class="secondary" @click="$router.go(-1)">Cancel</v-btn>
                </v-flex>
              </v-layout>
            </form>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-app>
</template>

<script>
import { db } from './../firebase'
import format from "date-fns/format";


export default {
  props: ["item", "to"],
  data() {
    return {
    };
  },
   firestore() {
      return {
        products: db.collection('products'),
        restocks: db.collection('restocks'),
        activity: db.collection('activity')
      }
    },
  methods: {
  format(val) {
      return format(val, "MM-DD-YYYY");
    },
    editProducts(item,to) {
      const today = new Date();
      if(to === '/items'){
        const newActivity = {
          brandname: item.brandname,
          itemcode: item.itemcode,
          itemtype: item.itemtype,
          when: this.format(today),
          quantity: item.quantity,
          action: 'Remove Item'
        };
      this.$firestore.products.doc(item['.key']).delete()
      this.$firestore.activity.add(newActivity)
    }
    else{
      const newActivity = {
          brandname: item.brandname,
          itemcode: item.itemcode,
          itemtype: item.itemtype,
          when: this.format(today),
          quantity: item.quantity,
          action: 'Restock Item'
        };
      this.$firestore.restocks.add(item)
      this.$firestore.products.doc(item['.key']).delete()
      this.$firestore.activity.add(newActivity)
    }
      this.$router.push(to);
    }
  },
  computed: {
    isAboveZero() {
      return this.item.quantity > 0
    }
  }
};
</script>

<style scoped>

</style>