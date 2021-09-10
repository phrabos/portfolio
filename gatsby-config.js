module.exports = {
	siteMetadata: {
		siteUrl: 'patrick-hrabos.dev',
		title: 'Patrick Hrabos portfolio',
		favicon: './static/favicon.ico',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		'gatsby-plugin-gatsby-cloud',
		{
			resolve: 'gatsby-plugin-anchor-links',
			options: {
				offset: -80,
			},
		},
	],
};
