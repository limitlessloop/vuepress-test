<template>
	<App>
		<Navbar />
		<div class="Body">
			<Section>
				<h1>{{ $page.title }}</h1>
				<Content />
			</Section>
		</div>
		<Footer />
	</App>
</template>

<style>
.Section > .wrapper {
	max-width: 800px;
}
</style>
