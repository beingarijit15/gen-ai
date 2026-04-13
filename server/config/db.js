import mongoose from "mongoose"

const connectDb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("db connected")
    } catch (error) {
        console.log("db connection failed")
        console.error(error)
        console.log("MONGODB_URL:", process.env.MONGODB_URL ? "is set (check for typos or IP whitelist)" : "is NOT SET")
    }
}

export default connectDb