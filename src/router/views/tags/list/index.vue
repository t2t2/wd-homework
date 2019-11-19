<template>
	<div class="py-3 w-100 overflow-hidden">
		<!-- Important tags -->
		<div
			v-for="(tag, i) in importantTags"
			:key="i"
			class="tag-card mb-2"
		>
			<div class="row mx-0 align-items-center">
				<button class="col-auto btn btn-link">
					<FontAwesomeIcon icon="caret-down" />
				</button>
				<a
					class="col-4 text-reset"
					href="#"
				>
					<div
						class="text-truncate"
						:title="tag.name"
					>
						<span class="text-black-50">#</span>{{ tag.name }}
					</div>
				</a>
				<div class="col overflow-hidden text-muted">
					<div class="text-truncate">
						{{ tag.description }}
					</div>
				</div>
				<button class="col-auto btn text-black-50">
					<FontAwesomeIcon
						icon="thumbtack"
					/>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import tags from '@/data/tags'

export default {
	data: () => ({
		tags
	}),
	computed: {
		importantTags({tags}) {
			return tags.filter(({important}) => important === true)
		},
		restTags({tags}) {
			return tags.filter(({important}) => important !== true)
		}
	}
}
</script>
