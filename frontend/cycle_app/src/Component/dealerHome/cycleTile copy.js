import React from 'react';

class CycleTile extends React.Component{
    render()
    {
        return(
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
      <h4 id="cycleName">Cycle Name : {this.props.name}</h4>
      <h4 id="cycleRate">Cycle Rate : {this.props.rate}</h4>
      <h4 id="dealerNumber">Dealer Contact Number : {this.props.contact}</h4>
      <h4 id="dealerNumber">Pick Up Address : {this.props.address}</h4>
      {/* <h4 id="bookingTime">Booking Time : {this.props.booking_time}</h4> */}
      <br />
      <div className="text-button">
        <a href="#"><strong>Rent</strong></a>
      </div>
    </div>
  </div>
</div>
        )
    }
}

export default CycleTile;