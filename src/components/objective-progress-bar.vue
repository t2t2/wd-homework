<template>
	<div class="progress">
		<div
			:style="{backgroundColor: barColor, width: percentage + '%'}"
			class="progress-bar"
			role="progressbar"
			:aria-valuenow="value"
			aria-valuemin="0"
			:aria-valuemax="goal"
		/>
		<div
			class="marker"
			style="left: 65%"
		/>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: Number,
			required: true
		},
		targetPct: {
			type: Number,
			default: 65
		},
		goal: {
			type: Number,
			default: 100
		}
	},
	computed: {
		barColor({percentage, targetPct}) {
			// Can probably generate some really fancy scale based on percentage,
			// targetPct and hue on scale of 0 - 200
			if (percentage < targetPct / 3) {
				return 'hsl(0, 100%, 35%)'
			}

			if (percentage < targetPct / 3 * 2) {
				return 'hsl(60, 100%, 35%)'
			}

			if (percentage < targetPct) {
				return 'hsl(122, 100%, 35%)'
			}

			return 'hsl(200, 100%, 35%)'
		},
		percentage({value, goal}) {
			if (goal === 0) {
				goal = 1
			}

			return value / goal * 100
		}
	}
}
</script>
