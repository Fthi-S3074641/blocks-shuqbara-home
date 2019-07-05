<template>
     <v-app style="background: rgba(0,0,0,0);">
  <v-flex xs8 offset-xs2>
    <v-card>
      <v-card-title>
        <h3>Items</h3> &nbsp;&nbsp;&nbsp; (Select an item to edit or sell)
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Find/Search"
          single-line
          id="search"
          hide-details
          v-model="search"
          v-focus
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="products"
        :search="search"
        :pagination.sync="pagination"
        :rows-per-page-items="rppi"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.itemtype }}</td>
          <td class="text-xs-left">{{ props.item.brandname }}</td>
          <td class="text-xs-left">{{ props.item.itemcode }}</td>

          <td class="text-xs-left">
            <router-link :to="{name: 'editItem',
              params: { item: props.item, from: '/items'} }"
              tag="span">
              <v-icon class="mr-3">edit</v-icon>
            </router-link>
            


            <router-link :to="{name: 'popup',
              params: { item: props.item, to: '/restock'} }"
              tag="span">
            <v-badge left :value="props.item.quantity <= 0" color="red lighten-2">
              <template  v-slot:badge>
                <span >0</span>
              </template>
              <v-icon v-show="props.item.quantity <= 0">   add_shopping_cart </v-icon>
            </v-badge>
            <v-badge left :value="props.item.quantity > 0" color="primary lighten-1">
              <template  v-slot:badge>
                <span >{{props.item.quantity}}</span>
              </template>  
              <v-icon v-show="props.item.quantity > 0">   add_shopping_cart </v-icon>
            </v-badge>
            </router-link>
            
            <router-link :to="{name: 'popup',
              params: { item: props.item, to: '/items'} }"
              tag="span">
              <v-icon class="mr-3" v-show="props.item.quantity <= 0">delete</v-icon>
            </router-link>
          </td>

        </template>

        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
        <div class="text-xs-center pt-2">
          <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </div>
    </v-card>
  </v-flex>
  </v-app>
</template>

<script>
import format from "date-fns/format";
import computed from "./../mixins/computed";
import { db } from './../firebase'

export default {

  mixins: [computed],
  data() {
    return {
      search: "",
      selected: [],
      pagination: {},
      rppi: [
        "25",
        "50",
        "75",
        "100",
        {
          text: "All",
          value: -1
        }
      ],
      headers: [
         {
          text: "Item type",
          align: "left",
          sortable: false,
          value: "itemtype"
        },
        {
          text: "Brand name",
          align: "left",
          sortable: false,
          value: "brandname"
        },
        {
          text: "Item ID",
          align: "left",
          sortable: false,
          value: "itemcode"
        },
        { text: "Actions",
          value: "quantity",
          align: "left",
          sortable: false
        }
      ],
      products: []
    };
  },
   firestore() {
      return {
        products: db.collection('products')
      }
    }
};
</script>

<style scoped>
.icon {
  margin-left: 0px;
  margin-right: 15px;
}
</style>