<template>
	<div>
		<header class="page-header pt-2 shadow-sm">
			<div class="container">
				<div class="row align-items-center justify-content-between my-2">
					<div class="col-auto">
						<h4>Company</h4>
					</div>
					<div class="col-auto">
						Actions
					</div>
				</div>
				<ul class="nav nav-underline">
					<li class="nav-item">
						<a class="nav-link">
							By users
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link">
							By categories
						</a>
					</li>
					<li class="nav-item">
						<router-link
							:to="{name: 'tags.list'}"
							class="nav-link"
						>
							By #tags
						</router-link>
					</li>
					<li class="nav-item">
						<a class="nav-link">
							By objectives
						</a>
					</li>
				</ul>
			</div>
		</header>
		<div class="container">
			<router-view />
		</div>
	</div>
</template>
