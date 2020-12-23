import React from 'react';
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BlogTop from "../components/BlogTop";

const Blogsingle = ({ data }) => {
  const {
    title,
    description,
    date,
    image
  } = data.contentfulBlogpost;
  return (
    <Layout className="blog-single">
      <BlogTop
        featuredImage={image.file.url}
        publishDate={date}
        title={title}
        description={description}
      />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulBlogpost(slug: { eq: $slug }) {
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
`;

Blogsingle.propTypes = {};

export default Blogsingle;
