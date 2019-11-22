<template>
	<section class="py-4">
		<header class="mb-3">
			<h3><span class="text-black-50">#</span>{{ tag.name }}</h3>
			<EditableTextarea
				:value="tag.description"
			/>
		</header>

		<h4>Quarterly Objectives</h4>
		<div class="pb-2">
			<div class="row align-items-center mb-2">
				<div class="col-5">
					<a href="javascript:void(0)">Shoot the moon #{{ tag.name }}</a>
				</div>
				<div class="col">
					<ObjectiveProgressBar
						:value="20"
					/>
				</div>
				<span
					class="col-auto text-right pl-0"
					style="box-sizing: content-box; width: 2.75em"
				>20%</span>
				<button class="col-auto btn btn-link text-black-50 not-implemented">
					KR
					<FontAwesomeIcon
						icon="caret-down"
					/>
				</button>
				<button class="col-auto btn btn-link text-black-50 not-implemented">
					<FontAwesomeIcon
						icon="comments"
						fixed-width
					/>
				</button>
			</div>
			<div class="row align-items-center mb-2">
				<div class="col-5">
					<a href="javascript:void(0)">Get points #{{ tag.name }}</a>
				</div>
				<div class="col">
					<ObjectiveProgressBar
						:value="50"
					/>
				</div>
				<span
					class="col-auto text-right pl-0"
					style="box-sizing: content-box; width: 2.75em"
				>50%</span>
				<button class="col-auto btn btn-link text-black-50 not-implemented">
					KR
					<FontAwesomeIcon
						icon="caret-down"
					/>
				</button>
				<button class="col-auto btn btn-link text-black-50 not-implemented">
					<FontAwesomeIcon
						icon="comments"
						fixed-width
					/>
				</button>
			</div>
		</div>

		<h4>Weekly Objectives</h4>
		<TasksProgressBar
			:values="{planned: 2, overdue: 0, accomplishments: 1, negatives: 1}"
			class="mb-3"
		/>

		<h5 class="my-3">
			Problems
		</h5>

		<ItemRow
			avatar-text="U1"
			:type="3"
			:value="`A really bad problem with #${tag.name}`"
		/>

		<h5 class="my-3">
			Plans
		</h5>

		<ItemRow
			avatar-text="U1"
			:type="2"
			:value="`Thing to fix #${tag.name}`"
		/>
		<ItemRow
			avatar-text="U2"
			:type="2"
			:value="`Thing to improve #${tag.name}`"
		/>

		<h5 class="my-3">
			Progress
		</h5>
		<ItemRow
			avatar-text="U2"
			:type="1"
			:value="`Thing done #${tag.name}`"
		/>
	</section>
</template>

<script>
import tags from '@/data/tags'

import EditableTextarea from '@/components/editable-textarea'
import ItemRow from '@/components/item-row'
import ObjectiveProgressBar from '@/components/objective-progress-bar'
import TasksProgressBar from '@/components/tasks-progress-bar'

export default {
	components: {
		EditableTextarea,
		ItemRow,
		ObjectiveProgressBar,
		TasksProgressBar
	},
	props: {
		tagSlug: {
			type: String,
			required: true
		}
	},
	computed: {
		tag({tagSlug}) {
			return tags.find(({name}) => name === tagSlug)
		}
	}
}
</script>
