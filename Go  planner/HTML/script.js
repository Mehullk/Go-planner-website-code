document.addEventListener("DOMContentLoaded", function () {
    const signupCheckbox = document.getElementById("signupCheckbox");
    const loginCheckbox = document.getElementById("loginCheckbox");

    signupCheckbox.addEventListener("change", function () {
        if (signupCheckbox.checked) {
            window.location.href = "signup_login.html";
        }
    });

    loginCheckbox.addEventListener("change", function () {
        if (loginCheckbox.checked) {
            window.location.href = "signup_login.html";
        }
    });
});
