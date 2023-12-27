document.addEventListener("DOMContentLoaded", function() {
    const form = document.forms.order;

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Perform validation
        const firstName = form.elements["First Name"].value.trim();
        const lastName = form.elements["Last Name"].value.trim();
        const email = form.elements["Email"].value.trim();

        // Simple validation for first name and last name (non-empty)
        if (firstName === "") {
            alert("Please enter your first name.");
            return;
        }

        if (lastName === "") {
            alert("Please enter your last name.");
            return;
        }

        // Email validation using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If all validation passes, you can submit the form or perform other actions
        alert("Form submitted successfully!");
        // Uncomment the following line to submit the form
        // form.submit();
    });
});