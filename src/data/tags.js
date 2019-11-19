// Yeah faker's pretty heavy library :pray:
import faker from 'faker/locale/en'

faker.seed(124)

/**
 * @typedef {Object} Tag
 * @prop {string} name
 * @prop {bool} important
 * @prop {string} description
 */

/** @type {Tag[]} */
const items = []

items.push({
	name: 'feedback',
	important: true,
	description: 'Let\'s make sure people have less problems!'
})

// 3 important random
for (let i = 0; i < 3; i++) {
	items.push({
		name: faker.lorem.slug(i + 1),
		important: true,
		description: faker.lorem.text()
	})
}

export default items
