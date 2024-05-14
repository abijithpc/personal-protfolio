function validateEmail() {
  var emailInput = document.getElementById('email');
  var emailError = document.getElementById('email-error');
  var email = emailInput.value.trim();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
      emailError.textContent = 'Email is required';
  } else if (!emailPattern.test(email)) {
      emailError.textContent = 'Invalid email format';
  } else {
      emailError.textContent = '';
  }
}

function validateName() {
  var nameInput = document.getElementById('name');
  var nameError = document.getElementById('name-error');
  var name = nameInput.value.trim();

  if (name === '') {
      nameError.textContent = 'Name is required';
  } else {
      nameError.textContent = '';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');

  nameInput.addEventListener('keyup', validateName);
  emailInput.addEventListener('keyup', validateEmail);
});
