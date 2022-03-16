import mongoose from 'mongoose';
import userModel from '../schema/userSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}


//req object : {userId:, dealerId:, cycleStoreId:, cycleId:}

async function addFavoriteCycle(req,res){


    const currentFavorites = await userModel.findOne({userId:req.body.userId},"favorites");
    currentFavorites.favorites.push({
        dealerId: req.body.dealerId,
        cycleStoreId: req.body.cycleStoreId,
        cycleId: req.body.cycleId
    });

    await userModel.updateOne({userId:req.body.userId},{favorites:currentFavorites.favorites});
    
    return res.status(200).json({'msg':'Success: Favorite added successfully'});

}

export default addFavoriteCycle;
