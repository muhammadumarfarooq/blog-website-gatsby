import React from "react"
import { graphql } from "gatsby"

const Home = ({ data }) => {
  const title = data.allContentfulBlogpost.edges[0].node.title
  return <div>
    <h1>Blog website</h1>
    <h2>{title}</h2>
    <p>This is blog website...</p>
  </div>
}

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
`

export default Home
