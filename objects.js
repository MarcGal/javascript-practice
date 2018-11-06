//declaring an object, objects are literals and can be stored in variable


var olympicRecords = {
  athletics100Men: "Justin Gatlin",
  athleticsLongJumpMen: "Mike Powel"
};

//console.log(olympicRecords.athleticsLongJumpMen);


// Adding keys and values with dot dotation

olympicRecords.swimming200Men = "Michael Phelps";


// Adding keys and values with bracket dotation

olympicRecords.swimming400Women= "Katie Ledecky";

olympicRecords.doubleOllie = "Chris Chann";




// ---------- Deleting key-value pairs

delete olympicRecords.doubleOllie;

// --------------- listing object properties -------------

console.log(Object.keys(olympicRecords));

