<template>
	<div
		:class="{opened: isOpen}"
		class="card tag-card"
	>
		<div class="row mx-0 align-items-center">
			<button
				class="col-auto btn btn-link"
				@click="isOpen = !isOpen"
			>
				<FontAwesomeIcon
					icon="caret-down"
					:rotation="isOpen ? 180 : null"
				/>
			</button>
			<RouterLink
				:to="{name: 'tags.view', params: {tagSlug: tag.name}}"
				class="col col-sm-4 align-self-stretch text-reset d-flex flex-column justify-content-center"
			>
				<div
					class="text-truncate"
					:title="tag.name"
				>
					<span class="text-black-50">#</span>{{ tag.name }}
				</div>
			</RouterLink>
			<div class="col d-none d-sm-block overflow-hidden text-muted">
				<div class="text-truncate">
					{{ tag.description }}
				</div>
			</div>
			<button
				:class="[tag.important ? 'text-primary' : 'text-black-50']"
				class="col-auto btn not-implemented"
			>
				<FontAwesomeIcon
					icon="thumbtack"
				/>
			</button>
		</div>
		<div
			v-if="bars === 'week'"
			class="tag-progress row align-items-stretch"
		>
			<div class="col-auto p-0">
				<button
					class="tag-progress-label btn d-block"
					@click="bars = 'okr'"
				>
					WEEK
				</button>
			</div>
			<TasksProgressBar
				:values="tag.tasks"
				class="col p-0"
			/>
		</div>
		<div
			v-else-if="bars === 'okr'"
			class="tag-progress row align-items-stretch"
		>
			<div class="col-auto p-0">
				<button
					class="tag-progress-label btn d-block"
					@click="bars = 'week'"
				>
					OKR%
				</button>
			</div>
			<ObjectiveProgressBar
				:value="tag.okr"
				class="col p-0"
			/>
		</div>

		<template v-if="isOpen">
			<h6 class="card-header">
				Weekly Plans
			</h6>
			<div class="card-body">
				<div class="row align-items-center mb-2">
					<div class="col-auto pr-0">
						<div class="avatar-circle">
							U1
						</div>
					</div>
					<div class="col-4">
						<a href="javascript:void(0)">User 1</a>
					</div>
					<div class="col-12 col-sm mt-1 mt-sm-0">
						<TasksProgressBar
							:values="{
								planned: 2,
								overdue: 1,
								accomplishments: 1,
								negatives: 1
							}"
						/>
					</div>
				</div>
				<div class="row align-items-center mb-2">
					<div class="col-auto pr-0">
						<div class="avatar-circle">
							U2
						</div>
					</div>
					<div class="col-4">
						<a href="javascript:void(0)">User 2</a>
					</div>
					<div class="col-12 col-sm mt-1 mt-sm-0">
						<TasksProgressBar
							:values="{
								planned: 1,
								overdue: 0,
								accomplishments: 4,
								negatives: 0
							}"
						/>
					</div>
				</div>
				<div class="row align-items-center mb-2">
					<div class="col-auto pr-0">
						<div class="avatar-circle">
							U3
						</div>
					</div>
					<div class="col-4">
						<a href="javascript:void(0)">User 3</a>
					</div>
					<div class="col-12 col-sm mt-1 mt-sm-0">
						<TasksProgressBar
							:values="{
								planned: 1,
								overdue: 1,
								accomplishments: 2,
								negatives: 3
							}"
						/>
					</div>
				</div>
			</div>
			<h6 class="card-header">
				Quarterly Objectives
			</h6>
			<div class="card-body">
				<div class="row align-items-center mb-2">
					<div class="col-12 col-sm-5">
						<a href="javascript:void(0)">Shoot the moon #{{ tag.name }}</a>
					</div>
					<div class="col">
						<ObjectiveProgressBar
							:value="20"
						/>
					</div>
					<button class="col-auto btn btn-link not-implemented">
						KR
						<FontAwesomeIcon
							icon="caret-down"
						/>
					</button>
				</div>
				<div class="row align-items-center mb-2">
					<div class="col-12 col-sm-5">
						<a href="javascript:void(0)">Get points #{{ tag.name }}</a>
					</div>
					<div class="col">
						<ObjectiveProgressBar
							:value="50"
						/>
					</div>
					<button class="col-auto btn btn-link not-implemented">
						KR
						<FontAwesomeIcon
							icon="caret-down"
						/>
					</button>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import ObjectiveProgressBar from '@/components/objective-progress-bar.vue'
import TasksProgressBar from '@/components/tasks-progress-bar.vue'

export default {
	components: {
		ObjectiveProgressBar,
		TasksProgressBar
	},
	props: {
		tag: {
			type: Object,
			required: true
		}
	},
	data: () => ({
		bars: 'week',
		isOpen: false
	})
}
</script>
