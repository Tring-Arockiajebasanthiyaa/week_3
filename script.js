document.addEventListener("DOMContentLoaded", () => {
    const signInBtn = document.getElementById("signInBtn");
    const signUpBtn = document.getElementById("signUpBtn");
    const signInForm = document.getElementById("signInForm");
    const signUpForm = document.getElementById("signUpForm");

    signInBtn.addEventListener("click", () => {
        signInForm.classList.remove("d-none");
        signUpForm.classList.add("d-none");
        signInBtn.classList.add("btn-warning");
        signUpBtn.classList.remove("btn-warning");
        signUpBtn.classList.add("btn-secondary");
    });

    signUpBtn.addEventListener("click", () => {
        signUpForm.classList.remove("d-none");
        signInForm.classList.add("d-none");
        signUpBtn.classList.add("btn-warning");
        signInBtn.classList.remove("btn-warning");
        signInBtn.classList.add("btn-secondary");
    });

    document.getElementById("switchToSignUp").addEventListener("click", (e) => {
        e.preventDefault();
        signUpBtn.click();
    });

    document.getElementById("switchToSignIn").addEventListener("click", (e) => {
        e.preventDefault();
        signInBtn.click();
    });

    signInForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("signInEmail").value;
        const password = document.getElementById("signInPassword").value;

        if (!validateEmail(email)) {
            alert("Enter a valid email.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        alert("Sign In Successful!");
    });

    signUpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("signUpName").value;
        const email = document.getElementById("signUpEmail").value;
        const password = document.getElementById("signUpPassword").value;
        const terms = document.getElementById("terms").checked;

        if (!name) {
            alert("Name is required.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Enter a valid email.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        if (!terms) {
            alert("You must agree to the terms.");
            return;
        }

        alert("Sign Up Successful!");
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
