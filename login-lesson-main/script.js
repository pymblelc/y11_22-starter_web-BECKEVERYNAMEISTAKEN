let titleHello = document.getElementById("titleHello");
let helloDots = 0;

setInterval(function () {
    helloDots += 1;
    if (helloDots > 3) {
        helloDots = 0;
    }
    titleHello.innerText = "HELLO";
    for (i = 0; i < helloDots; i++) {
        titleHello.innerText += ".";
    }
}, 1000);

// When sign up button is clicked, hid the welcome page and show the sign up page
document.getElementById("btnSignUp").addEventListener("click", () => {
    console.log("Sign Up clicked");
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("signUpPage").style.display = "flex";
});

//When login button is clicked hide the sign up page and show the welcome page
document.getElementById("btnLogin").addEventListener("click", () => {
    console.log("Login clicked");
    document.getElementById("signUpPage").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";
});

//When submit button is clicked on the login page show the hello page
document.getElementById("loginSubmit").addEventListener("click", () => {
    console.log("Submit clicked");
    // TODO: Check the login info to see if the user exists
    // TODO: Show a message/alert that the login was a success/failure 
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("homePage").style.display = "flex";
});

//When submit button is clicked on the sign up page show the login page
document.getElementById("signUpSubmit").addEventListener("click", () => {
    console.log("Submit clicked");
    // TODO: Check and validate that the info is valid (email, password requirements)
    // TODO: Show a message/alert that the sign up was a success/failure
    // TODO: Store the new user
    document.getElementById("signUpPage").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";
});
