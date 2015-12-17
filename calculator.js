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


var displayResult = function(){
	$("#screen").text(currentResult.toString().slice(0, 19));
}

$("#buttonClear").click(function(){
	currentResult = 0;
	displayResult();
});

$(document).ready(function(){
	displayResult();
});