/*var form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
})*/














const form = document.querySelector('#orderForm');
let firstNameInput= document.querySelector('#firstName');
let lastNameInput= document.querySelector('#lastName');
let emailInput= document.querySelector('#email');
let productTypeInput= document.querySelector('#tableType');
let quantityInput= document.querySelector('#guestNumber');
let colorInput= document.querySelector('#Color');
let noteInput= document.querySelector('#note');


form.addEventListener('submit', (event)=>{
 event.preventDefault();

 validateForm();
});


function validateForm(){//
    //firstName
    if(firstNameInput.value.trim()===''||firstNameInput.value.trim()==null){
        setError(firstNameInput, 'Name can not be empty');
    }
    
    // lastName
    if (lastNameInput.value.trim() === '' || lastNameInput.value.trim() === null) {
        setError(lastNameInput, 'Last Name can not be empty');
    }

    // email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        setError(emailInput, 'Invalid email address');
    }

    // productType
    if (productTypeInput.value === 'Choose') {
        setError(productTypeInput, 'Please select a product type');
    }

    // quantity
    if (quantityInput.value.trim() === '' || quantityInput.value <= 0) {
        setError(quantityInput, 'Quantity must be a positive number');
    }

    // color
    if (colorInput.value === 'Choose') {
        setError(colorInput, 'Please select a color');
    }

    // note
    if (noteInput.value.trim() === '' || noteInput.value.trim() === null) {
        setError(noteInput, 'Note can not be empty');
    }
    

    //lastName
    //email
    //productInput
    //quantity
    //color
    //note
}

function setError(element,errorMessage){
    const parent = element.parentElement;
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}


const submitButton = document.querySelector('.btn.primary-btn');
submitButton.addEventListener('click', validateForm);















   