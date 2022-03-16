import mongoose from 'mongoose';
import statusModel from '../schema/statusSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}



//req object : {userId:}

async function confirmBooking(req,res){


    await statusModel.updateOne({userId: req.body.userId,
                                status:1},{status:2,timeStart:new Date(),cost: 0});
    
    return res.status(200).json({'msg':'Success: Booking confirmed successfully'});

}

export default confirmBooking;