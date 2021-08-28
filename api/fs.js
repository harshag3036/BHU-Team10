const val=document.getElementById("search").value;
window.addEventListener('load',user_query);
async function user_query(){
    var uq =await fetch(stock);
    isStockSymbolExist(uq.symbol,uq.date, uq.range);
}

var arr
let bs = function (arr, x, start, end) {
    if (start > end) return -1;
    let mid=Math.floor((start + end)/2);
    if (arr[mid]===x) return mid;
    if(arr[mid] > x)
        return bs(arr, x, start, mid-1);
    else
        return bs(arr, x, mid+1, end);
}
 const isStockSymbolExist = async (sbl,date) => {
	try {
		var stock_list;
        stock_list=stocks.find({symbol: sbl});
        // stock_list=stock_list.aggregate(
        //     [
        //       { $sort : { date : 1 } }
        //     ]
        // )
        //var result= await recursiveFunction(stock_list,date,0,stock_list.length-1);
        console.log(stock_list)
		return stock_list;
	} catch (err) {
		throw Error("Sorry the database can't be connected right now");
	}
};
var date=new Date("2021-01-04T00:00:00.000Z")
isStockSymbolExist("AAPL",date);