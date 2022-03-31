import mongoose from 'mongoose';
import dealerModel from '../schema/dealerSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
  // console.log("mongoose connected addCycle");
}
/*req will be of form
 {
    dealerId :
    cycleStoreId :
    cycleName
    rate:
    totalCycles:
 } 
 Example:
 {
    "dealerId":"507f191e810c19729de860ea",
    "cycleStoreId":"6232b7cc67d359b1050da700",
    "cycleName":"youknow",
    "rate":200
  }
*/
async function addCycle(req, res) {
  const data = req.body;
  console.log("request to add cycle");
  await dealerModel.updateOne({ dealerId: data.dealerId }, { $push: { "cycleStore.$[elem].cycles": { name: data.cycleName, cycleId: mongoose.Types.ObjectId(), rate: data.rate, totalCycles: data.totalCycles } } },{arrayFilters:[{"elem.cycleStoreId":data.cycleStoreId}]});
 
  res.status(200).json({ 'msg': 'cycle added successfully' });
}
export default addCycle;