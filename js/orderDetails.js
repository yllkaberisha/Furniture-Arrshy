const visaRadio = document.getElementById("visa");
const paypalRadio = document.getElementById("paypal");
const visaImage = document.getElementById("visaImage");
const paypalImage = document.getElementById("paypalImage");
const agreeToTerms = document.getElementById("agreeToTerms");

visaImage.addEventListener("click", function () {
  removeFocus();
  visaImage.classList.add("focus");
  visaRadio.checked = true;
});

paypalImage.addEventListener("click", function () {
  removeFocus();
  paypalImage.classList.add("focus");
  paypalRadio.checked = true;
});

visaRadio.addEventListener("click", function () {
  removeFocus();
  visaImage.classList.add("focus");
});

paypalRadio.addEventListener("click", function () {
  removeFocus();
  paypalImage.classList.add("focus");
});

function removeFocus() {
  visaImage.classList.remove("focus");
  paypalImage.classList.remove("focus");
}

function validateForm() {
  let cardName = document.getElementById("cardName").value;
  let cardNumber = document.getElementById("cardNumber").value;
  let expDate = document.getElementById("expDate").value;
  let cvv = document.getElementById("cvv").value;

  document.getElementById("cardNameError").innerHTML = "";
  document.getElementById("cardNumberError").innerHTML = "";
  document.getElementById("expDateError").innerHTML = "";
  document.getElementById("cvvError").innerHTML = "";
  document.getElementById("termsError").innerHTML = "";
  document.getElementById("cardError").innerHTML = "";

  let isValid = true;

  // check if user has selected payment method
  if (!visaRadio.checked && !paypalRadio.checked) {
    document.getElementById("cardError").innerHTML =
      "Please choose one of our payment methods";
    isValid = false;
  }

  // Validate Name
  if (!/^[a-zA-Z]+\s+[a-zA-Z]+$/.test(cardName)) {
    document.getElementById("cardNameError").innerHTML =
      "Enter a valid name and surname";
    isValid = false;
  }

  // Validate Credit Card Number
  if (!/^\d{16}$/.test(cardNumber)) {
    document.getElementById("cardNumberError").innerHTML =
      "Enter a valid 16-digit card number";
    isValid = false;
  }

  // Validate CVV
  if (!/^\d{3}$/.test(cvv)) {
    document.getElementById("cvvError").innerHTML = "Enter a valid 3-digit CVV";
    isValid = false;
  }

  // Validate Expiration Date
  if (!/^\d{2}\/\d{2}$/.test(expDate)) {
    document.getElementById("expDateError").innerHTML =
      "Enter a valid expiration date (MM/YY)";
    isValid = false;
  } else {
    // Check if the month is greater than 12
    const [month, year] = expDate.split("/");
    if (parseInt(month, 10) > 12) {
      document.getElementById("expDateError").innerHTML =
        "Invalid month in the expiration date";
      isValid = false;
    }
  }

  // Check if user agrees to terms and conditions
  if (!agreeToTerms.checked) {
    document.getElementById("termsError").innerHTML =
      "Please agree to our terms and conditions";
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
  