import mongoose from "mongoose";

const USER = process.env.USER_MONGO_DB;
const PASS = process.env.PASSWORD_MONGO_DB;


export async function connectDB(){
    try {
        await mongoose.connect(`mongodb+srv://${USER}:${PASS}@pruebaglobaldb.p0ictfu.mongodb.net/?retryWrites=true&w=majority&appName=PruebaGlobalDB`);
        console.log('>>> Connected');
    } catch(error){
        console.log(error);
    }
}