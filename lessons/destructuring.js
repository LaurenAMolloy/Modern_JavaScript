//What is destructuring?
//Extracting the values from an array or an object
//Use the values in a convinient way
//[] = to perform array destructuring
//{} = to perform object destructuring

//Swap values of two variable
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b);

const colors1 = ["red", "green", "blue", "black", "white"];

[colors1[0], colors1[4]] = [colors1[4], colors1[0]];
console.log(colors1);

//Assign Array Elements to Variables
const [first, second, third] = colors1;
console.log(first);
console.log(second);
console.log(third);

const person = {
    firstName: "alexandra",
    secondName: "molloy",
    age: 5
}

const person2 = {
    firstName: "florence",
    secondName: "molloy",
    age: 3
}

const {firstName, lastName, age, school="island school of limassol" } = person;
console.log(school);

//Destructuring function parameters
function displayPerson ({firstName, secondName, age, school="NEOM Community School"}) {
    console.log(`Full Name: ${firstName} ${secondName} `)
}

displayPerson(person);