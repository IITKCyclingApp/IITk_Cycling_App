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

    const userData = await userModel.findOne({userId: req.body.userId});
    console.log(userData);
    return res.status(200).json(userData);

}

export default viewProfileUser;