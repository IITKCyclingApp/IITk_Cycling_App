import React from "react";
import { Link } from "react-router-dom";

import "./css/bootstrap.min.css";
import "./css/responsive.css";
import "./css/style.css";
import "./css/jquery.mCustomScrollbar.min.css";

class Home extends React.Component{

  render(){

   return(

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
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand">IITK-Cycling App</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item" style={{"-webkit-align-items":"right","-webkit-box-align":"right","-ms-flex-align":"right","align-items":"right"}}>
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item" style={{"-webkit-align-items":"right","-webkit-box-align":"right","-ms-flex-align":"right","align-items":"right"}}>
            <a className="nav-link active" aria-current="page" href="#about">About</a>
          </li>
          <li className="nav-item" style={{"-webkit-align-items":"right","-webkit-box-align":"right","-ms-flex-align":"right","align-items":"right"}}>
            <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
          </li>
          <li className="nav-item" style={{"-webkit-text-align":"right","text-align":"right"}}>
            <Link className="nav-link active" aria-current="page" to="/login">Login/Sign-Up</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Navbar end */}

  <section className="slider_section">
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to={0} className="active" />
        <li data-target="#myCarousel" data-slide-to={1} />
        <li data-target="#myCarousel" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container-fluid padding_dd">
            <div className="carousel-caption">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="text-bg">
                    <span>Welcome to IITK</span>
                    <h1>Cycle Rental Application</h1>
                    <p>-- ENTER TEXT - 1 --</p>
                    {/* <form className="Vegetable"> */}
                      {/* <input class="Vegetable_fom" placeholder="Vegetable" type="text" name=" Vegetable">
          <button class="Search_btn">Search</button> */}
                    {/* </form> */}
                    <a href="#contact">Contact Us</a> <Link to="/login">Login/Sign Up</Link>
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
        <div className="carousel-item">
          <div className="container-fluid padding_dd">
            <div className="carousel-caption">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="text-bg">
                    <span>What we have to offer?</span>
                    <h1>Cycle Rental Application</h1>
                    <p> -- Enter text 2 -- </p>
                    <a href="#contact">Contact Us</a> <Link to="login.html">Login/Sign Up</Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="images_box">
                    <figure><img src="https://source.unsplash.com/random/739x587/?cycle" /></figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="carousel-item">
          <div className="container-fluid padding_dd">
            <div className="carousel-caption ">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="text-bg">
                    <span>Welcome To Shree</span>
                    <h1>Cycle Rental Application</h1>
                    <p> -- enter text 3 -- </p>
                    <a href="#contact">Contact Us</a> <Link to="login.html">Login/Sign Up</Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="images_box">
                    <figure><img src="https://source.unsplash.com/random/739x587/?cycle" /></figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </section>
  {/* about  */}
  <div id="about" className="about">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div className="about-box">
            <h2>About us</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like readable English. Many
              desktop publishing packages andIt is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it
              look like readable English. Many</p>
            <a href="Javascript:void(0)">Read more</a>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 padding_rl">
          <div className="about-box_img">
            <figure><img src={require("./images/about.jpg")} alt="#" /></figure>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end abouts */}
  {/* vegetable */}
  {/* <div id="vegetable" class="vegetable">
  <div class="container">
    <div class="row">
<div class="col-md-12">
  <div  class="titlepage">
    <h2> Fresh <strong class="llow">vegetable</strong> </h2>
  </div>
</div>
    </div>
    <div class="row">
<div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
  <div class="vegetable_shop">
    <h3>Best Vegetables Shop</h3>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages andIt is a long established fact that a reader will be distracted </p>
  </div>
</div>
 <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 ">
  <div class="vegetable_img">
   <figure><img src="images/v1.jpg" alt="#"/></figure>
   <span>01</span>
  </div>
</div>
 <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 ">
  <div class="vegetable_img margin_top">
   <figure><img src="images/v2.jpg" alt="#"/></figure>
   <span>02</span>
  </div>
</div>
    </div>
  </div>
</div> */}
  {/* end vegetable */}
  {/* clients */}
  <div id="testimonial" className="clients">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>What our customers say?</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="clients_red">
    <div className="container">
      <div id="testimonial_slider" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ul className="carousel-indicators">
          <li data-target="#testimonial_slider" data-slide-to={0} className />
          <li data-target="#testimonial_slider" data-slide-to={1} className="active" />
          <li data-target="#testimonial_slider" data-slide-to={2} className />
        </ul>
        {/* The slideshow */}
        <div className="carousel-inner">
          <div className="carousel-item">
            <div className="testomonial_section">
              <div className="full testimonial_cont">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 pa_right">
                    <div className="testomonial_img">
                      <figure><img src={require("./images/tes.jpg")} alt="#" /></figure>
                      <i><img src={require("./images/test_con.png")} alt="#" /></i>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 pa_left">
                    <div className="cross_inner">
                      <h3>Jomono<br /><strong className="ornage_color">review</strong></h3>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content here, content here', making it look
                        like readable English. Many desktop publishing packages and
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="testomonial_section">
              <div className="full center">
              </div>
              <div className="full testimonial_cont ">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 pa_right">
                    <div className="testomonial_img">
                      <figure><img src={require("./images/tes.jpg")} alt="#" /></figure>
                      <i><img src={require("./images/test_con.png")} alt="#" /></i>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 pa_left">
                    <div className="cross_inner">
                      <h3>Jomono<br /><strong className="ornage_color">review</strong></h3>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content here, content here', making it look
                        like readable English. Many desktop publishing packages and
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div id="testomonial" className="testomonial_section">
              <div className="full center">
              </div>
              <div className="full testimonial_cont ">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 pa_right">
                    <div className="testomonial_img">
                      <figure><img src={require("./images/tes.jpg")} alt="#" /></figure>
                      <i><img src={require("./images/test_con.png")} alt="#" /></i>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 pa_left">
                    <div className="cross_inner">
                      <h3>Jomono<br /><strong className="ornage_color">review</strong></h3>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content here, content here', making it look
                        like readable English. Many desktop publishing packages and
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end clients */}
  {/* contact */}
  <div id="contact" className="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>Contact <strong className="llow">us</strong></h2>
          </div>
        </div>
      </div>
      <div className="white_color">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <form className="contact_bg">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Your Name" type="text" name="Your Name" />
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Email" type="text" name="Email" />
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Phone Number" type="text" name="Phone Number" />
                  </div>
                  <div className="col-md-12">
                    <textarea className="textarea" placeholder="Message" type="text" name="Message" defaultValue={""} />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <button className="send">Send</button>
                  </div>
                </div>
              </div></form>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div id="map">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end contact */}
  {/*  footer */}
  <footr>
    <div className="footer ">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <a href="#" className="logo_footer"> <img src={require("./images/logo2.png")} alt="#" /></a>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
                <div className="address">
                  <h3>Address </h3>
                  <ul className="loca">
                    <li>
                      <a href="#" />It is a long established fact
                      <br />that a reader will be
                    </li>
                    <li>
                      <a href="#" />(+71 1234567890)
                    </li>
                    <li>
                      <a href="#" />demo@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="address">
                  <h3>Social Link</h3>
                  <ul className="Menu_footer">
                    <li className="active"> <a href="#">Twitter</a> </li>
                    <li><a href="#">Facebook</a> </li>
                    <li><a href="#">Instagram</a> </li>
                    <li><a href="#">Linkdin</a> </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 ">
                <div className="address">
                  <h3>Newsletter</h3>
                  <form className="news">
                    <input className="newslatter" placeholder="Enter your email" type="text" name=" Enter your email" />
                    <button className="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
        </div>
      </div>
    </div>
  </footr>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" 
integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" 
crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" 
integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" 
crossorigin="anonymous"></script>
  {/* end footer */}
  {/* Javascript files*/}
  {/* sidebar */}
  {/* google map js */}
  {/* end google map js */}
</div>

   )
    
  }

}

export default Home;