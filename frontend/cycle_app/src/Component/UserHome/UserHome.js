// import { profile } from 'console';
import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from './navBar';
import CycleStore from './cycleStore';
import CurStatus from './curStatus';
import "./css/bootstrap.min.css";
import "./css/bootstrap-theme.min.css";
import "./css/fontAwesome.css";
import "./css/hero-slider.css";
import "./css/owl-carousel.css";
import "./css/style.css";
// import "./js/vendor/modernizr-2.8.3-respond-1.4.2.min.js";

class UserHome extends React.Component{

    constructor(props){

        super(props);
        this.state = {
            userId:"",
            token:"",
            // favorites:[],
            // profile:{},
            // transactions:[],
            currentCycle:{},
            cycleStore: {}
        };

    };
    


    //currentCycle.response = 0 if user has no in use or booked cycle

    // async componentDidMount(){

    //     try{

    //         // Request to currentStatus 

    //         let req = {
    //             method : 'POST',
    //             headers : {
    //               'authorization' : this.state.token, 
    //               'Content-Type': 'application/json',
    //             },
    //             body : JSON.stringify({
    //               userId: this.state.userId,
    //             })
    //         };

    //         let res = await fetch('/user/currentStatus',req);
    //         let response = await res.json();

    //         if(res.status===200){

    //             //Request to viewCycle

    //             req = {
    //                 method : 'POST',
    //                 headers : {
    //                     'authorization' : this.state.token, 
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body : JSON.stringify({
    //                     userId: this.state.userId,
    //                 })
    //             };

    //             res = await fetch('/user/viewCycle',req);
    //             let response2 = await res.json();

    //             if(res.status===200){

    //                 this.setState({currentCycle : response2.length===0?{status:0}:response2[0],cycleStore: response});

    //             }

    //         }

    //     }catch(err){

    //         console.log(err);
    //         alert(err);

    //     }

    // }

    async bookCycle (dealerId, cycleStoreId, cycleId, rate){

        try{

            // Request to bookCycle

            const req = {
                method : 'POST',
                headers : {
                    'authorization' : this.state.token, 
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    userId:this.state.userId,
                    dealerId:dealerId,
                    cycleStoreId: cycleStoreId,
                    cycleId: cycleId,
                    rate: rate
                })

            };

            const res = await fetch('/user/bookCycle',req);
            const response  = await res.json();

            if(res.status===200){

                //May add pop up with response.msg

                this.setState({currentCycle: {
                    userId: this.state.userId,
                    dealerId: dealerId,
                    cycleStoreId: cycleStoreId,
                    cycleId: cycleId,
                    
                    timeStart: new Date(),

                    cost: 0,
                    rate: rate,
                    status: 1
                }});

            }else if(res.status===400){

                alert(response.msg);

            }

        }catch(err){

            console.log(err);
            alert(err);

        }

    }


    async confirmBooking (){

        try{

            // Request to bookCycle

            const req = {
                method : 'POST',
                headers : {
                    'authorization' : this.state.token, 
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    userId:this.state.userId
                })

            };

            const res = await fetch('/user/confirmBooking',req);
            const response  = await res.json();

            if(res.status===200){

                //May add pop up with response.msg

                this.setState({currentCycle: {
                    userId: this.state.userId,
                    dealerId: this.state.currentCycle.dealerId,
                    cycleStoreId: this.state.currentCycle.cycleStoreId,
                    cycleId: this.state.currentCycle.cycleId,
                    
                    timeStart: new Date(),

                    cost: 0,
                    rate: this.state.currentCycle.rate,
                    status: 2
                }});

            }

        }catch(err){

            console.log(err);
            alert(err);

        }

    }


