import React from 'react';
import BlogSingleTextBox from "./BlogSingleTextBox";

const BlogSingle = ({ post }) => {
  const {
    title,
    slug,
    description,
    date,
    readTime,
    image,
  } = post.node;
  
  return (
    <div className="col-xl-6 col-lg-6 col-md-6 blog-single--container">
      <div className="blog-single--wrapper">
        <div className="blog-single--img-wrapper">
          <div
            style={{ backgroundImage: `url(${image.file.url})` }}
            className="blog-single--img-box"/>
        </div>
        
        <div className="blog-single-text-wrapper">
          <BlogSingleTextBox
            description={description}
            publishDate={date}
            title={title}
            slug={slug}
            readTime={readTime}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
