// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£"

function bonusTime(salary, bonus) {
// your code here
  
  //salary -> integer
  //bonus -> boolean
  //bonus == true salary * 10
  //bonus == false salary stays the same
  //use if statement.
  //return total as a string with "£" at the beginning of number. 
  
  if (bonus == true){
    return ("£" +(salary * 10))
  } 
  else if(bonus == false){
    return ("£" + salary)
  }
}


// short hand solution
// //function bonusTime(salary, bonus) {
//   return bonus ? `£${10 * salary}` : `£${salary}`;
// }



// describe("Basic tests",() =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(bonusTime(10000, true), '£100000');
//     assert.strictEqual(bonusTime(25000, true), '£250000');
//     assert.strictEqual(bonusTime(10000, false), '£10000');
//     assert.strictEqual(bonusTime(60000, false), '£60000');
//     assert.strictEqual(bonusTime(2, true), '£20');
//     assert.strictEqual(bonusTime(78, false), '£78');
//     assert.strictEqual(bonusTime(67890, true), '£678900');
//   })