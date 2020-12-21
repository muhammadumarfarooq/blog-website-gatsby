import React from 'react';
import BlogSingleTextBox from "./BlogSingleTextBox";

const BlogSingle = () => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6 blog-single--container">
      <div className="blog-single--wrapper">
        <div className="blog-single--img-wrapper">
          <div
            style={{ backgroundImage: `url(https://s3-us-west-2.amazonaws.com/assets.orderspot.app/images/background/baba+k.jpg)` }}
            className="blog-single--img-box"/>
        </div>
        
        <div className="blog-single-text-wrapper">
          <BlogSingleTextBox
            excerpt={"Some demo text"}
            publishDate={"20-5-1998"}
            title={"My first blog post"}
            slug={"my-first-blog-post"}
            readTime={5}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
