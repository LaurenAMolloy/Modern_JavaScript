//console.log("it works");
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit2 = document.getElementById("mySubmit2");
//console.log(mySubmit);
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit2.onclick = function(){
    console.log("clicked");
    // if(myCheckBox.checked){
    //     subResult.textContent = `You are subscribed`;
    // }
    // else{
    //     subResult.textContent = `You are NOT subscribed`;
    // }
    myCheckBox.checked ? subResult.textContent=`You are Subscribed`: subResult.textContent=`You are NOT Subscribed`;

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with visa`
    }
    else if(masterCardBtn){
        paymentResult.textContent = `You are paying with mastercard`
    }
    else if(payPalBtn){
        paymentResult.textContent = `You are paying with paypal`
    } else {
        paymentResult.textContent = `You must select a payment type`
    }
}