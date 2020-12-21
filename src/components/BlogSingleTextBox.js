import React from 'react';
import { Link } from 'gatsby';

const BlogSingleTextBox = ({ style, slug, title, excerpt, publishDate, readTime }) => {
  return (
    <div style={style || {}} className="blog-single--text-box">
      <div className="text-wrapper">
        <p className="blog-single--title" color="indigo-color">{title}</p>
        <div className="date-time-box">
          <p className="date-time-box--text">{publishDate}</p>
          {readTime && ( <>
              <div className="date-time-box--dot"/>
              <p className="date-time-box--text">{readTime} min</p>
            </>
          )}
        </div>
        <p className="blog-single--detail w-300" color="indigo-color" variant="body4">{excerpt}</p>
      </div>
      <Link to={`/blog/${slug}`} className="blog-single-btn">
        Read More
      </Link>
    </div>
  );
};

BlogSingleTextBox.propTypes = {};

export default BlogSingleTextBox;
