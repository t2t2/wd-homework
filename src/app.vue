<template>
	<div class="container-fluid min-vh-100">
		<div class="row h-100">
			<div class="col p-0 primary-sidebar sticky-top vh-100">
				<ul class="nav flex-column bg-secondary h-100">
					<li class="nav-item">
						<router-link
							to="/"
							class="nav-link"
							exact
						>
							<span class="icon">H</span>
							Home
						</router-link>
					</li>
					<li class="nav-item">
						<router-link
							:to="{name: 'tags.list'}"
							class="nav-link"
						>
							<span class="icon">2</span>
							Tags
						</router-link>
					</li>
					<li class="nav-item">
						<router-link
							:to="{name: 'projects.view'}"
							class="nav-link"
						>
							<span class="icon">3</span>
							Project
						</router-link>
					</li>
				</ul>
			</div>
			<div class="col secondary-sidebar sticky-top vh-100 d-none d-md-block">
				<p class="py-2">
					(sidebar)
				</p>
			</div>
			<div class="col overflow-hidden">
				<div class="top-bar sticky-top">
					(top navbar)
				</div>

				<router-view />
			</div>
		</div>
	</div>
</template>
