//require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
//import express from "express";
//const app = express()
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()



/*
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("Errorr", (error)=> {
            console.log("errrr",error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            
            console.log("APP IS LISTEN ON PORT", process.env.PORT);
        })
    } catch (error) {
        console.log(`ERROR,failid to connect with database ${error}`);
        throw error
    }
})()
*/
