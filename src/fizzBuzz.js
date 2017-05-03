export default function fizzBuzz() {

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
