import mongoose from 'mongoose';
import dealerModel from '../schema/dealerSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}
/*req will be of form
 {
    dealerId :
    cycleStoreId :
    cycleId : 
 } 
 Example:
 {
    "dealerId":"507f191e810c19729de860ea",
    "cycleStoreId":"6232b7cc67d359b1050da700",
    "cycleId": "6232bea9e46db1ce41055344"
  }
 
*/
async function deleteCycle(req, res) {
  const data = req.body;
  console.log("request to delete cycle");
  await dealerModel.updateOne({ dealerId: data.dealerId }, { $pull: { "cycleStore.$[elem].cycles": { cycleId: data.cycleId } } },{arrayFilters:[{"elem.cycleStoreId":data.cycleStoreId}]});
  res.status(200).json({ 'msg': 'cycle deleted successfully' });
}
export default deleteCycle;
//tested