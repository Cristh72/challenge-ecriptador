let palabraDesencriptada = desencriptarTexto();
let palabraEncriptada = encriptarTexto();
let palabraCopia = "";

function encriptarTexto() {
    let palabra = document.getElementById("input__text").value;
    let construccionPalabaraEncriptada = '';
    for (let i = 0; i < palabra.length; i++) {
        let caracter = palabra.charAt(i);

        switch (caracter) {
            case 'a':
                caracter = 'ai';
                construccionPalabaraEncriptada += caracter;
                break;
            case 'e':
                caracter = 'enter';
                construccionPalabaraEncriptada += caracter;
                break;
            case 'i':
                caracter = 'imes';
                construccionPalabaraEncriptada += caracter;
                break;
            case 'o':
                caracter = 'ober';
                construccionPalabaraEncriptada += caracter;
                break;
            case 'u':
                caracter = 'ufat';
                construccionPalabaraEncriptada += caracter;
                break;
            default:
                construccionPalabaraEncriptada += caracter;
                break;
        }
        
    }
    console.log(construccionPalabaraEncriptada);
    return construccionPalabaraEncriptada;   
}

function desencriptarTexto() {
    let palabra = document.getElementById("input__text").value;
    let construccionPalabaraEncriptada = '';
    for (let i = 0; i < palabra.length; i++) {
        let caracter = palabra.charAt(i);

        switch (caracter) {
            case 'a':
                caracter = 'ai';
                construccionPalabaraEncriptada += caracter;
                break;
            case 'e':
                caracter = 'enter';
                construccionPalabaraEncriptada += caracter;
                break;
            case 'i':
                caracter = 'imes';
                construccionPalabaraEncriptada += caracter;
                break;
            case 'o':
                caracter = 'ober';
                construccionPalabaraEncriptada += caracter;
                break;
            case 'u':
                caracter = 'ufat';
                construccionPalabaraEncriptada += caracter;
                break;
            default:
                construccionPalabaraEncriptada += caracter;
                break;
        }
        
    }
    console.log(construccionPalabaraEncriptada);
    return construccionPalabaraEncriptada;   
}

