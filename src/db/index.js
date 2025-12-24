import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"
import express from "express"
const app = express()

const connectDB = async () => {
    try {
        const connectionString = await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionString.connection.host}`);
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1); // Exit process with failure 
    }
}

export default connectDB;