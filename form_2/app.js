//How do we capture form information using JavaScript?

const name = document.querySelector('#name');
const agreement = document.querySelector('#agreements');
const membership = document.querySelector('#membershipType');
const form = document.querySelector('#signup-form');

form.addEventListener('submit', function(event) {
    //handle form data here
    event.preventDefault();
    console.log(event);
    console.log(event.target[0].value);
    console.log(agreement.checked);
    console.log(membership.value);
});