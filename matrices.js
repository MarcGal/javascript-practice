// --------------- creating a matrix

var board = [
  [null, null, null, "S", null],
  [null, "S", null, "S", null ],
  ["S", null, null, null, null ],
  [null, "S", null, null, null],
  [null, null, null, null, "S"],
];

// --------------- Accessing rows --------------------

var firstRow = board[0];
console.log("First Row: " + firstRow);

var secondRow = board[1];
console.log("Second Row: " + secondRow);

var thirdRow = board[2];
console.log("Third Row: " + thirdRow);