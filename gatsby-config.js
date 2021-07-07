module.exports = {
  siteMetadata: {
    title: `Brian Franklin Portfolio`,
    description: `A portfolio displaying previous projects done by Brian Franklin.`,
    author: `Brian Franklin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/src/posts`,
          name: 'posts'
        }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        footnotes: true,
        gfm: true,
        plugins: [],
      },  
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
