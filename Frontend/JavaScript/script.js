/* filepath: /D:/GUI Project/Frontend/JS/script.js */
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    console.log("Logging in with:", username, password);
    alert("Login successful!");
});

function forgotPassword() {
    alert('Forgot Password functionality is not implemented yet.');
}

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    console.log("Signing up with:", name, email, password);
    alert("Sign up successful!");
});