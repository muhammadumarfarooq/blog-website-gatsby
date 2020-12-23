import React from 'react';
import Layout from "../components/Layout";
import BlogTop from "../components/BlogTop";

const Blogsingle = () => {
  return (
    <Layout className="blog-single">
      <BlogTop
        featuredImage="https://s3-us-west-2.amazonaws.com/assets.orderspot.app/images/background/baba+k.jpg"
        publishDate="20-05-2020"
        title="How to signup for blog"
        description="This is the first blog for our good things."
      />
    </Layout>
  );
};

Blogsingle.propTypes = {};

export default Blogsingle;
