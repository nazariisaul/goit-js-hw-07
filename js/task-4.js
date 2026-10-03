const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data = {};
  let hasEmptyField = false;

  formData.forEach((value, key) => {
    const trimmedValue = value.trim();
    if (!trimmedValue) {
      hasEmptyField = true;
    }
    data[key] = trimmedValue;
  });

  if (hasEmptyField) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(data);
  event.currentTarget.reset();
});
