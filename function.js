//Functions let us wrap bits of code up into REUSABLE packages.  They are one of the building blocks of JS.
function iyaSong() {
   console.log("Iya ni wura iyebiye ti a ko le fowo ra");
   console.log("O loyun mi fosu mesan");
   console.log("O pon mi fodun meta");
   console.log("Iya mo ki o ku ise o");
   console.log("Iya ku itoju mi");
}

//the elements inside the functions that will appear will only be the ones in duoble quotes. Type the function code as many times as you want it to reappear, or be repeated, instead of repeating the whole codes to get what we want. This saves time and space and reduces or stops DRY (Don't Repeat Yourself) codes.
//Note: If you type ordinary iyaSong or any function you have, without parenthesis, it will type all the codes back, and not just the ones inside the double quotes.
iyaSong();
iyaSong();
iyaSong();


//ARGUMENTS: Often we want to write functions that take inputs.
function greetings(name) {
	console.log("Hello " + name + "!");
}

greetings("Taye");
greetings("Taye");

//isEven
//return true if even
function isEVen(n) {
	if(n % 2 ===0 ) {
	return true;
//return false otherwise
  } else {
	return false;
  }
}

//or
//Since n % 2 ===0  is a boolean statement, and is either going to be true or false, the code can be written in a shorter form to get true or false, as below:
//function isEVen(n) {
//	return(n % 2 ===0 ) 
//}


//factorial(4) 1 x 2 x 3 x 4
function factorial(num) {
	//define result variable
	var result =1;
	//calculate factorial and store value in result
	for(var a=1; a<=num; a++) {
    result=result * a;  //this line can be shorten to result*=a;
	}
	//return the resukt variable
	return result;	
}

//or factorial(4) 4 x 3 x 2 x 1
function factorial(num) {
	if(num===0){
	return 1;
	}
	var 
	//define result variable
	result =num;
	//calculate factorial and store value in result
	for(var a=num-1; a>=1; a--) {
    result=result * a;  //this line can be shorten to result*=a;
	}
	//return the resukt variable
	return result;	
}


//replace all kebab b'-' by snake '_'
function kebabToSnake(str) {
//replace all '-' by '_'
var newStr=str.replace(/-/g , "_");
return newStr;
}


//Higher Order Functions
function singTwinkle() {
console.log ("Twinkle twinkle little star");
console.log ("How I wonder what you are");
}
singTwinkle()
//setInterval(anotherFunction, interval)
setInterval (singTwinkle, 1000);
//classInterval is then used to stop the set interval, when you want it to stop. The number inside the clear interval (2, in this case), is derived from a number displayed at the begining of what the setInterval has printed. Hence, setInterval returns a number, and then the number is included in clearInterval, to stop it.
clearInterval(2);
//there are also other higher order functions. Set interval is just one of them.


//Also, sometimes, we want to run some code, every 2 seconds, for instance, but don’t want to define a separate function ahead of time, you can write an ANONYMOUS FUNCTION inside the setInterval.

setInterval (function ( )  {
  console.log ("Hello guys");
  console.log ("Let's go");
}, 2000 )

//Above, we are defining the function inside the set interval. It’s just a way to pass a group of code into the set interval.
