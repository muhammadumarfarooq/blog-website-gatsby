const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query {
      allContentfulBlogpost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  
  response.data.allContentfulBlogpost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-single.js"),
      context: {
        slug: edge.node.slug,
      },
    });
  });
  
};
