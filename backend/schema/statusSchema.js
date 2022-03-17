import mongoose from 'mongoose';
const { Schema } = mongoose;

const statusSchema = new Schema({
    userId: mongoose.Types.ObjectId,
    dealerId: mongoose.Types.ObjectId,
    cycleStoreId: mongoose.Types.ObjectId,
    cycleId: mongoose.Types.ObjectId,
    
    timeStart: Date,
    timeEnd: Date,
    cost: Number,
    rate: Number,
    //1 if cycle is booked, 2 if cycle in use, 3 if cycle returned after use, 4 if booking cancelled. 3 and 4 to be shown in previous
    //transactions page. 
    status: Number 
})

const statusModel = mongoose.model('statusModel',statusSchema);

export default statusModel;