import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB_URI)
}

export const disconnectDB = () => {
    mongoose.disconnect()
}
