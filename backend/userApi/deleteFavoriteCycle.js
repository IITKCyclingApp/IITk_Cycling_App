import mongoose from 'mongoose';
import userModel from '../schema/userSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}



//req object : {userId:, dealerId:, cycleStoreId:, cycleId:}

async function deleteFavoriteCycle(req,res){


    const currentFavorites = await userModel.findOne({userId:req.body.userId},"favorites");

    for(let i=0; i<currentFavorites.favorites.length; i++){

        if(currentFavorites.favorites[i].dealerId.toString() === req.body.dealerId && currentFavorites.favorites[i].cycleStoreId.toString() === req.body.cycleStoreId && currentFavorites.favorites[i].cycleId.toString() === req.body.cycleId){
            
            currentFavorites.favorites.splice(i,1);
            break;
        }

    }

    // console.log

    await userModel.updateOne({userId:req.body.userId},{favorites:currentFavorites.favorites});
    
    return res.status(200).json({'msg':'Success: Favorite deleted successfully'});

}

export default deleteFavoriteCycle;
