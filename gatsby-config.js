module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'Patrick Hrabos portfolio',
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
		{
			resolve: 'gatsby-plugin-favicons',
			options: {
				logo: './src/images/favicon.ico',
				appName: 'My Website',
				icons: {
					favicons: true,
				},
			},
		},
	],
};
