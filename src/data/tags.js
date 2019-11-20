// Yeah faker's pretty heavy library :pray:
import faker from 'faker/locale/en'

faker.seed(124)

/**
 * @typedef {Object} TasksOverview
 * @prop {number} planned
 * @prop {number} overdue
 * @prop {number} accomplishments
 * @prop {number} negatives
 */

/**
 * @typedef {Object} Tag
 * @prop {string} name
 * @prop {bool} important
 * @prop {string} description
 * @prop {TasksOverview} tasks
 * @prop {number} okr
 */

/** @type {Tag[]} */
const items = []

items.push({
	name: 'feedback',
	important: true,
	description: 'Let\'s make sure people have less problems!',
	tasks: {
		planned: 5,
		overdue: 2,
		accomplishments: 4,
		negatives: 1
	},
	okr: 35
})

// 3 important random
for (let i = 0; i < 3; i++) {
	items.push({
		name: faker.lorem.slug(i + 1),
		important: true,
		description: faker.lorem.text(),
		tasks: {
			planned: faker.random.number(5),
			overdue: faker.random.number(2),
			accomplishments: faker.random.number(3),
			negatives: faker.random.number(2)
		},
		okr: faker.random.number(100)
	})
}

// 21 less important randomly
for (let i = 0; i < 21; i++) {
	items.push({
		name: faker.lorem.slug((i % 5) + 1),
		important: false,
		description: faker.lorem.text(),
		tasks: {
			planned: faker.random.number(5),
			overdue: faker.random.number(2),
			accomplishments: faker.random.number(3),
			negatives: faker.random.number(2)
		},
		okr: faker.random.number(100)
	})
}

export default items
