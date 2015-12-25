var numberA = 0;
var numberB = null;
var currentResult = 0;
//Has an operator been pressed?
var operator = false;
//Was an operator the last key pressed?
var operatorLast = false;
//What is the current operator?
var operatorPressed = false;
//Was a decimal the last key pressed?
var decimalLast = false;


var display = function(n){
	$("#screen").text(n.toString().slice(0, 19));
}

var operatorKey = function(op){
	if (operatorPressed){
		calculate();
	}
	operator = true;
	operatorLast = true;
	operatorPressed = op;
}

var calculate = function(){
	if (operatorPressed && numberB !== null){
		switch (operatorPressed){
			case "+":
				currentResult = (numberA+numberB);
				break;
			case "-":
				currentResult = (numberA-numberB);
				break;
			case "*":
				currentResult = (numberA*numberB);
				break;
			case "/":
				if (numberB !== 0){
					currentResult = (numberA/numberB);
				} else {
					currentResult = "A lot"
				}
				break;
		}
	} else {
		currentResult = numberA;
	}
	operatorPressed = false;
	operatorLast = false;
	numberA = currentResult;
	numberB = null;
	display(currentResult);
}

var numKey = function(x){
	if (x === "." && decimalLast){
		return;
	}
	if (!numberA && !operatorLast){
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
	operatorLast = false;
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

$("#btn-add").click(function(){
	operatorKey("+")
});
$("#btn-subtract").click(function(){
	operatorKey("-")
});
$("#btn-multiply").click(function(){
	operatorKey("*")
});
$("#btn-divide").click(function(){
	operatorKey("/")
});
$("#btn-equals").click(function(){
	if (operatorPressed){
		calculate();
	} else {
		currentResult = numberA;
	}
	operatorPressed = false;
});

$(document).ready(function(){
	display(currentResult);
});