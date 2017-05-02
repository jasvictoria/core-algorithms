export default function makeChange({price, amountGiven}) {
  // you
let totalChange = 0;
const quarters = 25;
const dimes = 10;
const nickels = 5;
const pennies = 1;

let quarterCount = 0;
let dimeCount = 0;
let nickelCount = 0;
let pennyCount = 0;

let changeAmount = {quarters: 0, dimes:0, nickels:0, pennies:0}


  totalChange = amountGiven - price
  let change = 0
   console.log("Total change is: ", totalChange+ "¢")

  if (totalChange % quarters === 0){
    quarterCount = totalChange / quarters
    changeAmount.quarters = quarterCount
    console.log("quarter count: " + quarterCount)
  } else if (totalChange % quarters !== 0){
    changeAmount = quarters*quarterCount;
    return changeAmount;
  }

  if (totalChange % dimes !== 0){
    changeAmount = dimes *dimeCount;
    return changeAmount
    } else if (totalChange % dimes === 0){
    dimeCount = totalChange / dimes
    changeAmount.dimes = dimeCount
    console.log("Dime Count: "  + dimeCount)
    }

  if(totalChange % nickels !== 0){
    nickelCount = Math.floor(totalChange/nickels)
    totalChange = (nickels * nickelCount)
  } else if(totalChange % nickels === 0) {
    nickelCount = Math.floor(totalChange/nickels)
    totalChange = (nickels * nickelCount)
    console.log("Nickel Count: "  + nickelCount)
    return changeAmount;
  }
  console.log("Total change is: ", totalChange, " cents")
}



makeChange({ price: 100, amountGiven: 105})
// => { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }

// makeChange({ price: 159, amountGiven: 200 })
// // => { quarters: 1, dimes: 1, nickels: 1, pennies: 1 }

// makeChange({ price: 432, amountGiven: 500 })
// => { quarters: 2, dimes: 1, nickels: 1, pennies: 3 }r code here
}
