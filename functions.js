function sayHelloManyTimes(name, howManyTimes) {
  for (var i=0; i < howManyTimes; i++) {
    console.log('Hello ' + name + '!');
  }
}

sayHelloManyTimes('Marco', 4);
sayHelloManyTimes(3,'error');

sayHelloManyTimes(3, 'ERROR');
// Will this work? NO

sayHelloManyTimes(2);
// Will this work? NO

sayHelloManyTimes('ironBrain');
// Will this work? NO

