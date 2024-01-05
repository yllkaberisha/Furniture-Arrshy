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