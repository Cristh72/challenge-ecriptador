let palabraDesencriptada = desencriptarTexto();
let palabraEncriptada = encriptarTexto();
let palabraCopia = "";

function encriptarTexto() {
    let palabra = document.getElementById("input__text").value;
    let construccionPalabaraEncriptada = palabra
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    mostrarResultado(construccionPalabaraEncriptada);
    return;
}

function desencriptarTexto() {
    let palabra = document.getElementById("input__text").value;
    let construccionPalabaraEncriptada = palabra
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    mostrarResultado(construccionPalabaraEncriptada);
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



