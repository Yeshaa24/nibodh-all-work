import main from './main.css'
import React from 'react';
var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Fashion Blog</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Font awesome icon */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
          <link rel="stylesheet" href="BlogWebsite.css" />
          {/* header */}
          <header>
            <nav className="navbar">
              <div className="container">
                <a href="index.html" className="navbar-brand">Style-Unicorn</a>
                <div className="navbar-nav">
                  <a href="#home">home</a>
                  <a href="#design">blog</a>
                  <a href="#about">about</a>
                  <a href="#social">Social</a>
                </div>
              </div>
            </nav>
            <div className="banner" id="home">
              <div className="container">
                <h1 className="banner-title">
                  <span>Style-</span>Unicorn
                </h1>
                <p>everything that you want to know about Fashion.</p>
              </div>
            </div>
          </header>
          {/* end of header */}
          {/* blog */}
          <section className="design" id="design">
            <div className="container">
              <div className="title">
                <h2>Fashion &amp; Leisure</h2>
                <p>recent fashion trends on the blog</p>
              </div>
              <div className="design-content">
                {/* item */}
                <div className="design-item">
                  <div className="design-img">
                    <img src="bg2.jpg" alt="" />
                    <span><i className="far fa-heart" /> 45</span>
                    <span>Boho Chic</span>
                  </div>
                  <div className="design-title">
                    <a href="#">Nothing soothes the soul like a day by fashion.</a>
                  </div>
                </div>
                {/* end of item */}
                {/* item */}
                <div className="design-item">
                  <div className="design-img">
                    <img src="bg4.jpg" alt="" />
                    <span><i className="far fa-heart" /> 73</span>
                    <span>Monochrome</span>
                  </div>
                  <div className="design-title">
                    <a href="#">Nothing soothes the soul like a day by fashion.</a>
                  </div>
                </div>
                {/* end of item */}
                {/* item */}
                <div className="design-item">
                  <div className="design-img">
                    <img src="bg3.jpg" alt="" />
                    <span><i className="far fa-heart" /> 68</span>
                    <span>Free-style</span>
                  </div>
                  <div className="design-title">
                    <a href="#">Nothing soothes the soul like a day by fashion.</a>
                  </div>
                </div>
                {/* end of item */}
                {/* item */}
                <div className="design-item">
                  <div className="design-img">
                    <img src="bg5.jpg" alt="" />
                    <span><i className="far fa-heart" /> 77</span>
                    <span>Ethnic</span>
                  </div>
                  <div className="design-title">
                    <a href="#">Nothing soothes the soul like a day by fashion.</a>
                  </div>
                </div>
                {/* end of item */}
                {/* item */}
                <div className="design-item">
                  <div className="design-img">
                    <img src="bg6.jpg" alt="" />
                    <span><i className="far fa-heart" /> 85</span>
                    <span>Emblazoned</span>
                  </div>
                  <div className="design-title">
                    <a href="#">Nothing soothes the soul like a day by fashion.</a>
                  </div>
                </div>
                {/* end of item */}
                {/* item */}
                <div className="design-item">
                  <div className="design-img">
                    <img src="bg7.jpg" alt="" />
                    <span><i className="far fa-heart" /> 58</span>
                    <span>Informal</span>
                  </div>
                  <div className="design-title">
                    <a href="#">Nothing soothes the soul like a day by fashion.</a>
                  </div>
                </div>
                {/* end of item */}
              </div>
            </div>
          </section>
          {/* end of blog */}
          {/* about */}
          <section className="about" id="about">
            <div className="container">
              <div className="about-content">
                <div>
                  <img src="bg8.jpg" alt="" />
                </div>
                <div className="about-text">
                  <div className="title">
                    <h2>Style-Unicorn</h2>
                    <p>Fashion and Design is my passion</p>
                  </div>
                  <p>Fashion is a predominant style or practice, especially in clothing. Factors that affect people’s clothing, including historical and cultural traditions, lifestyle changes, appreciation of beauty and the skills of designers.</p>
                  <p>Fashion not only influences what we wear, but also how we present ourselves to the world, which is why fashion cannot be separated from culture. Fashion can be seen in literature, social pages of newspapers and magazines, advertisements, television shows, and films. It has permeated every aspect of life; Business negotiations are influenced by what people wear and how they present themselves.</p>
                </div>
              </div>
            </div>
          </section>
          {/* end of about */}
          {/* footer */}
          <footer>
            <div className="social-links" id="social">
              <a href="#"><i className="fab fa-facebook-f" /></a>
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-pinterest" /></a>
            </div>
            <span>Fashion Blog Page</span>
          </footer>
          {/* end of footer */}
        </div>
      );
    }
  });