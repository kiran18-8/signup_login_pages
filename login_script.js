const getId = (id) => document.getElementById(id);
const getCls = (cls) => document.getElementsByClassName(cls);

const email = getId('email');
const password = getId('password');
const terms = getId('terms');
const form = getId('signup-form');
const errmsg = getCls('error');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValid = validateInput(email, 0, 'Email is required');
  const passwordValid = validateInput(password, 1, 'Password is required');
  if (emailValid && passwordValid && termsValid) {
    alert("Form submitted successfully!");
    form.reset();
    clearErrors();
  }
});

terms.addEventListener('change', () => {
  validateCheckbox(terms, 2, 'Please accept the terms');
});

function validateInput(inputRef, index, message) {
  if (!inputRef || !errmsg[index]) return false;

  if (inputRef.value.trim() === '') {
    inputRef.style.border = '2px solid red';
    errmsg[index].textContent = message;
    return false;
  } else {
    inputRef.style.border = '2px solid green';
    errmsg[index].textContent = '';
    return true;
  }
}

function validateCheckbox(checkbox, index, message) {
  if (!checkbox || !errmsg[index]) return false;

  if (!checkbox.checked) {
    errmsg[index].textContent = message;
    return false;
  } else {
    errmsg[index].textContent = '';
    return true;
  }
}

function clearErrors() {
  for (let i = 0; i < errmsg.length; i++) {
    errmsg[i].textContent = '';
  }
}
