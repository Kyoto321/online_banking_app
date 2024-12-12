//const express = require("express")
//const dotenv = require("dotenv").config();
//const userRoutes = require("./routes/userRoutes");
//import cors from 'cors'

import { connectDb } from './config/db.js'
import express from 'express'
import userRoutes from './routes/userRoutes.js'
import 'dotenv/config'
import cookieParser from 'cookie-parser'


const app = express();

const port = process.env.PORT || 5000;

// database
connectDb();
app.use(cookieParser())

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes
app.use("/users", userRoutes)


app.listen(port, ()=> console.log("server running"));





