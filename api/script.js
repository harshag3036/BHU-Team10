
window.addEventListener('load', fetchStocks);
var  stocks;
var historyList=[];
var StockData=[];
var chartdata=[];
var dps = [];
var company_name="";
var company_description="";
var chartype="";
//const fetch = require('node-fetch');
async function fetchStocks() {
    const response = await fetch('http://localhost:3000/stock');
    stocks = await response.json();
    StockData.push(stocks);
    // waits until the request completes...
    const syb=document.getElementById("search").value|| 0;
    const date=document.getElementById("date").value|| 0;
    const range=document.getElementById("time").value || 0;
    var arr = await isStockSymbolExist(syb,date,range);
    return arr;
    console.log(arr);
    
  }

async function fetchCompany() {
  const val = document.getElementById("search").value;
  const response = await fetch('https://financialmodelingprep.com/api/v3/profile/'+val+'?apikey=5985de078ee30ed8d40ba14b5e3555b7');
  const stocks = await response.json();
  // waits until the request completes...
  
  company_description=stocks.length>0?stocks[0].description:'Company Not exist';
  company_name=stocks.length>0?stocks[0].companyName:'sorry';
  console.log(stocks);
  console.log(company_description);
  console.log(company_name);
  let h = document.getElementById("company_name");
  let p = document.getElementById("company_description");
  
  h.innerHTML = company_name;
  p.innerHTML = company_description;
  searchFunction();

}



function searchFunction() {
    const val = document.getElementById("search").value;
    console.log(val);
    historyList.push(val);
    document.getElementById("search").value="";
    ul = document.getElementById("history_list");

    document.getElementById("search_box").appendChild(ul);


    let li = document.createElement('li');
    ul.appendChild(li);

    li.innerHTML += val;

  }

  
function chart(){
  dps = [];
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: company_name + time +'('+date+')';
            },
            axisX: {
                valueFormatString: "DD MMM"
            },
            axisY: {
                title: "Price",
                prefix: "$"
            },
            data: [{
                type: chartype,
                name: "Intel Stock Price",
                color: "#DD7E86",
                showInLegend: true,
                yValueFormatString: "$##0.00",
                xValueType: "dateTime",
                dataPoints: dps
            }]
        });
        
        $.getJSON("https://canvasjs.com/data/gallery/javascript/intel-stock-price.json", parseData);
        
        function parseData(result) {
            for (var i = 0; i < result.length; i++) {
                dps.push({
                    x: result[i].x,
                    y: result[i].y
                });
            }
            chart.render();
        }
        
        }
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
