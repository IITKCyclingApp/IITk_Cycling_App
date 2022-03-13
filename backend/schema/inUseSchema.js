import mongoose from 'mongoose';
const { Schema } = mongoose;

const inUseSchema = new Schema({
    userId: mongoose.Types.ObjectId,
    dealerId: mongoose.Types.ObjectId,
    cycleId: mongoose.Types.ObjectId,
    time: Date,
    cost: Number
})

const inUseModel = mongoose.model('inUseModel',inUseSchema);

export default inUseModel;