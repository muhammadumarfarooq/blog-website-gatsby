import React, { useContext } from 'react';
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BlogTop from "../components/BlogTop";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import UserContext from "../context/user/userContext";

const Blogsingle = ({ data }) => {
  const { state } = useContext(UserContext);
  
  const {
    title,
    description,
    date,
    image,
    body
  } = data.contentfulBlogpost;
  
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return <img className="blog-img" alt={alt} src={url}/>;
      }
    }
  };
  
  const cn = state.isUserLoggedIn ? "container content-wrapper" : "container content-wrapper mask-img";
  
  return (
    <Layout className="blog-single">
      <BlogTop
        featuredImage={image.file.url}
        publishDate={date}
        title={title}
        description={description}
      />
      
      <div className={cn}>
        {documentToReactComponents(body.json, options)}
      </div>
      {!state.isUserLoggedIn &&
      <h1 className="content-wrapper--text">Please sign in to see complete post!</h1>}
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
        body{
          json
        }
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
