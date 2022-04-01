import mongoose from 'mongoose';
import dealerModel from '../schema/dealerSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
    // console.log("mongoose connected");
}
/*
the req should be in this form.
{
    dealerId : 
    storeContact :
    storeAddress :
} 
Example:
{
    "dealerId":"507f191e810c19729de860ea",
    "storeContact":6377228432,
    "storeAddress":"delhi"
}
*/
async function addCycleStore(req, res) {
    const cycle_Store = req.body;
    console.log(" request at add cycle store");
    
    await dealerModel.updateOne({ dealerId: cycle_Store.dealerId }, { $push: { cycleStore: { contact: cycle_Store.storeContact, address: cycle_Store.storeAddress, cycleStoreId: mongoose.Types.ObjectId(), cycles: [] } } }).catch((err)=>{console.log(err)});
    res.status(200).json({'msg':'Cycle Store Added'});
}
export default addCycleStore;
//tested
