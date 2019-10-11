
window.cipher = {
  encode: (desplazamientos, cajatextos) => {

    let resultado = "";

    for (let i = 0; i < cajatextos.length; i++) {

      let ascii = cajatextos.charCodeAt(i);

      if (ascii >= 65 && ascii <= 90) {
        resultado += String.fromCharCode((ascii - 65 + desplazamientos) % 26 + 65); //para mayusculas
      }

      else if (ascii >= 97 && ascii <= 122) {
        resultado += String.fromCharCode((ascii - 97 + desplazamientos) % 26 + 97); //para minusculas
      }
      else if (ascii >= 48 && ascii <= 57) {
        resultado += String.fromCharCode((ascii - 48 + desplazamientos) % 10 + 48); //para números
      }
      else {
        resultado += cajatextos.charAt(i);
      }

    }
    
    return resultado;
  },

  decode: (movimiento, cajadeco) => {

    let resultado = "";

    for (let i = 0; i < cajadeco.length; i++) {

      let ascii = cajadeco.charCodeAt(i);

      if (ascii >= 65 && ascii <= 90) {
        resultado += String.fromCharCode((ascii - 90 - movimiento) % 26 + 90); //para mayusculas
      }

      else if (ascii >= 97 && ascii <= 122) {
        resultado += String.fromCharCode((ascii - 122 - movimiento) % 26 + 122); //para minusculas
      }
      else if (ascii >= 48 && ascii <= 57) {
        resultado += String.fromCharCode((ascii - 57 - movimiento) % 10 + 57); //para números
      }
      else {
        resultado += cajadeco.charAt(i);
      }

    }
    
    return resultado;
  },
};
