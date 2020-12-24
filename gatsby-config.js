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
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAaZwY2i5rMJpVFhfimaPQ5DnnOjLdd2-I",
          authDomain: "gatsby-contenful-blog.firebaseapp.com",
          projectId: "gatsby-contenful-blog",
          storageBucket: "gatsby-contenful-blog.appspot.com",
          messagingSenderId: "65631998759",
          appId: "1:65631998759:web:535897a003d98ce1240f02"
        }
      }
    }
  
  ]
};
