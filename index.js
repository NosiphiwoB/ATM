var isShowLogin = false
var isShowRegister = false
const loginButton = document.getElementById("login-button");
const loginForm = document.getElementById('login-form') 
const registerButton = document.getElementById('register-button')
const registerForm = document.getElementById('register-form')


let array = [];
function accountNumber () {
    return Math.floor(10000 + Math.random() * 90000);
};

function register () {
    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;

    const inform = {
        accountNum: accountNumber(),
        userName: userName,
        userEmail: userEmail,
        balance: 0,
    };
    array.push(inform);
    let data = localStorage.getItem("information") || "[]";
    let myData = [...JSON.parse(data), inform] 

    return localStorage.setItem("information",JSON.stringify(myData));
}


function showLoginForm() {
    loginForm.style.display = "block"
    registerButton.style.display = "none"     
    isShowLogin = !isShowLogin
};

function showRegisterForm() {
    loginButton.style.display = "none"
    registerForm.style.display = "block"     
    isShowLogin = !isShowLogin

}

registerForm
if(isShowRegister == false){
    registerForm.style.display = "none"
}


if(isShowLogin == false){
    loginForm.style.display = "none"
 }






// let balance = 0;

// const myDeposit = (event) =>{
//     event.preventDefault();
// let Deposit =document.getElementById('deposit').value;
 

// if(Deposit < 0) {
//     document.getElementById('msg').innerHTML=`<p style='color:red'>insert valid amount</p>`;
//  }else {
//      balance  += parseInt(Deposit, 10);
//      document.getElementById('displayBalance').innerHTML = balance;
//  }
//   reset();
// }


// const myWithdrawal = (event) => {
//     event.preventDefault();
//     let withdrawal = document.getElementById('withdraw').value
     

// if(withdrawal > balance || balance < 0) {
//  document.getElementById('msg1').innerHTML=`<p style='color:red'>insuffient funds</p>`;
// } else {
//     balance -= parseInt(withdrawal, 10);
//     document.getElementById('displayBalance').innerHTML = balance;
// }
// reset();
// }

// const reset = () => {
//     document.getElementById("deposit").value = " ";
//     document.getElementById("withdraw").value = " ";
// }
 