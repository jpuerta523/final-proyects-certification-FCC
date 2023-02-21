/* validador de telefonos aprobado FCC */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")
const resultadoNegativo = document.querySelector(".alert-danger")


/* funcion validador telefono recibe una cadena de texto, primero se elimina los espacion en blanco con una regex, luego se eliminan los caracteres "_", ")" y "(" de los casos validos, luego se toma la caneda en formato arreglo con cada caracter por elemento y en "isOnlyNum" se verifica si todos los elementos son numeros y si cumple las condiciones de cantidad de numeros e indicativo para USA*/
function telephoneCheck(str) {
    const regex = /[^\s]/gi
    const ans = str.match(regex)

    if(ans[ans.length-5] === "-" && ans[ans.length-9] === "-"){
        ans.splice(ans.length-9, 1)
        ans.splice(ans.length-5, 1)
    }else if (ans[ans.length-9] === ")" && ans[ans.length-13] === "(" && ans[ans.length-5] === "-"){
        ans.splice(ans.length-13, 1)
        ans.splice(ans.length-9, 1)
        ans.splice(ans.length-5, 1)
    }

    const isOnlyNum = !ans.some(x => isNaN(x))
    if (isOnlyNum && ans.length ===10){
        return true
    }else if (isOnlyNum && ans.length === 11 && ans[0] == 1){
        return true
    }else{
        return false
    }
}

/* boton calcular */
btn.addEventListener("click",()=>{
    resultado.classList.add("d-none")
    resultadoNegativo.classList.add("d-none")
    
    let num = input1.value;
    
    if (telephoneCheck(num) === true){
        resultado.classList.remove("d-none")
        resultado.textContent = `El número telefónico ${num} tiene un formato válido para USA ` 
    }else{
        resultadoNegativo.classList.remove("d-none")
        resultadoNegativo.textContent = `El número telefónico ${num} NO tiene un formato válido para USA ` 
    }            
}) 

