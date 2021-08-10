const cBase = [
    ["A dog is an ...", "animal"],
    ["6 * 2 + 1 = ", "13"],
    ["88 + 0.5 = ", "88.5"],
    ["7 / 2 = ", "3.5"],
    ["0 * 5 + 7 = ", "7"],
];

let answer = "";

function submitForm(e) {
    e.preventDefault();

    const cForm = document.querySelector("#form-wrapper #form-c");
    const cLabel = document.querySelector("#form-wrapper #form-c-label");

    let emailForm = document.querySelector("#form-email");
    let messageForm = document.querySelector("#form-message");

    let emailLabel = document.querySelector("#form-email-label");
    let messageLabel = document.querySelector("#form-message-label");

    let valid = true;

    if (!emailForm.value || !validateEmail(emailForm.value)) {
        emailForm.style.borderColor = "var(--color-error)"
        emailLabel.style.color = "var(--color-error)";
        valid = false;
    } else {
        emailForm.style.borderColor = "var(--color-dark-gray)";
        emailLabel.style.color = "var(--color-header)";
    }

    if (!messageForm.value) {
        messageForm.style.borderColor = "var(--color-error)"
        messageLabel.style.color = "var(--color-error)";
        valid = false;
    } else {
        messageForm.style.borderColor = "var(--color-dark-gray)";
        messageLabel.style.color = "var(--color-header)";
    }

    if (!cValidate()) {
        cForm.style.borderColor = "var(--color-error)";
        cLabel.style.color = "var(--color-error)";
        valid = false;
    } else {
        cForm.style.borderColor = "var(--color-dark-gray)";
        cLabel.style.color = "var(--color-dark-gray)";
    }

    if (!valid) return;

    let email = emailForm.value;
    let message = messageForm.value;

    try {
        Email.send({
            SecureToken: "2000aa5b-91c2-4f62-8375-f5129c8353e0",
            From: "futureblur.noreply@gmail.com",
            To: 'itsfutureblur@gmail.com',
            Subject: `${email} has contacted you!`,
            Body: `You have a new message from ${email}<br>${message}`
        }).then(
            successfulContact(emailForm, messageForm, cForm)
        );

    } catch (error) {
        alert("Something went wrong! Please try again later.");
        console.log(error);
    }
}

function validateEmail(email) {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

function cGenerate() {
    const cInput = document.getElementById("form-c");

    const seed = cBase.indexOf(cBase[cBase.length * Math.random() | 0]);
    const question = cBase[seed][0];
    answer = cBase[seed][1];

    console.log(question);
    console.log(answer);

    cInput.placeholder = question;
}

function cValidate() {
    const cInput = document.querySelector("#form-wrapper #form-c");
    return cInput.value && cInput.value.toLowerCase() === answer;
}

function successfulContact(emailForm, messageForm, cForm) {
    emailForm.value = "";
    messageForm.value = "";
    cForm.value = "";

    emailForm.style.display = "none";
    messageForm.style.display = "none";
    cForm.style.display = "none";

    document.querySelector(".contact-body h1").textContent = "✅";
    document.querySelector("#form-wrapper #form-email-label").style.display = "none";
    document.querySelector("#form-wrapper #form-message-label").style.display = "none";
    document.querySelector("#form-wrapper #form-c-label").style.display = "none";

    const button = document.querySelector("#form-wrapper .form-button");
    button.textContent = "Message sent! We will get in touch with you shortly.";
    button.style.color = "var(--color-header-accent)";
    button.style.background = "var(--color-border)";
    button.style.border = "1px solid var(--color-border)";
    button.style.cursor = "auto";
    button.removeEventListener("click", submitForm);
    button.addEventListener("click", function (e) {
        e.preventDefault();
        return false;
    })
}

window.onload = function () {
    document.querySelector("#form-wrapper .form-button").addEventListener("click", submitForm);
    cGenerate();
}