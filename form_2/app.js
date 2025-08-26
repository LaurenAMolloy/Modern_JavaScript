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

//Input and Change Events
//How can we listen to changes?
//We can listen to change across all inputs
//The benefit is now we have an insync representation of the data
//We can wait for the submit before we send the data off to a database

//This is a way we can loop over all the inputs and update the form data
//We can add change event too!

const formData = {};
for(let input of[name, agreement, membership]) {
    input.addEventListener('input', ({target}) => {
        const {name, type, value, checked } = target;
        //formData[e.target.name] = e.target.value;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);
    });
};

// name.addEventListener('input', e => {
//     console.log("name Changed", e);
//     //Add a key called name to formData
//     formData['name'] = e.target.value;
// });

// agreement.addEventListener('input', e => {
//     console.log("agreement", e);
//     //Add a key called name to formData
//     formData['agreement'] = e.target.checked;
// })

// membership.addEventListener('input', e => {
//     console.log("Membership Changed", e);
//     //Add a key called name to formData
//     formData['membership'] = e.target.value;
// });

