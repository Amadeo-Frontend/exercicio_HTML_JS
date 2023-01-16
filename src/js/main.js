const form = document.querySelector('form');
const validMessage = document.querySelector('#validMessage');
const invalidMessage = document.querySelector('#invalidMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const fieldA = document.querySelector('#fieldA').value;
  const fieldB = document.querySelector('#fieldB').value;
  if (fieldB > fieldA) {
    validMessage.innerHTML = "Formulário válido!";
    invalidMessage.innerHTML = "";
  } else {
    invalidMessage.innerHTML = "Formulário inválido!";
    validMessage.innerHTML = "";
  }
});




