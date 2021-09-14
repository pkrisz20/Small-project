const button = document.getElementById('submit-reg');
const errorDiv = document.querySelector('#show-error-reg');
const successDiv = document.querySelector('#success-reg');
const username = document.querySelector('.username-reg');
const email = document.querySelector('.email-reg');
const firstPassword = document.querySelector('.pass-reg');
const secondPassword = document.querySelector('.pass-rep-reg');

let validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

button.addEventListener('click', (error) => {

    let incorrectInput = [] //Create array for errors

    //Email validation
    if(email.value === '' || email.value == null) {
        incorrectInput.push('The email is required!\n');
        email.style.border = "5px solid red";
    }
    else if(!validateEmail(email.value)) {
        incorrectInput.push('Invalid email!\n');
        email.style.border = "5px solid red";
    }
    else {
        email.style.border = "5px solid #00E360";
    }

    //Username validation
    if(username.value === '' || username.value == null) {
        incorrectInput.push('The username is required!\n');
        username.style.border = "5px solid red";
    }
    else if(username.value.length < 6) {
        incorrectInput.push('The username must be at least 6 characters!\n');
        username.style.border = "5px solid red";
    }
    else {
        username.style.border = "5px solid #00E360";
    }

    //Password validation
    if(firstPassword.value === '' || firstPassword.value == null || secondPassword.value === '' || secondPassword.value == null) {
        incorrectInput.push('The password is required 2 times to verify!\n');
        firstPassword.style.border = "5px solid red";
        secondPassword.style.border = "5px solid red";
    }
    else if(firstPassword.value.length < 6 || firstPassword.value.length >= 20) {
        incorrectInput.push('The password should be at least 6 and less than 20 characters!\n');
        firstPassword.style.border = "5px solid red";
        secondPassword.style.border = "5px solid red";
    }
    else if(firstPassword.value !== secondPassword.value) {
        incorrectInput.push('The passwords do not match!\n');
        firstPassword.style.border = "5px solid red";
        secondPassword.style.border = "5px solid red";
    }
    else {
        firstPassword.style.border = "5px solid #00E360";
        secondPassword.style.border = "5px solid #00E360";
    }

    //Display output
    if (incorrectInput !== "") {
        error.preventDefault();
        errorDiv.innerText = incorrectInput.join(' ');
    }
    
    if (incorrectInput.length === 0) {
        error.preventDefault();
        errorDiv.style.display = "none";
        successDiv.style.display = "block";
        
        email.value = "";
        username.value = "";
        firstPassword.value = "";
        secondPassword.value = "";

        email.style.border = "transparent";
        username.style.border = "transparent";
        firstPassword.style.border = "transparent";
        secondPassword.style.border = "transparent";
    }
});