const button_log = document.getElementById('submit-log');
const errorDiv_log = document.querySelector('#show-error-log');
const successDiv_log = document.querySelector('#success-log');
const username_log = document.querySelector('.username-log');
const password_log = document.querySelector('.pass-log');

button_log.addEventListener('click', (error) => {

    let incorrectInput_log = [] //Create array for errors

    //Username validation
    if(username_log.value === '' || username_log.value == null) {
        incorrectInput_log.push('The username is required!\n');
        username_log.style.border = "5px solid red";
    }
    else if(username_log.value.length < 6) {
        incorrectInput_log.push('The username must be at least 6 characters!\n');
        username_log.style.border = "5px solid red";
    }
    else {
        username_log.style.border = "5px solid #00E360";
    }

    //Password validation
    if(password_log.value === '' || password_log.value == null) {
        incorrectInput_log.push('The password is required 2 times to verify!\n');
        password_log.style.border = "5px solid red";
    }
    else if(password_log.value.length < 6 || password_log.value.length >= 20) {
        incorrectInput_log.push('The password should be at least 6 and less than 20 characters!\n');
        password_log.style.border = "5px solid red";
    }
    else {
        password_log.style.border = "5px solid #00E360";
    }

    //Display output
    if (incorrectInput_log !== "") {
        error.preventDefault();
        errorDiv_log.innerText = incorrectInput_log.join(' ');
    }
    
    if (incorrectInput_log.length === 0) {
        error.preventDefault();
        errorDiv_log.style.display = "none";
        successDiv_log.style.display = "block";
        
        username_log.value = "";
        password_log.value = "";

        password_log.style.border = "transparent";
        username_log.style.border = "transparent";
    }
});