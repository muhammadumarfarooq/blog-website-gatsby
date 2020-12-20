/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ["gatsby-plugin-sass",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `o9vu9bajuaam`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "sX0tfPm1XNaRkO-CTa8DgPpjw8G5jlqGLPZuKCBD0H0"
      }
    }]
}
