//Fetch
//A function to to make HTTPS requests
//Built on promises
//Simplifies async code
//Used to interact with an API 

//String representation of the URL
//base url : https://punkapi.online/v3/beers/366

fetch("https://punkapi.online/v3/beers/366")
    .then(response => response.json())
    .then(data => console.log(data));


 

















    
//Async Await
//Syntax to make working with promises a bit easier

//An async function returns a promise
// async function getBeer(){
//     try {

//         //Grab the id name from form input!
//         const beerName = document.getElementById("beerId").value.toLowerCase();
//         console.log(beerName);
        
//         //await only works in an async function
//         //async makes javascript await until a promise is settled and returns its result
//         //javascript can still handle other events
//         const response = await fetch(`https://punkapi.online/v3/beers/${beerName}`);
//         //console.log(response)
        
//         //Check is response is ok
//         if(!response.ok){
//             throw new Error("could not fetch resource")
//         }

//         const data = await response.json()
//         console.log(data);
//         const beerImgId = data.image
//         const imageUrl = `https://punkapi.online/v3/images/${beerImgId}`
//         console.log(imageUrl);
//         const imgElement = document.getElementById("brewDogImage");

//         imgElement.src = imageUrl
//     }
//     catch(error){
//         console.log(error)
//     }
// }


