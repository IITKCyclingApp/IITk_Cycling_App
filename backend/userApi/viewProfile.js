import mongoose from 'mongoose';
import userModel from '../schema/userSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}



//Accepts a request object of the form {userId: mongoose.Types.ObjectId}
//Returns an object of form userSchema
async function viewProfileUser(req,res){

    console.log(req.body);
    const userData = await userModel.findOne({_id: req.body.userId});
    // const userData = await userModel.findOne({email: req.body.email});

    return res.status(200).json(userData);

}

export default viewProfileUser;