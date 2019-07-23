module.exports = {
  siteMetadata: {
    title: 'Kidpilot',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'We are Kidpilot',
        short_name: 'Kidpilot',
        start_url: '/',
        background_color: '#C8EBFF',
        theme_color: '#C8EBFF',
        display: 'minimal-ui',
        icon: 'src/images/logohead@2x.png', // This path is relative to the root of the site.
      },
    },
    //'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-46067561-1',
        head: true,
        exclude: ['gatsby.fatbrothers.se', 'gatsby.fatbrothers.se/**'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
  ],
}
