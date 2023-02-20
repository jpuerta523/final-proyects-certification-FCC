/* cifrado cesar aprobado FCC*/

/* cifra los caracteres segun el estandar ROT-13 partiendo del codigo utf-16 donde a cada letra le corresponde un numero, para los numeros de 65 a 78 que corresponden de A-N se suma 13, para los numeros de 79-90 que corresponden de O-Z se resta 13 y el resto de caracteres quedan iguales */
function cipher(num){
    if (num >= 65 && num < 78){
        return String.fromCharCode(num+13)
    }else if (num >= 78 && num <= 90){
        return String.fromCharCode(num-13)
    }else{
        return String.fromCharCode(num)
    }
}

/* toma un cadena de texto "str" a ser decoficada, primero convierte todos las letras en mayusculas, luego la trasforma "str" en una cadena donde cada elemento es el numero que corresponde al caracter, luego a cada elemento se aplica cipher, y finalmente se convierte el arreglo en un cadena de texto sin separadores */
function rot13(str) {
    return str
        .toUpperCase()
        .split("")
        .map(x => x.charCodeAt())
        .map(x => cipher(x))
        .join("")
}

/* pruebas */
let str = "az SERR CVMMN!"
console.log(rot13(str))
