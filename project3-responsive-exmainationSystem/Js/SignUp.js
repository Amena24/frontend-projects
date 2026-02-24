
var firstName1 = document.getElementById("firstName")
var lastName1 = document.getElementById("lastName")
var email1 = document.getElementById("email")
var password1 = document.getElementById("password")
var confirmPassword1 = document.getElementById("confirmPassword")
var vaildLastName = document.querySelector("#vaildLastName")
var vaildFirstName = document.querySelector("#vaildFirstName")
var vaildEmail = document.querySelector("#vaildEmail")
var vaildPassword = document.querySelector("#vaildPassword")


var nameRegex = /^[A-Za-z]{2,}$/;
var emailRegex = /^\S+@\S+\.\S+$/;
var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

const form = document.getElementById("registerForm");

function firstNameValidation() {
    if (firstName1.value == "") {
        vaildFirstName.textContent = "First name is required"
        firstName1.style.backgroundColor = "rgb(238, 169, 169,0.1)"
        firstName1.style.borderColor = "red"

    }
    else if (!nameRegex.test(firstName1.value)) {

        vaildFirstName.textContent = "Only letters allowed,minimum 2 characters"
        firstName1.style.backgroundColor = "rgb(238, 169, 169,0.1)"
        firstName1.style.borderColor = "red"
    }
    else {
        vaildFirstName.textContent = ""
        firstName1.style.backgroundColor = ""
        firstName1.style.borderColor = ""
    }
}
function lastNameValidation() {
    if (lastName1.value == "") {
        vaildLastName.textContent = "Last name is required"
        lastName1.style.backgroundColor = "rgb(238, 169, 169,0.1)"
        lastName1.style.borderColor = "red"
    }
    else if (!nameRegex.test(lastName1.value)) {
        vaildLastName.textContent = "Only letters allowed,minimum 2 characters"
        lastName1.style.backgroundColor = "rgb(238, 169, 169,0.1)"
        lastName1.style.borderColor = "red"
    }
    else {
        vaildLastName.textContent = ""
        lastName1.style.backgroundColor = ""
        lastName1.style.borderColor = ""
    }
}
function emailValidation() {
    if (email1.value == "") {
        vaildEmail.textContent = "Email is required"
        email1.style.backgroundColor = "rgb(238, 169, 169,0.1)"
        email1.style.borderColor = "red"
    }
    else if (!emailRegex.test(email1.value)) {
        vaildEmail.textContent = "Please enter a valid email address"
        email1.style.backgroundColor = "rgb(238, 169, 169,0.1)"
        email1.style.borderColor = "red"

    }
    else {
        vaildEmail.textContent = ""
        email1.style.backgroundColor = ""
        email1.style.borderColor = ""

    }
}
function passwordValidation() {
    if (password1.value == "") {
        vaildPassword.textContent = "Password is required"
        password1.style.backgroundColor = "rgb(238, 169, 169,0.1)"
        password1.style.borderColor = "red"
    }
    else if (password1.value.length < 8) {
        vaildPassword.textContent = "Password must be at least 8 characters"
        password1.style.backgroundColor = "rgb(238, 169, 169,0.1)"
        password1.style.borderColor = "red"

    }
    else if (!passwordRegex.test(password1.value)) {
        vaildPassword.textContent = "Require uppercase, lowercase, and a number"
        password1.style.backgroundColor = "rgb(238, 169, 169,0.1)"
        password1.style.borderColor = "red"

    }

    else {
        vaildPassword.textContent = ""
        password1.style.backgroundColor = ""
        password1.style.borderColor = ""


    }

}
function confirmPasswordValidation() {
    if (confirmPassword1.value == "") {
        vaildConfirmPassword.textContent = "Please confirm your Password."
        confirmPassword1.style.backgroundColor = "rgb(238, 169, 169,0.1)"
        confirmPassword1.style.borderColor = "red"
    }
    else if (password1.value !== confirmPassword1.value) {
        vaildConfirmPassword.textContent = "Passwords do not match"
        confirmPassword1.style.backgroundColor = "rgb(238, 169, 169,0.1)"
        confirmPassword1.style.borderColor = "red"
    }
    else {
        vaildConfirmPassword.textContent = ""
        confirmPassword1.style.backgroundColor = ""
        confirmPassword1.style.borderColor = ""
    }


}
form.addEventListener("submit", function (e) {
    e.preventDefault();
var firstName = document.getElementById("firstName").value.trim();
var lastName = document.getElementById("lastName").value.trim();
var email = document.getElementById("email").value.trim();
var password = document.getElementById("password").value;
var confirmPassword = document.getElementById("confirmPassword").value;


    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        firstNameValidation()
        lastNameValidation()
        emailValidation()
        passwordValidation()
        confirmPasswordValidation()

        return;
    }



    // Save user
    const user = {
        firstName,
        lastName,
        email,
        password
    };


    const users = JSON.parse(localStorage.getItem("users")) || [];


    const emailExists = users.find(u => u.email === email);
    if (emailExists) {
        vaildEmail.innerHTML = `This email is already registered. Please <a href="login.html" class="  text-[#09637E] text-md hover:underline text-bold ">Log in</a>`
        return;
    }


   const newUser = { firstName, lastName, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

   
    window.location.href = "login.html";
    



});