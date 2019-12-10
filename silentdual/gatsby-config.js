module.exports = {
	pathPrefix: `/spsilent`,
	siteMetadata: {
		title: `S&P Silent Dual`,
		description: `Los extractores de baño más inteligentes diseñados para una fácil instalación.`,
		author: `@gatsbyjs`
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: "YOUR_GOOGLE_TAGMANAGER_ID",

				// Include GTM in development.
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,

				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				// Defaults to null
				defaultDataLayer: { platform: "gatsby" }
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#FFFFFF`,
				theme_color: `#FFFFFF`,
				display: `minimal-ui`,
				icon: `src/images/icon.png` // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
