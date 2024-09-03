document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValue = withdrawField.value;
    const withdrawFiValStrToNum = parseFloat(withdrawFieldValue);
    const currentWithdraw = document.getElementById('current-withdraw');
    const currentWithdrawInnerText = currentWithdraw.innerText;
    const currentWithdrawStrToNum = parseFloat(currentWithdrawInnerText);
    const totalWithdraw = withdrawFiValStrToNum + currentWithdrawStrToNum;
    currentWithdraw.innerText = totalWithdraw;

    //  addd total balance and witdraw

    const balacneNegativeToWithdraw = document.getElementById('currentBalanceElement');
    const balanceAddInnerText = balacneNegativeToWithdraw.innerText;
    const balacneStrToNumber = parseFloat(balanceAddInnerText);
    const newBalanceTotal = balacneStrToNumber - currentWithdrawStrToNum;
    balacneNegativeToWithdraw.innerText = newBalanceTotal;
    
    withdrawField.value = '';

    
    
})
// document.getElementById('btn-withdraw').addEventListener('click',function(){
//     const withdrawField = document.getElementById('withdraw-field');
//     const withdrawValue = withdrawField.value;
//     const withdrawValueString = parseFloat(withdrawValue);

//     const withdraw = document.getElementById('current-withdraw');
//     const withdrawInnerText = withdraw.innerText;
//     const withdrawString = parseFloat(withdrawInnerText);

//     withdrawField.innerText = withdrawString;
//     console.log(typeof withdrawString);
//     withdrawField.value = '';
    
// })