import mongoose from 'mongoose';

const stockSchema = mongoose.Schema({
        "close": 129.41,
        "high": 133.6116,
        "low": 126.76,
        "open": 133.52,
        "symbol": "AAPL",
        "volume": 143301887,
        "id": "HISTORICAL_PRICES",
        "key": "AAPL",
        "subkey": "",
        "date": "2021-01-04",
        "updated": 1628263122000,
        "changeOverTime": 0,
        "marketChangeOverTime": 0,
        "uOpen": 133.52,
        "uClose": 129.41,
        "uHigh": 133.6116,
        "uLow": 126.76,
        "uVolume": 143301887,
        "fOpen": 132.8956,
        "fClose": 128.8048,
        "fHigh": 132.9868,
        "fLow": 126.1672,
        "fVolume": 143301887,
        "label": "Jan 4, 21",
        "change": 0,
        "changePercent": 0,

    close:Decimal128,
    high:Decimal128,
    low:Decimal128,
    open:Decimal128,
    

});

const stock=mongoose.model('stock',stockSchema);

export default stock;