import React from 'react';
import BlogSingle from "./BlogSingle";

const blogData = [];
const Blogs = () => {
  
  return (
    <section className="blogs">
      <div className="container">
        <div className="row">
          <BlogSingle/>
          <BlogSingle/>
          <BlogSingle/>
          <BlogSingle/>
        </div>
      </div>
    </section>
  );
};

Blogs.propTypes = {};

export default Blogs;
