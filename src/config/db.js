import mongoose from "mongoose";

const connectDB = async () => {   
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongoDB connect sucessfully");
    } catch (error) {
        console.error("mongoDB connect error:", error);
        process.exit(1);
    }
    };

export default connectDB;