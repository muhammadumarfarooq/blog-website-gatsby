import React from "react";
import { graphql } from "gatsby";
import Blogs from "../components/Blogs";
import Layout from "../components/Layout";

const Home = ({ data }) => {
  const posts = data.allContentfulBlogpost.edges;
  return (
    <Layout>
      <Blogs posts={posts}/>
    </Layout>
  
  );
};

export const query = graphql`
  query {
   allContentfulBlogpost {
    edges {
      node {
        title
        slug
        description
        date(formatString: "MMMM DD, YYYY")
        readTime
        image{
          file {
          url
        }
        }
      }
    }
  }
  }
`;

export default Home;
