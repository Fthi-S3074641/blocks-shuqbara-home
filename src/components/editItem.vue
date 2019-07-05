<template>
     <v-app style="background: rgba(0,0,0,0);">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-layout row class="primary" wrap>
          <v-flex xs12 sm6 offset-sm3>
            <h3 class="mt-2  mb-2 white--text">Edit item</h3>
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
                required></v-text-field>
            </v-flex>
          </v-layout>

        <v-layout row>
          <v-flex xs12>
            <form @submit.prevent="editItem">
              <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                  <v-text-field
                    v-model="item.itemcode"
                    name="itemcode"
                    label="Item code"
                    id="itemcode"
                    required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                  <v-text-field
                    v-model="item.itemtype"
                    name="itemtype"
                    label="Item type"
                    id="itemtype"
                    required></v-text-field>
                </v-flex>
              </v-layout>


              <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                  <v-text-field
                    v-model="item.description"
                    name="description"
                    label="Description"
                    id="description"
                    required></v-text-field>
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
                  <v-btn small class="primary mr-2" type="submit">Save</v-btn>
                  <v-btn small class="error mr-2" @click="sellItem()" >Sell 1 + save</v-btn>
                  <v-btn small class="secondary mr-2" @click="$router.go(-1)">Back</v-btn>
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
    editItem() {
      this.edit = true;
      const today = new Date();
      const editedItem = {
        itemcode: document.getElementById("itemcode").value,
        brandname: document.getElementById("brandname").value,
        itemtype: document.getElementById("itemtype").value,
        description: document.getElementById("description").value,
        quantity: document.getElementById("quantity").value
      };
      const newActivity = {
          brandname: document.getElementById("brandname").value,
          itemcode: document.getElementById("itemcode").value,
          itemtype: document.getElementById("itemtype").value,
          when: this.format(today),
          quantity: document.getElementById("quantity").value,
          action: 'Update Item'
        }
        this.$firestore.products.doc(this.item['.key']).update(editedItem)
        this.$firestore.activity.add(newActivity)
        this.$router.go(-1);
    },
    format(val) {
      return format(val, "MM-DD-YYYY");
    },
    sellItem() {
      const today = new Date();
      const oldq = document.getElementById("quantity").value;
      const editedItem = {
        itemcode: document.getElementById("itemcode").value,
        brandname: document.getElementById("brandname").value,
        itemtype: document.getElementById("itemtype").value,
        description: document.getElementById("description").value,
        quantity: oldq - 1
      };
      const newActivity = {
          brandname: document.getElementById("brandname").value,
          itemcode: document.getElementById("itemcode").value,
          itemtype: document.getElementById("itemtype").value,
          when: this.format(today),
          quantity: 1,
          action: 'Sell Item'
        }
        this.$firestore.products.doc(this.item['.key']).update(editedItem)
        this.$firestore.activity.add(newActivity)
        this.$router.go(-1);
    }
  }
};
</script>

<style scoped>

</style>