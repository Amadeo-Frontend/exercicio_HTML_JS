const form = document.querySelector("form");
const validMessage = document.querySelector("#validMessage");
const invalidMessage = document.querySelector("#invalidMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fieldA = document.querySelector("#fieldA").valueAsNumber;
  const fieldB = document.querySelector("#fieldB").valueAsNumber;

  if (fieldB > fieldA) {
    validMessage.innerHTML = "Formulário válido!";
    invalidMessage.innerHTML = "";
  } else {
    invalidMessage.innerHTML = "Formulário inválido!";
    validMessage.innerHTML = "";
  }
});
