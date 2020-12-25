import React, { useContext, useEffect, useState } from 'react';
import BlogSingle from "./BlogSingle";
import UserContext from "../context/user/userContext";

const Blogs = ({ posts }) => {
  const { state } = useContext(UserContext);
  const [allPosts, setAllPosts] = useState([]);
  
  useEffect(() => {
    if ( !state.isUserLoggedIn ) {
      setAllPosts(posts.slice(0, 4));
    } else {
      setAllPosts(posts);
    }
    
  }, [state.isUserLoggedIn]);
  
  return (
    <section className="blogs">
      <div className="container">
        <div className="row">
          {allPosts.map((post) => <BlogSingle key={post.node.slug} post={post}/>)}
        </div>
      </div>
      {!state.isUserLoggedIn &&
      <h1 className="blogs-helper--text">Please sign in to see all the available posts!</h1>}
    
    </section>
  );
};

Blogs.propTypes = {};

export default Blogs;
