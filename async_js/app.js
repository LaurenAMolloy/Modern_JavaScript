//How does JS work?
//The call stack?
//The call stack helps js know which functionare being done
//And which are waiting to be done

//Call - What is being called
//Stack - A data structure

//First thing out

//First function will be added
//Any functions called inside the first function will be added to the top call stack

//JS is a single threaded language
//One thing runs at at a time
//Humans are multi threaded except when you sneeze

//Example of Single Threading
console.log("I happen first!");
//alert("Hi there!");
console.log("I happen second!");


//What about when we need to communicate with an API?
//Does our app just grind to a halt?
//How do async callbacks work?

//The browser itself chrome or safari help us out c++
//The browser does the work that JS can not
//JS DOES NOT SET TIME OR MAKE THE REQUEST
//The browser

console.log("I happen first");

setTimeout(function() {
    //The browser is in charge for keeping the time
    //Hands the job back to JS when 3 seconds has elapsed
    //The same as an api call the browser takes over
    console.log("I happen third")
}, 3000);

console.log("I happen second");

//Welcome to Callback Hell
//Callbacks can get messy very quickly

const btn = document.querySelector("button");
// setTimeout(()=> {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`;
//         },1000);  
//     },1000);   
// }, 1000);

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//     setTimeout(() => {
// 		const bodyBoundary = document.body.clientWidth;
// 		const elRight = element.getBoundingClientRect().right;
// 		const currLeft = element.getBoundingClientRect().left;
// 		if (elRight + amount > bodyBoundary) {
// 			onFailure();
// 		}
// 		else {
// 			element.style.transform = `translateX(${currLeft + amount}px)`;
// 			onSuccess();
// 		}
// 	}, delay);
// };


// //This is the callback for moveX
// moveX(btn, 100, 1000, () => {
//     moveX((btn, 100, 1000), () => {
//         moveX((btn, 100, 1000), () => {
//         });
//     });
// });

// LOOK AT THIS UGLY MESS!
// moveX(
// 	btn,
// 	300,
// 	1000,
// 	() => {
// 		//success callback
// 		moveX(
// 			btn,
// 			300,
// 			1000,
// 			() => {
// 				//success callback
// 				moveX(
// 					btn,
// 					300,
// 					1000,
// 					() => {
// 						//success callback
// 						moveX(
// 							btn,
// 							300,
// 							1000,
// 							() => {
// 								//success callback
// 								moveX(
// 									btn,
// 									300,
// 									1000,
// 									() => {
// 										//success callback
// 										alert('YOU HAVE A WIDE SCREEN!');
// 									},
// 									() => {
// 										//failure callback
// 										alert('CANNOT MOVE FURTHER!');
// 									}
// 								);
// 							},
// 							() => {
// 								//failure callback
// 								alert('CANNOT MOVE FURTHER!');
// 							}
// 						);
// 					},
// 					() => {
// 						//failure callback
// 						alert('CANNOT MOVE FURTHER!');
// 					}
// 				);
// 			},
// 			() => {
// 				//failure callback
// 				alert('CANNOT MOVE FURTHER!');
// 			}
// 		);
// 	},
// 	() => {
// 		//failure callback
// 		alert('CANNOT MOVE FURTHER!');
// 	}
// );

//Promises A pattern for writing async code
//A promise is a js object that represents completion or failure of an async operation
//We create a promise and pass in two functions
//resolve
//reject
//How do we run code our promise is resolved?
//Using .then
//Every promise has a .then method and a catch

// const newPet = new Promise((resolve, reject) => {
// 	//reject
// 	//reject();
// 	//resolve();
// 	const rand = Math.random();
// 	if(rand < 0.5) {
// 		resolve();	
// 	}
// 	else {
// 		reject();
// 	}
// 	});
// 	newPet.then(()=> {
// 		console.log('Yay we got a new pet!');
// });
// 	newPet.catch(() => {
// 		console.log("No Pet");
// 	})

// const newPet = new Promise((resolve, reject) => {
// 	//reject
// 	//reject();
// 	//resolve();
// 	setTimeout(() => {
// 		const rand = Math.random();
// 	if(rand < 0.5) {
// 		resolve();	
// 	}else {
// 		reject();
// 	}
// 	}, 5000);
// 	});

// 	newPet.then(()=> {
// 		console.log('Yay we got a new pet!');
//     });
// 	newPet.catch(() => {
// 		console.log("No Pet");
// 	});

	//We can ALSO return a promise from a function

// const newCatPromise = () => {
// return new Promise((resolve, reject) => {
// 	//reject
// 	//reject();
// 	//resolve();
// 	setTimeout(() => {
// 		const rand = Math.random();
// 	if(rand < 0.5) {
// 		resolve();	
// 	}else {
// 		reject();
// 	}
// 	}, 5000);
// 	});
// };
// 	newCatPromise()
// 	//Promise resolved
// 	.then(()=> {
// 		console.log('Yay we got a new cat!');
//     })
// 	.catch(() => {
// 	//Promise rejected
// 		console.log("No Cat");
// 	});

const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
				const pages = {
					'/users': [
						{id: 1, username: "bridget"},
						{id: 2, username: "king gristle"}
					],
					'/about':'This is the about page'
				}
				const data = pages[url]
				if(data) {
					resolve({status: 200, data});
				}
				else {
					reject({status: 404});
				}	
		},
		1000);
	});
};

//This is resolved because we have a page called users
fakeRequest('/users')
.then((res) => {
	console.log('Status Code', res.status);
	console.log('Data', res.data);
	console.log("Request Worked");
})
.catch((res) => {
	console.log(res.status)
	console.log("Request Failed");
});

//This failed because we do not have a page called dogs
// fakeRequest('/dogs')
// .then(() => {
// 	console.log('Status Code', res.status);
// 	console.log('Data', res.data);
// 	console.log("Request Worked");
// })
// .catch((res) => {
// 	console.log(res.status)
// 	console.log("Request Failed");
// });















