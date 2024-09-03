//  modify deposit button
document.getElementById('depositBtn').addEventListener('click',function(){
    const inputDepositNumber = document.getElementById('depositField');
    const inputDepositAddValue = inputDepositNumber.value;
    const inputDepoValueStrToNum = parseFloat(inputDepositAddValue);
    // add deposit total 

    const depositTotal = document.getElementById('depositTotal');
    const depositTotalInnerText = depositTotal.innerText;
    const depositTotalStToNum = parseFloat(depositTotalInnerText);
    
    //  add total deposit add deposit section

    const currentDeposit = inputDepoValueStrToNum + depositTotalStToNum;

    depositTotal.innerText = currentDeposit;
    
    //  emtry numnber deposti field

    inputDepositNumber.value = '';


    //  style balance section 


   const currentBalanceElement = document.getElementById('currentBalanceElement');
   const currentBalEleInnerText = currentBalanceElement.innerText;
   const currentBalEleStrToNum = parseFloat(currentBalEleInnerText);
   
  const balanceTotal = currentBalEleStrToNum + inputDepoValueStrToNum;

  currentBalanceElement.innerText = balanceTotal;

  

   
    
    
})