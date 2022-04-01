import mongoose from 'mongoose';
import dealerModel from '../schema/dealerSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}
/*req will be of form
 {
    dealerId :
    
 } 
 Example:
 {
    "dealerId":"507f191e810c19729de860ea",
   
  }
  response
  {
      name: String,
    address: String,
    contact: [Number],
    email: String,
  }
 
*/
async function dealerProfile(req, res) {
  console.log("request to dealer Profile");
  const data = req.body;
  const dealer=await dealerModel.findOne({ dealerId: data.dealerId });
  res.status(200).json({ 'name':dealer.name,'address':dealer.address,'contact':dealer.contact[0],'email':dealer.email });
}
export default dealerProfile;
//tested