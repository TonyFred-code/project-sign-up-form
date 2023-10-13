const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorMsgDisplay = document.querySelector(".wrong-match-msg");
const form = document.querySelector("form");
const submitBtn = document.querySelector ("form button");

confirmPassword.addEventListener("keyup", checkPassword);

function checkPassword() {
    const pass = password.value;
    const confirmPass = confirmPassword.value;

    if (pass !== confirmPass) {
        errorMsgDisplay.style.display = "block";
        confirmPassword.validity.valid = false;
    } else {
        errorMsgDisplay.style.color = "green";
        errorMsgDisplay.style.display = "block";
        errorMsgDisplay.textContent = "Passwords match";
        confirmPassword.validity.valid = true;
    }

    console.log(pass, confirmPass);
}