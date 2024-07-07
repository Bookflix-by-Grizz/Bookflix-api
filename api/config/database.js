import mongoose from "mongoose";
import { database } from "./index.js";

//TODO URI
const { username, password, host, name } = database;
const URI = `mongodb+srv://${username}:${password}@${host}/${name}?retryWrites=true&w=majority&appName=Cluster0`;
//`mongodb+srv://isloal7:JavaBear_9@cluster0.0gpc1vj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const { connection } = mongoose;

connection.on('error', () => {
    console.error('🔴 Error database connection')
})

connection.on('open', () => {
    console.info('🟢 Database connected')
})

mongoose.connect(URI);