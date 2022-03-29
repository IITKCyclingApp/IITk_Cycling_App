import React from 'react';

class CycleStore extends React.Component{
    render()
    {
      
        return(
            <section className="featured-places" style={{"margin-top":"-100px"}}>
                    <div className="container">
                    <div className="row">
                        <center>
                        <input type="button" defaultValue="" onClick={()=>{this.props.onClick()}} style={{"font-size":"25px","background-image":"url('https://source.unsplash.com/random/720×480/?fruit')","color":"white"}} />
                        <br /><br /><hr /><br />
                        <div id="cycle1" style={{"display":"none"}}>
                            {/* Cycle card start */}
                            <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="featured-item">
                                <div className="thumb">
                                <div className="thumb-img">
                                    <img src="https://source.unsplash.com/random/720×480/?fruit" alt />
                                </div>
                                <div className="overlay-content">
                                    <button style={{"background-color":"Orange","color":"white"}}>Add to
                                    Favourites</button>
                                </div>
                                </div>
                                <div className="down-content">
                                <h4>Cycle Name :</h4>
                                <h4>Cycle Rate : </h4>
                                <h4>Dealer Contact Number : </h4>
                                <br />
                                <div className="text-button">
                                    <a href="#"><strong>Rent</strong></a>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* Cycle card end */}
                        </div>
                        </center>
                    </div>
                    </div>
                </section>
        )
    }
}

export default CycleStore;