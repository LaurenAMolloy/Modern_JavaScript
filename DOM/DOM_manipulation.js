console.log("it works")
//Exciting Stuff
//What can you make?
//Forms
//Games
//Stepped Forms

//You have to use tonnes of methods when working with the DOM
//You don't need to memorise every single property
//You need to know the basics of HTML and CSS
//ID's and classes, change color, fonts etc

//DOM is our window into the world of web pages
//We can get the values from a form
//Listen for events
//Change behaviour of an element
//We can add logic that reads and understands the element on a page

//The browser turns HTML and CSS into JS Objects
//This is the DOM
//The document is an object
//The body becomes an object
//H1 becomes an object
//All the objects have different properties
//We have methods we can use on all of these objects
//In the console it looks like it is not an object
//But if we console.dir we will see that it is an object

//Changing an object in the DOM is reflected in the browser
//Document is our entry point into the world of the dom
//Every webpage has a document
//The document has tonnes of methods that we can use
//It is created for us in the browser when a page is opened
//We can use document.all to look at references to all the other objects

//The most important part - Selecting Elements
//get element by id

//We get the dom representation of this element
//The object that represents this element
const img = document.getElementById("unicornImage");
console.log(img)
const p = document.getElementById("main");

//get elements by tag name
//We will get all the elements and they will be stored in a list
//This group is called a collection
//What is a HTML collection?
//An array like object that is not an array
//A type of collection and we can do some array like things
console.log(document.getElementsByTagName("input"));
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByTagName("p"));

//const inputs = document.querySelectorAll('input[type="text"], input[type="password]');
const inputs = document.getElementsByTagName("input");
console.log(inputs)
console.log("Number of Inputs", inputs.length);
console.log("First input", inputs[0]);
//We cannot use array methods with these collections
//We can iterate but it is a light weight structure

for(let input of inputs){
    console.log(input.value);
}

console.log(inputs[2])


//We can turn it into an array
const arr = [...inputs]
arr.forEach(element => {
    console.log(element.value)
});

//This gets all three
const specials = document.getElementsByClassName("special")

//Searching for elements within other elements
//This works when you are looking for element wih a specific name and there may be other elenets with the same name that you do not want to select
const ul = document.getElementsByTagName("ul")[0];
ul.getElementsByClassName("special");
ul.getElementsByTagName("li");

//Query and QuerySelector All
//We can use query selector and grab an element using the css selector
//It is more versatile and it is all you ever need
//Supported by all browsers

//Query selector returns a single element
//It will grab the first element not all
const para = document.querySelector("p");
const firstInput = document.querySelector("input");
console.log("First p tag:",para, "First input", firstInput);

document.querySelector("section ul li.special");
document.querySelector('input[type = "password"]');

//Query selector all returns multiple elements
//Here we get a node list
//Whereas with elemnt by tag name return a collection
//They are fake
//querySelector is less performant but go with querySelector for most cases
const allLi = document.querySelectorAll(".special");
const allInputs = document.querySelectorAll("input");
console.log(allLi, allInputs);

console.log(allLi[0]);

