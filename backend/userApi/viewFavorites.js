import mongoose from 'mongoose';
// import dealerModel from '../schema/dealerSchema.js';
// import userModel from '../schema/userSchema.js';
import allCycleData from "./helperFunctions/availableCycle.js";




//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}



//req object : {userId:}

async function viewFavoriteCycle(req,res){


    const currentFavorites = await userModel.findOne({userId:req.userId},"favorites");

    // const delaerData = await dealerModel.find({});
    

    const allCycleData = await allCycleData(req.userId);    // Object of form {dealerId: {cycleStoreId: {cycleId: {allData}}}}

    let favoriteCycleData = {};

    currentFavorites[favorites].forEach(element =>{

        favoriteCycleData[element.cycleId] = allCycleData[element.dealerId][element.cycleStoreId][element.cycleId];

    })

    return favoriteCycleData;

}

export default viewFavoriteCycle;
