const  mongoose = require('mongoose');
const stock = require('../models/stockdata.js');

// Getting Stock Data of particular Symbol  //


/*const stocks=require('../stocklist');
stock.insertMany(stocks);     
console.log('stocks',stocks);
*/
   
const getstocksymbol=async(req,res)=>{
    try{
        const stocks = await stock.find({'symbol':'AAPL'});
        res.status(200).json(stocks);
 
        console.log('stocks',stocks);
    }
    catch(error){
     res.status(404).json({message:error.message});
 }
 }

 module.exports = getstocksymbol;