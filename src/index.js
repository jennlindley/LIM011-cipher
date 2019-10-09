//Creación de variables
let cajatexto = document.getElementById('cajatexto');
let desplazamiento = document.getElementById('desplazamiento');
let btncodi = document.getElementById('btncodi');
let btndeco1 = document.getElementById('btndeco1');
let btnLim = document.getElementById('btnLim')

//boton codificar
btncodi.addEventListener("click", codificar);
  function codificar() {
   let cajatextos = cajatexto.value;
   let desplazamientos = parseInt(desplazamiento.value);
   let resultado = window.cipher.encode(desplazamientos,cajatextos);

   document.getElementById('cajaresultado').innerHTML = resultado;
  }

//boton decodificar
btndeco1.addEventListener("click", decodificar);
 function decodificar() {
   let cajadeco = cajatexto.value;
   let movimiento = parseInt(desplazamiento.value);
   let resultado = window.cipher.decode(movimiento,cajadeco);

   document.getElementById('cajaresultado').innerHTML = resultado;
 }

 btnLim.addEventListener("click", limpiar);
  function limpiar(){
    let 
  }
