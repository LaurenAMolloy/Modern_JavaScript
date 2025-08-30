//What is asyncronous code?
//What is call back hell?

const redLight = document.querySelector(".redLight");
const orangeLight = document.querySelector(".orangeLight");
const greenLight = document.querySelector(".greenLight");

function redLightOn(callback){
    setTimeout(() => {
        greenLight.style.backgroundColor = "rgb(76, 74, 74)";
        redLight.style.backgroundColor = "red";
        callback();
    }, 1000); 
}
function orangeLightOn(callback){
    setTimeout(() => {
        redLight.style.backgroundColor = "rgb(76, 74, 74)";
        orangeLight.style.backgroundColor = "orange";
        callback();
    }, 1000);
}
function greenLightOn(callback){
    setTimeout(() => {
        orangeLight.style.backgroundColor = "rgb(76, 74, 74)";
        greenLight.style.backgroundColor = "green";
    }, 1000);
    callback();
}

//Pyramid of Doom!
redLightOn(() => {
    orangeLightOn(() => {
        greenLightOn(() => {
        });
    });
});