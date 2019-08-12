import Vue from 'vue'
import Vrouter from 'vue-router'

import home from './../views/home'

Vue.use(Vrouter)

export default new Vrouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        }
    ]
})
