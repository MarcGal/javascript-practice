// --------------- creating a matrix

var board = [
  [null, null, null, "S", null],
  [null, "S", null, "S", null ],
  ["S", null, null, null, null ],
  [null, "S", null, null, null],
  [null, null, null, null, "S"],
];

// ------------------- Accessing rows ----------------------

var firstRow = board[0];
console.log("First Row: " + firstRow);

var secondRow = board[1];
console.log("Second Row: " + secondRow);

var thirdRow = board[2];
console.log("Third Row: " + thirdRow);

// ------------------ Accessing rows --------------------

var emptySpace  = firstRow[0];
var ship = firstRow[3];

console.log("Empty Space: " + emptySpace);
console.log("Ship: " + ship);

// We can also shortcut assigning the row to a variable
console.log("Third row, first col: " + board[2][0]);

console.log(secondRow[3]);


// -------------------- ITERATING OVER A MATRIX -----------------

for (var i = 0; i < board.length; i++){
  // A single row, such as board[0], board[1], board[2]
  var row = board[i];
  // Loop over each element in the row
  // We use "j" because "i" is already being used.
  // What would happen if we used i in this loop instead? Try it.
  for (var j = 0; j < row.length; j++){
    var column = row[j];
    // If the column is a ship, log the coords
    if (column === "S"){
      console.log("Ship Found at: " + i + ", " + j);
    }
    // Instead of using variables, you could reference: board[i][j]
  }
}