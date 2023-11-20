function validateForm(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorMessage = document.getElementById("errorMessage");

    // Simple validation
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "All fields are required!";
        return false;
    } else if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return false;
    } else {
        errorMessage.textContent = ""; // Clear any previous error message
        // Add logic for user registration here (e.g., send data to server)
        // For a real-world application, use secure registration practices.
        alert("Registration successful!");
        return true;
    }
}
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var showPasswordButton = document.querySelector("button");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordButton.textContent = "Hide Password";
    } else {
        passwordInput.type = "password";
        showPasswordButton.textContent = "Show Password";
    }
}