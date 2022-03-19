import React from "react";
import { Link, Navigate } from "react-router-dom";
import NavBar from "./navBar";
import "./reg_css/css/style.css";
import { BrowserRouter } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { Route, Navigate } from 'react-router-dom';
// const history = useHistory();
// import { Link } from "react-router-dom";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { emailUser: '', emailDealer: '', passwordUser: '', passwordDealer: '', userLogged: 0, route: "/login" };
    this.loginUser = this.loginUser.bind(this);
  }
  async loginUser() {
    const email = this.state.emailUser;
    const pass = this.state.passwordUser;

    console.log(email);
    console.log(pass);
    try {

      // Request to cancelBooking

      const req = {
        method: 'POST',
        headers: {
          'authorization': this.state.token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: pass

        })

      };

      const res = await fetch('http://localhost:5000/loginUser', req);
      const response = await res.json();

      if (res.status === 200) {


        localStorage.setItem("userId", response.userId);
        localStorage.setItem("token", response.token);
        this.setState({ userLogged: 1 });
        this.setState({ route: "/user/home" })
        console.log("login Successful")

      }
      else {
        console.log(response.msg);
        alert(response.msg);
        this.setState({ userLogged: 0 });
      }

    } catch (err) {

      console.log(err);
      this.setState({ userLogged: 0 });
      // alert(err);

    }
    console.log(this.state.userLogged)
    
  }

  loginDealer() {

  }


  render() {
    if(this.state.userLogged==1){
      return( <Navigate to="/user/home" replace={true} />);
    }
    
    return (

      <div>
        {/* <h1>This is pure html</h1> */}
        {/* navbar start */}
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
                  <form className="register-form" id="login-form">
                    <div className="form-group">
                      <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name" /></label>
                      <input type="text" name="your_name" id="user_email" placeholder="Email" value={this.state.emailUser} onChange={(e) => {
                        this.setState({ emailUser: e.target.value });
                      }} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
                      <input type="password" name="your_pass" id="user_password" placeholder="Password" value={this.state.passwordUser} onChange={(e) => {
                        this.setState({ passwordUser: e.target.value });
                      }} />
                    </div>
                    <div onClick={this.loginUser}>
                      <Link  to={this.state.route}  ><div className="form-group form-button">
                        <input name="signin" id="signin" className="form-submit" defaultValue="Log in" />
                      </div>
                      </Link>

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