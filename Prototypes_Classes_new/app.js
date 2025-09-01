//What are prototypes?
//Quirky yet important!
//JS Prototypes
console.log("it works")
//What is this _proto_?
//Mechanism from where objects inherit properties from others
//array.prototype
//Arrays are objects so they do have methods
//A prototype is the template
//We don't need to define methds for every new array
//They share a reference to proto

//It matters because there is just one prototype
//For example the body
//Has properties specifically to the body
//But also has a proto

//We can make our own prototypes and give them their own methods
//this refers to which ever string we are calling the method on
String.prototype.yell = function(){
    return `OMG ${this.toUpperCase()}!!!!!!! ARRRR`;
}

const numbers = [7, 8, 9]

// numbers.prototype.pop = function(){
//     return "Sorry I will not pop!";
// }

//OOP
//Factory Function
//Organising and designing code into patterns for objects

// const navColor = new Color("carrot", [ 230, 126, 34 ]);
// const logoColor = new Color("emerald", [ 46, 204, 113]);

//Recipe for colors
//Translate between colors
//To give us the hex, rgb or find the opposite

//new keyword creates a new object with all the same methods

//Factory Function
function hex(r, g, b) {
    return "#" ((1 << 24) + (r << 16) + (g << 8) + b).tostring(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}

// hex(255,100, 25);

//This function makes us an object
//We make an object
//Add some functions
//Return that function
function makeColor (r, g, b) {
    const color = {}
    color.r = r
    color.g = g
    color.b = b
    color.rgb = function(){
        //console.log(this)
        const { r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`
    };
    color.hex = function() {
        //destructure rgb 
        const { r, g, b} = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }
    return color;
}

const firstColor = makeColor(35, 255, 150)
firstColor.hex();

//Most people do not like factory functions!
//Factory is not commonly used
//We like the constructor pattern
//new Promise
//new Array

//Why is factory a problem?
//The same functions are added to the object returned
//Wheras with String methods the methods are not defined in the actual object
//They are stored on the proptotypes

//Constructor Function

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

//caps indicate this as constructor function
let car1 = new Car('Ford', 'Puma', 2025);

//When we call it with new
//It acts differently
//Creates a blank object
//Links this object to another object(the mama)
//Passes the new object from step 1 as this this context
//Returns this if the function doesnt return it's own object

//This is more efficient than our factory function
function Color(r, g, b) {
    //const o = {}
    this.r = r;
    this.g = g;
    this.b = b;
    //this refers to the window
    //why?
    //it refers to the global scope
    //when we do not use new
    console.log(this);
    //return o
}

//All the methods are created separately and this is why we have js classes

Color.prototype.rgb = function(){
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`
}

Color.prototype.hex = function(){
    const { r, g, b} = this;
    return (
        '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    );
}

//Has an alpha channel
//Do not use arrow functions
//Use function expressions
Color.prototype.rgba = function(a=1.0){
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const color1 = new Color(40, 50, 60);
const color2 = new Color (0, 0, 0);

//Constructor Function
//Defining the properties and methods of objects

function Shoes (brand, type, color, gender) {
    this.brand = brand,
    this.type = type;
    this.color = color;
    this.gender = gender;
} 

Shoes.prototype.discount = function(){
    console.log(`All ${this.brand} trainers have 20% off today`);
}

const shoes1 = new Shoes("Nike", "Trainers", "Pink", "Women's");

const shoes2 = new Shoes("Vans", "Flatforms", "black", "Women's")

console.log(shoes1)
console.log(shoes1.brand);
console.log(shoes1.type);
console.log(shoes1.color);

//Class Syntax
//Syntactic sugar
//Cleaner and cuter way to do this

class Colors {
    //Will execute when a new color is created
    //A new object is created and refered to as this
    constructor(r, g, b, name){
        // console.log("INSIDE CONSTRUCTOR");
        // console.log(r, g, b)
        //These are properties added to the object
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name
        //Call this whenever the object/instance is made
        //Tags the new properties onto the instance
        this.calcHSL()
    }
    //This is a method on the color but not on the instances
    //We can group everything together
    greet(){
        return `Hello from ${this.name}`
    }
    innerRGB(){
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    //We can call a methoid 
    rgb(){
        this.innerRGB
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a=1.0){
        return `rgb(${this.innerRGB()}, ${(a)})`;
    }
    hex() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	}
    hsl(){
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`
    }
    fullSaturation(){
        const{ h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`

    }
    opposite(){
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${h}, ${s}%, ${l}%)`
    }
    calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
        //assign values to the object
		this.h = h;
		this.s = s;
		this.l = l;
	}
}

const red = new Colors(255, 67, 89, "tomato");
const white = new Colors(255, 255, 255, "white");
const orange = new Colors(230, 126, 34, "carrot");
//Another Example of Classes
//ES6 Feature
//Better than traditional constructor functions

//Class is a blue print
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: £${this.price.toFixed()}`)
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Socks", 2.50);

product1.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);
