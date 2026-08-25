function saludar(nombre = "", hora = 0, genero = "", edad = 0, idioma = "") {
  if (!Number.isNaN(Number(nombre.trim())) && nombre.trim() !== "") {
    return "Dato inválido: El nombre debe ser un texto.";
  }
  if (!Number.isNaN(Number(genero.trim())) && genero.trim() !== "") {
    return "Dato inválido: El genero debe ser un texto.";
  }
  if (!Number.isNaN(Number(idioma.trim())) && idioma.trim() !== "") {
    return "Dato inválido: El idioma debe ser un texto.";
  }
  
  
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
    return saludo + ", Visitor.";  
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
  return saludo + ", Visitante.";
}

export default saludar;
