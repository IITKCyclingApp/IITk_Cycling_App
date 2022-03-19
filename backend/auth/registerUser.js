import mongoose from 'mongoose';
import userModel from '../schema/userSchema.js';
import bcrypt from 'bcrypt';
import e from 'express';
const saltRounds =10;
//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
  // console.log("mongoose connected addCycle");
}
/*
{
    name:
    roll
    address:
    contact:
    email:
    password:
    confirmPassword:
}
Example:
{
    "name":"avi",
    "email":"cs253@nknniitk",
    "roll":1001012,
    "password":"243251",
    "confirmPassword":"24325",
    "address":"kanpur",
    "contact":87077878777
}
*/
async function registerUser(req,res){
  req=req.body;
  console.log("request for registration");
  const data =await userModel.find({email:req.email});
  const data1 =await userModel.find({roll:req.roll});
  
  if(data.length){
    return res.status(400).json({'msg':'Email already exist'});
  }
  else if(data1.length){
    return res.status(400).json({'msg':'Roll Number already exist'});
  }
  else if(req.password!=req.confirmPassword){
    return res.status(400).json({'msg':'Password and Confirm Password do not match'});
  }
  else{

    const pass= await bcrypt.hash(req.password,saltRounds);
    await userModel.insertMany({userId:mongoose.Types.ObjectId(),name:req.name,address:req.address,contact:req.contact,favourites:[],email:req.email,roll:req.roll,password:pass})
    return res.status(200).json({'msg':"user Successfully registered"});
  }
}
export default registerUser;
//tested