import mongoose from 'mongoose';
const { Schema } = mongoose;

const dealerSchema = new Schema({
    name: String,
    address: String,
    contact: [Number],
    email: String,
    cycleStore: [{
        cycleStoreId: mongoose.Types.ObjectId,
        address: String,
        contact: [Number],
        cycles: [{
            name: String,
            cycleId: mongoose.Types.ObjectId,
            rate: Number,
            totalCycles: Number,
        }]
    }]
})

const dealerModel = mongoose.model('dealerModel',dealerSchema);

export default dealerModel;