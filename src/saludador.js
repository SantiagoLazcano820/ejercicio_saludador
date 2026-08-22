function saludar(nombre = "", hora = 0, genero = "", edad = 0, idioma = "") {
  const idiomaMayuscula = idioma.toUpperCase();
  const generoMayuscula = genero.toUpperCase();
  if (idiomaMayuscula === "ENG") {
    let prefijo = "";
    if (edad >= 30) {
      if (generoMayuscula === "M") {
        prefijo = "Mr. ";
      } else if (generoMayuscula === "F") {
        prefijo = "Ms. ";
      }
    }

    let saludo = "Hello";
    if (hora >= 6 && hora < 12) {
      saludo = "Good Morning";
    } else if (hora >= 12 && hora < 19) {
      saludo = "Good Afternoon";
    } else {
      saludo = "Good Night";
    }

    if (nombre) {
      return saludo + ", " + prefijo + nombre;
    }
    return saludo;  
  }
  
  let prefijo = "";
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
