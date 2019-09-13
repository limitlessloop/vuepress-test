<template>
	<App>
		<Navbar />
		<div class="Body">
			<pre>
			{{ getMatchingContent }}
			</pre>
			<div class="post" v-for="post in posts">
				<p>{{post.frontmatter.description}}</p>
			</div>
			<Content />
		</div>
		<Footer />
	</App>
</template>

<style>
</style>

<script>
export default {
	computed: {
		getMatchingContent() {
			return this.$site.pages.filter(x => {
				let fileName = this.$options.name.toLowerCase()
				return x.path.match(new RegExp(`^/${fileName}/`))
			})
		},
		posts() {
			// console.log(this.$options.name)
			let page = 'posts'
			let children = this.$site.pages
				.filter(x => {
					// console.log(x.path)
					return x.path.match(new RegExp(`^/${page}/`))
				})
				.sort((a, b) => {
					return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
				})
			return children
		}
	}
}
</script>
