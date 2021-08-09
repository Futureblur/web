function submitForm(e) {
    e.preventDefault();

    let emailForm = document.querySelector("#contact-form-email");
    let messageForm = document.querySelector("#contact-form-message");

    let emailLabel = document.querySelector("#contact-form-l-email");
    let messageLabel = document.querySelector("#contact-form-l-message");

    let valid = true;

    if (emailForm.value === "" || !validateEmail(emailForm.value)) {
        emailForm.style.borderColor = "var(--color-error)"
        emailLabel.style.color = "var(--color-error)";
        valid = false;
    } else {
        emailForm.style.borderColor = "var(--color-dark-gray)";
        emailLabel.style.color = "var(--color-header)";
    }

    if (messageForm.value === "") {
        messageForm.style.borderColor = "var(--color-error)"
        messageLabel.style.color = "var(--color-error)";
        valid = false;
    } else {
        messageForm.style.borderColor = "var(--color-dark-gray)";
        messageLabel.style.color = "var(--color-header)";
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
            successfulContact(emailForm, messageForm)
        );

    } catch (error) {
        alert("Something went wrong! " + error);
    }
}

function validateEmail(email) {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

function successfulContact(emailForm, messageForm) {
    emailForm.value = "";
    messageForm.value = "";
    console.log("Success!");
}

window.addEventListener("load", function () {
    document.querySelector("#contact-form-wrapper .button").addEventListener("click", submitForm);
});