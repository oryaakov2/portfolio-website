const year = new Date().getFullYear().toString();

const copyRightDate = document.getElementById("date");
copyRightDate.innerText += ` ${year}`;

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll("input")

    const isValidate = validateInputs(inputs);

    if (isValidate) {
        const serviceID = 'default_service';
        const templateID = 'template_ki4fhdp';

        emailjs.sendForm(serviceID, templateID, this);

        e.target.reset();
    }
})

function validateInputs(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];

        if (!input.value) {
            input.focus();
            return false;
        }
        else if (input.name === "email") {
            const isValid = validateEmail(input.value);

            if (!isValid) {
                input.focus();
                console.log('email invalid')
                return false;
            }
        }
    }

    return true;
}

function validateEmail(address) {
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    const isEmailValid = emailRegex.test(address);

    if (!isEmailValid) {
        return false;
    }

    return true;
}
