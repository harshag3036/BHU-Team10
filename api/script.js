


  window.addEventListener('load', fetchStocks);
var  stocks;
//const fetch = require('node-fetch');
async function fetchStocks() {
    const response = await fetch('http://localhost:3000/stock');
    stocks = await response.json();
    // waits until the request completes...
    const syb=document.getElementById("search").value|| 0;
    const date=document.getElementById("date").value|| 0;
    const range=document.getElementById("time").value || 0;
    var arr = await isStockSymbolExist(syb,date,range);
    return arr;
    console.log(arr);
    
  }

  const isStockSymbolExist = async (syb,date,range) => {
    try {
      date=new Date(date);     
      var gap;
      if(range==="Weekly") gap=7;
      else gap=30;
      var date_final= new Date(date);
      date_final.setDate(date_final.getDate()- gap);
      // console.log(date);
      // console.log("lol1")
      // console.log(date_final);
      // console.log("lol2")

      var stock_list=[];
      Object.entries(stocks).forEach(([key, obj]) => {
        var temp= new Date(obj.date);
            if(obj.symbol==syb && temp>=date_final && temp<=date){
              stock_list.push(obj);
            }
      });
          
          
      console.log(stock_list)
      return stock_list;
    } catch (err) {
      throw Error("lol");
    }
  };
  var date=new Date("2021-01-04T00:00:00.000Z")
  //fetchStocks()
  //isStockSymbolExist("AAPL",date,"weekly");