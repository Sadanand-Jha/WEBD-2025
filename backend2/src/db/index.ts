import mongoose from 'mongoose'

const connectDB = async(): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI!)
        console.log("mongodb CONNECTED!")
    } catch (error) {
        console.log("mongodb connection error ", error)
    }
}

export default connectDB