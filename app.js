const billAmount = document.querySelector("#bill-amount")
const userPay = document.querySelector("#user-pay")
const checkButton = document.querySelector("#check-button")
const message = document.querySelector("#error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes")


const currency = [2000,500,200,100,50,20,10,5,1];

checkButton.addEventListener("click" , function validate() {
  console.clear();

  if((billAmount.value) > 0){
    console.log(userPay > billAmount)
  
    if((userPay.value) >= (billAmount.value)){
       const amountChange = (userPay.value - billAmount.value);
       calculateChange(amountChange); 
      console.log("continue") 
    } else {
       showMessage("wanna wash plates?");
      console.log("wash plates")
    }
  }else {
    showMessage("invalid bill amount");
    console.log("invalid")
 
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