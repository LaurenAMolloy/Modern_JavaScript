console.log("It works")
//Style Property
//The style property can not be read unless it is inline
//We can change the style property using javaScript
const h1 = document.querySelector(".h1");
//h1.style.color = "#d5d667"

//if we want to access style properties we need to use camelCase

//If you have a bunch of styles to add there is a better way using classes

//Changing multiple elements
//These styles are inline and beat any class declaration you have.
const allInputs = document.querySelectorAll("input");
const colors = ['#66608d', '#524a6b', '#3b3756', '#f1f272', '#d5d667']

//Take the first element and set it to the first color
// allInputs.forEach((el, idx) => {
//     const color = colors[idx];
//     el.style.backgroundColor = color;
// })

//Get computed styles
//How to retrieve properties on an element
//This returns a css styles declaration
const styles = getComputedStyle(h1);
const submit = document.querySelector(".mySubmit");
//This does not work in the console?
const sumbitStyles = getComputedStyle(submit);
console.log(sumbitStyles.color);

//Manipulating Classes
//Changing the todo list
//Manually changing style like this is not a good idea
const todo = document.querySelector('#todos .todo');

// .done {
//  todo.style.color = "gray";
// todo.style.textDecoration = "line-through";
// todo.style.opacity = "50%";
// }

//This overwrites the current class so it is not ideal
todo.getAttribute('class');
todo.setAttribute("class", "done");

//ClassList is a DOM Token List
//It provides methods to add and remove classes

todo.classList.remove("done");
todo.classList.add("done");
//Toggle returns true or false depending on if the class is added or not
todo.classList.toggle("done");

//Creating Elements
//How do we add elements to the page?

//make an element
const newh2 = document.createElement("h2");
newh2.innerText = "A few steps a ways from finding your dream home!"

//Find the element and append it to the child
const formSection = document.querySelector(".formSection");
formSection.appendChild(newh2);

//Adding an image
//Creates a HTML Image
//Make a new element
const newImage = document.createElement("img");
newImage.src = 'assets/20945170.jpg';
newImage.classList.add('imgSize');

formSection.appendChild(newImage);

//More Methods we can use
//How do we an delete element?
//Insert to the middle or start
//.insertBefore
//How does it work?

const parentUl = document.querySelector('#todos');
const newLi = document.createElement("li");
const firstLi = document.querySelector('li.todo');
const xBtn = document.createElement
newLi.innerText = "Enjoy a cup of Earl Grey";
parentUl.insertBefore(newLi, firstLi);

const lastLi = document.createElement("li");
lastLi.innerText = "Put your feet up";
parentUl.appendChild(lastLi);

//append
//We can insert multiple elements at once
parentUl.append(lastLi, newLi);
//prepend
//The same idea but will make element the first child.
//parentUl.prepend(newLi);

//Remove Child and Remove
const ul = document.querySelector('section ul');
const removeMe = ul.querySelector(".special");
const deleted = removeMe.remove();

h1.remove();
