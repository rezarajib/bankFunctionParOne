//  this addEventlistender 
document.getElementById('btnSubmit').addEventListener('click',function(){
    // email field 
    const emailField = document.getElementById('userEmail');
    const emailFieldValue = emailField.value;
    // password Field
    const passwordField = document.getElementById('userPassword');
    const passwordFieldValue = passwordField.value;
    //  use if else conditon email and password filed 
    if(emailFieldValue === 'reza11@gmail.com' && passwordFieldValue === '123'){
        window.location.href = 'index.html';
    }
    else{
        alert("hoi nai tho");
    }
})
// document.getElementById('btnSubmit').addEventListener('click',function(){
//     const emailField = document.getElementById('userEmail');
//     const emailFieldValue = emailField.value;
//     const passwordField = document.getElementById('userPassword');
//     const passwordFieldValue = passwordField.value;
//     if(emailFieldValue === 'rajib33@gamil.com' && passwordFieldValue === '123'){
//         window.location.href = 'index.html';
//     }
//     else{
//         alert("bokachuda");
//     }

    
// })