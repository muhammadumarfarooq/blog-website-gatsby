import React from 'react';


const BlogTop = (props) => {
  const {
    featuredImage,
    publishDate,
    title,
    description
  } = props;
  return (
    <section className="blog-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-12 col-md-12">
            <div
              style={{ backgroundImage: `url(${featuredImage})` }}
              className="blog-bg-img"/>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 blog-top-text-wrapper">
            <div className="blog-top--text-box">
              <p className="blog-top--title">
                {title}
              </p>
              
              <p className="blog-top--info-text">
                {description}
              </p>
              
              <p className="blog-top--date">
                {publishDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BlogTop.propTypes = {};


export default BlogTop;
