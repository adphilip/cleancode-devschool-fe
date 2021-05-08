
//TODO - check semicolons in the code
// use jshint -> https://jshint.com/
//jshint <filename>.js


// TODO - check variable scope 
var myVariable = 10;

function func(){
  myVariable = 25
  
  var myVariable;
}

func();
console.log(myVariable);


//TODO : writh a function which comapare two Strings
var x = 1

var y = '2'
if(x == y){
	console.log('Exist')
} else {
	console.log('Not Exist')
}
