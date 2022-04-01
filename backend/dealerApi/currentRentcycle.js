import mongoose from 'mongoose';
import statusModel from '../schema/statusSchema.js';
import userModel from '../schema/userSchema.js';

//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}



//Accepts a request object of the form {dealerId: mongoose.Types.ObjectId}
//Returns an array of past transactions of the user of form statusSchema
async function currentRentCycle(req,res){


    const transaction = await statusModel.find({dealerId: req.body.dealerId,status:2});
    let q=[];
    let i;
    for(i=0;i<transaction.length;i++){
      let user=transaction[i].userId;
      const transaction1 = await userModel.findOne({userId: user});
      // console.log(transaction1);
      // const p=JSON.parse(transaction[i]);
      // p.userName=transaction1.name;
      // console.log(p);
      // transaction[i]=JSON.stringify(p);
       transaction[i].userName=transaction1.name;
      let p={};
      p.userName=transaction1.name;
      p.dealerId=transaction[i].dealerId
      p.userId=transaction[i].userId
      p.cycleStoreId=transaction[i].cycleStoreId
      p.cycleId=transaction[i].cycleId
      p.timeStart=transaction[i].timeStart
      p.rate=transaction[i].rate
      p.status=transaction[i].status
      p.cost=transaction[i].cost
      q.push(p);      
      
      
    }
    
    return res.status(200).json(q);

}

export default currentRentCycle;