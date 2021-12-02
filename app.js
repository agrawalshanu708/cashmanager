const billAmount = document.querySelector("#bill-amount")
const userPay = document.querySelector("#user-pay")
const checkButton = document.querySelector("#check-button")
const message = document.querySelector("#error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes")


const currency = [2000,500,200,100,50,20,10,5,1];

checkButton.addEventListener("click" , function validate() {

  if(billAmount.value > 0){
    if(userPay.value > billAmount.value){
      const amountChange = userPay.value - billAmount.value;
      calculateChange(amountChange);  
    } else {
      showMessage("wanna wash plates");
    }
  }else {
    showMessage("invalid bill amount");
  }
});




  function showMessage(msg){
    message.style.display = "block"
    message.innerText = msg;
  }
 


 function calculateChange(amountChange){
  for(let i =0; i<currency.length; i++){
  const numberOfNotes = Math.trunc(amountChange / currency[i]);
amountChange %= currency[i];
noOfNotes[i].innerText = numberOfNotes ;
}}