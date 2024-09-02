const checkPassword = document.getElementById("checkPassword");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const check = () => {
  if (password.value && confirmPassword.value) {
    if (password.value !== confirmPassword.value) {
      checkPassword.classList.remove("offset");
      checkPassword.classList.add("invalid");
      password.setCustomValidity("Passwords do not match");
      confirmPassword.setCustomValidity("Passwords do not match");
    } else {
      checkPassword.classList.remove("invalid");
      checkPassword.classList.add("offset");
      password.setCustomValidity("");
      confirmPassword.setCustomValidity("");
    }
  }
};
password.addEventListener("input", check);
confirmPassword.addEventListener("input", check);
