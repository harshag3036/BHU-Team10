//Creating Schema For stocks

const  mongoose = require('mongoose');

const stockSchema = mongoose.Schema({
        close: {
            type:Number,
            default:0,
          },
        high: {
            type:Number,
            default:0,
          },
        low: {
            type:Number,
            default:0,
          },
        open: {
            type:Number,
            default:0,
          },
        symbol: {
            type:String,
            default:'',
          },
        volume: {
            type:Number,
            default:0,
          },
        id: {
            type:String,
            default:'',
          },
        key: {
            type:String,
            default:'',
          },
        subkey: {
            type:String,
            default:'',
          },
        date:  {
            type:Date,
            default:new Date()
        },
        updated: {
            type:Date,
            default:new Date()
        },
        changeOverTime: {
            type:Number,
            default:0,
          },
        marketChangeOverTime: {
            type:Number,
            default:0,
          },
        uOpen: {
            type:Number,
            default:0,
          },
        uClose: {
            type:Number,
            default:0,
          },
        uHigh: {
            type:Number,
            default:0,
          },
        uLow: {
            type:Number,
            default:0,
          },
        uVolume: {
            type:Number,
            default:0,
          },
        fOpen: {
            type:Number,
            default:0,
          },
        fClose: {
            type:Number,
            default:0,
          },
        fHigh: {
            type:Number,
            default:0,
          },
        fLow: {
            type:Number,
            default:0,
          },
        fVolume: {
            type:Number,
            default:0,
          },
        label: {
            type:String,
            default:'',
          },
        change: {
            type:Number,
            default:0,
          },
        changePercent: {
            type:Number,
            default:0,
          },

    
    

});

const stock=mongoose.model('stock',stockSchema);

module.exports=stock;