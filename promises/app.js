//Promises

const redLight = document.querySelector(".redLight");
const orangeLight = document.querySelector(".orangeLight");
const greenLight = document.querySelector(".greenLight");

function redLightOn(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
            greenLight.style.backgroundColor = "rgb(76, 74, 74)";
            redLight.style.backgroundColor = "red";
            resolve();
        }, 1000); 
    }) 
}

function orangeLightOn(){
    return new Promise((resolve) => {
        setTimeout(() => {
        redLight.style.backgroundColor = "rgb(76, 74, 74)";
        orangeLight.style.backgroundColor = "orange";
        resolve();
    }, 1000);
    })
    
}

function greenLightOn(){
    return new Promise((resolve) => {
        setTimeout(() => {
        orangeLight.style.backgroundColor = "rgb(76, 74, 74)";
        greenLight.style.backgroundColor = "green";
        resolve()
    }, 1000);
    })
    
}

//Pyramid of Doom!
// redLightOn(() => {
//     orangeLightOn(() => {
//         greenLightOn(() => {
//         });
//     });
// });

redLightOn()
.then(orangeLightOn)
.then(greenLightOn)

