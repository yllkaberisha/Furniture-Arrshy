const visaRadio = document.getElementById('visa')
const paypalRadio = document.getElementById('paypal')
const visaImage = document.getElementById('visaImage')
const paypalImage = document.getElementById('paypalImage')

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

// Function to remove the "focus" class from both images
function removeFocus() {
    visaImage.classList.remove('focus');
    paypalImage.classList.remove('focus');
}


// visaFocus.addEventListener('click', function() {
//   visaRadio.checked = true;
//   if(visaRadio.checked) {
//   visaFocus.classList.add('focus')
//   } else {
//     visaFocus.classList.remove('focus')
//   }
// });

// paypalFocus.addEventListener('click', function() {
//   paypalRadio.checked = true;
//   paypalFocus.classList.toggle('focus')
// });

// visaRadio.addEventListener('change', function() {
//   if (visaRadio.checked) {
//   }
// });
// paypalRadio.addEventListener('change', function() {
//   if (paypalRadio.checked) {
//       paypalFocus.focus();
//   }
// });

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

    return isValid;
  }

  function submitForm() {
    if (validateForm()) {
      alert("Payment successful");
      // window.location.href = "http://127.0.0.1:5500/index.html";
      var baseURL = window.location.origin;
      window.location.href = baseURL + '/index.html';
    } else {
    }
    return false;
  }