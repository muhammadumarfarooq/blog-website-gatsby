import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

const Home = ({ data }) => {
  const title = data.allContentfulBlogpost.edges[0].node.title;
  return (
    <div>
      <Navbar/>
      <Blogs/>
      <Footer/>
    </div>
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
