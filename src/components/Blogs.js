import React from 'react';
import BlogSingle from "./BlogSingle";

const Blogs = ({ posts }) => {
  
  return (
    <section className="blogs">
      <div className="container">
        <div className="row">
          {posts.map((post) => <BlogSingle key={post.node.slug} post={post}/>)}
        </div>
      </div>
    </section>
  );
};

Blogs.propTypes = {};

export default Blogs;
