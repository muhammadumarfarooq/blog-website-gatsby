import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const Home = ({ data }) => {
  const title = data.allContentfulBlogpost.edges[0].node.title;
  return (
    <Layout>
      <Blogs/>
    </Layout>
  
  );
};

export const query = graphql`
  query {
   allContentfulBlogpost {
    edges {
      node {
        title
      }
    }
  }
  }
`;

export default Home;
