const scriptURL = 'https://script.google.com/macros/s/AKfycbz32i7OuX8_UlfTazLGctv48hj4AGEJnKxwhcyRk-tJf4rVtaXwmfj0Sh9V-s952wmm4Q/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})