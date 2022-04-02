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
    const time =new Date();
    await statusModel.updateOne({ cycleId:data.cycleId,userId:data.userId }, { status : 3,timeEnd:time})
    const data1 = await statusModel.findOne({userId:data.userId,cycleId:data.cycleId});
    
    const rate = data1.rate;
    let cost = rate * (data1.timeEnd - data1.timeStart)/(1000*60*60);
    cost =parseInt(cost);
    await statusModel.updateOne({ cycleId:data.cycleId,userId:data.userId }, { cost:cost});

    res.status(200).json({ 'cost': cost });
}
export default returnCycle;
//not working some kind of bug
