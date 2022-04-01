import mongoose from 'mongoose';
import dealerModel from '../schema/dealerSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}
/*
the req should be in this form.
{   
    dealerId : 
    cycleStoreId : 
} 
Example:
{
    "dealerId":"507f191e810c19729de860ea",
    "cycleStoreId":"6232b900fda84207248c417b"
}
*/
async function deleteCycleStore(req, res) {
    console.log("request to delete cycle store");
    const cycle_Store = req.body;
    await dealerModel.updateOne({ dealerId: cycle_Store.dealerId }, { $pull: { cycleStore: { cycleStoreId: cycle_Store.cycleStoreId} } });
    res.status(200).json({'msg':'Cycle Store Deleted'});
}
export default deleteCycleStore;
//tested