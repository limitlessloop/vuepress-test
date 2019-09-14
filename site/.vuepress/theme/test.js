export function page(page) {
	let sitePages = this.$site.pages
	const output = {
		children() {
			let children = sitePages
				.filter(x => {
					// console.log(x.path)
					return x.path.match(new RegExp(`^/${page}/`))
				})
				.sort((a, b) => {
					return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
				})
			return {
				children
			}
		}
	}
	return output
}
