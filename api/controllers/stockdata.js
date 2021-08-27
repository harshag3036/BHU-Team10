import  mongoose  from 'mongoose';
import stock from "../models/stockdata.js";

export const getstocksdata=async(req,res)=>{
    try{
        const stocks = await stock.find();
        res.status(200).json(stocks);
 
        console.log('stocks',stocks);
    }
    catch(error){
     res.status(404).json({message:error.message});
 }
 }