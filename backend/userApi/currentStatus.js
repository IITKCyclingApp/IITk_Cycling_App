import mongoose from 'mongoose';
import statusModel from '../schema/statusSchema.js';
import helperFunction from './helperFunctions/availableCycle.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}



//Accepts a request object of the form {userId: mongoose.Types.ObjectId}
//Returns an array of past transactions of the user of form statusSchema
async function currentStatusUser(req,res){


    const transaction = await statusModel.find({userId: req.body.userId,$or:[{status:1},{status:2}]});
    console.log(transaction);
    const allCycleData = await helperFunction.allCycleData(req.body.userId);

    if(transaction.length!==0){
      const dealerId = transaction[0].dealerId;
      const cycleStoreId = transaction[0].cycleStoreId;
      const cycleId = transaction[0].cycleId;
      
      const result = {
        transaction: transaction[0],
        allData: allCycleData[dealerId][cycleStoreId][cycleId],
        temp:allCycleData
      }
      console.log(result.allData);

      return res.status(200).json(result);

    }else{
      
        return res.status(200).json({temp:allCycleData});
    }

}

export default currentStatusUser;