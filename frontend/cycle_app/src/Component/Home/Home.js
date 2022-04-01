import React from "react";
import { Link } from "react-router-dom";

import "./css/bootstrap.min.css";
import "./css/responsive.css";
import "./css/style.css";
import "./css/jquery.mCustomScrollbar.min.css";

class Home extends React.Component {

  render() {

    return (

      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>IITK | Cycling-App</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/bootstrap-theme.min.css" />
        <link rel="stylesheet" href="css/fontAwesome.css" />
        <link rel="stylesheet" href="css/hero-slider.css" />
        <link rel="stylesheet" href="css/owl-carousel.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900" rel="stylesheet" />

        <nav id="primary-nav" className="dropdown cf">
          <ul className="dropdown menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login/Signup</Link></li>

          </ul>
        </nav>

        <section className="slider_section">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container-fluid padding_dd">
                  <div className="carousel-caption">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="text-bg">
                          <span>Welcome to IITK</span>
                          <h1>Cycle Rental Application</h1>

                          <Link to="/login">Login/Sign Up</Link>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="images_box">
                          <figure><img src={"https://source.unsplash.com/random/739x587/?cycle"} /></figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        {/* about  */}
        <div id="about" className="about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="about-box">
                  <h2>About us</h2>
                  <p></p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 padding_rl">
                <div className="about-box_img">
                  <figure><img src="https://source.unsplash.com/random/740x587/?cycle" alt="#" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer start */}
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="about-veno">
                  <div className="logo">
                  </div>
                  <p>IITK Cycling App</p>
                  <ul className="social-icons">
                    <li>
                      <a href="#"><i className="fa fa-facebook" /></a>
                      <a href="#"><i className="fa fa-twitter" /></a>
                      <a href="#"><i className="fa fa-linkedin" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="useful-links">
                  <div className="footer-heading">
                    <h4>Rent Cycles</h4>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <ul>
                        <li><Link to="/"><i className="fa fa-stop" />Home</Link></li>
                        <li><Link to="/login"><i className="fa fa-stop" />Login/Signup</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="contact-info">
                  <div className="footer-heading">
                    <h4>Contact Information</h4>
                  </div>
                  <p><i className="fa fa-map-marker" /> Hall 12, IITK</p>
                  <ul>
                    <li><span>Phone:</span><a href="#">9876543210</a></li>
                    <li><span>Email:</span><a href="#">arpit@avi.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer end */}
        {/* Sub footer start */}
        <div className="sub-footer">
          <p>Copyright © 2021 IITK-Cycling App</p>
        </div>
        {/* Sub footer end */}

        
       
      </div>

    )

  }

}

export default Home;