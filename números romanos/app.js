/* numeros romanos aprobado FCC */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")
const resultadoNegativo = document.querySelector(".alert-danger")

/* se define un objeto con pareja numero arabigo y romano, solo se definen los numeros del 0 al 10, las decenas, centenas miles hasta 3999 */
const romanNumber = {
    0: "",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20:"XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
    2000: "MM",
    3000: "MMM"
}

/* se define una funcion para convertrir un numero arabigo a romano, esta recibe un numero y lo convrierte a un arreglo donde cada elemento corresponde a una cifra del numero, retornando el numero romano obtenido al cambiar la cifra por la pareja definida en el objeto "romanNumber" */
function convertToRoman(num) {
   let ans = num.toString().split("")
   if (num <= 10){
        return romanNumber[ans[0]]
    }else if(num <= 99){
        return romanNumber[ans[0]*10] + romanNumber[ans[1]]
    }else if(num <= 999){
        return romanNumber[ans[0]*100] + romanNumber[ans[1]*10] + romanNumber[ans[2]]
    }else{
        return romanNumber[ans[0]*1000] + romanNumber[ans[1]*100] + romanNumber[ans[2]*10] + romanNumber[ans[3]]
    }   
}

    
    
/* boton calcular */
btn.addEventListener("click",()=>{
    resultado.classList.add("d-none")
    resultadoNegativo.classList.add("d-none")
    
    let num = input1.value;
    
    if (num <= 3999 && num >0 ){
        resultado.classList.remove("d-none")
        resultado.textContent = `el número ${num} en su notación romana es: ${convertToRoman(num)}` 
    }else{
        resultadoNegativo.classList.remove("d-none")
        resultadoNegativo.textContent = `el número ${num} no se encuentra en el rango de solución comprendido entre 0 y 3999` 
    }            
}) 
