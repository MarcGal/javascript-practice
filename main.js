
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

// var age = parseInt(prompt("Welcome to IronHack cinema. How old are you?"));

// if (age <= 16) {
//   console.log ("You have a teenager discount");
// } else if (age >= 65) {
//   console.log ("You have the senior citizen discount :)");
// } else {
//   console.log ("Sorry, you have no discount :(");
// };




// var number1 = parseInt (prompt ("First number:"));
// var number2 = parseInt (prompt ("Second number:"));

// if (number1 === number2) {
//   console.log ("The numbers are equal");
// } else {
//   if (number1 > number2) {
//     console.log("Number 1 is bigger than number 2");
//   } else {
//     console.log("Number 1 is smaller than number 2");
//   }
// };



// var language = parseInt(prompt('In which language they want to see the message: '));

// if (language === "spanish") {
//   console.log ("Hola Mundo");
// } else {
//   if (language === "french") {
//     console.log("Bonjour");
//   } else {
//     console.log("Hello World!");
//   }
// }



// var hardWork = 3;

// if (hardWork > 8) {
//   console.log("You will be a great developer!");
// } else if (hardWork > 6) {
//   console.log("You're getting better, but you could be working harder!");
// } else {
//   console.log("You're slacking. I saw you fall asleep on the desk.");
// }

// //  NOT
// var isSmart = true;
// if (!isSmart){
//   console.log("Go to school!");
// }


// var isDeveloper = true;
// if (isSmart && isDeveloper){
//   console.log("Congrats, looks like you're an Ironhacker!");
// }


// // OR
// var languageOfChoice = "JavaScript"
// if (isDeveloper && (languageOfChoice === "JavaScript" || languageOfChoice === "Ruby")){
//   console.log("You are a smart developer!");
// }


// var hungry = true,
//     inTheMoodForBreakfast = true,
//     isLunchTime = false,
//     isDinnerTime = true,
//     isBreakfastTime = false;

// // If you're hungry, and it's lunch time
// if (hungry && isLunchTime){
//   console.log("Time to go to lunch!");
// // If it is dinner time, and you're not hungry
// } else if (isDinnerTime && !hungry){
//   console.log("Let's go for drinks, I'm not very hungry!");
// // If it's breakfast time, or I'm in the mood for breakfast
// } else if (isBreakfastTime && inTheMoodForBreakfast){
//   console.log("I could really go for some french toast...");
// } else {
//   console.log("Guess I'll have a snack")
// }

// var name  = prompt ("Favorite Game of Thrones main character:");
// var house = "";

// if (name === "Khal Drogo") {
//   house = "Dothraki Horselord";
// } else if (name === "Daenerys") {
//   house = "Targaryen";
// } else if (name === "Jon Snow" || name === "Sansa" || name === "Arya") {
//   house = "Stark";
// } else if (name === "Cersei" || name === "Tyrion" || name === "Ser Jaime") {
//   house = "Lannister";
// } else {
//   house = "Other";
// }

// console.log("Your favorite character is from the house " + house);


//     SWITCH STATEMENTS

// var pet = "tiger";

// switch (pet) {
//   case "cat":
//     console.log("I will break a lot of things but, hey!, I'm adorable ... ")
//     break;
//   case "dog":
//     console.log("I will be very annoying but, hey!, I'm your best friend ... ")
//     break;
//   case "hamster":
//     console.log("I will be impossible to find but, hey!, I'm really cute ... ")
//     break;
//   default:
//     console.log("I'm a special pet!")
//     break;
// }

// var name  = prompt ("Favorite Game of Thrones main character:");
// var house = "";

// switch (name) {
//   case "Khal Drogo":
//     house = "Dothraki Horselord";
//     break;
//   case "Daenerys":
//     house = "Targaryen";
//     break;
//   case "Jon Snow":
//   case "Sansa":
//   case "Arya":
//     house = "Stark";
//     break;
//   case "twin":
//   case "tyrion":
//   case "Jamie":
//     house = "Lannister"
//     break;
//   default:
//     house = "other";
// }

// console.log("Your favorite character is from the house " + house);


// var language = "lkn";

// switch(language){
//   case "spanish":
//   console.log('Hola mundo!')
//   break;
//   case "french":
//   console.log('Bonjour!')
//   break;
//   case "dutch":
//   console.log ("Goede dag!")
//   break;
//   case "italian":
//   console.log("Ciao!")
//   break;
//   default:
//   console.log("Hello world!")
// }


//    PRACTICING LOOPS AND ITERATIONS

// var i = 0;

// while (i <= 30){
//   console.log(i);
//   i = i + 1;

//   if (i === 10){
//     console.log('Ten');
//   }
//   if (i === 20){
//     console.log('Twenty');
//   }
// }

// // PRINT NUMBERS FROM 0 TO 100

// for (var i = 0; i <= 100; i++) {
//   console.log(i);
// }


// // hen the break statement is used with a switch statement, 
// //it breaks out of the switch block. 

// var text = "";
// var i = 0;
// while (i < 5) {
//   text += "<br>The number is " + i;
//   i++;
//   if (i === 3) {
//     break;
//   }
// }


//----------------- Practicing Arrays ------------------

// var animalArray = ["Dog", "Cat", "Fish"];

// console.log(animalArray.length);

// // Notice, it's the length - 1
// // The array's index starts at 0, and we must compensate
// var lastIndex = animalArray.length - 1;
// var lastElement = animalArray[lastIndex];

// console.log(lastElement);

// ADDING ELEMENTS TO AN ARRAY

// var animalArray = ["Dog", "Cat", "Fish"];
// console.log("Original: " + animalArray);

// animalArray[6] = "Turtle";
// console.log("Adding some element: " + animalArray);

// animalArray[2] = "Snake";
// console.log("Updating some element: " + animalArray);


// REMOVING ELEMENTS

// var animalArray = ["Dog", "Cat", "Fish", "Lizard", "Whale", "Cheetah"];
// console.log("Original: " + animalArray);
// console.log("------");

// "From the first element, remove one going forward"
// animalArray.splice(0, 1);
// console.log(animalArray);

// //  "From the second element, remove two going forward"
// animalArray = ["Dog", "Cat", "Fish", "Lizard", "Whale", "Cheetah"];
// animalArray.splice(2, 2);
// console.log(animalArray);

// // If we pass a third argument
// // It is inserted as the replacement
// animalArray = ["Dog", "Cat", "Fish", "Lizard", "Whale", "Cheetah"];
// animalArray.splice(0, 1, "Something else");
// console.log(animalArray);

// Exercise

// Let’s perform a few operations on the array above.

// Add two of your favorite animals to the end of the array.
// Remove the first two elements of the array.
// Replace the last element in the array with the word “last”.

// var animalArray = ["Dog", "Cat", "Fish", "Lizard", "Whale", "Cheetah"];
// console.log("Original: " + animalArray);
// console.log("------");

// animalArray.push('crocodile', 'shark');
// console.log(animalArray);

// animalArray.splice(0,2);
// console.log(animalArray);

// // animalArray.splice(5,1,'last');
// console.log(animalArray);

// WHILE LOOP

var counter = 0;
var animalArray = ["Dog", "Cat", "Fish"];

while (counter < animalArray.length){
  console.log(animalArray[counter]);
  counter++;
}

// FOR LOOP


// FOR EACH


