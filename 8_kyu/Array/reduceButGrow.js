/*Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24*/

function grow(x){
const multiply = x.reduce((accum, crntVal) => Number(accum) * crntVal,1)
  return multiply
  
}

console.log(grow([1,2,3,4]),24)
console.log(grow(["1",2, "3",4]))

//ABOVE FOR .REDUCE((accumulator, current value))


/* const numbers = [1, 2, 3, 4];
let product = 1;

numbers.forEach(number => {
  product *= number;
});

console.log(product); // Output: 24
*/

// above for forEach