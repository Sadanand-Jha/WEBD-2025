import mongoose from 'mongoose'
// import sendEmail from '../utils/mail.ts'
// import { emailVerificationEmailMailGen } from '../utils/mail.ts'
const connectDB = async(): Promise<void> => {
    try {
        // sendEmail({mailgenContent: emailVerificationEmailMailGen("sadanandjha", "this is the verification url :)"), email : "coder.sadanand.dseu@gmail.com", subject: "this was for me!"})
        await mongoose.connect(process.env.MONGO_DB_URI!)
        console.log("mongodb CONNECTED!")
    } catch (error) {
        console.log("mongodb connection error ", error)
    }
}

export default connectDB