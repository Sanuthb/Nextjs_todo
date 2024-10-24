import mongoose from "mongoose"

export const ConnectDB = async () => {
        await mongoose.connect('mongodb+srv://sanuth7143:Ix3SAsdyQxaC8F5F@cluster0.hros7.mongodb.net/')    
        console.log("MongoDB Connected...")
    }