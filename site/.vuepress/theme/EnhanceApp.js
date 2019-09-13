export default ({
	Vue,
	options,
	router,
	siteData
}) => {

	// require('../../../node_modules/karamel/dist/karamel.css')
	require('./styles/global.css')
	// router.addRoutes([{
	// 	path: '/example-vue-page',
	// 	component: ExampleVuePage
	// }])

	Vue.prototype.$children = siteData.pages

	// let currentPage = this.$page.path
	// targetPage = targetPage ? '/' + targetPage + '/' : currentPage
	// let children = siteData.pages
	// 	.filter(x => {
	// 		return x.path.match(new RegExp('^' + targetPage))
	// 	})
	// 	.sort((a, b) => {
	// 		return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
	// 	})
	// return children

}
