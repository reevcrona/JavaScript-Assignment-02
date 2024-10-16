let userPrice = prompt("Please enter a price (example: $49.99)");



let price = parseFloat(userPrice.slice(1));



let newPrice = price * 0.9;


console.log(`$${newPrice.toFixed(2)}`);