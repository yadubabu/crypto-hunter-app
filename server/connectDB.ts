import {connect} from "mongoose";

const dbUrl='mongodb+srv://mohini:mohinimohini@cluster0.sqdke.mongodb.net/crypto-hunter';

export const connectDB=connect(dbUrl).then(()=>{
    console.log('DB connected');
    
});
