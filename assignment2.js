let subtotal = Number(prompt("Enter the bill amount:"));
let tipPercentage = Number(prompt("Enter the tip percentage:"));

let calculatedTip = subtotal * tipPercentage / 100;

let totalAmount = subtotal + calculatedTip;

console.log("Subtotal: $" + subtotal);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Calculated Tip: $" + calculatedTip);
console.log("Total Amount to Pay: $" + totalAmount);
