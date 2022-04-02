// import { profile } from 'console';
import React, { createContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import "./css/bootstrap.min.css";
import "./css/bootstrap-theme.min.css";
import "./css/fontAwesome.css";
import "./css/hero-slider.css";
import "./css/owl-carousel.css";
import "./css/style.css";
// import CycleStore from './cycleStore';
class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: localStorage.getItem("userId"),
            token: localStorage.getItem("token"),
            loggedIn: 1,
            name: '',
            email: '',
            address: '',
            contact: '',
            roll: ''
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {

        this.getData();

    }

    async getData() {
        // const dealerId = localStorage.getItem("dealerId");
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        this.setState({ userId: userId, token: token });
        console.log(token);
        try {

            // Request to cancelBooking

            const req = {
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${this.state.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userId

                })

            };

            const res = await fetch('http://localhost:5000/user/viewProfile', req);
            const response = await res.json();
            console.log(res)
            if (res.status === 200) {

                this.setState({ name: response.name });
                this.setState({ email: response.email });
                this.setState({ roll: response.roll });
                this.setState({ contact: response.contact });
                this.setState({ address: response.address });
            }
            else {

                this.setState({ loggedIn: 0 });
            }

        } catch (err) {


            alert(err);
            this.setState({ loggedIn: 0 });

        }
        //used cycles

    }


    render() {
        // this.getData();
        // setInterval(this.getData,2000);
        if (!this.state.loggedIn) {
            console.log("Hello")
            return (<Navigate to="/login" replace={true} />)
        }



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
                {/* Navbar start */}
                <div className="wrap">
                    <header id="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <button id="primary-nav-button" type="button">Menu</button>

                                    <nav id="primary-nav" className="dropdown cf">
                                        <ul className="dropdown menu">
                                            <li><Link to="/user/home">Dashboard</Link></li>
                                            <li><Link to="/user/store">Store</Link></li>
                                            <li><Link to="/user/profile">My Profile</Link></li>
                                            <li><a onClick={() => { this.setState({ loggedIn: 0 }) }} style={{ cursor: "pointer" }}>Logout</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                {/* Navbar end */}
                {/* Banner start */}
                <section className="banner" id="top" style={{ "background-image": "url(https://source.unsplash.com/random/1920×700/?cycle)" }}>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="banner-caption">
                                <div className="line-dec" />
                                <h2 style={{ "color": "White", "text-shadow": "2px 2px black" }}>Profile</h2>
                                <div className="line-dec" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Banner end */}


                {/* -------------------------------------------- */}


                <main>
                    <section class="our-services">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-7">
                                    <div class="left-content">
                                        <h2 id="username" >Name : {this.state.name}</h2>
                                        <h3>Roll : {this.state.roll}</h3>
                                        <h3>
                                            Contact : {this.state.contact}
                                        </h3>
                                        <h3>
                                            Email : {this.state.email}
                                        </h3>
                                        <h3>
                                            Address : {this.state.address}
                                        </h3>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <img src="https://techcrunch.com/wp-content/uploads/2014/10/facebook-anonymous-blur.jpg?w=730" class="img-fluid" alt="Add an image here" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Store section */}
                    {/* {currStatus} */}
                    {/* Store section */}

                    {/* Store section */}

                    {/* <Link to={"/addCycleStore"}><button type="button" class="btn btn-outline-primary">Add Cycle Store</button></Link> */}

                </main>
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
                                                <li> <p><a onClick={() => { this.setState({ loggedIn: 0 }) }} style={{ cursor: "pointer" }}>Logout</a></p></li>
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
export default UserProfile;