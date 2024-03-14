import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js'
import mongoose from "mongoose";
import router from "./router/route.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use((morgan('tiny')));
app.disable('x-powered-by');


mongoose.set('strictQuery', false);

connect();


app.use('/api',router);

const port = 8080;

app.get('/',(req,res)=>{
    res.status(201).json("Home");
})



app.listen(port,()=>{
    console.log("app runnig on", port);
})