import mongoose from 'mongoose';
import userModel from '../schema/userSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

async function addFavoriteCycle(req,res){


    const currentFavorites = await userModel.findOne({userId:req.userId},"favorites");
    currentFavorites[favorites].push({
        dealerId: req.dealerId,
        cycleStoreId: req.cycleStoreId,
        cycleId: req.cycleId
    });

    await userModel.updateOne({userId:req.userId},{favorites:currentFavorites});
    
    return res.status(200).json({'msg':'Success: Favorite added successfully'});

}

export default addFavoriteCycle;
