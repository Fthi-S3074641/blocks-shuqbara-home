<template>
     <v-app style="background: rgba(0,0,0,0);">
    <v-flex xs8 offset-xs2>
      <v-card >
        <v-layout row style="background: rgba(0,0,0,0);">
          <v-flex xs8 offset-xs2>
            <h2 class="mt-2 mb-2 white--text">Add New Item</h2>
          </v-flex>
        </v-layout>
        <v-layout row mt-2>
          <v-flex >
            <form>


              <v-layout row>
                <v-flex xs8 offset-xs2>
                  <v-text-field                    
                    v-focus
                    v-model="itemtype"
                    name="itemtype"
                    label="Item type"
                    id="itemtype"
                    required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs8 offset-xs2>
                  <v-text-field
                    v-model="brandname"
                    name="brandname"
                    label="Brand name"
                    id="brandName"
                    required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs8 offset-xs2>
                  <v-text-field
                    v-model="itemcode"
                    name="itemcode"
                    label="Item code"
                    id="itemcode"
                    required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs8 offset-xs2>
                  <v-text-field
                    v-model="description"
                    name="description"
                    label="Description"
                    id="description"
                    hint="You can write color type"
                    required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs8 offset-xs2>
                  <v-text-field
                    v-model="quantity"
                    name="quantity"
                    label="Quantity"
                    id="quantity"
                    type="number"
                    required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs8 offset-xs2 mb-3>
                  <v-btn small class="primary mr-2" :disabled="!formIsValid" @click="addItem('/items')">Save</v-btn>
                  <v-btn small class="primary mr-2" :disabled="!formIsValid" @click="addItem('/newItem')">Save + add another</v-btn>
                  <v-btn small class="info mr-2" @click="clear">Clear</v-btn>
                  <v-btn small class="secondary" @click="cancel">cancel</v-btn>
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
// import { mapActions } from 'vuex'
import { db } from './../firebase';


export default {
    data(){
        return {
          itemcode: "",
          brandname: "",
          description: "",
          itemtype: "",
          quantity: 1
        }
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
    addItem(dest) {
        const today = new Date();
        const newItem = {
            itemcode: this.itemcode,
            brandname: this.brandname,
            itemtype: this.itemtype,
            description: this.description,
            quantity: this.quantity
                };
        const newActivity = {
          brandname: this.brandname,
          itemcode: this.itemcode,
          itemtype: this.itemtype,
          when: this.format(today),
          quantity: this.quantity,
          action: 'New Item'
        };
        this.$firestore.products.add(newItem)
        this.$firestore.activity.add(newActivity)
        // this.$store.dispatch('addItem', newItem)
        // this.$store.dispatch('addActivity', newActivity)
        this.itemcode = ""
        this.brandname = ""
        this.itemtype = ""
        this.description = ""
        this.quantity = 1
        if(dest == '/newItem') {
          this.clear()
          document.getElementById('itemcode').focus()
        }
        else {
          this.$router.push(dest)
        }
      },
      clear() {
        this.itemcode = ""
        this.brandname = ""
        this.itemtype = ""
        this.description = ""
        this.quantity = 1
      },
      cancel() {
        this.$router.go(-1)
      }
    },
    computed: {
       formIsValid() {
          return (
            this.itemcode !== "" &&
            this.description !== "" &&
            this.brandname !== "" &&
            this.itemtype !== "" &&
            this.quantity >= 0 
          );
    }
    }
}
</script>
