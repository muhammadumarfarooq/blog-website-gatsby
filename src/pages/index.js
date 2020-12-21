import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar/Navbar";

const Home = ({ data }) => {
  const title = data.allContentfulBlogpost.edges[0].node.title;
  return (
    <Navbar/>
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
