function showSignup() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'flex';
}

function showLogin() {
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'flex';
}

function signup() {
    let name = document.getElementById('signupName').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }
    if (!email.includes("@gmail.com")) {
        alert("Email must contain '@gmail.com'!");
        return;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userExists = users.find(user => user.email === email);

    if (userExists) {
        alert("User already registered! Please login.");
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! You can now log in.");
    showLogin();
}

function login() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(user => user.email === email && user.password === password);
    if(email === "" || email === " ")
    {
        alert("Please fill all fields!");
    }
    else if (!user) {
        alert("User not registered! Please sign up first.");
        return;
    }

    alert("Login successful! Welcome, " + user.name);

    setTimeout(() => {
        window.location.href = "Home_page.html";
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordInput = document.getElementById("loginPassword"); 
    let icon = this.querySelector("i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
});
});
document.addEventListener("DOMContentLoaded", function () {
document.getElementById("toggleSignupPassword").addEventListener("click", function () {
    let passwordInput = document.getElementById("signupPassword"); // Corrected ID
    let icon = this.querySelector("i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
});
});
