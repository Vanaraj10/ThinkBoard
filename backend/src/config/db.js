import mongoose from 'mongoose';

export const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDb connected successfully")
    } catch (error) {
        console.error("Error Connectinng",error);
        process.exit(1); // Exit on failure
    }
}