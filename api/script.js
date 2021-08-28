window.addEventListener('load', fetchStocks);

async function fetchStocks() {
    const response = await fetch('localhost:3000/stock');
    // waits until the request completes...
    console.log(response);
    
  }