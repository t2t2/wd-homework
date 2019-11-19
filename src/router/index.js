import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/home.vue'
import TagsWrapper from './views/tags'
import TagsList from './views/tags/list'

Vue.use(VueRouter)
/**
 * @type {import('vue-router').RouteConfig[]}
 */
const routes = [
	{
		path: '/tags',
		component: TagsWrapper,
		children: [
			{
				path: '/',
				name: 'tags.list',
				component: TagsList
			}
		]
	},
	{
		path: '/',
		name: 'home',
		component: Home
	}
]

const router = new VueRouter({
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'active'
})

export default router
