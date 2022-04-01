import React from 'react';
import { Link, Navigate, matchRoutes } from 'react-router-dom';
class CycleTile extends React.Component{


    constructor(props){

      super(props);
      this.state = {

        "token":this.props.token

      }


    }

    render()
    {
      let button;

        button = <button style={{"background-color":"Orange","color":"white"}} onClick={()=>{this.props.deleteCycle()}}>Delete Cycle</button>
        return(
        <div className="col-md-4 col-sm-6 col-xs-12">
  <div className="featured-item">
    <div className="thumb">
      <div className="thumb-img">
        <img src="https://m.media-amazon.com/images/I/715wCxNPK4L._SX425_.jpg" alt />
      </div>
      {/* Two styles of add to favourites button */}
      {/* <div class="plus-button overlay-content">
                              <a href="team.html"><i class="fa fa-plus"></i></a>
                          </div> */}
      {button}
    </div>
    <div className="down-content">
      <h4 id="cycleName">Cycle Name : {this.props.name}</h4>
      <h4 id="cycleRate">Cycle Rate : {this.props.rate}</h4>
      <h4 id="cycleCount">Cycles Available : {this.props.available}</h4>
      <h4 id="dealerNumber">Dealer Contact Number : {this.props.contact}</h4>
      <h4 id="dealerNumber">Pick Up Address : {this.props.address}</h4>
      {/* <h4 id="bookingTime">Booking Time : {this.props.booking_time}</h4> */}
      <br />
      <div className="text-button">
        <Link to={"/editCycle"} onClick={()=>this.props.editCycle()} style={{cursor:"pointer"}}><strong>Edit</strong></Link>
      </div>
    </div>
  </div>
</div>
        )
    }
}

export default CycleTile;