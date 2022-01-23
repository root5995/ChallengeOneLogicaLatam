
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var text = document.querySelector("#input-texto");
var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var textoEncriptado;
var botonCopiar = document.querySelector("#btn-copy");
var acentos = ["´","`","¨","á","à","ã","â","é","è","ê","í","ì","î","õ","ó","ò","ô","ú","ù","û"];

// busca acentos en tiempo real en el cuadro de texto

text.addEventListener("input", function(){
    textoEncriptado = text.value;
    var msgError = document.querySelector("#aviso-error")

    if((textoEncriptado.match(/[A-Z]/g) || acentos.some(acentos=>textoEncriptado.includes(acentos)))){
        msgError.textContent = "No ingreses palabras con acentos o mayúsculas."
        msgError.classList.add("msg-error");
        text.classList.add("incorrecto");
    }else{
        msgError.textContent = "";
        text.classList.remove("incorrecto");

    }
})


// Este bloque de codigo encripta el texto
botonEncriptar.addEventListener("click", function(event){

    event.preventDefault();
    textoEncriptado = text.value;

    if((textoEncriptado.match(/[A-Z]/g) || acentos.some(acentos=>textoEncriptado.includes(acentos)))){
        alert("Ingresa solo letras minusculas sin acentos.")
    }
    else{
        textoEncriptado = textoEncriptado.replace(/e/g,"enter");
        textoEncriptado = textoEncriptado.replace(/i/g,"imes");
        textoEncriptado = textoEncriptado.replace(/a/g,"ai");
        textoEncriptado = textoEncriptado.replace(/o/g,"ober");
        textoEncriptado = textoEncriptado.replace(/u/g,"ufat");
        document.querySelector("#msg").value = textoEncriptado;
    }
})


// Este bloque de codigo desencripta el texto


botonDesencriptar.addEventListener("click", function(event){
    var textoDesencriptado = document.querySelector("#input-texto").value;

    event.preventDefault();
    if((textoDesencriptado.match(/[A-Z]/g) || acentos.some(acentos=>textoDesencriptado.includes(acentos)))){
        alert("Ingresa solo letras minusculas sin acentos.")
    }
    else{
        textoDesencriptado = textoDesencriptado.replace(/enter/g,"e");
        textoDesencriptado = textoDesencriptado.replace(/imes/g,"i");
        textoDesencriptado = textoDesencriptado.replace(/ai/g,"a");
        textoDesencriptado = textoDesencriptado.replace(/ober/g,"o");
        textoDesencriptado = textoDesencriptado.replace(/ufat/g,"u");
        document.querySelector("#msg").value = textoDesencriptado;
    }
})

botonCopiar.addEventListener("click", function(event){
    var textoCopiar = document.querySelector("#msg");
    textoCopiar.select();
    document.execCommand("copy");
    document.querySelector("#msg").value = "Mensaje copiado";
})