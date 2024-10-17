/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/


function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  
const sum = marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
const avg = sum/marks.length

return Math.floor(avg);
}
console.log(getAverage([3.2,5,1,2.5]),2)


/*function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}
  */