/* palindromos aprobado FCC */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")
const resultadoNegativo = document.querySelector(".alert-danger")

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

/* boton calcular */
btn.addEventListener("click",()=>{
    resultado.classList.add("d-none")
    resultadoNegativo.classList.add("d-none")
    
    let str = input1.value; 
    
    if (palindrome(str)){
        resultado.classList.remove("d-none")
        resultado.textContent = `La cadena de texto "${str}" y su inverso "${reverseWord(str)}" son iguales por lo que es un Palídromo ` 
    }else{
        resultadoNegativo.classList.remove("d-none")
        resultadoNegativo.textContent = `La cadena de texto "${str}" y su inverso "${reverseWord(str)}" son diferentes por lo que NO es un Palídromo` 
    }            
}) 
