//const mongoose = require("mongoose")
import mongoose from "mongoose";
//import { generateAccountNumber } from "../utils/helper.js";

const accountSchema = new mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", 
            required: true
        },
        accountNumber: {
            type: Number,
            required: true
        },
        pin: {
            type: Number,
            required: true
        },
        balance: {
            type: Number,
            required: true,
            default: 0,
        }
    }
);


const accountModel = mongoose.models.account || mongoose.model('account', accountSchema)

export default accountModel