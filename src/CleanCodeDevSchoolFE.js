
//TODO 1 : General TODO -> check semicolons in the code
//'use strict';

// TODO 2 : check variable scope 
var myVariable = 10;

function func(){
  myVariable = 25
  
  var myVariable;
}

func();
console.log(myVariable);


//TODO 3 : writh a function which comapare two Strings
var x = 1

var y = '2'
if(x == y){
	console.log('Exist')
} else {
	console.log('Not Exist')
}


//TODO 4 : fix here
//expression();
myFunc();

var expression = function (){
  console.log('Hi from my expression');
}
function myFunc(){
  console.log('Hi from my func'); 
}

//TODO 5 : look on the comments and clean the code; don't forget about names 

print("x = " + x);
//variable first... 

//functions next
function print(input){
  //variables first

   var x = 0 //this goes here... 
  //TODO 5.1 : clean code with y ? (global variable scope)
   y = 100;
  //functions next
  function log(){
    //log stuff
  }
  //run code
  console.log(input);
}

var x = 100;
//run code last - > run function here for  TODO 5

console.log("y = " + y);

//TODO 6 : delete myVarToBeDeleted in order not to be printed

var objOne = {a:4, b:5}, myVarToBeDeleted = 56;
delete objOne.a;
delete myVarToBeDeleted;
console.log("myVarToBeDeleted = ", myVarToBeDeleted);


//TODO 7 :  Function refactoring; Print number all the time; change limits [1,9]

function validateNumber(numberInput) {
  var x = numberInput;
  
  try {
    if(x == "") throw "is empty"
    if(isNaN(x)) throw "is not a number"
    x = Number(x);
    if(x > 10) throw "is too high"
    if(x < 5) throw "is too low"
    
  }
  catch(err) {
    console.log("Catch : " + err);
  }
  finally {
    console.log("Finally : ");
  }
}

validateNumber(4);

//TODO Last one :) : use jshint -> https://jshint.com/
//jshint <filename>.js