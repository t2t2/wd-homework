module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'eslint:recommended',
		'xo',
		'plugin:unicorn/recommended',
		'plugin:vue/recommended'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

		semi: ['error', 'never'],
		'semi-spacing': ['error', {
			before: false,
			after: true
		}],

		'vue/html-indent': ['error', 'tab']
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
