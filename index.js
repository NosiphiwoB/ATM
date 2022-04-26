
let balance = 0;

const myDeposit = (event) =>{
    event.preventDefault();
let Deposit =document.getElementById('deposit').value;
 

if(Deposit < 0) {
    document.getElementById('msg').innerHTML=`<p style='color:red'>insert valid amount</p>`;
 }else {
     balance  += parseInt(Deposit, 10);
     document.getElementById('displayBalance').innerHTML = balance;
 }
  reset();
}


const myWithdrawal = (event) => {
    event.preventDefault();
    let withdrawal = document.getElementById('withdraw').value
     

if(withdrawal > balance || balance < 0) {
 document.getElementById('msg1').innerHTML=`<p style='color:red'>insuffient funds</p>`;
} else {
    balance -= parseInt(withdrawal, 10);
    document.getElementById('displayBalance').innerHTML = balance;
}
reset();
}

const reset = () => {
    document.getElementById("deposit").value = " ";
    document.getElementById("withdraw").value = " ";
}
 