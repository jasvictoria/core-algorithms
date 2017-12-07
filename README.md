# Core Algorithms
This project is stocked full of yummy tests and implementations for algorithms commonly used in job interviews. 
For the full list, see the [algorithms.md](algorithms.md) file.

Base repository for [Core Algorithms](http://jsdev.learnersguild.org/goals/123)

## Installation and Setup
For this project, I created both tests and implementations of core algorithms. 
Begin with installing dependencies from the package.json file.
Use `npm install` in order to install all dependencies.

# Core Algorithms [Classic, Numeric, and Set]

## Usage and Examples

##### FizzBuzz

This is the fizzbuzz function and unit test. It returns an `array` of numbers from 1 to 100, `Fizz` for multiples of three, `Buzz` for multiples of five and `FizzBuzz` for multiples of both three and five.

```
let nums = [];
 let min = 1;
 let max = 100;

 for(let i = min; i <= max; i++){
   if (i % 3 === 0 && i % 5 === 0){
     nums[i] = ("FizzBuzz")
   } else if(i % 3 === 0 && i % 5 !== 0){
     nums[i] = ("Fizz")
   } else if(i % 5 === 0 && i % 3 !== 0){
     nums[i] = ("Buzz")
   } else {
     nums[i] = i;
   }
 }
 return nums
}
```

##### FizzBuzz Unit Test   
```
import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  });

  it('returns numbers 1-100 with multiples of three as fizz, multiples of five as buzz, and multiples of both as fizzbuzz )', function(){

    expect(fizzBuzz()[3]).to.equal('Fizz')
    expect(fizzBuzz()[5]).to.equal('Buzz')
    expect(fizzBuzz()[15]).to.equal('FizzBuzz')
    expect(fizzBuzz()[30]).to.equal('FizzBuzz')
    expect(fizzBuzz()[35]).to.equal('Buzz')
    expect(fizzBuzz()[23]).to.equal(23)

    });
  });
```
##### MakeChange Function

This is the makeChange function and unit test. Given a price and an amount paid in USD, it returns the number of coins in each denomination that should be given as change.

```
  let totalChange = 0;
  const quarters = 25;
  const dimes = 10;
  const nickels = 5;
  const pennies = 1;

  let changeAmount = {quarters: 0, dimes:0, nickels:0, pennies:0}

   totalChange = amountGiven - price
    // console.log("Total change is: ", totalChange+ "¢")

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
;
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

```

##### makeChange Unit Test

```
import { expect } from 'chai'
import makeChange from '../src/makeChange'

describe('makeChange()', function(){

  it('should be a function', function(){
    expect(makeChange).to.be.a('function')
  });

  it('returns an object with all coin types (quarters, dimes, nickels, and pennies)', function(){
    const change = makeChange({price: 100, amountGiven: 100})
    expect(change).to.be.an('object')
    expect(change).to.have.keys('quarters', 'dimes', 'nickels', 'pennies')
    expect(change).to.deep.equal({
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    });
  });

  it('returns correct change', function(){
    expect(makeChange({price: 100, amountGiven: 141})).to.deep.equal({
      quarters: 1,
      dimes: 1,
      nickels: 1,
      pennies: 1,
    });
  });

  it('minimizes the number of coins given by using the most high-value coins', function(){
    expect(makeChange({price: 100, amountGiven: 168})).to.deep.equal({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3,
    });

    expect(makeChange({price: 100, amountGiven: 169})).to.deep.equal({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 4,
    });

    expect(makeChange({price: 100, amountGiven: 170})).to.deep.equal({
      quarters: 2,
      dimes: 2,
      nickels: 0,
      pennies: 0,
    });
  });
});

```

##### Palindrome

This is the isPalindrome function and unit test. It returns whether or not a string is a Palindrome. 

```
isPalindrome(string) {
  let newString = string.toLowerCase().replace(/[^a-z]+/ig, '');
  let reverseString = newString.split('').reverse().join('')
    return reverseString === newString
}
```

##### isPalindrome Unit Test 

```
describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('returns true for strings that are palindromes and false for strings that are not )', function(){

    expect(isPalindrome('A man, a plan, a canal: Panama')).to.equal(true)
    expect(isPalindrome('radar')).to.equal(true)
    expect(isPalindrome('palindrome')).to.equal(false)
    expect(isPalindrome('wow')).to.equal(true)
    expect(isPalindrome('hannah')).to.equal(true)
    expect(isPalindrome('learnersguild')).to.equal(false)

    })
  })
  ```


## Specifications

- [x] Artifact produced is a fork of the [core-algorithms][core-algorithms] repo.
- [x] Can run all tests with `npm test`.
- [x] `makeChange()` algorithm is implemented according to the description in [algorithms.md][algorithms-list].
- [x] Tests for `makeChange()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using  invalid inputs.
- [x] `fizzBuzz()` algorithm is implemented according to the description in [algorithms.md][algorithms-list].
- [x] Tests for `fizzBuzz()` exist.
- [x] `isPalindrome()` algorithm is implemented according to the description in [algorithms.md][algorithms-list].
- [x] Tests for `isPalindrome()` exist with at least 2 unit tests using valid inputs.
- [x] `factorial()` algorithm is implemented according to the description in [algorithms.md][algorithms-list].
- [x] Tests for `factorial()` exist with at least 2 unit tests using valid inputs.
- [ ] `fibonacci()` algorithm is implemented according to the description in [algorithms.md][algorithms-list].
- [x] Tests for `fibonacci()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] `collatzConjecture()` algorithm is implemented according to the description in [algorithms.md][algorithms-list].
- [x] Tests for `collatzConjecture()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] `setUnion()` algorithm is implemented according to the description in [algorithms.md][algorithms-list].
- [x] Tests for `setUnion()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] `setIntersection()` algorithm is implemented according to the description in [algorithms.md][algorithms-list].
- [x] Tests for `setIntersection()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] `setComplement()` algorithm is implemented according to the description in [algorithms.md][algorithms-list].
- [x] Tests for `setComplement()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] `setSymmetricDifference()` algorithm is implemented according to the description in [algorithms.md][algorithms-list].
- [x] Tests for `setSymmetricDifference()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] Repository includes a README file with basic installation and setup instructions.
- [x] All dependencies are properly declared in `package.json`.
- [ ] All major features are added via pull requests with a clear description and concise commit messages.
- [x] Code uses a linter and there are no linting errors.
- [x] Variables, functions, files, etc. have appropriate and meaningful names.
- [x] Functions are small and serve a single purpose.
- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].
