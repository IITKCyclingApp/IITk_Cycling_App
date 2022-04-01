import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import "../Login/reg_css/css/style.css";
class addCycleStore extends React.Component {


    constructor(props) {

        super(props);
        this.state = {

            dealerId: localStorage.getItem("dealerId"),
            token: localStorage.getItem("token"),
            storeContact: '',
            storeAddress: '',
            loggedIn: 1

        }
        this.addCycleStore = this.addCycleStore.bind(this);


    }
    async addCycleStore() {
        const storeAddress = this.state.storeAddress;
        const storeContact = this.state.storeContact;


        try {

            // Request to cancelBooking

            const req = {
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${this.state.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    storeAddress: storeAddress,
                    storeContact: storeContact,
                    dealerId: this.state.dealerId

                })

            };

            const res = await fetch('http://localhost:5000/addCycleStore', req);
            const response = await res.json();

            if (res.status === 200) {


                alert("Cycle Store Added Successfully")
            }
            else {
                console.log(response.msg);
                alert(response.msg);
                this.setState({ loggedIn: 0 })

            }

        } catch (err) {

            console.log(err);
            this.setState({ loggedIn: 0 })

            // alert(err);

        }

    }

    render() {
        if (!this.state.loggedIn) {
            localStorage.clear();
            return (<Navigate to="/login" replace={true} />)
        }

        return (
            <div><meta charSet="utf-8" />
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
                                            <li><Link to="/dealer/home">Dashboard</Link></li>
                                            <li><Link to="/dealer/profile">My Profile</Link></li>
                                            <li><a onClick={() => { this.setState({ loggedIn: 0 }) }} style={{ cursor: "pointer" }}>Logout</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                {/* Navbar end */}
                <div className="main">
                    <section className="signup" id="Sign-up">
                        <div className="container">
                            <div className="signup-content">
                                <div className="signup-form">
                                    <h2 className="form-title">Add Cycle Store</h2>
                                    <form className="register-form" id="register-form">
                                        <div className="form-group">
                                            <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name" /></label>
                                            <input type="text" name="name" id="name" placeholder="Store Contact number" value={this.state.storeContact} onChange={(e) => {
                                                this.setState({ storeContact: e.target.value });
                                            }} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name" /></label>
                                            <input type="text" name="address" id="address" placeholder="Store Address" value={this.state.storeAddress} onChange={(e) => {
                                                this.setState({ storeAddress: e.target.value });
                                            }} />
                                        </div>


                                        <Link to={"/dealer/home"} onClick={this.addCycleStore} ><div className="form-group form-button">
                                            <button className="form-group form-button p-x10"> Add Cycle Store</button>
                                        </div>
                                        </Link>


                                    </form>
                                </div>
                                <div className="signup-image">
                                    <figure><img src="https://source.unsplash.com/random/292x350/?cycle" alt="sing up image" /></figure>

                                </div>
                            </div>
                        </div>
                    </section>
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
        );
    }
}

export default addCycleStore;