import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import Layout from './layout.vue'
import Index from './pages/index.vue'
import Details from './pages/details.vue'
import Count from './pages/details/count.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

let router = new VueRouter({
	mode: 'history',
	routes: [

		{
			path: '/',
			component: Index
		}, {
			path: '/details',
			component: Details,
			children: [{
				path: 'count',
				component: Count
			}]
		}

	]
});
let store = new Vuex.Store({
	state: {},
	getters: {},
	mutations: {},
	actions: {}
});

new Vue({
	router,
	VueResource,
	store,
	el: '#app',
	render: h => h(Layout)
})