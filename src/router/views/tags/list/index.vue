<template>
	<div class="py-3 w-100">
		<!-- Important tags -->
		<div class="pb-4">
			<h5>Important</h5>
			<TagCard
				v-for="tag in importantTags"
				:key="tag.name"
				:tag="tag"
			/>
		</div>

		<!-- Rest -->
		<TagCard
			v-for="tag in restTags"
			:key="tag.name"
			:tag="tag"
		/>

		<nav>
			<ul class="pagination justify-content-center">
				<li class="page-item disabled">
					<span class="page-link">Previous</span>
				</li>
				<li
					class="page-item active"
					aria-current="page"
				>
					<span class="page-link">
						1
						<span class="sr-only">(current)</span>
					</span>
				</li>
				<li class="page-item">
					<a
						class="page-link"
						href="javascript: void(0)"
					>2</a>
				</li>
				<li class="page-item">
					<a
						class="page-link"
						href="javascript: void(0)"
					>3</a>
				</li>
				<li class="page-item">
					<a
						class="page-link"
						href="javascript: void(0)"
					>Next</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
import tags from '@/data/tags'
import TagCard from './components/tag-card'

export default {
	components: {
		TagCard
	},
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
