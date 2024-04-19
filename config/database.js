import mongoose from "mongoose";
import 'dotenv/config'

const futbolMongoDataBase = process.env.FUTBOL_DB;

mongoose.connect(futbolMongoDataBase)

const greetingConnected = mongoose.connection;
greetingConnected.once('open', () => {
    console.log('Database - ON')
})