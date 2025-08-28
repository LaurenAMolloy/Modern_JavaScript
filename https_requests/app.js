//Requests
//XMLHTTP
//Fetch
//AXIOS
//AJAX
//AJAX

//Before SPA when we would need to request a new page
//All the relevant HTML, CSS and JS would be returned
//With SPA the page doesn't reload
//We load or send data to/from a server

//Flow
//The request is sent based on a keyboard input > 
//JSON data is sent back and parsed and turned into elements on the page


//We can see this in the Network > XHR tab in the dev tools

//JSON
//A way to format data
//Most common
//JavaScript Object Notation
//Looks like an object Every key is a string
//You cannot store functions but you can store arrays
//Can be used with other languages such as python
//JSON is a common format used for servers to communicate to each other
//Or server to a browser
//XML is like HTML - Extensible Markup Language
//The purpose is just to structure data

//The Old school way
//XMLHttpREQUEST
//Clunky and does not support promises
//Fetch came about as a resoltion to this...

const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener('load', () => {
    console.log('IT WORKED');
    //If we log this we will see the JSON
    //WE CANNOT USE THIS BECAUSE IT IS AN ARROW FUNCTION!
    const data = JSON.parse(firstRequest.responseText);
    console.log(data);
    const filmUrl = data.results[0].films[0];
    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener('load', function(e){
        const filmData = JSON.parse(this.responseText);
    })
    filmReq.addEventListener('error', function(e){
        console.log('ERROR',this);
    });
    filmReq.open('GET', filmUrl);
    filmReq.send();
    // for(let planet of data){
    //     console.log(planet.name);
    // }
});
firstRequest.addEventListener('error', () => {
    console.log("ERROR")
})
// firstRequest.open('GET', "https://swapi.info/api/planets/");
// firstRequest.send();
// console.log('Request sent');

//Fetch
//What is fetch
//Takes one argument 
//call fetch
//Pass in URL
//Response object is returned when the promise is resolved
//Readable stream => byte data
//The steam needs to be read
fetch('https://swapi.info/api/planets')
.then((res) => {
    if(!res.ok)
        throw new Error(`Status Code Error: ${res.status}`)
        //console.log('ERROR NOT STATUS: 200');

        return res.json()   
})
.then((data) => {
    console.log("FETCHED ALL PLANETS")
    //console.log(data);
    const filmURL = (data[0].films[0]);
    console.log(filmURL);
    // for(let planet of data){
    //     console.log(planet)
    //     console.log(planet.name)
    // }
    return fetch(filmURL);
  })
.then((res) => {
    if (!res.ok) throw new Error(`Status Code Error: ${res.status}`);
    return res.json(); 
})
.then((filmData) => {
    console.log("Fetched first film based of first planet");
    //cors type returned
    console.log(filmData.title);
})
//Fetch will only return a rejected promise in the event that the internet is not working
//So the solution to this is to use an if 
.catch((err) => {
    console.log("Something went wrong Fetch");
    console.log(err);
});



// function getUser(){
//     return new Promise((resolve, reject) => {
//         //const getOrder = true;
//         setTimeout(() => {
//             if(getOrder){
//               resolve({id, name: "Alice"}); 
//             } else 
//             {
//                 reject(null);
//             }
//         });
//     });
// }

// function getOrders(){
//     return new Promise((resolve, reject) => {
//         //const getOrder = true;
//         setTimeout(() => {
//             if(getOrder){
//               resolve(["order1", "order2"]); 
//             } else 
//             {
//                 reject(null);
//             }
//         });
//     });
// };


