
const loginContainer = document.getElementById("loginContainer");
const isLoggedIn = localStorage.getItem("isLoggedIn");
var email1 = document.getElementById("loginEmail")
var vaildEmail = document.querySelector("#vaildEmail")
var vaildPassword = document.querySelector("#vaildPassword")
var password1 = document.getElementById("loginPassword")
var emailRegex = /^\S+@\S+\.\S+$/;
var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    
if(isLoggedIn === "true"){
    showAlreadyLoggedInUI();
} else {
    initLoginForm();
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

function initLoginForm(){

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        if(!email || !password){
            emailValidation()
            passwordValidation()
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

       
        const matchedUser = users.find(
            u => u.email === email && u.password === password
        );
         if((users.length === 0 )|| !(users.find(u => u.email === email ))){
            vaildEmail.innerHTML = `No account found. Please <a href="signup.html" class="text-md underline font-medium ">Sign Up</a> first`
            email1.style.backgroundColor = "rgb(238, 169, 169,0.1)"
            email1.style.borderColor = "red"
            
           return;
        }


        if(matchedUser){
            sessionStorage.setItem("isLoggedIn", "true");

            localStorage.setItem("currentUser", JSON.stringify({
                firstName: matchedUser.firstName,
                lastName: matchedUser.lastName,
                email: matchedUser.email
            }));
    
     var child=window.open("exam.html")
     window.location.replace("welcome.html")
     sessionStorage.clear()
    
}
         else {
          
            vaildPassword.textContent = "Incorrect password. Please try again."
            password1.style.backgroundColor = "rgb(238, 169, 169,0.1)"
            password1.style.borderColor = "red"
            password1.value=""
        }
    });
}


function showAlreadyLoggedInUI(){

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    loginContainer.innerHTML = `
        <div class="text-center space-y-6 py-6">
            <h2 class="text-2xl font-bold text-[#09637E]">
                You are already logged in
            </h2>

            <p class="text-[#1F2933]/70">
                Logged in as <span class="font-semibold">${currentUser?.email}</span>
            </p>

            <div class="space-y-4">
                <button id="continueBtn"
                    class="w-full bg-[#088395] cursor-pointer hover:bg-[#09637E] text-white font-medium py-3 rounded-lg transition">
                    Continue to Exam
                </button>

                <button id="switchBtn"
                    class="w-full border cursor-pointer border-[#088395] text-[#088395] hover:bg-[#EBF4F6] font-medium py-3 rounded-lg transition">
                    Switch Account
                </button>
            </div>
        </div>
    `;

    document.getElementById("continueBtn")
        .addEventListener("click", function(){
            var child=window.open("exam.html")
           
        });

    document.getElementById("switchBtn")
        .addEventListener("click", function(){
            sessionStorage.removeItem("isLoggedIn");
            localStorage.removeItem("currentUser");
            window.location.reload();
        });
}