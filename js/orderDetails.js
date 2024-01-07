const visaRadio = document.getElementById('visa')
const paypalRadio = document.getElementById('paypal')
const visaImage = document.getElementById('visaImage')
const paypalImage = document.getElementById('paypalImage')
const agreeToTerms = document.getElementById('agreeToTerms')

visaImage.addEventListener('click', function() {
    removeFocus();
    visaImage.classList.add('focus');
    visaRadio.checked = true;
});

paypalImage.addEventListener('click', function() {
    removeFocus();
    paypalImage.classList.add('focus');
    paypalRadio.checked = true;
});

visaRadio.addEventListener('click', function() {
    removeFocus();
    visaImage.classList.add('focus');
});

paypalRadio.addEventListener('click', function() {
    removeFocus();
    paypalImage.classList.add('focus');
});

function removeFocus() {
    visaImage.classList.remove('focus');
    paypalImage.classList.remove('focus');
}

function validateForm() {
    let cardName = document.getElementById("cardName").value;
    let cardNumber = document.getElementById("cardNumber").value;
    let expDate = document.getElementById("expDate").value;

    document.getElementById("cardNameError").innerHTML = "";
    document.getElementById("cardNumberError").innerHTML = "";
    document.getElementById("expDateError").innerHTML = "";

    let isValid = true;

    if (cardName.trim() === "") {
      document.getElementById("cardNameError").innerHTML = "Name on Card is required";
      isValid = false;
    }

    if (cardNumber.trim() === "") {
      document.getElementById("cardNumberError").innerHTML = "Card Number is required";
      isValid = false;
    }

    if (expDate.trim() === "") {
      document.getElementById("expDateError").innerHTML = "Expiration Date is required";
      isValid = false;
    }

    if (!agreeToTerms.checked) {
      document.getElementById("termsError").innerHTML = "Please agree to our terms and conditions";
      isValid = false;
    }
    
    if(!visaRadio.checked && !paypalRadio.checked) {
      document.getElementById("cardError").innerHTML = "Please choose one of our payment methods";
      isValid = false;
    }


    return isValid;
  }

  function submitForm() {
    if (validateForm()) {
      // Show SweetAlert for successful payment
      Swal.fire({
        title: 'Payment Successful',
        text: 'Thank you for your payment!',
        icon: 'success',
        confirmButtonText: 'Okay'
      }).then((result) => {

        var baseURL = window.location.origin;
        window.location.href = baseURL + '/index.html';
      });
    } else {
    }
    return false;
  }
  
  var termsElement = document.getElementById('terms');

    termsElement.addEventListener('click', function() {
        Swal.fire({
          title: 'Terms and Conditions of Payment',
          html: '<p>1. Payment must be made within 30 days of the invoice date.</p>' +
                '<p>2. Late payments will incur a 5% late fee.</p>' +
                '<p>3. Terms are subject to change without prior notice.</p>',
          icon: 'info',
          confirmButtonText: 'OK'
      });
    });