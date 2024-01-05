
const form = document.querySelector('#orderForm');
let firstNameInput= document.querySelector('#firstName');
let lastNameInput= document.querySelector('#lastName');
let emailInput= document.querySelector('#email');
let productTypeInput= document.querySelector('#tableType');
let quantityInput= document.querySelector('#guestNumber');
let colorInput= document.querySelector('#Color');
let noteInput= document.querySelector('#note');

let errors = false;

function changeWindowLocation() {
    window.location.href='http://127.0.0.1:5500/orderDetails.html'
}
function validateForm() {
    // Clear previous errors
    clearErrors();
}

function validateForm(){//
    //firstName
    if(firstNameInput.value.trim()===''||firstNameInput.value.trim()==null){
        setError(firstNameInput, 'Name can not be empty');
        errors=true;
    } 

    // lastName
    if (lastNameInput.value.trim() === '' || lastNameInput.value.trim() === null) {
        setError(lastNameInput, 'Last Name can not be empty');
        errors=true;
    }
    

    // email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        setError(emailInput, 'Invalid email address');
        errors=true;
    }
    

    // productType
    if (productTypeInput.value === 'Choose') {
        setError(productTypeInput, 'Please select a product type');
        errors=true;
    }
  
    // quantity
    if (quantityInput.value.trim() === '' || quantityInput.value <= 0) {
        setError(quantityInput, 'Quantity must be a positive number');
        errors=true;
    }
   

    // color
    if (colorInput.value === 'Choose') {
        setError(colorInput, 'Please select a color');
        errors=true;
    }
    

    // note
    if (noteInput.value.trim() === '' || noteInput.value.trim() === null) {
        setError(noteInput, 'Note can not be empty');
        errors=true;
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
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach((element) => {
        element.classList.remove('error');
        const paragraph = element.querySelector('p');
        if (paragraph) {
            paragraph.textContent = '';
        }
    });
}


form.addEventListener('submit', (event)=>{
    event.preventDefault();
   
    validateForm();
    if(errors === false) {
    changeWindowLocation();
    }
   });
   

const submitButton = document.querySelector('.btn.primary-btn');
submitButton.addEventListener('click', validateForm);
submitButton.addEventListener('click', clearErrors);














   