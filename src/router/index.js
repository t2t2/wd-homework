import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/home.vue'
import TagsWrapper from './views/tags'
import TagList from './views/tags/list'
import TagView from './views/tags/view'

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
				path: ':tagSlug',
				name: 'tags.view',
				component: TagView,
				props: true
			},
			{
				path: '/',
				name: 'tags.list',
				component: TagList
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
