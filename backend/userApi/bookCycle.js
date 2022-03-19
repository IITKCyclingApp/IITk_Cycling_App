import mongoose from 'mongoose';
import statusModel from '../schema/statusSchema.js';
import helperFunction from './helperFunctions/availableCycle.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}



//req object : {userId:, dealerId:, cycleStoreId:, cycleId:, rate:}

async function bookCycle(req,res){

    const x = await helperFunction.availableCycleById(req.body.dealerId, req.body.cycleStoreId, req.body.cycleId);
    
    if(x<=0){

      return res.status(400).json({'msg':`Cycle not available`});

    }

    const check = await statusModel.count({userId:req.body.userId,$or:[{status:1},{status:2}]});

    if(check!==0){

      return res.status(400).json({'msg':'Error: You already have a cycle in use; cannot book new cycle'});

    }


    await statusModel.insertMany([{userId: req.body.userId,
                          dealerId: req.body.dealerId,
                          cycleStoreId: req.body.cycleStoreId,
                          rate: req.body.rate,
                          cycleId: req.body.cycleId,
                          timeStart: new Date(),
                          status: 1
    }]);
    
    return res.status(200).json({'msg':'Success: Cycle booked successfully'});

}

export default bookCycle;