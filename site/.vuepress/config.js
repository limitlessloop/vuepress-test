module.exports = {
	postcss: {
		plugins: [
			require("postcss-import"),
			require('autoprefixer'),
			require("postcss-extend-rule")
		]
	},
	title: "Docs",
	themeConfig: {
		nav: [{
				text: 'Home',
				link: '/'
			},
			{
				text: 'CV',
				link: '/cv/'
			},
			{
				text: 'About',
				link: '/about/'
			},
		]
	},
	chainWebpack: config => {
		config.module
			.rule('phtml')
			.test(/\.html$/)
			.use('phtml-loader')
			.loader('phtml-loader')
			.options({
				plugins: [require('@phtml/image-alt')]
			})
			.end()
	},
	plugins: [
		'clean-urls',
		['container', {
			type: 'warning',
			defaultTitle: {
				'/zh/': '注意'
			}
		}],
		['container', {
			type: 'theorem',
			before: info => `<div class="theorem"><p class="title">${info}</p>`,
			after: '</div>',
		}],
		['container', {
			type: 'section',
			before: info => `<Section><p class="title">${info}</p>`,
			after: '</Section>'
		}]
	]
};
