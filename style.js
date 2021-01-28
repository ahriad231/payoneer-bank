// login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
})
// deposite button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositNumber=getInputNumber("depositAmount")
  upadateSpanText("currentDeposit", depositNumber)
  upadateSpanText("currentBalance", depositNumber);


  document.getElementById("depositAmount").value = "";
})
function upadateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const total = depositNumber + currentNumber;
  document.getElementById(id).innerText = total;

}

// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  withdrawNumber=getInputNumber("withdrawAmount");
  console.log(withdrawNumber)


})
function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;

}