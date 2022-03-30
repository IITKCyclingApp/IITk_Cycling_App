import React from 'react';
import CycleTile from '../UserHome/cycleTile';

class CycleStore extends React.Component{


    constructor(props){

        super(props);
        this.state = {
  
          "token":this.props.token
  
        }
  
  
      }

    render()
    {

        let cycles = [];

        let allData = this.props.allData;

        if(allData.show){

            for(let i in allData.cycles){

                cycles.push(<CycleTile token={this.state.token} name={allData.cycles[i].name} address={allData.cycleStoreAddress} contact={allData.cycleStoreContact} rate={allData.cycles[i].rate} bookCycle={()=>{this.props.bookCycle(allData.dealerId,allData.cycleStoreId,allData.cycles[i].cycleId,allData.cycles[i].rate)}} addFavorite={()=>{this.props.addFavorite(allData.dealerId,allData.cycleStoreId,allData.cycles[i].cycleId)}} isFavorite={allData.cycles[i].favorite} available={allData.cycles[i].availableCycle} deleteFavorite={()=>{this.props.deleteFavorite(allData.dealerId,allData.cycleStoreId,allData.cycles[i].cycleId)}}/>)

            }

        }
      
        return(
            <section className="featured-places" style={{"margin-top":"-100px"}}>
                    <div className="container">
                    <div className="row">
                        <center>
                        <input type="button" defaultValue={allData.cycleStoreAddress} onClick={()=>{this.props.onClick()}} style={{"text-shadow":"2px 2px grey","height":"105px","font-size":"25px","background-image":"url('https://source.unsplash.com/random/720×480/?pink')","color":"white"}} />
                        <br /><br /><hr /><br />
                        <div id="cycle1" >
                            {/* Cycle card start */}
                            {cycles}
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