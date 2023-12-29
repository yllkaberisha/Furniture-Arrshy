const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const productType = document.getElementById('tableType');
const quantity = document.getElementById('guestNumber');
const color = document.getElementById('Color');
const note = document.getElementById('note');


//show error function
function showError(input, message){
    const formgroup= input.parentElement;
    formgroup.className ='form__group error' ;
    const small = formgroup.querySelector('small');
    small.innerText= message;

}
//show sucess function
function showSuccess(input){
    formgroup= input.parentElement;
    formgroup.className ='form__group success' ;
}
//email function
function checkEmail(input){
    var re = /\S+@\S+\.\S+/;
 if(re.test(input.value.trim())){
    showSuccess(input);
 }else{
    showError(input, 'Email is not valid');
 }
}
// check required

function checkRequired(inputArray){
    inputArray.forEach(function(input){
     if(input.value===''){
        showError(input, `${getFieldName(input)} is Reequired `)
     }
    });

}
//check length
function checkLength(input, min,max){
    if(input.value.length<min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    
    }else if(input.value.length>max){
    showError(input, `${getFieldName(input)} must be at less than ${max} characters`)
}
else{
    showSuccess(input);
}
}
// get field name 
function  getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

// Even listeners
form.addEventListener( 'submit', function(e){
    e.preventDefault();
    checkRequired([firstName,lastName,email,productType,color,quantity,note]);
    checkLength(note, 10, 20);
    checkEmail(email);
});















   