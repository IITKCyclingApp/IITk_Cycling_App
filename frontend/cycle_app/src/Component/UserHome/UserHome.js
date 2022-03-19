// import { profile } from 'console';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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

    async componentDidMount(){

        try{

            // Request to currentStatus 

            let req = {
                method : 'GET',
                headers : {
                  'authorization' : this.state.token, 
                  'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                  userId: this.state.userId,
                })
            };

            let res = await fetch('/user/currentStatus',req);
            let response = await res.json();

            if(res.status===200){

                //Request to viewCycle

                req = {
                    method : 'GET',
                    headers : {
                        'authorization' : this.state.token, 
                        'Content-Type': 'application/json',
                    },
                    body : JSON.stringify({
                        userId: this.state.userId,
                    })
                };

                res = await fetch('/user/viewCycle',req);
                let response2 = await res.json();

                if(res.status===200){

                    this.setState({currentCycle : response2.length===0?{status:0}:response2[0],cycleStore: response});

                }

            }

        }catch(err){

            console.log(err);
            alert(err);

        }

    }

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
            <div>
                <Navbar></Navbar>

            </div>
            
        )

        
    }
}

export default UserHome;