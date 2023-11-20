function validateForm(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Simple validation
    if (username === "" || password === "") {
        errorMessage.textContent = "Username and password are required!";
        return false;
    } else {
        errorMessage.textContent = ""; // Clear any previous error message
        
        // Simulate authentication (replace this with server-side logic)
        if (simulateAuthentication(username, password)) {
            window.location.href = "Usuarios/solousuarios.html"; // Replace with your desired page
            return true;
        } else {
            errorMessage.textContent = "Invalid username or password.";
            return false;
        }
    }
}

// Simulate authentication function (replace this with server-side logic)
function simulateAuthentication(username, password) {
    // In a real-world scenario, you would validate against a database or another authentication system.
    // This is just a simple example for demonstration purposes.
    return username === "luismaneiro" && password === "abc1234.";
}
function logOff() {
    // Add logic for log off action here (e.g., redirect to login page)
    // For a real-world application, you may need to perform additional actions.
    alert("Sesión Cerrada Correctamente!");
    // Redirect to the login page or perform other actions upon log off.
    window.location.href = "../login.html";
}
