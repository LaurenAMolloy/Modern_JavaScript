console.log("it works")
//This code returns a promise
//It is kind of painful that we need to worry about callbacks and .then
//How can we write async functions that look like syncronous functions
//Promises are still involved

function getData(){
    const data = axios.get("https://dog.ceo/api/breeds/list/all").then((data) => {
        console.log(data);
    });
}

//use async infront of a function declaration
//The function will now return a function!
// function greet(){
//     return "JS 101!"
// }

async function greet(){
    //This returns a promise!
    return "JS 101!"
}

greet().then((val) => {
    console.log('PROMISE RESOLVED WITH', val)
});

// async function add(x, y) {
//     //Sometimes we want to return a promise that is not resolved! Rejected!
//     if (typeof x !== 'number' || typeof y !== 'number') {
//       throw 'X and Y must be numbers'; 
//     } 
//     return x + y;
// }

//This is exactly the same as doing the above code commented out!
function add(x,y){
    return new Promise((resolve, reject) =>{
        if(typeof x !== "number" || typeof y !== "number"){
            reject('X and Y must be numbers')
        }
        resolve(x + y);
    });
}

add("e", "r")
.then(val => {
    console.log("Promise resolved with", val);
}).catch(err => {
    console.log("Promise rejected with", err);
});

//await key word

// async function getDogs(){
//     //by adding await js will not move on util the promise is resolved
//     //you can only use await in the async function
//     //This is syntactic sugar
//     const res =  await axios.get("https://dog.ceo/api/breeds/list/all");
//     //This log only runs once the previous promise is
//     console.log(res.data);
// }

//How do we handle an error?
//This is a backup to catch multiple errors
// getDogs().catch((err) => {
//     console.log("Catch")
//     console.log(err)
// });

//We can also add a try catch block!

async function getDogs(){
    try {
        const res =  await axios.get("https://dog.ceo/api/breeds/list/all");
        console.log(res.data);
    } catch (e){
        console.log('IN CATCH', e);
    }
}
getDogs();

//Multiple Awaits

// const moveX = (element, amount, delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const bodyBoundary = document.body.clientWidth;
// 			const elRight = element.getBoundingClientRect().right;
// 			const currLeft = element.getBoundingClientRect().left;
// 			if (elRight + amount > bodyBoundary) {
// 				reject({ bodyBoundary, elRight, amount });
// 			}
// 			else {
// 				element.style.transform = `translateX(${currLeft + amount}px)`;
// 				resolve();
// 			}
// 		}, delay);
// 	});
// };

// const btn = document.querySelector('button');
// async function animateRight(el, amt) {
//     //No errors are being caught here
//     //We should add a catch block
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// }
// //animate to the left once we hit the edge!
// animateRight(btn, 100).catch((err) => {
// 	console.log('Hit the right edge! Now Moving left!');
// 	animateRight(btn, -100);
// });


//This is happening sequentially
//These request are not sent off all at the same time!
//They do not depend on each other so it does not matter so much
//It only matters it we want related data
async function getPoke(){
    const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
    const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
    const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
    console.log(poke1.data);
    console.log(poke2.data);
    console.log(poke3.data);
}

//getPoke();

async function getParalelPoke(){
    //All requests are sent at once
    const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
    const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
    const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
    //This is pending!
    //poke1 is a promise here
    console.log(prom1);
    const poke1 = await prom1;
    const poke2 = await prom2;
    const poke3 = await prom3;
    console.log(prom1);
    console.log(poke1.data);
    console.log(poke2.data);
    console.log(poke3.data);
}

getParalelPoke();

//Sequence is slower that paralel!
//Light Show! 

function changeBody(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve(console.log("Color Change"));
        }, delay);
    });
}

// async function lightShow(){
       //parallel
//     await changeBody('teal', 1000);
//     await changeBody('pink', 1000);
//     await changeBody('indigo', 1000);
//     await changeBody('violet', 1000);
// };

async function lightShow(){
    //This is running in paralel
    const promise1 = changeBody('teal', 1000);
    const promise2 = changeBody('indigo', 1000);
    const promise3 = changeBody('violet', 1000);
    const promise4 = changeBody('pink', 1000);
    //It is better to send the request and wait afterwards
    //This is much quicker
    const results = Promise.all([promise1, promise2, promise3, promise4]);
    console.log(results);
};

lightShow();

//Refactoring 





