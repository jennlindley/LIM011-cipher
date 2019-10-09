window.cipher = {
  encode:(desplazamientos,cajatextos)=>{

let resultado = "";

for (i=0; i< cajatextos.length; i++){

let ascii = cajatextos.charCodeAt(i);

if (ascii >=65 && ascii <= 90) {
  resultado += String.fromCharCode((ascii - 65 + desplazamientos) % 26 + 65);
}

else if (ascii >=97 && ascii <= 122){
  resultado += String.fromCharCode((ascii - 97 + desplazamientos) % 26 + 97);
}
else if (ascii >=48 && ascii <= 57){
  resultado += String.fromCharCode((ascii - 48 + desplazamientos) % 10 + 48);
}
else{
   resultado += cajatextos.charAt(i);
}

};
//document.getElementById('cajaresultado').value=resultado;
return resultado;
},

decode:(movimiento,cajadeco)=>{

let resultado = "";

for (i=0; i< cajadeco.length; i++){

let ascii = cajadeco.charCodeAt(i);

if (ascii >=65 && ascii <= 90) {
resultado += String.fromCharCode((ascii - 65 - movimiento) % 26 + 65);
}

else if (ascii >=97 && ascii <= 122){
resultado += String.fromCharCode((ascii - 97 - movimiento) % 26 + 97);
}
else if (ascii >=48 && ascii <= 57){
resultado += String.fromCharCode((ascii - 48 - movimiento) % 10 + 48);
}
else{
 resultado += cajadeco.charAt(i);
}

};
//document.getElementById('cajaresultado').value=resultado;
return resultado;
},
};
