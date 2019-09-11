export default ({
	router
}) => {

	// require('../../../node_modules/karamel/dist/karamel.css')
	require('./styles/global.css')
	router.addRoutes([{
		path: '/example-vue-page',
		component: ExampleVuePage
	}])
}
