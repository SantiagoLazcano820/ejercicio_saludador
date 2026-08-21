function saludar(nombre = "", hora = 0) {
  let saludo = "Hola";

  if (hora >= 6 && hora < 12) {
    saludo = "Buenos Dias";
  } else if (hora >= 12 && hora < 19) {
    saludo = "Buenas Tardes";
  } else {
    saludo = "Buenas Noches";
  }

  if (nombre) {
    return saludo + ", " + nombre;
  }
  return saludo;
}

export default saludar;
