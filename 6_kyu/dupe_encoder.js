//From: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


*/

// str -> ignore capitals
// str -> '(' is only once and ')' is more than once
// spaces -> count as a character
//'din' -> "((("
//'recede' -> "()()()"

/* .toLowerCase()
.split()
check if they repeat   -> indexOf lastIndexOf
change to '(' or ')' -> .map 
.join() -> to a string