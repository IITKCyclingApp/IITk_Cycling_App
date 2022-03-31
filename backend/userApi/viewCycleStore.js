import e from 'express';
import mongoose from 'mongoose';
import dealerModel from '../schema/dealerSchema.js';
// import availableCycle from './helperFunctions/availableCycle.js';
import helperFunction from './helperFunctions/availableCycle.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}


// Accepts a request object {dealerId: mongoose.Types.ObjectId, cycleStoreId:mongoose.Types.ObjectId}. If set, returns the cycle store data corresponding to that cycle store else
//returns data of all stores.


// Returns an object with keys as cycleStoreId as each row displayed to user will be corresponding to a cycle store
// {
// cycleStoreId1: {
//     dealerId:
//     dealerName:
//     dealerAddress:
//     dealerContact:
//     dealerEmail:
//     cycleStoreAddress:
//     cycleStoreContact: 
//     cycles: {
//         cycleId1: {
//             name:
//             rate:
//             availableCycle:
//             favorite: 
//         },
//         cycleId2: {

//         }
//     }
// }
// }


//req object : {userId:, dealerId:}

async function viewCycleStore(req, res) {


    const dealerData = await dealerModel.find({});

    const allAvailableCycle = await helperFunction.allCycleData(req.body.userId);
    console.log(allAvailableCycle);

    let allData = {};
    if (req.body.dealerId) {

        dealerData.forEach(dealer => {
            const dealerId = dealer.dealerId;
            if (dealerId == req.body.dealerId) {

                dealer.cycleStore.forEach(cycleStore => {
                    const cycleStoreId = cycleStore.cycleStoreId;

                    let cycleObject = {};

                    cycleStore.cycles.forEach(cycle => {

                        cycleObject[cycle.cycleId] = {
                            name: cycle.name,
                            rate: cycle.rate,
                            availableCycle: allAvailableCycle[dealerId][cycleStoreId][cycle.cycleId].countAvailable,
                            favorite: allAvailableCycle[dealerId][cycleStoreId][cycle.cycleId].favorite
                        }

                    })

                    allData[cycleStoreId] = {
                        dealerId: dealerId,
                        dealerName: dealer.name,
                        dealerAddress: dealer.address,
                        dealerContact: dealer.contact,
                        dealerEmail: dealer.email,
                        cycleStoreAddress: cycleStore.address,
                        cycleStoreContact: cycleStore.contact,
                        cycles: cycleObject,
                        show: false
                    }

                })
            }

        })

    }
    else {
        dealerData.forEach(dealer => {
            const dealerId = dealer.dealerId;
            dealer.cycleStore.forEach(cycleStore => {
                const cycleStoreId = cycleStore.cycleStoreId;

                let cycleObject = {};

                cycleStore.cycles.forEach(cycle => {

                    cycleObject[cycle.cycleId] = {
                        name: cycle.name,
                        rate: cycle.rate,
                        availableCycle: allAvailableCycle[dealerId][cycleStoreId][cycle.cycleId].countAvailable,
                        favorite: allAvailableCycle[dealerId][cycleStoreId][cycle.cycleId].favorite
                    }

                })

                allData[cycleStoreId] = {
                    dealerId: dealerId,
                    dealerName: dealer.name,
                    dealerAddress: dealer.address,
                    dealerContact: dealer.contact,
                    dealerEmail: dealer.email,
                    cycleStoreAddress: cycleStore.address,
                    cycleStoreContact: cycleStore.contact,
                    cycles: cycleObject,
                    show: false
                }

            })
        }
        )
    }


    return res.status(200).json(allData);

}
// else{
//     const cycleStoreData = await dealerModel.find({_id:req.body.dealerId,"cycleStore.cycleStoreId":req.body.cycleStoreId},'_id cycleStore');
//     return res.status(200).json(cycleStoreData);
// }



export default viewCycleStore;