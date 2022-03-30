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
            stores: [],
            loggedIn: 1
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
            // alert(err);

        }


    }
    changeShow(cycleStoreId){

        let cycleStore = this.state.stores;
        cycleStore[cycleStoreId].show = !cycleStore[cycleStoreId].show;
        this.setState({cycleStore:cycleStore});

    }

    render() {
        // this.getData();
        // setInterval(this.getData,2000);
        if (!this.state.loggedIn) {
            return (<Navigate to="/login" replace={true} />)
        }
        // const cycleStores = this.state.stores;
        // var storeJsx = "";
        // var i;
        // for (i = 0; i < cycleStores.length; i++) {
        //     var j;
        //     let cycle;
        //     for (j = 0; j < cycleStores[i].length; j++) {
        //         cycle=(<div className="col-md-4 col-sm-6 col-xs-12">
        //             <div className="featured-item">
        //                 <div className="thumb">
        //                     <div className="thumb-img">
        //                         <img src="https://source.unsplash.com/random/720×480/?cycle" alt />
        //                     </div>
        //                     {/* Two styles of add to favourites button */}
        //                     {/* <div class="plus-button overlay-content">
        //                       <a href="team.html"><i class="fa fa-plus"></i></a>
        //                   </div> */}
                            
        //                 </div>
        //                 <div className="down-content">
        //                     <h4 id="cycleName">Cycle Name : {this.props.name}</h4>
        //                     <h4 id="cycleRate">Cycle Rate : {this.props.rate}</h4>
        //                     <h4 id="cycleCount">Cycles Available : {this.props.available}</h4>
        //                     <h4 id="dealerNumber">Dealer Contact Number : {this.props.contact}</h4>
        //                     <h4 id="dealerNumber">Pick Up Address : {this.props.address}</h4>
        //                     {/* <h4 id="bookingTime">Booking Time : {this.props.booking_time}</h4> */}
        //                     <br />
        //                     <div className="text-button">
        //                         <a onClick={() => this.props.bookCycle()} style={{ cursor: "pointer" }}><strong>Rent</strong></a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>)
        //     }
        //     storeJsx=storeJsx+cycle;
        // }
        // console.log(storeJsx)
        let jsx = [];
        let cycleStore = this.state.stores;
        jsx.push(<div class="my-10"></div>)

        if(cycleStore){
            
            // console.log(cycleStore);
            for(let i in this.state.stores){

                console.log("i = ",i);
                jsx.push(<CycleStore token={this.state.token} cycleStoreId={i} allData={cycleStore[i]} onClick={()=>{this.changeShow(i)}} addFavorite={this.addFavorite} deleteFavorite={this.deleteFavorite} bookCycle={this.bookCycle}/>)
    
            }   

        }
        console.log(jsx);

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
                                            <li><Link to="./">Home</Link></li>
                                            <li><Link to="/profile">My Profile</Link></li>
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
                                <h2 style={{ "color": "blue" }}>Welcome.</h2>
                                {/* <div className="blue-button">
              <Link to="/">Profile</Link>
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
                    {/* Store section */}
                    {/* {currStatus} */}
                    {/* Store section */}

                    {/* Store section */}
                {jsx}
                {/* <Link to={"/addCycleStore"}><button type="button" class="btn btn-outline-primary">Add Cycle Store</button></Link> */}
                <section className="featured-places" >
                <Link to="/addCycleStore"><div className="container">
                    <div className="row">
                        <center>
                            <input type="button" defaultValue="Add Cyle Store"style={{ "text-shadow": "2px 2px grey", "height": "105px", "font-size": "25px", "background-image": "url('https://source.unsplash.com/random/720×480/?pink')", "color": "white" }} />
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
export default dealerHome;