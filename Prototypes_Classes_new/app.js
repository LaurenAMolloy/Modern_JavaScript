//What are prototypes?
//Quirky yet important!
//JS Prototypes

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
    console.log(this.toUpperCase());
}