import mongoose from "mongoose";
import { DBNAME } from "../constants.js";

export const connectDB = async () => {
    try {
        const db = await mongoose.connect(`${process.env.MONGO_DB_URL}/${DBNAME}`);
        console.log("MongoDB connected",db.connection.name);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}