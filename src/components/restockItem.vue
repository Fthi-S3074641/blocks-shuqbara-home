<template>
     <v-app style="background: rgba(0,0,0,0);">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-layout row class="primary" wrap>
          <v-flex xs12 sm6 offset-sm3>
            <h3 class="mt-2  mb-2 white--text">Restock item {{item.itemcode}}</h3>
          </v-flex>
        </v-layout>
        <v-divider class="mb-3"></v-divider>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                        <v-text-field
                            v-model="item.brandname"
                            name="brandname"
                            label="brandname"
                            id="brandname"
                            disabled></v-text-field>
                        </v-flex>
                    </v-layout>

                    

        <v-layout row>
          <v-flex xs12>
            <form @submit.prevent="restockItem">

              <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                  <v-text-field
                    v-model="item.itemtype"
                    name="itemtype"
                    label="Item type"
                    id="itemtype"
                    disabled></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                  <v-text-field
                    v-model="item.description"
                    name="description"
                    label="Description"
                    id="description"
                    ></v-text-field>
                </v-flex>
              </v-layout>

            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                  <v-text-field
                    v-model="item.quantity"
                    v-focus
                    name="quantity"
                    label="quantity"
                    id="quantity"
                    type="number"
                    required></v-text-field>
                </v-flex>
              </v-layout>


              <v-layout row>
                <v-flex xs12 sm8 offset-sm3 mb-3>
                  <v-btn small class="primary mr-2" type="submit">Restock</v-btn>
                  <v-btn small class="secondary mr-2" @click="$router.go(-1)">Close</v-btn>
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
import format from "date-fns/format";
import { db } from './../firebase'

export default {
  props: ["item", "from"],
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
    restockItem() {
      const today = new Date();
      const restockedItem = {
        itemcode: this.item.itemcode,
        brandname: this.item.brandname,
        itemtype: this.item.itemtype,
        description: document.getElementById("description").value,
        quantity: document.getElementById("quantity").value
      };
      const newActivity = {
          brandname: this.item.brandname,
          itemcode: this.item.itemcode,
          itemtype: this.item.itemtype,
          when: this.format(today),
          quantity: document.getElementById("quantity").value,
          action: 'Restocked Item'
        }
        this.$firestore.products.add(restockedItem)
        this.$firestore.activity.add(newActivity)
        this.$firestore.restocks.doc(this.item['.key']).delete()
        this.$router.go(-1);
    },
    format(val) {
      return format(val, "MM-DD-YYYY");
    }
  }
};
</script>
