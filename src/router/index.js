import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/home.vue'
import ProjectView from './views/projects/view'
import TagsLayout from './views/tags/_layout'
import TagList from './views/tags/list'
import TagView from './views/tags/view'

Vue.use(VueRouter)
/**
 * @type {import('vue-router').RouteConfig[]}
 */
const routes = [
	{
		path: '/tags',
		component: TagsLayout,
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
		path: '/project',
		name: 'projects.view',
		component: ProjectView
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
