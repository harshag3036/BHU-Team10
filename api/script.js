window.addEventListener('load', fetchStocks);

async function fetchStocks() {
    const response = await fetch('http://localhost:3000/stock');
    const stocks = await response.json();
    // waits until the request completes...
    console.log(stocks);
    
  }