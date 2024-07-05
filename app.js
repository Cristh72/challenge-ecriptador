let palabraDesencriptada = desencriptarTexto();
let palabraEncriptada = encriptarTexto();
let palabraCopia = "";

function encriptarTexto() {
    let palabra = document.getElementById("ingreso__palabra").value;
    let construccionPalabaraEncriptada = palabra
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    mostrarResultado(construccionPalabaraEncriptada);
    limpiarCaja();
    if (document.getElementById('resultado__texto').value === ""){
        desactivarBotonDesencriptar();
    }else {
        activarBotones();
    }
    return;
}

function desencriptarTexto() {
    let palabra = document.getElementById("ingreso__palabra").value;
    let construccionPalabaraEncriptada = palabra
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    mostrarResultado(construccionPalabaraEncriptada);
    desactivarBotonDesencriptar();
    limpiarCaja();
    return;
}

function mostrarResultado(nuevoTexto) {
    let elementoHTML = document.getElementById('resultado__texto');
    elementoHTML.innerHTML = nuevoTexto
    return elementoHTML;
}

function copiarTexto() {
    let elementoHTML = document.getElementById('resultado__texto').value;
    navigator.clipboard.writeText(elementoHTML);
}

function activarBotones() {
   //document.getElementById('boton__copiar').removeAttribute('hidden');
    let botonDesencriptar = document.getElementById('desencriptar__texto');
    botonDesencriptar.disabled = false;
    botonDesencriptar.style.background = 'inherit';
}

function desactivarBotonDesencriptar() {
    let botonDesencriptar = document.getElementById('desencriptar__texto');
    botonDesencriptar.disabled = true;
    botonDesencriptar.style.background = 'var(--color--boton--desencriptar)';
}

function limpiarCaja() {
    document.querySelector('#ingreso__palabra').value = '';
}


