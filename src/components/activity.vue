<template>
     <v-app style="background: rgba(0,0,0,0);">
  <v-flex xs8 offset-xs2>
    <v-card>
      <v-card-title>
        <h3>Items</h3> &nbsp;&nbsp;&nbsp; (Look for specific item transaction)
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
        :items="activity"
        :search="search"
        :pagination.sync="pagination"
        :rows-per-page-items="rppi"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.brandname }}</td>
          <td class="text-xs-left">{{ props.item.itemtype }}</td>
          <td class="text-xs-left">{{ props.item.when }}</td>
          <td class="text-xs-left">{{ props.item.quantity }}</td>
          <td class="text-xs-left">{{ props.item.action }}</td>

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
          text: "Brand name",
          align: "left",
          sortable: false,
          value: "brandname"
        },
        {
          text: "Item type",
          align: "left",
          sortable: false,
          value: "itemtype"
        },
        { text: "Date",
          value: "when",
          align: "left",
          sortable: false
        },
        { text: "Quantity",
          value: "quantity",
          align: "left",
          sortable: false
        },
        { text: "Action",
          value: "action",
          align: "left",
          sortable: false
        }
      ],
      activity: []
    };
  },
     firestore() {
      return {
        activity: db.collection('activity'),
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