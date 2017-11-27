// Episode 1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};
printName();
// Variable string Keith will be called in function printName,
// resulting in output: "My name is Keith"  when the function is called.


// Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());
// a global variable is declared before the function, "result".  When function
// is called it looks for variable "score" insode the function first, so will
// return that.  When called, result will be 3.


// Episode 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}
listAnimals();
// Again there is a variable declared outside of the function but it is never
// used. Function loops through myAnimals inside function and returns the index
// value and each animal in it.
// 0: Ducks
// 1: Dogs
// 2: Lions


// Episode 4

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );
// The output when "allSuspects" is called will be:
// "Suspects include: Jay, Val, Harvey, Rick" because the third suspect is
// changed within the function. The console output will then display:
// "Suspect three is: Keith" because it doesn't use the function.


// Episode 5

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());
// When the "detectiveInfo" function is called it changes the detective name
// to "Poirot" and then passes this detective to "printName" when calling it.
// This returns the new detectives name to be put out to the console, "Poirot".


// Episode 6

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);
// There are three functions here which are never called by the line which
// actually displays output, so the name remains unchanged and outputting to
// the console the result will be: "the murderer is rick".


// Episode 7 - Make up your own episode/s!

// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.

function setGlobalKiller() {
  ghostFaceKillah = "Jeffrey Dahmer";
}
var ghostFaceKillah = "Ted Bundy";

setGlobalKiller();
console.log("The killer is " + ghostFaceKillah);
