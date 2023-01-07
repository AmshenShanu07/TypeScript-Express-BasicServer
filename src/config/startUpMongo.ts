import mongoose from 'mongoose';


const startUpMongo = async () =>{
    const uri:string = process.env.MONGO_URL || "";

    await mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },()=>{
        console.log("MONGO CONNECTED SUCCESSFULLY!")
    })
} 

export default startUpMongo;