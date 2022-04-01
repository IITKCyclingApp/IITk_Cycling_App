import React from 'react';
import CycleTile from './cycleTile';
import { Link, Navigate } from 'react-router-dom';
class CycleStore extends React.Component {


    constructor(props) {

        super(props);
        this.state = {

            "token": this.props.token,
            "cycledeleted":1
        }
        this.deleteCycleStore = this.deleteCycleStore.bind(this);


    }
    async deleteCycleStore() {
        try {

            // Request to cancelBooking

            const req = {
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${this.state.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cycleStoreId: this.props.cycleStoreId,
                    dealerId: this.props.allData.dealerId,

                })

            };

            const res = await fetch('http://localhost:5000/deleteCycleStore', req);
            const response = await res.json();

            if (res.status === 200) {
                // alert("Cycle Store deleted Successfully")
                alert("Cycle Store Deleted Successfully");
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
        window.location.reload(false)
        
    }   

    render() {

        let cycles = [];

        let allData = this.props.allData;
        let cycleStoreId = this.props.cycleStoreId;

        if (allData.show) {

            for (let i in allData.cycles) {
                console.log(allData.cycles)
                cycles.push(<CycleTile token={this.state.token} name={allData.cycles[i].name} address={allData.cycleStoreAddress} contact={allData.cycleStoreContact} rate={allData.cycles[i].rate} editCycle={() => { this.props.editCycle(allData.dealerId, cycleStoreId,i) }} addFavorite={() => { this.props.addFavorite(allData.dealerId, allData.cycleStoreId, allData.cycles[i].cycleId) }} isFavorite={allData.cycles[i].favorite} available={allData.cycles[i].availableCycle} deleteCycle={() => { this.props.deleteCycle(allData.dealerId, cycleStoreId, i) }} />)
                console.log(cycleStoreId)

            }
            cycles.push((<Link to={`/addCycle`} onClick={localStorage.setItem("cycleStoreId", cycleStoreId)}> <div className="col-md-4 col-sm-6 col-xs-12 h-29">
                <div className="featured-item  d-flex justify-content-center">

                    <div className="down-content py-5 ">
                        <h1>Add Cycle</h1>

                    </div>
                </div>
            </div></Link>));

            cycles.push((<Link to={'/dealer/home'} onClick={()=>{ this.deleteCycleStore(); }}><div className="col-md-4 col-sm-6 col-xs-12 h-29">
                <div className="featured-item  d-flex justify-content-center">
                    <div>
                        <div className="down-content py-5 ">
                            <h1>DeleteCycleStore</h1>

                        </div></div>
                </div>
            </div></Link>))


        }

        return (
            <section className="featured-places" >
                <div className="container">
                    <div className="row">
                        <center>
                            <input type="button" defaultValue={allData.cycleStoreAddress} onClick={() => { this.props.onClick() }} style={{ "text-shadow": "2px 2px grey", "height": "105px", "font-size": "25px", "background-color": "#685ed9","border-radius":"25px","border":"2px solid black", "color": "white" }} />
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