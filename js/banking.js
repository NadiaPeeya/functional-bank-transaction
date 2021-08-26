
//inputfield work for both
function getInputField(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputToNumber = parseFloat(inputAmountText);
    inputField.value = '';
    return inputToNumber;
}
function getTotalAmount(inputId, amount) {
    const previousAmount = document.getElementById(inputId);
    const previousAmountText = previousAmount.innerText;
    const previousAmountNumber = parseFloat(previousAmountText);
    previousAmount.innerText = previousAmountNumber + amount;
}
function getTotalBalance() {
    const currentBalance = document.getElementById('balance-total');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);
    return currentBalanceAmount;
}
function getUpdateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const currentBalanceAmount = getTotalBalance();
    if (isAdd == true) {
        balanceTotal.innerText = currentBalanceAmount + amount;
    }
    else {
        balanceTotal.innerText = currentBalanceAmount - amount;
    }

}

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputField('deposit-input');
    if (depositAmount > 0) {
        getTotalAmount('deposit-total', depositAmount);
        console.log(depositAmount);
        getUpdateBalance(depositAmount, true);
    }
    else {
        alert('please enter a valid amount');
    }

});
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputField('withdraw-input');
    const currentBalanceAmount = getTotalBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalanceAmount) {
        getTotalAmount('withdraw-amount', withdrawAmount);
        console.log(withdrawAmount);
        getUpdateBalance(withdrawAmount, false);
    }
    else {
        alert('please enter a valid amount')
    }

})

