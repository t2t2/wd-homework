<template>
	<div>
		<header class="page-header pt-2 shadow-sm">
			<div class="container">
				<div>
					<div class="row align-items-center justify-content-between my-2">
						<div class="col">
							<h4><span class="text-black-50">#</span>projects-support</h4>
						</div>
						<div class="col-auto">
							<div class="avatars-list">
								<div class="avatar-circle">
									U1
								</div>
								<div class="avatar-circle">
									U2
								</div>
								<div class="avatar-circle">
									U3
								</div>
							</div>
						</div>
						<div class="col-auto">
							<template v-if="editing">
								<button
									key="save"
									class="btn btn-outline-primary mr-2"
									@click="update"
								>
									Done
								</button>
								<button
									key="cancel"
									class="btn btn-outline-secondary"
									@click="toggleEditing(false)"
								>
									Cancel
								</button>
							</template>
							<button
								v-else
								key="edit"
								class="btn btn-light"
								@click="toggleEditing(true)"
							>
								Edit
							</button>
						</div>
					</div>
					<div v-if="editing">
						<div class="form-group">
							<label for="project-description">Description</label>
							<textarea
								id="project-description"
								v-model="project.description"
								class="form-control"
								name="project-description"
								cols="30"
								rows="3"
							/>
						</div>
						<div class="form-row">
							<div class="form-group col">
								<label for="project-due-by">Due date</label>
								<input
									id="project-due-by"
									v-model="form.dueBy"
									type="date"
									name="project-due-by"
									class="form-control"
									value="2020-12-31"
								>
							</div>
						</div>
					</div>
					<div v-else>
						<p>
							{{ project.description }}
						</p>
						<div class="row mb-3">
							<small class="col">
								<FontAwesomeIcon
									icon="clock"
									class="text-muted"
									title="Due by"
									aria-label="Due by"
								/>
								{{ project.dueBy }}
							</small>
						</div>
					</div>
				</div>
				<ul class="nav nav-underline">
					<li class="nav-item">
						<router-link
							:to="{name: 'projects.view'}"
							class="nav-link"
						>
							Overview
						</router-link>
					</li>
				</ul>
			</div>
		</header>
		<div class="container">
			<section class="py-4">
				<h4>Quarterly Objectives</h4>
				<div class="pb-2">
					<div class="row align-items-center mb-2">
						<div class="col-12 col-sm-5">
							<a href="javascript:void(0)">Design better #projects-support</a>
						</div>
						<div class="col">
							<ObjectiveProgressBar
								:value="70"
							/>
						</div>
						<span
							class="col-auto text-right pl-0"
							style="box-sizing: content-box; width: 2.75em"
						>70%</span>
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
						<div class="col-12 col-sm-5">
							<a href="javascript:void(0)">Get points #projects-support</a>
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

				<h4>Tasks</h4>
				<TasksProgressBar
					:values="{planned: 6, overdue: 0, accomplishments: 3, negatives: 2}"
					class="mb-3"
				/>

				<div class="card mb-1">
					<div class="card-header">
						<div
							title="User 1"
							class="avatar-circle"
						>
							U1
						</div>
						User 1
					</div>
					<div class="card-body">
						<div class="row">
							<div class="col-12 col-lg">
								<h5 class="mb-3">
									Plans
								</h5>

								<ItemRow
									:type="2"
									hide-actions
									value="Support greater projects #projects-support"
								/>
								<ItemRow
									:type="2"
									hide-actions
									value="Small thing to improve #projects-support"
								/>
							</div>
							<div class="col-12 col-lg">
								<h5 class="mb-3">
									Problems
								</h5>

								<ItemRow
									:type="3"
									hide-actions
									value="#projects-support isn't epic enough"
								/>

								<h5 class="mb-3">
									Completed
								</h5>

								<ItemRow
									:type="1"
									hide-actions
									value="Basic #projects-support"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="card mb-1">
					<div class="card-header">
						<div
							title="User 2"
							class="avatar-circle"
						>
							U2
						</div>
						User 2
					</div>
					<div class="card-body">
						<div class="row">
							<div class="col-12 col-lg">
								<h5 class="mb-3">
									Plans
								</h5>

								<ItemRow
									:type="2"
									hide-actions
									value="Support greater projects #projects-support"
								/>
								<ItemRow
									:type="2"
									hide-actions
									value="Small thing to improve #projects-support"
								/>
								<ItemRow
									:type="2"
									hide-actions
									value="Fill out more tasks to accomplish #projects-support"
								/>
							</div>
							<div class="col-12 col-lg">
								<h5 class="mb-3">
									Problems
								</h5>

								<div class="placeholder">
									This list is empty
								</div>

								<h5 class="mb-3">
									Completed
								</h5>

								<ItemRow
									:type="1"
									hide-actions
									value="Basic #projects-support"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="card mb-1">
					<div class="card-header">
						<div
							title="User 3"
							class="avatar-circle"
						>
							U3
						</div>
						User 3
					</div>
					<div class="card-body">
						<div class="row">
							<div class="col-12 col-lg">
								<h5 class="mb-3">
									Plans
								</h5>

								<ItemRow
									:type="2"
									hide-actions
									value="Support greater projects #projects-support"
								/>
							</div>
							<div class="col-12 col-lg">
								<h5 class="mb-3">
									Problems
								</h5>

								<ItemRow
									:type="3"
									hide-actions
									value="#projects-support isn't epic enough"
								/>

								<h5 class="mb-3">
									Completed
								</h5>

								<div class="placeholder">
									This list is empty
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import ItemRow from '@/components/item-row'
import ObjectiveProgressBar from '@/components/objective-progress-bar'
import TasksProgressBar from '@/components/tasks-progress-bar'

export default {
	components: {
		ItemRow,
		ObjectiveProgressBar,
		TasksProgressBar
	},
	data: () => ({
		editing: false,
		project: {
			description: 'An epic project to support epic projects',
			dueBy: '2020-12-31'
		},
		form: {
			description: '',
			dueBy: ''
		}
	}),
	methods: {
		toggleEditing(editing = !this.editing) {
			this.editing = editing
			if (editing) {
				Object.keys(this.form).forEach(key => {
					this.form[key] = this.project[key]
				})
			}
		},
		update() {
			Object.keys(this.form).forEach(key => {
				this.project[key] = this.form[key]
			})
			this.toggleEditing(false)
		}
	}

}
</script>
