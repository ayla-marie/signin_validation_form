const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show error
function showError(input, message) {
    //console.log("Error function works");
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

//show success
function showSuccess(input) {
    //console.log("success function works");
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}



//check for empty fields 
function checkRequired(inputArr) {
    debugger
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, `${input.id} is required`);
        } else {
            showSuccess(input);
        }
    });
}
//check for required length
function checkLength(input, min, max) {
    if (input.value.length < min || input.value.length > max) {
        showError(input, `${input.id} must be ${min}-${max} characters`)
    } else {
        showSuccess(input);
    }
}

//check for email validity
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email not valid");
    }
}

//check for match
function checkMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords must match");
    } else {
        showSuccess(input2);
    }
}


//check input length


form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submit button works");

    checkRequired([username, email, password]);
    checkLength(username, 4, 15);
    checkLength(password, 6, 15);
    checkEmail(email);
    checkMatch(password, password2);
})