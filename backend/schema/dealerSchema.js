import mongoose from 'mongoose';
const { Schema } = mongoose;

const dealerSchema = new Schema({
    name: String,
    address: String,
    contact: [Number],
    email: String,
    cycleStore: {
        address: String,
        contact: [Number],
        cycles: [{
            name: String,
            id: mongoose.Types.ObjectId,
            rate: Number,
            totalCycles: Number,
            bookedCycles: Number,
            inUseCycles: Number
        }]
    }
})

const dealerModel = mongoose.model('dealerModel',dealerSchema);

export default dealerModel;