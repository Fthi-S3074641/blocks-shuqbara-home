<template>
     <v-app style="background: rgba(0,0,0,0);">
  <v-flex xs8 offset-xs2>
    <v-card>
      <v-card-title>
        <h3>Items</h3> &nbsp;&nbsp;&nbsp; (Select an item to restock)
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
        :items="restocks"
        :search="search"
        :pagination.sync="pagination"
        :rows-per-page-items="rppi"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.itemtype }}</td>
          <td class="text-xs-left">{{ props.item.brandname }}</td>
          <td class="text-xs-left">{{ props.item.itemcode }}</td>

          <td class="text-xs-center">
            <router-link :to="{name: 'rItem',
              params: { item: props.item, from: '/restock'} }"
              tag="span">
              <v-badge right overlap color="red lighten-2">
              <template  v-slot:badge>
                <span>!</span>
              </template>
              <v-btn small outline class="primary">   Restock now </v-btn>
            </v-badge>
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
      restocks: []
    };
  },
     firestore() {
      return {
        restocks: db.collection('restocks'),
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
