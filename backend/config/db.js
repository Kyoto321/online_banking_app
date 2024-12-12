import mongoose from "mongoose";

// connect to mongodb
export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://[username]:[password]@cluster.jxpnc.mongodb.net/transferapp')
    .then(()=>console.log("Database Connected"));
}
