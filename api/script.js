document.addEventListener('load', fetchStocks);
var historyList=[];
async function fetchStocks() {
    const response = await fetch('http://localhost:3000/stock');
    const stocks = await response.json();
    // waits until the request completes...
    //console.log(stocks);
    
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

  function showFunction(){

  }