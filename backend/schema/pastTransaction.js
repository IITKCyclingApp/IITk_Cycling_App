import mongoose from 'mongoose';
const { Schema } = mongoose;

const pastTransactionSchema = new Schema({
    userId: mongoose.Types.ObjectId,
    dealerId: mongoose.Types.ObjectId,
    cycleId: mongoose.Types.ObjectId,
    timeStart: Date,
    timeEnd: Date,
    cost: Number
})

const pastTransactionModel = mongoose.model('pastTransactionModel',pastTransactionSchema);

export default pastTransactionModel;