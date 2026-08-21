import saludar from "./saludador";

const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const horaActual = new Date().getHours();
  div.innerHTML = "<p>" + saludar(nombre.value, horaActual, genero.value) + "</p>";

});
