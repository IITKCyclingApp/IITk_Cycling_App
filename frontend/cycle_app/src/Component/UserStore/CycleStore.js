import React from 'react';
import CycleTile from '../UserHome/cycleTile';

class CycleStore extends React.Component{


    constructor(props){

        super(props);
        this.state = {
  
          userId:localStorage.getItem("userId"),
              token:`Bearer ${localStorage.getItem("token")}`,
  
        }
  
      }


      async bookCycle (dealerId, cycleStoreId, cycleId, rate){

        
        try{
  
            // Request to bookCycle
  
            console.log("Rate ",rate);
  
            const req = {
                method : 'POST',
                headers : {
                    'authorization' : this.state.token, 
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    userId:this.state.userId,
                    token: this.state.token,
                    dealerId:dealerId,
                    cycleStoreId: cycleStoreId,
                    cycleId: cycleId,
                    rate: rate
                })
  
            };
  
            const res = await fetch('http://localhost:5000/user/bookCycle',req);
            const response  = await res.json();
  
             if(res.status===400){
  
                alert(response.msg);
  
            }else{
  
                this.setState({toLogin:true});
  
            }
  
        }catch(err){
  
            console.log(err);
            alert(err);
  
        }
  
    }
  
  
  
    async addFavorite(dealerId, cycleStoreId, cycleId){
  
        try{
  
            // console.log("dealerId: ",dealerId)
  
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
                    cycleId: cycleId,
                    token: this.state.token
                })
  
            };
  
            let res = await fetch('http://localhost:5000/user/addFavorite',req);
            let favorites =  this.state.favorites;
            favorites.push(this.state.allData[dealerId][cycleStoreId][cycleId]);
  
            let allData = this.state.allData;
            allData[dealerId][cycleStoreId][cycleId].favorite = true;
            
            if(this.state.currentCycle.allData && cycleId === this.state.currentCycle.allData.cycleId){
  
                let currentCycle = this.state.currentCycle;
                currentCycle.allData.favorite = true;
                this.setState({favorites:favorites,currentCycle:currentCycle,allData:allData});
  
            }else{
  
              this.setState({favorites:favorites,allData:allData});
  
            }
  
            
  
            //Change color of star button from css
  
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
                    token: this.state.token
                })
  
            };
  
            const res = await fetch('http://localhost:5000/user/deleteFavorite',req);
            const response  = await res.json();
            // console.log("Delete response ",response);
  
            let favorites =  this.state.favorites;
            
            for(let i =0;i<favorites.length;i++){
  
              if(favorites[i].cycleId.toString() === cycleId)
              {
                  favorites.splice(i,1);
                  break;
              }
  
            }
  
            let allData = this.state.allData;
            allData[dealerId][cycleStoreId][cycleId].favorite = false;
            // console.log(allData);
  
            if(this.state.currentCycle.allData && cycleId === this.state.currentCycle.allData.cycleId){
  
              let currentCycle = this.state.currentCycle;
              currentCycle.allData.favorite = false;
              this.setState({favorites:favorites,currentCycle:currentCycle,allData:allData});
  
            }else{
  
              this.setState({favorites:favorites,allData:allData});
  
            }
  
            //Change color of star button from css.
  
        }catch(err){
  
            console.log(err);
            alert(err);
  
        }
  
    }

    render()
    {

        let cycles = [];

        let allData = this.props.allData;

        if(allData.show){

            for(let i in allData.cycles){

                cycles.push(<CycleTile token={this.state.token} name={allData.cycles[i].name} address={allData.cycleStoreAddress} contact={allData.cycleStoreContact} rate={allData.cycles[i].rate} bookCycle={()=>{this.bookCycle(allData.dealerId,this.props.cycleStoreId,i,allData.cycles[i].rate)}} addFavorite={()=>{this.addFavorite(allData.dealerId,this.props.cycleStoreId,i)}} isFavorite={allData.cycles[i].favorite} available={allData.cycles[i].availableCycle} deleteFavorite={()=>{this.deleteFavorite(allData.dealerId,this.props.cycleStoreId,i)}}/>)

            }

        }
      
        return(
            <section className="featured-places" style={{"margin-top":"-100px"}}>
                    <div className="container">
                    <div className="row">
                        <center>
                        <input type="button" defaultValue={allData.cycleStoreAddress} onClick={()=>{this.props.onClick()}} style={{"text-shadow":"2px 2px grey","height":"105px","font-size":"25px","background-image":"url('https://source.unsplash.com/random/720×480/?car')","color":"white"}} />
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