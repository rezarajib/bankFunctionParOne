document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawValue = withdrawField.value;
    const withdrawValueString = parseFloat(withdrawValue);

    const withdraw = document.getElementById('current-withdraw');
    const withdrawInnerText = withdraw.innerText;
    const withdrawString = parseFloat(withdrawInnerText);

    withdrawField.innerText = withdrawString;
    console.log(typeof withdrawString);
    withdrawField.value = '';
    
})