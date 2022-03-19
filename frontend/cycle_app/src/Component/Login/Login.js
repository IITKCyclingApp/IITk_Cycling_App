import React from "react";
import { Link } from "react-router-dom";
import "./reg_css/css/style.css";


class Login extends React.Component{

    render(){
  
     return(

        <div>
  {/* <h1>This is pure html</h1> */}
  {/* navbar start */}
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
        </ul>
      </div>
    </div>
  </nav>
  {/* navbar end */}
  <div className="main">
    <section className="sign-in" id="Sign-in">
      <div className="container">
        <div className="signin-content">
          <div className="signin-image">
            <figure><img src="https://source.unsplash.com/random/292x350/?computer" alt="sing up image" /></figure>
            <a href="#Sign-up" className="signup-image-link">Don't have an account?</a>
          </div>
          <div className="signin-form">
            <h2 className="form-title">Login</h2>
            <form method="POST" className="register-form" id="login-form">
              <div className="form-group">
                <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name" /></label>
                <input type="text" name="your_name" id="your_name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
                <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
              </div>
              <div className="form-group form-button">
                <input type="submit" name="signin" id="signin" className="form-submit" defaultValue="Log in" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/*spacers*/}
    <br />
    <br />
    <br />
    {/* Sign up form */}
    <section className="signup" id="Sign-up">
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form method="POST" className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name" /></label>
                <input type="text" name="name" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
                <input type="email" name="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
                <input type="password" name="pass" id="pass" placeholder="Password" />
              </div>
              <div className="form-group">
                <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
              </div>
              <div className="form-group form-button">
                <input type="submit" name="signup" id="signup" className="form-submit" defaultValue="Register" />
              </div>
            </form>
          </div>
          <div className="signup-image">
            <figure><img src="https://source.unsplash.com/random/292x350/?network" alt="sing up image" /></figure>
            <a href="#Sign-in" className="signup-image-link">Already a member?</a>
          </div>
        </div>
      </div>
    </section>
  </div>
  {/* JS */}
  {/*  */}
</div>


     )

    }

}


export default Login;