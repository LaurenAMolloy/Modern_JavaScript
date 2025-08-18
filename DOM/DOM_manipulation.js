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
//console.log(img)
const p = document.getElementById("main");

//get elements by tag name
//We will get all the elements and they will be stored in a list
//This group is called a collection
//What is a HTML collection?
//An array like object that is not an array
//A type of collection and we can do some array like things
// console.log(document.getElementsByTagName("input"));
// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByTagName("p"));

//const inputs = document.querySelectorAll('input[type="text"], input[type="password]');
const inputs = document.getElementsByTagName("input");
console.log(inputs)
//console.log("Number of Inputs", inputs.length);
//console.log("First input", inputs[0]);
//We cannot use array methods with these collections
//We can iterate but it is a light weight structure

for(let input of inputs){
    console.log(input.value);
}

//console.log(inputs[2])


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

//Selecting h1
const h1 = document.querySelector("h1");

//We can access the text properties of an element using innertext
//console.log(document.body.innerText);

//Changing the text of an element using innerText
//h1.innerText = "I'm Hungry"
//ul.innerText = "I am a big UL"

//h1.textContent = "I am not hungry"

//p.innerText does NOT know about formatting and may not pick up span or bold tags 
//p.textContent DOES know about formatting and gives you everything

//innerHTML
//innerHTML can be used to change elements
//innerHTML all return strings
const form = document.querySelector("form");
console.log(form.innerHTML);
//This will destroy our form probably not what we want!
//form.innerHTML = ("vfhdjsbfhjghjk");
//We don't just set the text here we are creating a bold object
//There are better ways to add elements!
//form.innerHTML = "<b>I am a bold tag</b>"

//Updating html, you need to use innerHTML
//innerText will not do that

//We can get the value from a check box
console.log(inputs[2].checked);

//We can also get the values from a range slider
console.log(inputs[3].value);

//We have another propertiy we can access which is .placholder

inputs[1].placeholder = "Please enter your password"

//We can also select attributes such as href
//class, alt, src, href are all attributes
//We can access the attributes on any object in the DOM
const a = document.querySelector("a");
//a.href

const image = document.querySelector("img");
//image.src

//Get attributes or set attributes
const range = document.querySelector('input[type="range"]');
//range.getAttribute('max');
//range.getAttribute('min');
//range.getAttribute('type');

range.setAttribute('min', '-500');
range.setAttribute('type', 'radio');

//Accessing Parent or Child Elements
const firstLi = document.querySelector("li")
//Look for property parentElement
console.log(firstLi);

//We can access the children too
console.log(ul.children);

//We can access siblings using
console.log(firstLi.nextElementSibling);

//Using properties on multiple elements
//How do we do that?

const allLis = document.querySelectorAll("li");

for(let i = 0; i < allLis.length; i++){
    console.log(allLis[i].innerText);
    allLis[i].innerText = "Let your sparkle shine";
}

for(let li of allLis){
    li.innerHTML = "Let your sparkle <b>Shine</b>"
}


