import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv/config';
import { Request,Response } from 'express';
import { connectDB } from './connectDB';
import coinRouter from './routers/coinRouter';
// import  coinRouter from './controllers/coinController';

const app=express();
app.use(cors());
app.use(bodyParser.json());
connectDB;

const port= 5000;

// app.use('/',(req:Request,res:Response)=>{
//     res.send('hello world')
// })
app.use('/coins',coinRouter);

app.listen(port,()=>{
    console.log(`Server run on the port ${port}`);

});





