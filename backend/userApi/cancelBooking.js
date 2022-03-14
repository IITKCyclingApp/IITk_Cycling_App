import mongoose from 'mongoose';
import statusModel from '../schema/statusSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

async function cancelBooking(req,res){


    await statusModel.updateOne({userId: req.userId,
                          dealerId: req.dealerId,
                          cycleStoreId: req.cycleStoreId,
                          cycleId: req.cycleId},{status:4,timeEnd:new Date()});
    
    return res.status(200).json({'msg':'Success: Booking cancelled successfully'});

}

export default cancelBooking;