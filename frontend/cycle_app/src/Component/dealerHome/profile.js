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
class dealerProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dealerId: localStorage.getItem("dealerId"),
            token: localStorage.getItem("token"),
            usedCycles: [],
            bookedCycles: [],
            loggedIn: 1,
            name: '',
            email: '',
            address: '',
            contact: ''
        }
        this.getData = this.getData.bind(this);
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

            const res = await fetch('http://localhost:5000/dealerProfile', req);
            const response = await res.json();
            console.log(response);
            if (res.status === 200) {
                console.log("Profile info success ");
                this.setState({ name: response.name });
                this.setState({ email: response.email });
                this.setState({ contact: response.contact });
                this.setState({ address: response.address });
            }
            else {
                console.log(response.msg);
                this.setState({ loggedIn: 0 });
            }

        } catch (err) {

            console.log(err);
            this.setState({ loggedIn: 0 });
            // alert(err);

        }
        //used cycles
        try {


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

            const res = await fetch('http://localhost:5000/rentCycles', req);
            const response = await res.json();
            console.log(response);
            if (res.status === 200) {
                console.log("Used Cycles success ");
                this.setState({ usedCycles: response });

            }
            else {
                console.log(response.msg);
                // this.setState({ loggedIn: 0 });
            }

        } catch (err) {

            console.log(err);
            // this.setState({ loggedIn: 0 });
            // alert(err);

        }

        try {


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

            const res = await fetch('http://localhost:5000/bookedCycles', req);
            const response = await res.json();
            console.log(response);
            if (res.status === 200) {
                console.log("booked Cycles success ");
                this.setState({ bookedCycles: response });

            }
            else {
                console.log(response.msg);
                // this.setState({ loggedIn: 0 });
            }

        } catch (err) {

            console.log(err);
            // this.setState({ loggedIn: 0 });
            // alert(err);

        }


    }
    async confirmReturn(cycleStoreId,cycleId,userId) {
        const dealerId = localStorage.getItem("dealerId");
        const token = localStorage.getItem("token");

        this.setState({ dealerId: dealerId, token: token });
       
        try {

            // Request to cancelBooking

            const req = {
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${this.state.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    dealerId: dealerId,
                    cycleStoreId:cycleStoreId,
                    cycleId:cycleId,
                    userId:userId
                })

            };
            console.log(req);
            const res = await fetch('http://localhost:5000/returnCycle', req);
            const response = await res.json();
            console.log(response);
            if (res.status === 200) {
                console.log("Return confirmed ");
                // console.log(response.cost);
                alert(`Total Fare is: ${response.cost} Rupees`);
            }
            else {
                console.log(response.msg);
                // this.setState({ loggedIn: 0 });
            }

        } catch (err) {

            console.log(err);
            // this.setState({ loggedIn: 0 });
            // alert(err);

        }
        window.location.reload(false);

    }


    render() {
        // this.getData();
        // setInterval(this.getData,2000);
        if (!this.state.loggedIn) {
            return (<Navigate to="/login" replace={true} />)
        }
        

        let jsx = [];
        let usedCycles = this.state.usedCycles;
        jsx.push(<div class="my-10"></div>)
        console.log(usedCycles)
        if (usedCycles) {

            // console.log(cycleStore);
            for (let i in usedCycles) {

                console.log(usedCycles[i]);
                
                // jsx.push(<CycleStore token={this.state.token} cycleStoreId={i} allData={cycleStore[i]} onClick={() => { this.changeShow(i) }} addFavorite={this.addFavorite} deleteCycle={this.deleteCycle} editCycle={this.editCycle} />)
                jsx.push(
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="featured-item">
                        <div class="thumb">
                            <div class="thumb-img">
                                <img src="https://www.herocycles.com/admin/public/uploads/bestseller/60223dea3576c5m0f8TdEWI.png" alt="" />
                            </div>
                        </div>
                        <div class="down-content">

                            <h4 id="cycleName">User Name :{usedCycles[i].userName}</h4>
                            <h4 id="cycleName">Cycle Name :{usedCycles[i].cycleId}</h4>
                            <h4 id="cycleRate">Cycle Rate : {usedCycles[i].rate} </h4>
                            <h4 id="cycleRate">Start Time : {new Date(usedCycles[i].timeStart).toLocaleString()}  </h4>
                            
                            <br />
                            <div class="text-button">
                                <a  onClick={()=>{this.confirmReturn(usedCycles[i].cycleStoreId,usedCycles[i].cycleId,usedCycles[i].userId)}}><strong>Confirm Return</strong></a>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        }
        console.log(jsx);

        //booked cycles
        let jsx1 = [];
        let bookedCycles = this.state.bookedCycles;
        jsx1.push(<div class="my-10"></div>)
        console.log(bookedCycles)
        if (bookedCycles) {

            // console.log(cycleStore);
            for (let i in bookedCycles) {

                let t=bookedCycles[i].timeStart.toLocaleString();
                console.log(t);
                
                // jsx.push(<CycleStore token={this.state.token} cycleStoreId={i} allData={cycleStore[i]} onClick={() => { this.changeShow(i) }} addFavorite={this.addFavorite} deleteCycle={this.deleteCycle} editCycle={this.editCycle} />)
                jsx1.push(
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="featured-item">
                        <div class="thumb">
                            <div class="thumb-img">
                                <img src="https://www.herocycles.com/admin/public/uploads/bestseller/60223dea3576c5m0f8TdEWI.png" alt="" />
                            </div>
                        </div>
                        <div class="down-content">
                        <h4 id="cycleName">User Name :{usedCycles[i].userName}</h4>
                            <h4 id="cycleName">Cycle Name :{bookedCycles[i].cycleId}</h4>
                            <h4 id="cycleRate">Cycle Rate : {bookedCycles[i].rate} </h4>
                            <h4 id="cycleRate">Start Time : {new Date(bookedCycles[i].timeStart).toLocaleString()}  </h4>
                            
                            <br />
                            
                        </div>
                    </div>
                </div>)
            }

        }
        console.log(jsx1);

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
                                    <Link to="/"><div className="logo">
                                        <img src="logo link" alt="IITK-cycling app" />
                                    </div></Link>
                                    <nav id="primary-nav" className="dropdown cf">
                                        <ul className="dropdown menu">
                                            <li><Link to="/dealer/home">Home</Link></li>
                                            <li><Link to="/dealer/profile">My Profile</Link></li>
                                        </ul>
                                    </nav>{/* / #primary-nav */}
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                {/* Navbar end */}
                {/* Banner start */}
                <section className="banner" id="top" style={{ "background-image": "url(https://source.unsplash.com/random/1920×700/?cycle)" }}>
                    {/* <div className="container" > */}
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="banner-caption">
                                <div className="line-dec" />
                                <h2 style={{ "color": "White", "text-shadow": "2px 2px black" }}>Welcome.</h2>
                                {/* <div className="blue-button">
                                    <Link to="/dealer/home" style={{"z-index":100}}>Home</Link>
                                    <a href="/">sme</a>
                                </div> */}
                                <div className="line-dec" />
                            </div>
                        </div>
                        {/* </div> */}
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
                                        <h2 id="username" >{this.state.name}</h2>
                                        <h3>
                                            {this.state.contact}
                                        </h3>
                                        <h3>
                                            {this.state.email}
                                        </h3>
                                        <h3>
                                            {this.state.address}
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
                    <section class="featured-places">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section-heading">
                                        <span><h1>Rented Cycles</h1></span>
                                        <h2 id="store-name">These are the cycles given on rent by you.</h2>
                                        <hr />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                {jsx}

                            </div>
                        </div>
                    </section>
                    <section class="featured-places">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section-heading">
                                        <span><h1>currentBookedCycle Cycles</h1></span>
                                        <h2 id="store-name">These are the cycles booked by the users.</h2>
                                        <hr />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                {jsx1}

                            </div>
                        </div>
                    </section>
                    {/* <Link to={"/addCycleStore"}><button type="button" class="btn btn-outline-primary">Add Cycle Store</button></Link> */}
                    
                </main>
                {/* Footer start */}
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="about-veno">
                                    <div className="logo">
                                        <img src="img/footer_logo.png" alt="Venue Logo" />
                                    </div>
                                    <p>Text about us</p>
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
                                        <h4>what we have to offer for you?</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul>
                                                <li><Link to="/"><i className="fa fa-stop" />Home</Link></li>
                                                <li><Link to="/store"><i className="fa fa-stop" />Store</Link></li>
                                                <li><Link to="/profile"><i className="fa fa-stop" />Profile</Link></li>
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
                                    <p><i className="fa fa-map-marker" /> 212 Barrington Court New York, ABC</p>
                                    <ul>
                                        <li><span>Phone:</span><a href="#">+1 333 4040 5566</a></li>
                                        <li><span>Email:</span><a href="#">contact@company.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Footer end */}
                {/* Sub footer start */}
                <div className="sub-footer">
                    <p>Copyright © 2021 IITK-Cycling App <Link to="/">Our Link</Link></p>
                </div>
                {/* Sub footer end */}
            </div>

        )

    }
}
export default dealerProfile;