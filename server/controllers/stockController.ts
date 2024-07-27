import { Request,Response } from "express";
import { MongoClient } from "mongodb";
import coinSchema from "../models/coinSchema";
import stockSchema from "../models/stockSchema";


export const getStocks=async(req:Request,res:Response)=>{
    await coinSchema.find().then((result)=>res.send(result))
}

export const stockController=async(req:Request,res:Response)=>{
    const {data}=req.body
     await stockSchema.find()
   const dbUrl='mongodb+srv://mohini:mohinimohini@cluster0.sqdke.mongodb.net/';
        const client = new MongoClient(dbUrl);
        async function run(){
            try{
                await client.connect();
                const database = client.db('crypto-hunter');
                const collection = database.collection('stockschemas');

                const deleteResult = await collection.deleteMany({});
                console.log(`${deleteResult.deletedCount} documents were deleted`);
            
        //         // Insert the new array of data
                 const insertResult = await collection.insertMany(data);
                 console.log(`${insertResult.insertedCount} documents were inserted`);
            }
                  finally {
            
                    await client.close();
            
              }
        }
        run().catch(console.dir);
       
             
                    }
                  
