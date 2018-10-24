//------------------- Push method on array ----------------

var arrayNames = ["Pedro", "Jake", "Joan"];

arrayNames.push("Rachel");

console.log(arrayNames[3]);



//------------------- Splice method on Array ----------------

var arrayNames = ["Pedro", "Jake", "Joan"];

console.log(arrayNames[0]);
arrayNames.splice(0,1);
console.log(arrayNames[0]);

//------------------- For Each Loop pn Array ----------------
function printStars(howMany){
  console.log("*".repeat(howMany));
}

[1,2,3,4,5].forEach(function(num){
  printStars(num)
});

//------------------- Split function on stringls----------------

var phrase = "This is long enough for a string to count it words";

var words = phrase.split(" ");

console.log(words);
console.log(words[0]);
console.log(words.length);

