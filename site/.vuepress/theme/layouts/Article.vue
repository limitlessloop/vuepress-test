<template>
	<div class="c p-8">
		<Navbar />
		<Section>
			<h1>{{ $page.title }}</h1>
			<p class="f-gray">{{ $page.frontmatter.date }}</p>
			<Content />
		</Section>
		<Footer />
	</div>
</template>
