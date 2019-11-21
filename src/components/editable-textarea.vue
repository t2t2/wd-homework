<template>
	<div
		v-if="editing"
		class="editable-content active"
	>
		<div class="flex-fill">
			<textarea
				v-model="currentValue"
				class="form-control"
				cols="30"
				rows="3"
				@keydown.enter="handleEnter"
				@keyup.esc.prevent="toggleEditing(false)"
			/>
			<p class="form-text text-muted text-right text-sm mb-0">
				Hit enter to save (updating not actually implemented in this prototype)
			</p>
		</div>
		<button
			class="editing-icon btn ml-2"
			@click="toggleEditing(false)"
		>
			<FontAwesomeIcon
				icon="times"
				fixed-width
			/>
		</button>
	</div>
	<div
		v-else
		class="editable-content"
		@click="toggleEditing(true)"
	>
		<p class="flex-fill">
			{{ value }}
		</p>
		<FontAwesomeIcon
			class="editable-icon"
			icon="pencil-alt"
			fixed-width
		/>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			required: true
		}
	},
	data: () => ({
		editing: false,
		currentValue: ''
	}),
	watch: {
		value: {
			immediate: true,
			handler(value) {
				this.currentValue = value
			}
		}
	},
	methods: {
		handleEnter(/** @type {KeyboardEvent} */ event) {
			if (event.shiftKey) {
				return
			}

			event.preventDefault()
			// This is where saving would be
			this.toggleEditing(false)
		},
		toggleEditing(editing = !this.editing) {
			this.editing = editing
			this.currentValue = this.value
		}
	}
}
</script>
