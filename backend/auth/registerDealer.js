import mongoose from 'mongoose';
import dealerModel from '../schema/dealerSchema.js';
import bcrypt from 'bcrypt';
const saltRounds = 10;
//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
    // console.log("mongoose connected addCycle");
}
/*
{
    name:
    address:
    contact:
    email:
    password:
    confirmPassword:
}
Example:
{
    "name":"avi",
    "email":"cs253@knniitk",
    "password":"243251",
    "confirmPassword":"243251",
    "address":"kanpur",
    "contact":87077878777
}
*/
async function registerDealer(req, res) {
    req = req.body;
    const data = await dealerModel.find({ email: req.email });

    console.log("request for registration");
    if (data.length) {
        return res.status(400).json({ 'msg': 'Email already exist' });
    }
    else if (req.password != req.confirmPassword) {
        return res.status(400).json({ 'msg': 'Password and ConfirmPassword do not match' });
    }

    else {
        const pass = await bcrypt.hash(req.password, saltRounds);
        await dealerModel.insertMany({ dealerId: mongoose.Types.ObjectId(), name: req.name, address: req.address, contact: req.contact, cycleStore: [], email: req.email, password: pass })
        res.status(200).json({ 'msg': "dealer Successfully registered" });
    }

}
export default registerDealer;
//tested