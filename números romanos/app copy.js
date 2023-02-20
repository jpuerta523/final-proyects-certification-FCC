/* numeros romanos aprobado FCC */

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

/* pruebas en consola */
let num = 7
let num1 = 57
let num2 = 209
let num3 = 1986

console.log(convertToRoman(num))
console.log(convertToRoman(num1))
console.log(convertToRoman(num2))
console.log(convertToRoman(num3))
