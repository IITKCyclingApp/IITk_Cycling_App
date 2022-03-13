import mongoose from 'mongoose';
import dealerModel from '../schema/dealerSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}


// Accepts a request object {dealerId: mongoose.Types.ObjectId, cycleStoreId:mongoose.Types.ObjectId}. If set, returns the cycle store data corresponding to that cycle store else
//returns data of all stores.
// Returns an array of objects where each object is of the form {_id: , cycleStoreData: } where _id is default dealerId in dealerSchema

async function viewCycleStore(req,res){

    if(!req.dealerId){
        const cycleStoreData = await dealerModel.find({},'_id cycleStore');
        return res.status(200).json(cycleStoreData);
    }else{
        const cycleStoreData = await dealerModel.find({_id:req.dealerId,"cycleStore.cycleStoreId":req.cycleStoreId},'_id cycleStore');
        return res.status(200).json(cycleStoreData);
    }

}