import mongoose from 'mongoose';
import statusModel from '../schema/statusSchema.js';
import dealerModel from '../schema/dealerSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

// Accepts 3 arguments dealerId: mongoose.Types.ObjectId, cycleStoreId:mongoose.Types.ObjectId, cycleId: mongoose.Types.ObjectId. 
// Returns a real number representing #availableCycles

async function availableCycleById(dealerId, cycleStoreId, cycleId){

    const dealerData = await dealerModel.find({_id:dealerId});
    const cycleStoreData = dealerData.cycleStore;
    
    let totalCycles;                //Stores total number of cycles corresponding to dealerId, cycleStoreId and cycleId. Easier if this data is stored in statusSchema
                                    //However modifying number of cycles needs to modify it in dealerSchema as well as statusSchema.
    
    cycleStoreData.every(element => {
        
        if(element.cycleStoreId === cycleStoreId){

            element.cycles.every(element => {

                if(element.cycleId === cycleId){

                    totalCycles = element.totalCycles
                    return false;
                }
                return true;

            })
            return false;
        }

        return true;
    });

    const inUseCycles = await statusModel.count({_id:dealerId, cycleStoreId: cycleStoreId, cycleId: cycleId, $or:[{status:1},{status:2}]});

    return totalCycles - inUseCycles;


}



async function availableCycleAll(){

    const allDealerData = await dealerModel.find({});  // Array of objects of structure dealerSchema

    const inUseCycles = await statusModel.find({$or:[{status:1},{status:2}]});
    let cyclesCount = {};

    inUseCycles.forEach(data => {
        const cycleId = data.cycleId;
        if(cycleId in cyclesCount){
            cyclesCount[cycleId] += 1;
        }else{
            cyclesCount[cycleId] = 1;
        }
    })


    let allAvailableCycle = {};
    allDealerData.forEach(dealer => {
        const dealerId = dealer._id;
        const cycleStoreObject = {};

        dealer.cycleStore.forEach(cycleStore => {
            const cycleStoreId = cycleStore.cycleStoreId;
            const cycleObject = {};

            cycleStore.cycles.forEach(cycle =>{
                const cycleId = cycle.cycleId;

                cycleObject[cycleId] = cycle.totalCycles - cyclesCount[cycleId];
            })

            cycleStoreObject[cycleStoreId] = cycleObject; 
        })

        allAvailableCycle[dealerId] = cycleStoreObject;
    })

    return allAvailableCycle;

}


export default {availableCycleById, availableCycleAll};