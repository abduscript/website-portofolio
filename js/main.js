// let firstNameInput = document.getElementById("first-name-input");
// let firstNameError = document.getElementById("first-name-error");
// let emptyFirstNameError = document.getElementById("empty-first-name");

// let lastNameInput = document.getElementById("last-name-input");
// let lastNameError = document.getElementById("last-name-error");
// let emptyLastNameError = document.getElementById("empty-last-name");

// let phoneInput = document.getElementById("phone");
// let phoneError = document.getElementById("phone-error");
// let emptyPhoneError = document.getElementById("empty-phone");

// let passwordInput = document.getElementById("password");
// let passwordError = document.getElementById("password-error");
// let emptyPasswordError = document.getElementById("empty-password");

// let verifyPasswordInput = document.getElementById("verify-password");
// let verifyPasswordError = document.getElementById("verify-password-error");
// let emptyVerifyPasswordError = document.getElementById("empty-verify-password");

// let submitButton = document.getElementById("submit-button");

// let validClasses = document.getElementById("valid");

// let invalidClasses = document.getElementById("error");
// Initialize EmailJS
emailjs.init("YOUR_USER_ID");

const firstNameInput = document.getElementById("first-name-input");
const lastNameInput = document.getElementById("last-name-input");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const verifyPasswordInput = document.getElementById("verify-password");
const submitButton = document.getElementById("submit-button");

// Error Elements
const firstNameError = document.getElementById("first-name-error");
const emptyFirstNameError = document.getElementById("empty-first-name");
const lastNameError = document.getElementById("last-name-error");
const emptyLastNameError = document.getElementById("empty-last-name");
const emailError = document.getElementById("email-error");
const emptyEmailError = document.getElementById("empty-email");
const phoneError = document.getElementById("phone-error");
const emptyPhoneError = document.getElementById("empty-phone");
const passwordError = document.getElementById("password-error");
const emptyPasswordError = document.getElementById("empty-password");
const verifyPasswordError = document.getElementById("verify-password-error");
const emptyVerifyPasswordError = document.getElementById("empty-verify-password");

// // Validation Function
// function validateForm() {
//     let isValid = true;

//     // Clear existing error messages
//     document.querySelectorAll(".error-message").forEach((el) => el.classList.add("hide"));

//     // Check if fields are empty or invalid
//     if (!firstNameInput.value.trim()) {
//         emptyFirstNameError.classList.remove("hide");
//         isValid = false;
//     }
//     if (!lastNameInput.value.trim()) {
//         emptyLastNameError.classList.remove("hide");
//         isValid = false;
//     }
//     if (!emailInput.value.trim()) {
//         emptyEmailError.classList.remove("hide");
//         isValid = false;
//     }
//     if (phoneInput.value.length !== 12) {
//         phoneError.classList.remove("hide");
//         isValid = false;
//     }
//     if (!passwordInput.value || passwordInput.value.length < 8) {
//         passwordError.classList.remove("hide");
//         isValid = false;
//     }
//     if (passwordInput.value !== verifyPasswordInput.value) {
//         verifyPasswordError.classList.remove("hide");
//         isValid = false;
//     }

//     return isValid;
// }

// // Send Data with EmailJS
// function sendEmail() {
//     const templateParams = {
//         firstName: firstNameInput.value,
//         lastName: lastNameInput.value,
//         email: emailInput.value,
//         phone: phoneInput.value,
//         password: passwordInput.value,
//     };

//     emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
//         .then((response) => {
//             console.log("Email sent successfully!", response.status, response.text);
//             alert("Registration successful!");
//         })
//         .catch((error) => {
//             console.error("Failed to send email.", error);
//             alert("Failed to send email. Please try again.");
//         });
// }

// // Handle Form Submission
// submitButton.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent form from submitting in the traditional way

//     if (validateForm()) {
//         sendEmail();
//     } else {
//         console.log("Form validation failed.");
//     }
// });


































































