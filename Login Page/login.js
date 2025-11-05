const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const checkbox = document.getElementById('checkbox');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');
    
    if (atIndex < 1 || atIndex === email.length - 1) {
        return false;
    }

    if (dotIndex < atIndex + 2 || dotIndex === email.length - 1) {
        return false;
    }

    if (email.indexOf('.') === -1 || email.indexOf('.') < atIndex + 1) {
        return false;
    }

    if (email.includes('..')) {
        return false;
    }

    return true;
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const termsChecked = checkbox.checked;

    let isValid = true;

    if (usernameValue === '') {
        setError(username, 'Username is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (phoneValue === '') {
        setError(phone, 'Phone number is required');
        isValid = false;
    } else if (phoneValue.length < 10 || phoneValue.length > 12) {
        setError(phone, 'Provide a valid 10-digit to 12-digit phone number');
        isValid = false;
    } else {
        setSuccess(phone);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
        isValid = false;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords don't match");
        isValid = false;
    } else {
        setSuccess(password2);
    }

    if (!termsChecked) {
        setError(checkbox, 'You must agree to the terms and conditions');
        isValid = false;
    } else {
        setSuccess(checkbox);
    }

    if (isValid) {
        form.submit();
    }

    return isValid;
};
