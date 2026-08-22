import saludar from "./saludador";

const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const idioma = document.querySelector("#idioma");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const horaActual = new Date().getHours();
  const edadPersona = Number.parseInt(edad.value);
  div.innerHTML = "<p>" + saludar(nombre.value, horaActual, genero.value, edadPersona, idioma.value) + "</p>";

});
