import saludar from "./saludador";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + saludar(nombre.value) + "</p>";

});