    async cancelBooking (){

        try{

            // Request to cancelBooking

            const req = {
                method : 'POST',
                headers : {
                    'authorization' : this.state.token, 
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    userId:this.state.userId
                })

            };

            const res = await fetch('/user/cancelBooking',req);
            const response  = await res.json();

            if(res.status===200){

                //May add pop up with response.msg

                this.setState({currentCycle: {}});

            }

        }catch(err){

            console.log(err);
            alert(err);

        }

    }

    async addFavorite(dealerId, cycleStoreId, cycleId){

        try{

            // Request to addFavorite

            const req = {
                method : 'POST',
                headers : {
                    'authorization' : this.state.token, 
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    userId:this.state.userId,
                    dealerId:dealerId,
                    cycleStoreId: cycleStoreId,
                    cycleId: cycleId
                })

            };

            const res = await fetch('/user/addFavorite',req);
            const response  = await res.json();

            //No state change and re render required. Change color of star button from css

        }catch(err){

            console.log(err);
            alert(err);

        }

    }



    async deleteFavorite(dealerId, cycleStoreId, cycleId){

        try{

            // Request to deleteFavorite

            const req = {
                method : 'POST',
                headers : {
                    'authorization' : this.state.token, 
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    userId:this.state.userId,
                    dealerId: dealerId,
                    cycleStoreId: cycleStoreId,
                    cycleId: cycleId,
                })

            };

            const res = await fetch('/user/deleteFavorite',req);
            const response  = await res.json();

            //No state change and re-render required. Change color of star button from css.

        }catch(err){

            console.log(err);
            alert(err);

        }

    }

    // User information, past transactions and favorites to be shown in profile.

    // async viewProfile(){

    //     try{

    //         // Request to viewProfile

    //         let req = {
    //             method : 'GET',
    //             headers : {
    //                 'authorization' : this.state.token, 
    //                 'Content-Type': 'application/json',
    //             },
    //             body : JSON.stringify({
    //                 userId:this.state.userId,
    //                 token:""
    //             })

    //         };

    //         let res = await fetch('/user/viewProfile',req);
    //         let profileData  = await res.json();        //Object of profile data

    //         // REquest to view favorite cycle

    //         res = await fetch('/user/viewFavorite',req);
    //         let favoriteData = await res.json();        //Array of favorite cycles data

    //         //Request to view past transactions

    //         res = await fetch('/user/pastTransaction',req);
    //         let transactionData = await res.json();         //Array of transactions

    //         this.setState({profile:profileData, favorites:favoriteData, transactions:transactionData});

    //     }catch(err){

    //         console.log(err);
    //         alert(err);

    //     }

    // }

    

    render(){


        return(
            // <div>
            //     <NavBar />
            //     {/* <CurStatus status = {1} 
            //                 cycle = {{name:"Onyx",rate:15,contact:7268998999,start_time:new Date()}} /> */}
            // </div>

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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/store">Store</Link></li>
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
  <section className="banner" id="top" style={{"background-image":"url(https://source.unsplash.com/random/1920×700/?cycle)"}}>
    {/* <div className="container" > */}
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="banner-caption">
            <div className="line-dec" />
            <h2 style={{"color":"blue"}}>Welcome.</h2>
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
  <main>
    {/* Store section */}
    <section className="featured-places">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <span><h1>Booked Cycles</h1></span>
              <h2 id="store-name">These are the cycles you have currently booked.</h2>
              <hr />
            </div>
          </div> 
        </div> 
        <div className="row">
          {/* This one element contains a card to hold one cycle*/}
          {/* Cycle card start */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
              <div className="thumb">
                <div className="thumb-img">
                  <img src="https://source.unsplash.com/random/720×480/?fruit" alt />
                </div>
                {/* Two styles of add to favourites button */}
                {/* <div class="plus-button overlay-content">
                              <a href="team.html"><i class="fa fa-plus"></i></a>
                          </div> */}
                <div className="overlay-content">
                  <button style={{"background-color":"Orange","color":"white"}}>Add to Favourites</button>
                </div>
              </div>
              <div className="down-content">
                <h4 id="cycleName">Cycle Name :</h4>
                <h4 id="cycleRate">Cycle Rate : </h4>
                <h4 id="dealerNumber">Dealer Contact Number : </h4>
                <h4 id="bookingTime">Booking Time : </h4>
                <br />
                <div className="text-button">
                  <a href="#"><strong>Rent</strong></a>
                </div>
              </div>
            </div>
          </div>
          {/* Cycle card end */}
          {/* Cycle card start */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
              <div className="thumb">
                <div className="thumb-img">
                  <img src="https://source.unsplash.com/random/720×480/?fruit" alt />
                </div>
                {/* Two styles of add to favourites button */}
                {/* <div class="plus-button overlay-content">
                              <a href="team.html"><i class="fa fa-plus"></i></a>
                          </div> */}
                <div className="overlay-content">
                  <button style={{"background-color":"Orange","color":"white"}}>Add to Favourites</button>
                </div>
              </div>
              <div className="down-content">
                <h4 id="cycleName">Cycle Name :</h4>
                <h4 id="cycleRate">Cycle Rate : </h4>
                <h4 id="dealerNumber">Dealer Contact Number : </h4>
                <h4 id="bookingTime">Booking Time : </h4>
                <br />
                <div className="text-button">
                  <a href="#"><strong>Rent</strong></a>
                </div>
              </div>
            </div>
          </div>
          {/* Cycle card end */}
          {/* Cycle card start */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
              <div className="thumb">
                <div className="thumb-img">
                  <img src="https://source.unsplash.com/random/720×480/?fruit" alt />
                </div>
                {/* Two styles of add to favourites button */}
                {/* <div class="plus-button overlay-content">
                              <a href="team.html"><i class="fa fa-plus"></i></a>
                          </div> */}
                <div className="overlay-content">
                  <button style={{"background-color":"Orange","color":"white"}}>Add to Favourites</button>
                </div>
              </div>
              <div className="down-content">
                <h4 id="cycleName">Cycle Name :</h4>
                <h4 id="cycleRate">Cycle Rate : </h4>
                <h4 id="dealerNumber">Dealer Contact Number : </h4>
                <h4 id="bookingTime">Booking Time : </h4>
                <br />
                <div className="text-button">
                  <a href="#"><strong>Rent</strong></a>
                </div>
              </div>
            </div>
          </div>
          {/* Cycle card end */}
          {/* Cycle card start */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
              <div className="thumb">
                <div className="thumb-img">
                  <img src="https://source.unsplash.com/random/720×480/?fruit" alt />
                </div>
                {/* Two styles of add to favourites button */}
                {/* <div class="plus-button overlay-content">
                              <a href="team.html"><i class="fa fa-plus"></i></a>
                          </div> */}
                <div className="overlay-content">
                  <button style={{"background-color":"Orange","color":"white"}}>Add to Favourites</button>
                </div>
              </div>
              <div className="down-content">
                <h4 id="cycleName">Cycle Name :</h4>
                <h4 id="cycleRate">Cycle Rate : </h4>
                <h4 id="dealerNumber">Dealer Contact Number : </h4>
                <h4 id="bookingTime">Booking Time : </h4>
                <br />
                <div className="text-button">
                  <a href="#"><strong>Rent</strong></a>
                </div>
              </div>
            </div>
          </div>
          {/* Cycle card end */}
        </div>
      </div>
    </section>
    {/* Store section */}
    <section className="featured-places">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <span><h1>Current Cyles</h1></span>
              <h2 id="store-name">These are the cycles you are using currently</h2>
              <hr />
            </div>
          </div> 
        </div> 
        <div className="row">
          {/* This one element contains a card to hold one cycle*/}
          {/* Cycle card start */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
              <div className="thumb">
                <div className="thumb-img">
                  <img src="https://source.unsplash.com/random/720×480/?fruit" alt />
                </div>
                {/* Two styles of add to favourites button */}
                {/* <div class="plus-button overlay-content">
                              <a href="team.html"><i class="fa fa-plus"></i></a>
                          </div> */}
                <div className="overlay-content">
                  <button style={{"background-color":"Orange","color":"white"}}>Add to Favourites</button>
                </div>
              </div>
              <div className="down-content">
                <h4 id="cycleName">Cycle Name :</h4>
                <h4 id="cycleRate">Cycle Rate : </h4>
                <h4 id="dealerNumber">Dealer Contact Number : </h4>
                <h4 id="bookingTime">Time at booking : </h4>
                <br />
                <div className="text-button">
                  <a href="#"><strong>Rent</strong></a>
                </div>
              </div>
            </div>
          </div>
          {/* Cycle card end */}
          {/* Cycle card start */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
              <div className="thumb">
                <div className="thumb-img">
                  <img src="https://source.unsplash.com/random/720×480/?fruit" alt />
                </div>
                {/* Two styles of add to favourites button */}
                {/* <div class="plus-button overlay-content">
                              <a href="team.html"><i class="fa fa-plus"></i></a>
                          </div> */}
                <div className="overlay-content">
                  <button style={{"background-color":"Orange","color":"white"}}>Add to Favourites</button>
                </div>
              </div>
              <div className="down-content">
                <h4 id="cycleName">Cycle Name :</h4>
                <h4 id="cycleRate">Cycle Rate : </h4>
                <h4 id="dealerNumber">Dealer Contact Number : </h4>
                <h4 id="bookingTime">Time at booking : </h4>
                <br />
                <div className="text-button">
                  <a href="#"><strong>Rent</strong></a>
                </div>
              </div>
            </div>
          </div>
          {/* Cycle card end */}
          {/* Cycle card start */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
              <div className="thumb">
                <div className="thumb-img">
                  <img src="https://source.unsplash.com/random/720×480/?fruit" alt />
                </div>
                {/* Two styles of add to favourites button */}
                {/* <div class="plus-button overlay-content">
                              <a href="team.html"><i class="fa fa-plus"></i></a>
                          </div> */}
                <div className="overlay-content">
                  <button style={{"background-color":"Orange","color":"white"}}>Add to Favourites</button>
                </div>
              </div>
              <div className="down-content">
                <h4 id="cycleName">Cycle Name :</h4>
                <h4 id="cycleRate">Cycle Rate : </h4>
                <h4 id="dealerNumber">Dealer Contact Number : </h4>
                <h4 id="bookingTime">Time at booking : </h4>
                <br />
                <div className="text-button">
                  <a href="#"><strong>Rent</strong></a>
                </div>
              </div>
            </div>
          </div>
          {/* Cycle card end */}
        </div>
      </div>
    </section>
    {/* Store section */}
    <section className="featured-places">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <span><h1>Past Transactions.</h1></span>
              <h2 id="store-name">These are your past transactions.</h2>
              <hr />
            </div>
          </div> 
        </div> 
        <div className="row">
          {/* This one element contains a card to hold one cycle*/}
          {/* Cycle card start */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
              <div className="thumb">
                <div className="thumb-img">
                  <img src="https://source.unsplash.com/random/720×480/?fruit" alt />
                </div>
                <div className="overlay-content">
                  <button style={{"background-color":"Orange","color":"white"}}>Add to Favourites</button>
                </div>
              </div>
              <div className="down-content">
                <h4 id="cycleName">Cycle Name :</h4>
                <h4 id="cycleRate">Cycle Rate : </h4>
                <h4 id="dealerNumber">Dealer Contact Number : </h4>
                <h4 id="bookingTime">Time at booking : </h4>
                <h4 id="bookingFare">Fare : </h4>
                <br />
                <div className="text-button">
                  <a href="#"><strong>Rent</strong></a>
                </div>
              </div>
            </div>
          </div>
          {/* Cycle card end */}
          {/* Cycle card start */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
              <div className="thumb">
                <div className="thumb-img">
                  <img src="https://source.unsplash.com/random/720×480/?fruit" alt />
                </div>
                <div className="overlay-content">
                  <button style={{"background-color":"Orange","color":"white"}}>Add to Favourites</button>
                </div>
              </div>
              <div className="down-content">
                <h4 id="cycleName">Cycle Name :</h4>
                <h4 id="cycleRate">Cycle Rate : </h4>
                <h4 id="dealerNumber">Dealer Contact Number : </h4>
                <h4 id="bookingTime">Time at booking : </h4>
                <h4 id="bookingFare">Fare : </h4>
                <br />
                <div className="text-button">
                  <a href="#"><strong>Rent</strong></a>
                </div>
              </div>
            </div>
          </div>
          {/* Cycle card end */}
          {/* Cycle card start */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="featured-item">
              <div className="thumb">
                <div className="thumb-img">
                  <img src="https://source.unsplash.com/random/720×480/?fruit" alt />
                </div>
                <div className="overlay-content">
                  <button style={{"background-color":"Orange","color":"white"}}>Add to Favourites</button>
                </div>
              </div>
              <div className="down-content">
                <h4 id="cycleName">Cycle Name :</h4>
                <h4 id="cycleRate">Cycle Rate : </h4>
                <h4 id="dealerNumber">Dealer Contact Number : </h4>
                <h4 id="bookingTime">Time at booking : </h4>
                <h4 id="bookingFare">Fare : </h4>
                <br />
                <div className="text-button">
                  <a href="#"><strong>Rent</strong></a>
                </div>
              </div>
            </div>
          </div>
          {/* Cycle card end */}
        </div>
      </div>
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

export default UserHome;