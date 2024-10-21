//From https://www.codewars.com/kata/59e66e48fc3c499ec5000103

/*In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

*/

//NOTES:
//must return new array within an array (.map) but only return integer amount .count?.
//all combos must be unique and no duplicates
//
function solve(arr) {
  //assign variable. map itterates over array and sub arrays. 
  //takes each subarry and represents as z. z returns a new array that hasbeen Set(removing duplicate numbers from sub arrays)
let nodupe1 = arr.map(z => Array.from(new Set(z)))
//variable answer takes the newly formed array without duplicates and calls reduce method on it.
//the reduce has accumulator set to intiall 1. we take the length of each subarray and multiply
//it by each accumulator to get the total number of unique outcomes possible for a given nested array set.
let answer = nodupe1.reduce((a,b)=> a * b.length,1)

return answer
console.log(answer);
  
};
/* describe("Basic tests", function(){
Test.assertEquals(solve([[1,2],[4],[5,6]]),4);
Test.assertEquals(solve([[1,2],[4,4],[5,6,6]]),4);
Test.assertEquals(solve([[1,2],[3,4],[5,6]]),8);
Test.assertEquals(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);
});



OTHER SHORT SOLUTION:
function solve(arr) {
  return arr.reduce((res, curr) => res *= new Set(curr).size, 1);
};
*/