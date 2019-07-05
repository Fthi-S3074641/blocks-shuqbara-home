import Vue from 'vue'
import Vrouter from 'vue-router'

import newItem from './../components/newItem'
import items from './../components/items'
import restock from './../components/restock'
import editItem from './../components/editItem'
import activity from './../components/activity'
import popup from './../components/popup'
import rItem from './../components/restockItem'
import home from './../components/home'

Vue.use(Vrouter)

export default new Vrouter({
    routes: [
        {
            path: '/',
            name: 'checkin',
            component: home
        },
        {
            path: '/newItem',
            name: 'newItem',
            component: newItem
        },
        {
            path: '/items',
            name: 'items',
            component: items, 
            props:true
        },
        {
            path: '/restock',
            name: 'restock',
            component: restock, 
            props:true
        },
        {
            path: '/editItem', 
            name:'editItem', 
            component: editItem,
            props:true
        },
        {
            path: '/rItem',
            name: 'rItem',
            component: rItem,
            props: true
        },
        {
            path: '/popup',
            component: popup,
            name: 'popup', 
            props: true
        },
        {
            path: '/activity',
            component: activity,
            name: 'activity',
            props: true
        }

    ]
})
