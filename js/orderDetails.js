function validateForm() {
    const cardName = document.getElementById("cardName").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const expDate = document.getElementById("expDate").value;

    if (cardName === "" || cardNumber === "" || expDate === "") {
      alert("All fields are required");
      return false;
    }

    return true; 
}
