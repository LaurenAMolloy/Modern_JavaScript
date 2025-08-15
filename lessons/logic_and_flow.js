//Making decisions in JavaScript
//Is the user signed in?
//If so which page do they see?
//forms to check for valid email patterns
//All decisions are based on the same logic
//Goals
//Understand comparison operators
//Write Conditionals
//Work with Boolean Operators

// > greater than
// < less than
// >= greater than equal to
//<= less than equal to
// == equal to
// === strictly equal to

//Numbers are commonly used in comparisons
//Strings are less common due to unicode
//Every char has a unicode representation

//Equality
let number1 = 1
let number2 = "2"
//double equals
//checks for equality of value
//coerces values to the same type and then comapres them
//Can lead to some unexpected results
console.log(number1 == number2); //true
//Why is 0 equal to empty string?
console.log(0 == "");//true
console.log(0 == false);//true
console.log(null == undefined);//true

//Triple equals cares about type and value
//This will not coerce the values
//This is the stricly equals
console.log(number1 === number2);
console.log(null === undefined);
console.log(0 === false);
let isLoggedIn = false;
console.log(isLoggedIn === false);
//Use triple equals 99.9% of the time

//Non eqaulity
//How to check if values are not equals
console.log(number1 != number2);//true
console.log(number1 !== number2); //true 
console.log(number1 != number1); //false
console.log(number1 !== number1); //false

