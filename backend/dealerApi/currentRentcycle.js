import mongoose from 'mongoose';
import statusModel from '../schema/statusSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}



//Accepts a request object of the form {dealerId: mongoose.Types.ObjectId}
//Returns an array of past transactions of the user of form statusSchema
async function currentRentCycle(req,res){


    const transaction = await statusModel.find({dealerId: req.body.dealerId,status:2});
    
    return res.status(200).json(transaction);

}

export default currentRentCycle;