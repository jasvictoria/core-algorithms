export default function makeChange({price, amountGiven}) {

  let totalChange = 0;
  const quarters = 25;
  const dimes = 10;
  const nickels = 5;
  const pennies = 1;

  let changeAmount = {quarters: 0, dimes:0, nickels:0, pennies:0}

   totalChange = amountGiven - price
    console.log("Total change is: ", totalChange+ "¢")

    if(totalChange % quarters !== 0){
      changeAmount.quarters = Math.floor(totalChange/quarters)
      totalChange -= (quarters * changeAmount.quarters)
    } else if(totalChange % quarters === 0) {
      changeAmount.quarters = Math.floor(totalChange/quarters)
      totalChange = (quarters * changeAmount.quarters)
      return changeAmount;
    }

     if(totalChange % dimes !== 0){
      changeAmount.dimes = Math.floor(totalChange/dimes)
      totalChange -= (dimes * changeAmount.dimes)
    } else if(totalChange % dimes === 0) {
      changeAmount.dimes = Math.floor(totalChange/dimes)
      totalChange -= (dimes * changeAmount.dimes)
      return changeAmount;
    }

    if(totalChange % nickels !== 0){
      changeAmount.nickels = Math.floor(totalChange/nickels)
      totalChange -= (nickels * changeAmount.nickels)
    } else if(totalChange % nickels === 0) {
      changeAmount.nickels = Math.floor(totalChange/nickels)
      totalChange -= (nickels * changeAmount.nickels)
      return changeAmount;
    }

    if(totalChange % pennies !== 0){
      changeAmount.pennies = Math.floor(totalChange/pennies)
      totalChange -= (pennies * changeAmount.pennies)
    } else if(totalChange % pennies === 0) {
      changeAmount.pennies = Math.floor(totalChange/pennies)
      totalChange -= (pennies * changeAmount.pennies)
      return changeAmount;
    }
  }


  makeChange({ price: 150, amountGiven: 255})

// makeChange({ price: 159, amountGiven: 200 })
// // => { quarters: 1, dimes: 1, nickels: 1, pennies: 1 }

// makeChange({ price: 432, amountGiven: 500 })
// => { quarters: 2, dimes: 1, nickels: 1, pennies: 3 }r code here
