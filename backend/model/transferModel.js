import mongoose from "mongoose";

const transferSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    receiveId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    amount: {
        type: Number,
    }
});


const transferModel = mongoose.models.transfer || mongoose.model('transfer', transferSchema)

export default transferModel