// function sayHelloManyTimes(name, howManyTimes) {
//   for (var i=0; i < howManyTimes; i++) {
//     console.log('Hello ' + name + '!');
//   }
// }

// sayHelloManyTimes('Marco', 4);
// sayHelloManyTimes(3,'error');

// sayHelloManyTimes(3, 'ERROR');
// // Will this work? NO

// sayHelloManyTimes(2);
// // Will this work? NO

// sayHelloManyTimes('ironBrain');
// // Will this work? NO

// ------------------ PRACTICING RETURNING VALUES ---------------------

/*
function anotherFunction(text){
  console.log("Hello "+ text);
}

function oneFunction(name) {
  return anotherFunction(name);
}

oneFunction("Lluis");
*/

// function gradeTheStudent () {
//   var grades = ['Master', 'Good', 'Acceptable', 'Average', 'Poor', 'Fail'];

//   var randomNumber = Math.random();            // Random decimal [0.0 - 1.0)
//   randomNumber = randomNumber * grades.length; // Random decimal [0.0 - 6.0)
//   randomNumber = Math.floor(randomNumber);     // Random integer [0   - 5]

//   return grades[randomNumber];
// }

// var myGrade = gradeTheStudent();
// console.log(myGrade);


//-------------------- PRACTICING ABSTRACTION WITH FUNCTIONS ------------------------------

//with a function, we can event set different limit each time we call the function
// function getRandomNumber(limit){
//   return Math.floor(Math.random()*(limit+1))
// }

// function makeAQuizz(limit){
//   var generateQuizz = getRandomNumber(limit) + "+" + getRandomNumber(limit)
//   return generateQuizz;
// }

// newQuizz = makeAQuizz(100);

// console.log(newQuizz);

function noReturn(){
  var foo = 'fighters';
  // what if... there is no return?
}

var bar = noReturn();

console.log(bar);




