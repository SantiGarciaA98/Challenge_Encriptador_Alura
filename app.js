let e = "enter";
let i = "imes";
let a = "ai";
let o = "ober"; 
let u = "ufat";
let mensaje = "";
let mensajeDes = "";
let mensajeCopy = "";
var limpiar = "";

const caracteresEspeciales = {
    "á": "a",
    "é": "e",
    "í": "i",
    "ó": "o",
    "ú": "u",
    "ñ": "n",
    "  ": " ",
    "@":"",
    "´":"",
  };

function caracterEspec(){
    let mensaje = document.getElementById("palaUsuario").value;
    for (const caracter of mensaje) {
        if (caracteresEspeciales.hasOwnProperty(caracter)) {
          alert("No se permiten caracteres especiales");
        }
      }
}

function encriptarMensaje(){
    let mensaje = document.getElementById("palaUsuario").value;
    mensaje = mensaje.toLowerCase();    
    mensaje = mensaje.replaceAll("e",e);
    mensaje = mensaje.replaceAll("i",i);
    mensaje = mensaje.replaceAll("a",a);
    mensaje = mensaje.replaceAll("o",o);
    mensaje = mensaje.replaceAll("u",u); 
    asignarElemento("#mensaje",mensaje);
    limpiar = document.getElementById("mensaje");
    limpiar.style.background = 'none';
    document.getElementById("palaUsuario").value = "";
}

function desencripMensaje(){
    let mensajeDes = document.getElementById("palaUsuario").value;
    mensajeDes = mensajeDes.replaceAll("enter","e");
    mensajeDes = mensajeDes.replaceAll("ai","a");
    mensajeDes = mensajeDes.replaceAll("imes","i");
    mensajeDes = mensajeDes.replaceAll("ober","o");
    mensajeDes = mensajeDes.replaceAll("ufat","u");
    asignarElemento("#mensaje",mensajeDes);
    limpiar = document.getElementById("mensaje");
    limpiar.style.background = 'none';
    document.getElementById("palaUsuario").value = "";
}

function copiarPala(){
    let mensajeCopy = document.getElementById("mensaje").innerHTML;
    try {
        navigator.clipboard.writeText(mensajeCopy);
        alert('Contenido copiado al portapapeles');
      } catch (err) {
        console.error('Error al copiar: ', err);
      }      
}

function asignarElemento(elemento,texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}
