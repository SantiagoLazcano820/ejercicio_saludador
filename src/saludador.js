function saludar(nombre = "", hora = 0, genero = "", edad = 0, idioma = "") {
  let prefijo = "";
  const generoMayuscula = genero.toUpperCase();
  if (edad >= 30) {
    if (generoMayuscula === "M") {
      prefijo = "Sr. ";
    } else if (generoMayuscula === "F") {
      prefijo = "Sra. ";
    }
  }

  let saludo = "Hola";
  if (hora >= 6 && hora < 12) {
    saludo = "Buenos Dias";
  } else if (hora >= 12 && hora < 19) {
    saludo = "Buenas Tardes";
  } else {
    saludo = "Buenas Noches";
  }

  if (nombre) {
    return saludo + ", " + prefijo + nombre;
  }
  return saludo;
}

export default saludar;
