
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


//simple tests
/*
class Player {
  constructor(name) {
  	this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

describe("fixed tests", function(){
  it("should find the correct goose", function(){
    assert.strictEqual(duckDuckGoose(players, 1),  "a");
    assert.strictEqual(duckDuckGoose(players, 3),  "c");
    assert.strictEqual(duckDuckGoose(players, 10), "z");
    assert.strictEqual(duckDuckGoose(players, 20), "z");
    assert.strictEqual(duckDuckGoose(players, 30), "z");
    assert.strictEqual(duckDuckGoose(players, 18), "g");
    assert.strictEqual(duckDuckGoose(players, 28), "g");
    assert.strictEqual(duckDuckGoose(players, 12), "b");
    assert.strictEqual(duckDuckGoose(players, 2),  "b");
    assert.strictEqual(duckDuckGoose(players, 7),  "f");
  });
});
*/
