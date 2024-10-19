/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!*/
//FROM :::::: https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

//MY PSUEDO CODE::
//take in number, no string, no floats
//breakdown number into individual integers (create array of individual) -> num to string to array
//loop over each number and square number (.map)
//rejoin newly squared numbers and return. should not be in array. Convert back to number after joining

function squareDigits(num){
  let numArr = String(num).split("") //['1','2', '3', '4']
  
  let squaredArr = numArr.map(x => x**2) //[1,4,9,16]
  
  return Number(squaredArr.join('')); // '14916' -> 14916
}