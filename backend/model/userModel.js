//const mongoose = require("mongoose")
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    },
);


// userSchema.pre("save", async function(next) {
//     if(!this.isModified("password")) {
        
//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(this.password, salt)
//         this.password = hashedPassword;
//     }
//     next();
// });

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel