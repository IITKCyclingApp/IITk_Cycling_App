import mongoose from 'mongoose';
const { Schema } = mongoose;

const cycleSchema = new Schema({
    name: String,
    cycleId: mongoose.Types.ObjectId
})

const cycleModel = mongoose.model('cycleModel',cycleSchema);

export default cycleModel; 