import mongoose from 'mongoose';
import userModel from '../schema/userSchema.js';


//Link with mongodb server using mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

async function deleteFavoriteCycle(req,res){


    const currentFavorites = await userModel.findOne({userId:req.userId},"favorites");

    for(let i=0; i<currentFavorites[favorites].length; i++){

        if(element.dealerId === req.dealerId && element.cycleStoreId === req.cycleStoreId && element.cycleId === req.cycleId){
            currentFavorites[favorites].splice(i,1);
            break;
        }

    }

    await userModel.updateOne({userId:req.userId},{favorites:currentFavorites});
    
    return res.status(200).json({'msg':'Success: Favorite deleted successfully'});

}

export default deleteFavoriteCycle;
