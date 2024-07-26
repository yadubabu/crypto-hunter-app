import { Request,Response } from "express";
import { MongoClient } from "mongodb";
import coinSchema from "../models/coinSchema";


export const getCoins=async(req:Request,res:Response)=>{
    await coinSchema.find().then((result)=>res.send(result))
}

export const coinController=async(req:Request,res:Response)=>{
    const {data}=req.body
    // await coinSchema.find()
   const dbUrl='mongodb+srv://mohini:mohinimohini@cluster0.sqdke.mongodb.net/';
        const client = new MongoClient(dbUrl);
        async function run(){
            try{
                await client.connect();
                const database = client.db('crypto-hunter');
                const collection = database.collection('coinschemas');

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
        //    async function run() {
        //       try {
        //         await client.connect();
       
        //         // Replace 'databaseName' and 'collectionName' with your database and collection names
        //         const database = client.db('crypto-hunter');
        //         const collection = database.collection('coinschemas');
            
        //         // const deleteResult = await collection.deleteMany({});
        //         // console.log(`${deleteResult.deletedCount} documents were deleted`);
            
        //         // Insert the new array of data
        //         const insertResult = await collection.insertMany(req.body);
        //         console.log(`${insertResult.insertedCount} documents were inserted`);
            
        //       } 
        //       finally {
            
        //             await client.close();
            
        //       }
        //     }
            
        //     run().catch(console.dir);
            
             
                    }
                  
