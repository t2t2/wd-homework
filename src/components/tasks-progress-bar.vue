<template>
	<div class="progress">
		<div
			:style="{width: getPercentage(values.accomplishments)}"
			class="progress-bar bg-success"
			role="progressbar"
			:aria-valuenow="values.accomplishments"
			aria-valuemin="0"
			:aria-valuemax="total"
		>
			<span>{{ values.accomplishments }}</span>
		</div>
		<div
			:style="{width: getPercentage(values.planned)}"
			class="progress-bar bg-warning"
			role="progressbar"
			:aria-valuenow="values.planned"
			aria-valuemin="0"
			:aria-valuemax="total"
		>
			<span>{{ values.planned }}</span>
		</div>
		<div
			:style="{width: getPercentage(values.overdue)}"
			class="progress-bar bg-dark-warning"
			role="progressbar"
			:aria-valuenow="values.overdue"
			aria-valuemin="0"
			:aria-valuemax="total"
		>
			<span>{{ values.overdue }}</span>
		</div>
		<div
			:style="{width: getPercentage(values.negatives)}"
			class="progress-bar bg-danger"
			role="progressbar"
			:aria-valuenow="values.negatives"
			aria-valuemin="0"
			:aria-valuemax="total"
		>
			<span>{{ values.negatives }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		values: {
			// Check schema in data/tags.js
			type: Object,
			required: true
		}
	},
	computed: {
		total({values}) {
			return Object.keys(values).reduce((sum, key) => sum + values[key], 0)
		}
	},
	methods: {
		getPercentage(value, total = this.total) {
			return (value / Math.max(total, 1) * 100) + '%'
		}
	}
}
</script>
