<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">TARGET PRODUCTS</v-flex>
        </v-layout>
        <v-layout row wrap class="meal-plans">

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="http://www.cybercodetech.com/images/Financial_Services_IT_Support.jpg" height="300px">
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">FINANCIAL SERVICES</h3>
                            <div> To help buisness owners and enterprenuers we design software products to automate tasks including client managment, inventory control, buisness report and extra. See down below who else uses our financial services.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('paleo')" data-cy="plansPaleoBtn">
                            Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="https://banner2.kisspng.com/20180218/kgq/kisspng-elephanta-caves-world-tourism-day-world-tourism-or-global-travel-city-vector-material-5a8a089c6bca60.9532962215189956124415.jpg" height="300px">
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">TOURISM & TOUR</h3>
                            <div> If you own a buisness in tourism or you work in tour operation we offer a digital solution to do your buisness in a smarter way. Contact us to get information regarding our Tourism & Tour digital products.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('keto')" data-cy="plansKetoBtn">
                            Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="https://www.present.ca/wp-content/uploads/2016/02/business-partner.png" height="300px">
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">CONSULTANCY</h3>
                            <div> Wethere you would like to advertise your buisness using a modern computer graphics or wethere you would like to find out if your buisness and your current system will benefit form digitization or automation bring your buisness to us and we will provide you our technical expertise for free.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('vegan')" data-cy="plansVeganBtn">
                            Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans',
    methods: {
        showRecipes(plan) {
            this.$store.dispatch('getRecipes', plan);
        }
    }
};
</script>

<style scoped>
</style>
