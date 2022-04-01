// import { profile } from 'console';
import React, { createContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import "./css/bootstrap.min.css";
import "./css/bootstrap-theme.min.css";
import "./css/fontAwesome.css";
import "./css/hero-slider.css";
import "./css/owl-carousel.css";
import "./css/style.css";
import CycleStore from './cycleStore';
class dealerHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dealerId: localStorage.getItem("dealerId"),
            token: localStorage.getItem("token"),
            bookedCycles: [],
            usedCycles: [],
            loggedIn: 1
        }
        this.getData = this.getData.bind(this);
        this.deleteCycle=this.deleteCycle.bind(this);
    }

    componentDidMount() {

        this.getData();

    }

    async getData() {
        // const dealerId = localStorage.getItem("dealerId");
        const dealerId = localStorage.getItem("dealerId");
        const token = localStorage.getItem("token");

        this.setState({ dealerId: dealerId, token: token });
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
                    dealerId: dealerId

                })

            };

            const res = await fetch('http://localhost:5000/user/viewcycle', req);
            const response = await res.json();
            console.log(response);
            if (res.status === 200) {
                console.log("data fetched successfully ");
                this.setState({ stores: response })
            }
            else {
                console.log(response.msg);
                this.setState({ loggedIn: 0 });
            }

        } catch (err) {

            console.log(err);
            this.setState({ loggedIn: 0 });
        }

    }
    changeShow(cycleStoreId) {

        let cycleStore = this.state.stores;
        cycleStore[cycleStoreId].show = !cycleStore[cycleStoreId].show;
        this.setState({ cycleStore: cycleStore });

    }
    async deleteCycle(dealerId, cycleStoreId, cycleId) {
        console.log(cycleId);
        try {

            // Request to cancelBooking

            const req = {
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${this.state.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cycleStoreId: cycleStoreId,
                    dealerId: dealerId,
                    cycleId: cycleId

                })

            };

            const res = await fetch('http://localhost:5000/deleteCycle', req);
            const response = await res.json();

            if (res.status === 200) {
                this.getData();
            }
            else {
                console.log(response.msg);
                alert(response.msg);
                this.setState({ loggedIn: 0 })

            }

        } catch (err) {

            console.log(err);
            this.setState({ loggedIn: 0 })
        }

    }
    async editCycle(dealerId, cycleStoreId, cycleId) {
        console.log(cycleId);
        console.log(cycleStoreId);
        localStorage.setItem('cycleStoreId', cycleStoreId);
        localStorage.setItem('cycleId', cycleId);

    }
    render() {
        
        if (!this.state.loggedIn) {
            localStorage.clear();
            return (<Navigate to="/login" replace={true} />)
        }


        let jsx = [];
        let cycleStore = this.state.stores;
        jsx.push(<div class="my-10"></div>)

        if (cycleStore) {

            // console.log(cycleStore);
            for (let i in this.state.stores) {

                jsx.push(<CycleStore token={this.state.token} cycleStoreId={i} allData={cycleStore[i]} onClick={() => { this.changeShow(i) }} addFavorite={this.addFavorite} deleteCycle={this.deleteCycle} editCycle={this.editCycle} />)

            }

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
                                            <li><Link to="/dealer/home">Dashboard</Link></li>
                                            <li><Link to="/dealer/profile">My Profile</Link></li>
                                            <li><a onClick={() => { this.setState({ loggedIn: 0 }) }} style={{cursor:"pointer"}}>Logout</a></li>
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
                                <h2 style={{ "color": "White", "text-shadow": "2px 2px black" }}>Welcome.</h2>
                                <div className="line-dec" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Banner end */}


                <main>
                    
                    {jsx}
                   
                    <section className="featured-places" >
                        <Link to="/addCycleStore"><div className="container">
                            <div className="row">
                                <center>
                                    <input type="button" defaultValue="Add Cyle Store" style={{ "text-shadow": "2px 2px grey", "height": "105px", "font-size": "25px", "background-color": "gray","border-radius":"25px","border":"2px solid black", "color": "white" }} />
                                    <br /><br /><hr /><br />

                                </center>
                            </div>
                        </div></Link>
                    </section>
                </main>
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
                                                <li> <p><a onClick={() => { this.setState({ loggedIn: 0 }) }} style={{cursor:"pointer"}}>Logout</a></p></li>
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
export default dealerHome;