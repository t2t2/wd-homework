<template>
	<div class="row align-items-center mb-2">
		<div
			v-if="avatarText"
			class="col-auto pr-0"
		>
			<div
				class="avatar-circle"
				title="User"
			>
				{{ avatarText }}
			</div>
		</div>
		<div class="col">
			{{ value }}
		</div>
		<button
			v-if="!hideActions && type !== 2"
			class="col-auto btn btn-link text-black-50 not-implemented"
			title="To Plans"
		>
			<FontAwesomeIcon
				icon="play"
				fixed-width
			/>
		</button>
		<button
			v-if="!hideActions && type !== 1"
			class="col-auto btn btn-link text-black-50 not-implemented"
			title="Done"
		>
			<FontAwesomeIcon
				icon="check"
				fixed-width
			/>
		</button>
		<button
			v-if="!hideActions && type !== 3"
			class="col-auto btn btn-link text-black-50 not-implemented"
			title="To Problems"
		>
			<FontAwesomeIcon
				icon="exclamation"
				fixed-width
			/>
		</button>
		<button class="col-auto btn btn-link text-black-50 not-implemented">
			<FontAwesomeIcon
				icon="comments"
				fixed-width
			/>
		</button>
	</div>
</template>

<script>
export default {
	props: {
		avatarText: {
			type: String,
			default: null
		},
		hideActions: {
			type: Boolean,
			default: false
		},
		type: {
			type: Number,
			required: true
		},
		value: {
			type: String,
			required: true
		}
	}
}
</script>
