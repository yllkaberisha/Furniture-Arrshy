
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
    var baseURL = window.location.origin;
    window.location.href = baseURL + '/orderDetails.html';
    console.log('changed window location')
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    validateForm();
    if(errors === false) {
    changeWindowLocation();
    }})

function validateForm() {
    // Clear previous errors
    clearErrors();
}

function validateForm(){//
    errors = false;
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
    const MINIMUM_ALLOWED_VALUE = 10;
    const MAXIMUM_ALLOWED_VALUE = 50;
    // quantity
    if (quantityInput.value.trim() === '' || quantityInput.value <= 0) {
        setError(quantityInput, 'Quantity must be a positive number');
        errors=true;
    }else if (quantityInput.value < MINIMUM_ALLOWED_VALUE || quantityInput.value > MAXIMUM_ALLOWED_VALUE) {
        setError(quantityInput, `Quantity must be between ${MINIMUM_ALLOWED_VALUE} and ${MAXIMUM_ALLOWED_VALUE}`);
        errors = true;
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
   
    if(errors) {
        return
    }
    else{
        errors = false;
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

const submitButton = document.querySelector('.btn.primary-btn');
submitButton.addEventListener('click', () => {
    clearErrors(); // Clear errors before revalidating
    validateForm();
});















   