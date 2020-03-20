//1. write a function to iteration an array and print list(input[1,2,3,4,5])

function print_num(lis){
	for (var i=0; i<lis.length;i++){
		console.log(lis[i]);
	}
}
var l=[1,2,3,4,5];
print_num(l);

//2. write a function to print the datatype of a variable --var x = true; input x;


var a="nikhil";
var n=123456;
var b=true;
function datatype(p){
 	console.log(typeof(p));
}
datatype(a);
datatype(n);
datatype(b);

//3. write a function to print greater than the parameter

function H_num(array, param){
	var result = [];
	for (i=0; i<array.length;i++){
	    if (array[i]>param) {
	        result.push(array[i]);
	    }
	}
	return result;
}
var array = [3 , 6, 2, 56, 32, 5, 89, 34];
console.log(H_num(array, 32));

//4. write a switch case to print the month description 
//input x=1;
//output=january;

function months(month){
	switch(month){
		case 1: 
			console.log("January");
			break;
		case 2: 
			console.log("Feburary");
			break;
		case 3: 
			console.log("March");
			break;
		case 4: 
			console.log("April");
			break;
		case 5: 
			console.log("May");
			break;
		case 6: 
			console.log("June");
			break;
		case 7: 
			console.log("July");
			break;
		case 8: 
			console.log("August");
			break;
		case 9: 
			console.log("September");
			break;
		case 10: 
			console.log("October");
			break;
		case 11: 
			console.log("November");
			break;
		case 12: 
			console.log("December");
		break;
	}
}
const readline = require('readline');

input = readline('Please enter the month number: ');
months(12);
//5. print factorial of a number

var f=1;
var x;

function factorial(x){
	for (var i=1; i<=x; i++){
		f=f*i;
	}
	return f
}
console.log(factorial(5));


//5. create a simple login page / display employee details