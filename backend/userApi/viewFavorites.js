import mongoose from 'mongoose';
// import dealerModel from '../schema/dealerSchema.js';
import userModel from '../schema/userSchema.js';
import helperFunction from "./helperFunctions/availableCycle.js";




//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}



//req object : {userId:}

async function viewFavoriteCycle(req,res){


    const currentFavorites = await userModel.findOne({userId:req.body.userId},"favorites");
    // console.log(currentFavorites);

    const cycleData = await helperFunction.allCycleData(req.body.userId);    // Object of form {dealerId: {cycleStoreId: {cycleId: {allData}}}}

    let favoriteCycleData = [];

    if(currentFavorites.favorites){
        currentFavorites.favorites.forEach(element =>{
    
            favoriteCycleData.push(cycleData[element.dealerId][element.cycleStoreId][element.cycleId]);
    
        })
    }

    return res.status(200).json({data:favoriteCycleData});

}

export default viewFavoriteCycle;
