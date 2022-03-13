import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    address: String,
    contact: [Number],
    email: String,
    roll: Number,
    username: String
})

const userModel = mongoose.model('userModel',userSchema);

export default userModel;