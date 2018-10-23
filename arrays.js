

//------------------- For Each Loop pn Array ----------------
function printStars(howMany){
  console.log("*".repeat(howMany));
}

[1,2,3,4,5].forEach(function(num){
  printStars(num)
});

