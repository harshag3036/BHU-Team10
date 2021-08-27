import mongoose from 'mongoose';

const stockSchema = mongoose.Schema({
        close: Decimal128,
        high: Decimal128,
        low: Decimal128,
        open: Decimal128,
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
        uOpen: Decimal128,
        uClose: Decimal128,
        uHigh: Decimal128,
        uLow: Decimal128,
        uVolume: Decimal128,
        fOpen: Decimal128,
        fClose: Decimal128,
        fHigh: Decimal128,
        fLow: Decimal128,
        fVolume: Decimal128,
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

export default stock;