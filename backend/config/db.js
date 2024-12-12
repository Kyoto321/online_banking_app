import mongoose from "mongoose";

// connect to mongodb
export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://sambanks382:iGAprpkBxXyUKYKt@cluster.jxpnc.mongodb.net/transferapp')
    .then(()=>console.log("Database Connected"));
}
