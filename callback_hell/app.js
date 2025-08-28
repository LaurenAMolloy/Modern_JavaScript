// console.log("it works");
// //Callback Hell is when...
// //Callbacks are nested within other callbacks making code very hard 
// //to read. It is an old pattern used to create asynchronous code.
// function task1(callback){
// setTimeout(() => {
//         console.log("Task 1 done");
//         callback();
// }, 2000);
// }

// function task2(callback){
// setTimeout(() => {
//         console.log("Task 2 done");
//         callback();
// }, 1000)
// }

// function task3(callback) {
// setTimeout(() => {
//         console.log("Task 3 done");
//         callback();
// }, 3000)
// }

// function task4(callback){
// setTimeout(() => {
//         console.log("Task 4 done");
//         callback();
// }, 1500);
// }

// //This is an example of callback hell!
// task1(() => {
//     task2(() => {
//        task3(() => {
//             task4(() => {
//                 function task4() {
//                     console.log("Task 4 done");
//                  };
//             });
//        });
//     });
// });

//Promises
//A promise is an object that manages async operations
//Wrap a promise around {async code}
//"I promise to return a value"
//Pending > Resolved or Rejected 
//new Promise((resolve, reject) => {async code})

//Do these things
//Put tea in a cup
//Boil the kettle
//Pour boiling water in the cup
//Wait 3-4 minutes and enjoy!

// function addTea() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {

//         const addTea = true;
//         if(addTea) {
//             resolve("You add tea")
//         }
//         else {
//             reject("You have no tea leaves")
//         }

//     }, 1500); 
//     }); 
// }

// function boilKettle() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             const kettleBoiled = true;
//             if(kettleBoiled) {
//                 resolve("Kettle boiled")
//             }
//             else {
//                 reject("Kettle is not boiled")
//             }
//     }, 2500);
//     });
// }

// function addWater() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const waterAdded = true;
//             if(waterAdded) {
//                 resolve("Added hot water")
//             }
//             else {
//                 reject("You have not added  hot water")
//             }
//     }, 3500);
//     }); 
//}

// //We can use promises and we no longer need callback
// addTea(() => {
//     boilKettle(() => {
//         addWater(() => {
//             console.log("Enjoy your cuppa!")
//         });
//     });
// });

// addTea().then(value => {console.log(value); return boilKettle()})
//         .then(value => {console.log(value); return addWater()})
//         .then(value => {console.log(value); console.log("Enjoy your cuppa!")})
//         .catch(error => console.log(error));


//What is callback hell?  
//A prehistoric pattern
//Used to conduct asynchronous tasks

function getDrinks(callback){
    setTimeout(() => {
    console.log("What would you like to drink?");   
    }, 2000);
    callback(); 
}
function getStarter(callback){
    setTimeout(()=> {
      console.log("Back again...What would you like as a starter?");   
    }, 4000); 
    callback();
}
function getMain(callback){
    setTimeout(() => {
     console.log("Here we go again...What would you like as a main?");   
    }, 6000);
    callback();
}
function getDessert(callback){ 
    setTimeout(() => {
        console.log("Unbelievable...What would you like as a dessert?"); 
    }, 8000);  
    callback(); 
}

function thisIsWhy(callback){
    setTimeout(() => {
    console.log("See? By the time dessert shows up, everyone’s annoyed—this is why we invented promises and async/await!");
    }, 10000)
    callback();
}

getDrinks(() => {
    getStarter(() => {
        getMain(() => {
            getDessert(() => {
                thisIsWhy(() => {
                }) 
            })
        })
    })
})

