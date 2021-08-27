const  mongoose = require('mongoose');
const stock = require('../models/stockdata.js');

// Inserting Data into the Datbase //


/*const stocks=require('../stocklist');
stock.insertMany(stocks);     
console.log('stocks',stocks);
*/
   

const getstocksdata=async(req,res)=>{
    try{
        const stocks = await stock.find();
        res.status(200).json(stocks);
 
        console.log('stocks',stocks);
    }
    catch(error){
     res.status(404).json({message:error.message});
 }
 }

 module.exports = getstocksdata;