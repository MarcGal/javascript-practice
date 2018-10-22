function sayHelloManyTimes(name, howManyTimes) {
  for (var i=0; i < howManyTimes; i++) {
    console.log('Hello ' + name + '!');
  }
}

sayHelloManyTimes('Marco', 4);
sayHelloManyTimes(3,'error');