module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'Patrick Hrabos portfolio',
	},
	plugins: [
		'gatsby-plugin-gatsby-cloud',
		{
			resolve: 'gatsby-plugin-anchor-links',
			options: {
				offset: -80,
			},
		},
	],
};
