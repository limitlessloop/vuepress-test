<template>
	<div class="c p-8">
		<Navbar />
		<div class="Page">
			<Section>
				<h1>{{ $page.title }}</h1>
				<p class="f-gray">{{ $page.frontmatter.date }}</p>
				<Content />
			</Section>
		</div>
		<Footer />
	</div>
</template>
