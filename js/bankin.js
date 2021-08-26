// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }

// const first = doubleIt(5);
// const second = doubleIt(7);
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';
    return inputAmount;
}
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalAmountText = totalElement.innerText;
    const totalAmount = parseFloat(totalAmountText);

    totalElement.innerText = totalAmount + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const currentBalanceText = balanceTotal.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);
    return currentBalanceAmount;// value paite ... value return korse function
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const currentBalanceAmount = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = currentBalanceAmount + amount;
    }
    else {
        balanceTotal.innerText = currentBalanceAmount - amount;
    }
}
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

    ///age id dhore dhoira nia ashte hobe naile to function call koreo variable pabona and condition check korteo dhore nie asha lage

});
document.getElementById('withdraw-button').addEventListener('click', function () {
    //condition e dhukle function e  jabe condition e na dhukle function e jabena 
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance(); //function ta ekta variable e dite hoise cz condition check korte hoito function ta ke paite hobe
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-amount', withdrawAmount);
        updateBalance(withdrawAmount, false);

    }
    else {
        alert('you are a fokira');
    }
});
