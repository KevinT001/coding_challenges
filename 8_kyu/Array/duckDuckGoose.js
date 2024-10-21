
/* The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task:

Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
name is a property of Player objects, e.g Player.name

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
*/

function duckDuckGoose(players, goose) {
const position = (goose -1) % players.length //create variable named position. subtract 1 from goose to account for index value starting at 0 of players array
                                              // use modulo operator to get remainder which if large player array would determine a full loop (if necessary) and find position of name for goose number.
return players[position].name
  
}



