import React from 'react';

const Footer = () => {
  
  return (
    <section className="footer">
      <div className="container container-wrapper">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-12 social-icon-logo-wrapper">
            <h1 className="footer--title">Blog</h1>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-12">
            <div className="links-title-wrapper">
              <p className="links-title-wrapper--title">
                Pages
              </p>
              <a className="links-with-title-link" href="#">
                New Blogs
              </a>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-12">
            <div className="links-title-wrapper">
              <p className="links-title-wrapper--title">
                Resources
              </p>
              <a className="links-with-title-link" href="#">
                FAQS
              </a>
              <a className="links-with-title-link" href="#">
                Blogs
              </a>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <WebsiteInfo/>
          </div>
        </div>
      </div>
    </section>
  );
};

const WebsiteInfo = () => {
  return (
    <div className="privacy-policy-reserved-section">
      <div className="email-phoneNumber">
        <p color="white-text" className="email-text">
          <a href="mailto:contact@orderspot.co">contact@demoemail.com</a>
        </p>
        <div className="dot hide-on-mobile"/>
        <p className="phone-text">
          <a href="tel:+92 112 051 4202">+92 112 051 4202</a>
        </p>
      </div>
      
      <div className="privacy-policy-legal hide-on-mobile">
        <a href="#">Privacy Policy</a>
        <div className="dot hide-on-mobile"/>
        <a href="#">Legal</a>
      </div>
      
      <p color="white-text" className="copyright-text w-400" variant="body9">
        &copy;2020 Blog. All rights reserved.
      </p>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
