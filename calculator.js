/*This will be a calculator which needs to:
Add, subtract, multiply, divide
Enter 0 through 9
Have a clear button
Store 3 numbers: The first, second and result
Display numbers on screen as appropriate during operations
Using jquery, make number and operation buttons do their thing
Account for edge cases such as:
	operand first
	divide by 0 and similar
	multiple operands/operand switching mid-calc
Look a bit like a calculator if possible*/

var numberA = null;
var numberB = null;
var currentResult = 0;
//Has an operator been pressed?
var operator = false;
//Was an operator the last key pressed?
var operatorLast = false;
//Was a decimal the last key pressed?
var decimalLast = false;


var display = function(n){
	$("#screen").text(n.toString().slice(0, 19));
}

var numKey = function(x){
	if (x === "." && decimalLast){
		return;
	}
	if (! numberA){
		if (x === "."){
			numberA = "0.";
		} else {
			decimalLast = false;
			numberA = x;
		}
		display(numberA);
	} else if (operatorLast){
		if (x === "."){
			numberB = "0.";
		} else {
			decimalLast = false;
			numberB = x;
		}
		operatorLast = false;
		display(numberB);
	} else if (numberB && operator){
		numberB = numberB.toString() + x.toString();
		display(numberB);
	} else {
		numberA = numberA.toString() + x.toString();
		display(numberA);
	}
}

$("#btn-clear").click(function(){
	currentResult = 0;
	numberA = null;
	numberB = null;
	operator = false;
	display(currentResult);
});

$("#btn-1").click(function(){
	numKey(1);
});
$("#btn-2").click(function(){
	numKey(2);
});
$("#btn-3").click(function(){
	numKey(3);
});
$("#btn-4").click(function(){
	numKey(4);
});
$("#btn-5").click(function(){
	numKey(5);
});
$("#btn-6").click(function(){
	numKey(6);
});
$("#btn-7").click(function(){
	numKey(7);
});
$("#btn-8").click(function(){
	numKey(8);
});
$("#btn-9").click(function(){
	numKey(9);
});
$("#btn-0").click(function(){
	numKey(0);
});
$("#btn-decimal").click(function(){
	numKey(".");
	decimalLast = true;
});

$(document).ready(function(){
	display(currentResult);
});