import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    userId: mongoose.Types.ObjectId,
    name: String,
    address: String,
    contact: [Number],
    favorites: [{
        dealerId: mongoose.Types.ObjectId,
        cycleStoreId: mongoose.Types.ObjectId,
        cycleId: mongoose.Types.ObjectId
    }],
    email: {type:String, unique:true} ,
    roll: {type:Number, unique:true},
    username: String,
    password: String
})

const userModel = mongoose.model('userModel',userSchema);

export default userModel;