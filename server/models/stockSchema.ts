import { model } from "mongoose";

const express=require('express');
const mongoose=require('mongoose');

const stockSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    markets:{
        type:Number,
        required:true,
    },
    askTotal:{
        type:Number,
        required:true,
    },
    bidTotal:{
        type:Number,
        required:true,
    },
    code:{
        type:String,
        required:true
    },
    png64:{
        type:String,
        required:true
    },
    png128:{
        type:String,
        required:true
    },
    webp64:{
        type:String,
        required:true
    },
    webp128:{
        type:String,
        required:true
    }
})

export default model('stockSchema',stockSchema)
