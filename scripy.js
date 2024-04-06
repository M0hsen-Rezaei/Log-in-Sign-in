//Defined containers & buttons
const formLogin = document.getElementById("form-login")
const formSignin = document.getElementById("form-signin")
const containerLogin = document.getElementById("container-login")
const containerSignin = document.getElementById("container-signin")
const btnLogin = document.getElementById("btn-login")
const btnSignin = document.getElementById("btn-signin")
const btnSubmitLogin = document.getElementById("submit-login")
const btnSubmitSignin = document.getElementById("submit-signin")
//Defined inputs
const loginEmail = document.getElementById("login-email")
const loginUsername = document.getElementById("login-username")
const loginPassword = document.getElementById("login-password")
const loginPassword2 = document.getElementById("login-password2")
const signinUsername = document.getElementById("signin-username")
const signinPassword = document.getElementById("signin-password")

//Changing the login and sign in page
const activateLogin = function(){
    btnLogin.classList.add("btn-activate")
    btnSignin.classList.remove("btn-activate")
    containerSignin.classList.add("container-hidden")
    containerLogin.classList.remove("container-hidden")
}
const activateSignin = function(){
    btnSignin.classList.add("btn-activate")
    btnLogin.classList.remove("btn-activate")
    containerLogin.classList.add("container-hidden")
    containerSignin.classList.remove("container-hidden")
}
btnLogin.addEventListener("click" , activateLogin)
btnSignin.addEventListener("click" , activateSignin)

//click button submit
btnSubmitLogin.addEventListener("click" , (event)=>{
    event.preventDefault()
    checkInputs()
})
btnSubmitSignin.addEventListener("click" , (event)=>{
    event.preventDefault()
})

//error handling
const errorInput = function(input , message){
    const error = input.nextElementSibling
    error.innerText = message
}

//check input
const checkInputs = function(){
    const emailLoginValue = loginEmail.value.trim()
    const usernameLoginValue = loginUsername.value.trim()
    const passwordLoginValue = loginPassword.value.trim()
    const password2LoginValue = loginPassword2.value.trim()
    const usernameSigninValue = signinUsername.value.trim()
    const passwordSigninValue = signinPassword.value.trim()

    if(emailLoginValue == ""){
        errorInput(loginEmail , "pleas insert email")
        loginEmail.classList.remove("success-input")
        loginEmail.classList.add("eror-input")
    }else{
        errorInput(loginEmail , "")
        loginEmail.classList.remove("eror-input")
        loginEmail.classList.add("success-input")
    }
    if(usernameLoginValue == ""){
        errorInput(loginUsername , "pleas insert username")
        loginUsername.classList.remove("success-input")
        loginUsername.classList.add("eror-input")
    }else{
        errorInput(loginUsername , "")
        loginUsername.classList.remove("eror-input")
        loginUsername.classList.add("success-input")
    }
    if(passwordLoginValue == ""){
        errorInput(loginPassword , "pleas insert password")
        loginPassword.classList.remove("success-input")
        loginPassword.classList.add("eror-input")
    }else{
        errorInput(loginPassword , "")
        loginPassword.classList.remove("eror-input")
        loginPassword.classList.add("success-input")
    }
    if(password2LoginValue == ""){
        errorInput(loginPassword2 , "pleas insert confirm password")
        loginPassword2.classList.remove("success-input")
        loginPassword2.classList.add("eror-input")
    }else if(password2LoginValue != passwordLoginValue){
        errorInput(loginPassword2 , "Please enter the password correctly")
        loginPassword2.classList.remove("success-input")
        loginPassword2.classList.add("eror-input")
    }
    else{
        errorInput(loginPassword2 , "")
        loginPassword2.classList.remove("eror-input")
        loginPassword2.classList.add("success-input")
    }
}

