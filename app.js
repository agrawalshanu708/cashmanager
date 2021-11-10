const userBill = document.querySelector("#user-bill")
const userPay = document.querySelector("#user-pay")
const checkButton = document.querySelector("#check-button")
const message = document.querySelector("#error-meassage")
const noOfNotes = document.querySelectorAll(".no-of-notes")


curr = [2000,500,200,100,50,20,10,5,1] 

checkButton.addEventListener("click" , function validate(){
  message.style.display = "none";
  if( userBill.value > 0){
    if(userPay.value >= userBill.value ){
     var x = Math.floor(userBill.value);
     var y = Math.floor(userPay.value);
     var z = (y-x);
     amountChange(z);
     console.log(z)


}else{
    showMessage("Want to wash utensils")
    }

  }else{
    showMessage("Bill amount should be greater than 0")
  }
  })

  function showMessage(msg){
    message.style.display = "block"
    message.innerText = msg;
  }
 
 function amountChange(z){
  for(var i =0; i<curr.length; i++){
     var numberOfNotes = Math.floor(z/curr[i]) 
    
     z = (z % curr[i])
     noOfNotes[i].innerText = numberOfNotes;
   }
 }