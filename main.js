
// CREATING VARIABLES

// var name = 'marco';

// var age = 27;

// var ironHacker = true;



//Playing with expressions

// var expressionOne = ((2 * 2) + 5) * 6;
// console.log(expressionOne);

// var expressionTwo = ((2* 2) + (5 * 3)) - 5;
// console.log(expressionTwo);

// var expressionThree = (5 * 5) / (5 * 5);
// console.log(expressionThree);

// var expressionFour = 5 * 5 - 5 * 4;
// console.log(expressionFour);




//Accessing string values

// var greeting = "Hello";

// console.log(greeting[0]);
// console.log(greeting[3]);
// console.log(greeting[9]);
// console.log(greeting[-2]);

//FINDING CHARACTERS

// var favoritePhrase = "Don't be evil";

// console.log(favoritePhrase.indexOf("Don't"));

// console.log(favoritePhrase.indexOf("e"));
// // This is 7 because indexOf prints the FIRST occurance

// console.log(favoritePhrase.indexOf("z"));
// // It's not found so the index is -1

// var dessert = 'My favorite dessert is jello';

// console.log(dessert.indexOf('j'));

// REPEAT

// console.log("$".repeat(3));

// // INCLUDE

// console.log("dog".includes("og"));

//PRACTICING IF ELSE STATEMENTS

var age = parseInt(prompt("Welcome to IronHack cinema. How old are you?"));

if (age <= 16) {
  console.log ("You have a teenager discount");
} else if (age >= 65) {
  console.log ("You have the senior citizen discount :)");
} else {
  console.log ("Sorry, you have no discount :(");
};




var number1 = parseInt (prompt ("First number:"));
var number2 = parseInt (prompt ("Second number:"));

if (number1 === number2) {
  console.log ("The numbers are equal");
} else {
  if (number1 > number2) {
    console.log("Number 1 is bigger than number 2");
  } else {
    console.log("Number 1 is smaller than number 2");
  }
};



var language = parseInt(prompt('In which language they want to see the message:'));

if (language === "spanish") {
  console.log ("Hola Mundo");
} else {
  if (language === "french") {
    console.log("Bonjour");
  } else {
    console.log("Hello World!");
  }
}

