<template>
	<div>
		<div class="posts" v-if="children.length">
			<div class="post" v-for="child in children">
				<h2>
					<router-link :to="child.path">{{child.frontmatter.title}}</router-link>
				</h2>
				<p>{{child.frontmatter.description}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['page'],
	computed: {
		children() {
			let page = this.page ? this.page : this.$page.path
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
