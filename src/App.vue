<template>
    <v-app id="app">
        <v-content transition="slide-x-transition">

        <HomeHome />

        <HomeAdvertise />

        <HomeInformation />

        <HomeGetstarted />

        <HomeSubscribe />

        <HomeFooter />

       
        
    </v-content>
    </v-app>
</template>

<script>
import HomeHome from './components/HomeHome'
import HomeFooter from './components/HomeFooter'
import HomeInformation from './components/HomeInformation'
import HomeGetstarted from './components/HomeGetstarted'
import HomeAdvertise from './components/HomeAdvertise'
import HomeSubscribe from './components/HomeSubscribe'
import HomeCompanies from './components/HomeCompanies'

export default {
    name: 'App',
    components: {
        HomeFooter,
        HomeInformation,
        HomeGetstarted,
        HomeAdvertise,
        HomeHome,
        HomeSubscribe,
        HomeCompanies
    }
};
</script>

<style>
</style>
