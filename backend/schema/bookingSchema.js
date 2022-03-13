import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookingSchema = new Schema({
    userId: mongoose.Types.ObjectId,
    dealerId: mongoose.Types.ObjectId,
    cycleId: mongoose.Types.ObjectId,
    time: Date
});

const bookingModel = mongoose.model('bookingModel',bookingSchema);

export default bookingModel;