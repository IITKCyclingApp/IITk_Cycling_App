import mongoose from 'mongoose';
import statusModel from '../schema/statusSchema.js';
import availablecycleById from './helperFunctions/availableCycle.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}



//req object : {userId:, dealerId:, cycleStoreId:, cycleId:}

async function bookCycle(req,res){


    if(await availablecycleById(req.dealerId, req.cycleStoreId, req.cycleId)<=0){

      return res.status(400).json({'msg':`Cycle not available`});

    }

    const check = await statusModel.count({userId:req.userId,$or:[{status:1},{status:2}]});

    if(check!==0){

      return res.status(400).json({'msg':'Error: You already have a cycle in use; cannot book new cycle'});

    }


    await statusModel.insertMany([{userId: req.userId,
                          dealerId: req.dealerId,
                          cycleStoreId: req.cycleStoreId,
                          cycleId: req.cycleId,
                          timeStart: new Date(),
                          status: 1
    }]);
    
    return res.status(200).json({'msg':'Success: Cycle booked successfully'});

}

export default bookCycle;