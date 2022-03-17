import mongoose from 'mongoose';
import statusModel from '../schema/statusSchema.js';


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
    userId :
 } 
 Example:
 {
    "userId":"507f191e810c19729de860ea",
    "dealerId":"507f191e810c19729de860ea",
    "cycleStoreId":"6232b7cc67d359b1050da700",
    "cycleId": "6232bf24e0ac1fc02a58e73c"
  }
 
*/
async function returnCycle(req, res) {
    const data = req.body;
    console.log("request to return cycle");
    console.log(data);
    await statusModel.updateOne({ rate:10 }, { status : 3});
    const ak = await statusModel.findOne({userId : "6232f3f158e542ccd32154f1"});
    console.log(ak);
    
    // const data1 = await statusModel.find({ dealerId: data.dealerId, cycleId: data.cycleId, cycleStoreId: data.cycleStoreId, userId: data.userId });
    // const rate = data1.rate;
    // console.log(data1);
    // let cost = rate * (data1.timeEnd - data1.timeStart);
    res.status(200).json({ 'cost': 1 });
}
export default returnCycle;
//not working some kind of bug
