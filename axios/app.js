//axios is a library
//It uses fetch behind the scenes
//It is promise based
//You can use it on the client and server side

//This will return our data already parsed
//We do not need to parse our response using the json method
//When we use fetch we need to check the status code
//We want the catch to run
//Axios does this for us

//const res = axios.get('https://swapi.info/api');


//Multiple Chained Requests

axios.get('https://swapi.info/api/planets')
.then(({ data }) => {
    console.log(data);
    for(let planet of data) {
        console.log(planet.name)
    }
    return axios.get()
});
