import React from 'react';
import CycleTile from '../UserHome/cycleTile';
import { Link, Navigate } from 'react-router-dom';
class CycleStore extends React.Component {


    constructor(props) {

        super(props);
        this.state = {

            "token": this.props.token

        }


    }

    render() {

        let cycles = [];

        let allData = this.props.allData;
        let cycleStoreId=this.props.cycleStoreId;

        if (allData.show) {

            for (let i in allData.cycles) {

                cycles.push(<CycleTile token={this.state.token} name={allData.cycles[i].name} address={allData.cycleStoreAddress} contact={allData.cycleStoreContact} rate={allData.cycles[i].rate} bookCycle={() => { this.props.bookCycle(allData.dealerId, allData.cycleStoreId, allData.cycles[i].cycleId, allData.cycles[i].rate) }} addFavorite={() => { this.props.addFavorite(allData.dealerId, allData.cycleStoreId, allData.cycles[i].cycleId) }} isFavorite={allData.cycles[i].favorite} available={allData.cycles[i].availableCycle} deleteFavorite={() => { this.props.deleteFavorite(allData.dealerId, allData.cycleStoreId, allData.cycles[i].cycleId) }} />)
                console.log(cycleStoreId)

            }
            cycles.push(<Link to={ `/addCycle` } onClick={localStorage.setItem("cycleStoreId",cycleStoreId)}> <div className="col-md-4 col-sm-6 col-xs-12 h-29">
            <div className="featured-item  d-flex justify-content-center">
                
                    <div className="down-content py-5 ">
                       <h1>Add Cycle</h1> 
                        
                </div>
            </div>
        </div></Link> )

        }

        return (
            <section className="featured-places" >
                <div className="container">
                    <div className="row">
                        <center>
                            <input type="button" defaultValue={allData.cycleStoreAddress} onClick={() => { this.props.onClick() }} style={{ "text-shadow": "2px 2px grey", "height": "105px", "font-size": "25px", "background-image": "url('https://source.unsplash.com/random/720×480/?pink')", "color": "white" }} />
                            <br /><br /><hr /><br />
                            <div id="cycle1" >
                                {/* Cycle card start */}
                                {cycles}

                            </div>


                        </center>
                    </div>
                </div>
            </section>
        )
    }
}

export default CycleStore;