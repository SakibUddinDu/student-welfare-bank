const loginButton = document.getElementById("loginBtn");
loginButton.addEventListener("click", function () {
  // console.log("Amake Click");
  const loginArea = document.getElementById("login-area");
  loginArea.remove();
  // loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

//deposit button event-handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("deposit-amount").value; //inputer value,onno khetre innerText
  console.log("click")
  const depositNumber = parseFloat(depositAmount);

  // const currentDeposit = document.getElementById("current-deposit")
  //   .innerText;
  // currentDepositNumber = parseFloat(currentDeposit);
  // const totalDeposit = depositNumber + currentDepositNumber;
  // document.getElementById("current-deposit").innerText = totalDeposit;
  // //  currentDeposit =totalDeposit; ?
  updateSpanText("current-deposit", depositNumber);
  updateSpanText("current-balance", depositNumber);
  //
  document.getElementById("deposit-amount").value = "";
  // depositAmount = "";

//   withdraw button event-handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    console.log("click")

})

// withdraw button event-handler


  function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
  }







  //     const withdrawAmount = document.getElementById("withdraw-amount").value;
//     const withdrawNumber = parseFloat(withdrawAmount);
//     console.log(withdrawNumber);
    

//   updateWithdrawSpanText("current-withdraw", withdrawNumber);
//   updateWithdrawSpanText("current-balance", withdrawNumber);

//   document.getElementById("withdraw-amount").value = "";


  //   function updateWithdrawSpanText(id, withdrawNumber) {
//     const current = document.getElementById(id).innerText;
//     const currentNumber = parseFloat(current);
//     const totalAmount = withdrawNumber + currentNumber;
//     document.getElementById(id).innerText = totalAmount;
//   }
});