let reiniciarTime;

function encriptarTexto() {
    let resultadoHTML = document.getElementById('resultado__texto');
    let palabra = document.getElementById("ingreso__palabra").value;
    if (palabra === "") {
        return;
    }
    detectarLetrasMOCE(palabra);
    let construccionPalabaraEncriptada = palabra
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    if (document.getElementById('alerta').style.display === 'none') {
        resultadoHTML.style.textAlign = 'justify';
        activarBotones();
        mostrarResultado(construccionPalabaraEncriptada);
    } else {
        desactivarBotonDesencriptar();
    }
    limpiarCaja();
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
    if (reiniciarTime) {
        clearTimeout(reiniciarTime);
    }

    reiniciarTime = setTimeout(() => {
        document.getElementById('resultado__texto').style.textAlign = 'center';
        desactivarBotonDesencriptar();
        limpiarCaja();
    }, 9000);
    ;
    return;
}

function mostrarResultado(nuevoTexto) {
    let elementoHTML = document.getElementById('resultado__texto');
    elementoHTML.value = nuevoTexto
    ajustarAlturaTextarea(elementoHTML);
    return elementoHTML;
}

function copiarTexto() {
    let elementoHTML = document.getElementById('resultado__texto').value;
    navigator.clipboard.writeText(elementoHTML);
}

function activarBotones() {
    let contenedorSegundaParte = document.getElementById('segunda__mitad');
    let botonCopiar = document.getElementById('boton__copiar');
    let imagenHTML = document.getElementById('muneco');
    let tituloHTML = document.getElementById('titulo__muneco');
    let botonDesencriptar = document.getElementById('desencriptar__texto');
    let resultadoHTML = document.getElementById('resultado__texto');
    botonCopiar.style.display = 'block';
    contenedorSegundaParte.style.justifyContent = 'space-between';
    contenedorSegundaParte.style.padding = '3rem 0';
    imagenHTML.setAttribute('hidden', true);
    tituloHTML.setAttribute('hidden', true);
    botonDesencriptar.disabled = false;
    botonDesencriptar.style.background = 'inherit';
    resultadoHTML.style.height = '30rem';
    ajustarAlturaTextarea(resultadoHTML);
}

function desactivarBotonDesencriptar() {
    let contenedorSegundaParte = document.getElementById('segunda__mitad');
    let botonCopiar = document.getElementById('boton__copiar');
    let tituloHTML = document.getElementById('titulo__muneco');
    let imagenHTML = document.getElementById('muneco');
    let botonDesencriptar = document.getElementById('desencriptar__texto');
    let resultadoHTML = document.getElementById('resultado__texto');
    contenedorSegundaParte.style.justifyContent = 'center';
    contenedorSegundaParte.style.paddingTop = '0rem';
    botonCopiar.style.display = 'none';
    botonDesencriptar.disabled = true;
    botonDesencriptar.style.background = 'var(--color--boton--desencriptar)';
    imagenHTML.removeAttribute('hidden');
    tituloHTML.removeAttribute('hidden');
    resultadoHTML.style.height = 'auto';
    limpiarCajaResultado();
    ajustarAlturaTextarea(resultadoHTML);
}

function limpiarCaja() {
    document.querySelector('#ingreso__palabra').value = '';
}

function limpiarCajaResultado() {
    let textarea = document.querySelector('#resultado__texto');
    textarea.value = 'Ingresa el texto que desees encriptar o desencriptar.';
    ajustarAlturaTextarea(textarea);
}

//Busco caracteres especiales o mayusculas por eliminar
function detectarLetrasMOCE(valorar) {
    let mensajeAlerta = document.getElementById('alerta');
    let minusculasYCaracteres = /^[a-z?!¡¿.,;:'"-]*$/;
    if (!minusculasYCaracteres.test(valorar)) {
        valorar = valorar.replace(/[^a-z?!¡¿.,;:'"-]/g, '');
        mensajeAlerta.style.display = 'block';
        setTimeout(() => {
            mensajeAlerta.style.display = 'none';
        }, 3000)
    } else {
        mensajeAlerta.style.display = 'none';
    }
    return valorar;
}

function ajustarAlturaTextarea(textarea) {
    if (window.innerWidth > 769) {
        return;
    }
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    return;
}

function cambiaColor() {
    let selectHTML = document.getElementById('colors').value;
    let imagenUno = document.querySelector('.icono__alura');
    let imagenDos
    switch (selectHTML) {
        case '1':
            document.documentElement.style.setProperty('--color--principal', '#fdd9d7');
            document.documentElement.style.setProperty('--colo--texto--uno', '#FF3B30');
            imagenUno = document.querySelector('.icono__alura');
            imagenDos = document.getElementById('muneco');
            imagenUno.src = 'assets/LogoRojo.png';
            imagenDos.src = 'assets/Muñeco--rojo.png';
            break;
        case '2':
            document.documentElement.style.setProperty('--color--principal', '#eedcf7');
            document.documentElement.style.setProperty('--colo--texto--uno', '#AF52DE');
            imagenUno = document.querySelector('.icono__alura');
            imagenDos = document.getElementById('muneco');
            imagenUno.src = 'assets/LogoMorado.png';
            imagenDos.src = 'assets/Muñeco--morado.png';
            break;
        case '3':
            document.documentElement.style.setProperty('--color--principal', '#d2d2d2');
            document.documentElement.style.setProperty('--colo--texto--uno', '#000000');
            imagenUno = document.querySelector('.icono__alura');
            imagenDos = document.getElementById('muneco');
            imagenUno.src = 'assets/LogoNegro.png';
            imagenDos.src = 'assets/Muñeco--negro.png';
            break;
        case '4':
            document.documentElement.style.setProperty('--color--principal', '#edf8f0');
            document.documentElement.style.setProperty('--colo--texto--uno', '#34C759');
            imagenUno = document.querySelector('.icono__alura');
            imagenDos = document.getElementById('muneco');
            imagenUno.src = 'assets/LogoVerde.png';
            imagenDos.src = 'assets/Muñeco--verde.png';
            break;
        case '5':
            document.documentElement.style.setProperty('--color--principal', '#F3F5FC');
            document.documentElement.style.setProperty('--colo--texto--uno', '#0A3871');
            imagenUno = document.querySelector('.icono__alura');
            imagenDos = document.getElementById('muneco');
            imagenUno.src = 'assets/LogoAzul.png';
            imagenDos.src = 'assets/Muñeco.png';
            break;
        default:
            break;
    }

    console.log(selectHTML.value)
    return;
}

cambiaColor();
limpiarCajaResultado();