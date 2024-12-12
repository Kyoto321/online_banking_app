// //get mongodb uri string
// import mongoose from "mongoose";

// const connectDB = async () => {
//    mongoose.connection.on('connected', () => console.log("Database Connected"))

//    await mongoose.connect(`${process.env.MONGODB_URI}/transferapp`)
// }

// export default connectDB


import mongoose from "mongoose";

// connect to mongodb
export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://sambanks382:iGAprpkBxXyUKYKt@cluster.jxpnc.mongodb.net/transferapp')
    .then(()=>console.log("Database Connected"));
}
