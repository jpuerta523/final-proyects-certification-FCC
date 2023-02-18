/* palindromos aprobado FCC */

/* define regla buscar solo caracteres alfanumericos */
let regex =/[a-z0-9]/gi

/* funcion para invertir cadenas, primero se obtiene una cadena y se elimina caracteres no alfanumericos con el regex, luego se invierte las posiciones con reverse, finalmente se convierte de nuevo en una cadena sin separadores y todas las letras en minisculas */
function reverseWord(str){
    return str
            .match(regex)
            .reverse() 
            .join("")
            .toLowerCase() 
}

/* la cadena "word" ingresada como parametro se convierte en cadena y se elimina caracteres no alfanumericos con el regex, luego se convierte de nuevo en una cadena sin separadores y todas las letras minisculas.
finalmente se comapara "word" con el valor obtenido en reverseWord() con un operador ternario*/
function palindrome(str) {
    let word = str
                .match(regex)
                .join("")
                .toLowerCase() 
    console.log(word)
    return word ===reverseWord(str) ? true : false
}    

/* pruebas en consola */
let str = "1 eye for of 1 eye."
console.log(reverseWord(str))
console.log(palindrome(str))
console.log(str.match(regex))