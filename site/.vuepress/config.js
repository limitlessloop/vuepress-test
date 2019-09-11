module.exports = {
	title: "Docs",
	themeConfig: {
		navbar: true
	},
	plugins: [
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
