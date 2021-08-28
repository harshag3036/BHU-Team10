window.addEventListener('load', fetchStocks);

async function fetchStocks() {
    const response = await fetch('/stock');
    // waits until the request completes...
    console.log(response);
    
  }