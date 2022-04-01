import mongoose from 'mongoose';
import statusModel from '../schema/statusSchema.js';
import userModel from '../schema/userSchema.js';
import dealerModel from '../schema/dealerSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}



//Accepts a request object of the form {dealerId: mongoose.Types.ObjectId}
//Returns an array of past transactions of the user of form statusSchema
async function currentBookedCycle(req, res) {


  const transaction = await statusModel.find({ dealerId: req.body.dealerId, status: 1 });
  let q = [];
  let i;
  for (i = 0; i < transaction.length; i++) {
    let user = transaction[i].userId;
    const transaction1 = await userModel.findOne({ userId: user });
    const transaction2 = await dealerModel.findOne({
      "dealerId": req.body.dealerId,
    });
    let cycleName;
    let k,j;
    for(k in transaction2.cycleStore){
      
      if(transaction2.cycleStore[k].cycleStoreId.equals(transaction[i].cycleStoreId)){
        for(j in transaction2.cycleStore[k].cycles){
          if(transaction2.cycleStore[k].cycles[j].cycleId.equals(transaction[i].cycleId)){
            cycleName=transaction2.cycleStore[k].cycles[j].name;
          }
        }
      }
    }
    transaction[i].userName = transaction1.name;
    let p = {};
    p.userName = transaction1.name;
    p.dealerId = transaction[i].dealerId
    p.userId = transaction[i].userId
    p.cycleStoreId = transaction[i].cycleStoreId
    p.cycleId = transaction[i].cycleId
    p.timeStart = transaction[i].timeStart
    p.rate = transaction[i].rate
    p.status = transaction[i].status
    p.cost = transaction[i].cost
    p.cycleName=cycleName;
    q.push(p);


  }

  return res.status(200).json(q);


}

export default currentBookedCycle;