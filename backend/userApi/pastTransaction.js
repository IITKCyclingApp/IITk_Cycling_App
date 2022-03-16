import mongoose from 'mongoose';
import statusModel from '../schema/statusSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}



//Accepts a request object of the form {userId: mongoose.Types.ObjectId}
//Returns an array of past transactions of the user of form statusSchema
async function pastTransactionUser(req,res){


    const transaction = await statusModel.find({userId: req.body.userId});
    
    return res.status(200).json(transaction);

}

export default pastTransactionUser;