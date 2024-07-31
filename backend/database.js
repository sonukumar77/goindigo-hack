import mongoose from "mongoose"

async function connectDatabase(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected successfully!")
    }catch(err){
        console.error(err)
    }
}

export default connectDatabase