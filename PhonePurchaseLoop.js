// Constants
var TAX_RATE = 0.08;
var PHONE_PRICE = 99.99;
var ACCESSORY_PRICE = 12.99;
var SPENDING_THRESHOLD = 15.00;

// Variables
var accountBalance = prompt("How much is in your bank account?");
var amount = 0.00;


function calcTax(amount) {
return amount * TAX_RATE;
}

function formatAmount(amount) {
return "$" + amount.toFixed(2);
}

// keep buying phones while you still have money

while (amount < accountBalance) {
   //buy a new phone!
   amount = amount + PHONE_PRICE;

   // can we afford the accessory?
   if (amount < SPENDING_THRESHOLD) {
       amount = amount + ACCESSORY_PRICE;
   }
}


//can you actually afford this purchase?

if(amount > accountBalance) {
console.log( "You can't afford this purchase :(");
}
undefined

// Constants
var TAX_RATE = 0.08;
var PHONE_PRICE = 99.99;
var ACCESSORY_PRICE = 12.99;
var SPENDING_THRESHOLD = 15.00;

// Variables
var accountBalance = prompt("How much is in your bank account?");
var amount = 0.00;


function calcTax(amount) {
return amount * TAX_RATE;
}

function formatAmount(amount) {
return "$" + amount.toFixed(2);
}

// keep buying phones while you still have money

while (amount < accountBalance) {
// don't forget taxes
amount = amount + calcTax(amount);

console.log ( "Your purchase: " + formatAmount (amount));
var decision = prompt("Buy another phone?");
if(decision = "y") {
    
   //buy a new phone!
   amount = amount + PHONE_PRICE;

   // can we afford the accessory?
   if (amount < SPENDING_THRESHOLD) {
       amount = amount + ACCESSORY_PRICE;
   }
   }
}


//can you actually afford this purchase?

if(amount > accountBalance) {
console.log( "You can't afford this purchase :(");
}