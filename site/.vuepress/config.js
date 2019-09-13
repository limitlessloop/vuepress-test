module.exports = {
	extendPageData($page) {
		const {
			_filePath, // file's absolute path
			_computed, // access the client global computed mixins at build time, e.g _computed.$localePath.
			_content, // file's raw content string
			_strippedContent, // file's content string without frontmatter
			key, // page's unique hash key
			frontmatter, // page's frontmatter object
			regularPath, // current page's default link (follow the file hierarchy)
			path, // current page's real link (use regularPath when permalink does not exist)
		} = $page

		// 1. Add extra fields.

		// $page.xxx = $page._content

		// 2. Change frontmatter.
		// frontmatter.sidebar = _computed
	},
	head: [
		['script', {
			src: '/svg-inject.js'
		}]
	],
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
	],
	markdown: {
		extendMarkdown: md => {
			// use more markdown-it plugins!
			md.use(require('markdown-it-attrs'))
			md.use(require('markdown-it-plantuml'))
		}
	}
};
