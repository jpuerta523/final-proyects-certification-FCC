/* caja registradora aprobada FCC  */

/* funcion caja registradora, recibe el precio de un producto, la cantidad de dinero pagado y un arreglo "cid" con las diferentes denominaciones del efectivo y la cantidad presente en la caja. devuleve un objeto con el estado de la caja y un arreglo anidado en formato denominaciones y cantidad de dinero a devolver, este se calcula de manera descendente, entregando primero las denominaciones mas altas primero  */

function checkCashRegister(price, cash, cid) {
    /* se define la cantidad de dinero a devolver "moneyForChange", el dinero que contiene la registradora "moneyInReg" y un arreglo "change" que como primer elemento tiene a "moneyForChange" seguido por todas las denominaciones y la cantidad  en 0, este se utilizara para ir sumando el dinero a devolver por cada denominacion*/
    let moneyForChange = cash - price
    const moneyInReg = cid.map(x => x[1]).reduce((a, b) => a + b).toFixed(2)
    let change = [moneyForChange, ["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]

/* por cada denominacion se verifica si hay dinero con esa denominacion en la caja y si "change" es mayor que la denominacion, en caso verdadero procede a pasar dinero de la caja a "change" sumandolo en su correspondiente denominacion, esto se hace hasta que la diferencia entre lo que hay va quedando en caja y "moneyForChange" sea negativo o hasta que se agote la denominacion */
/* cambio de 100*/
    if(change[0]>=100 && cid[cid.length-1][1]!==0){
        if (cid[cid.length-1][1] - change[0]<0){
            for(let i=cid[cid.length-1][1];  cid[cid.length-1][1]>0; i-=100){
                change[0]-=100
                change[change.length-1][1]+=100
                cid[cid.length-1][1]-=100
            } 
        }else{
            for(let i=cid[cid.length-1][1]; change[0]>=100; i-=100){
                change[0]-=100
                change[change.length-1][1] += 100
                change[0] = parseFloat(change[0].toFixed(2))
            }
        }
    }

/* cambio de 20 */
    if(change[0]>=20 && cid[cid.length-2][1]!==0){
        if (cid[cid.length-2][1] - change[0]<0){
            for(let i=cid[cid.length-2][1];  cid[cid.length-2][1]>0; i-=20){
                change[0]-=20
                change[change.length-2][1]+=20
                cid[cid.length-2][1]-=20
            }
        }else{
            for(let i=cid[cid.length-2][1]; change[0]>=20; i-=20){
                change[0]-=20
                change[change.length-2][1] += 20
                change[0] = parseFloat(change[0].toFixed(2))
            }    
        }
    }

    /* cambio de 10 */
    if(change[0]>=10 && cid[cid.length-3][1]!==0){
        if (cid[cid.length-3][1] - change[0]<0){
            for(let i=cid[cid.length-3][1];  cid[cid.length-3][1]>0; i-=10){
                change[0]-=10
                change[change.length-3][1]+=10
                cid[cid.length-3][1]-=10
            }
        }else{
            for(let i=cid[cid.length-3][1]; change[0]>=10; i-=10){
                change[0]-=10
                change[change.length-3][1] += 10
                change[0] = parseFloat(change[0].toFixed(2))
            }    
        }
    }

    /* cambio de 5 */
    if(change[0]>=5 && cid[cid.length-4][1]!==0){
        if (cid[cid.length-4][1] - change[0]<0){
            for(let i=cid[cid.length-4][1];  cid[cid.length-4][1]>0; i-=5){
                change[0]-=5
                change[change.length-4][1]+=5
                cid[cid.length-4][1]-=5
            }
        }else{
            for(let i=cid[cid.length-4][1]; change[0]>=5; i-=5){
                change[0]-=5
                change[change.length-4][1] += 5
                change[0] = parseFloat(change[0].toFixed(2))
            }    
        }
    }

    /* cambio de 1 */
    if(change[0]>=1 && cid[cid.length-5][1]!==0){
        if (cid[cid.length-5][1] - change[0]<0){
            for(let i=cid[cid.length-5][1];  cid[cid.length-5][1]>0; i-=1){
                change[0]-=1
                change[change.length-5][1]+=1
                cid[cid.length-5][1]-=1
            }
        }else{
            for(let i=cid[cid.length-5][1]; change[0]>=1; i-=1){
                change[0]-=1
                change[change.length-5][1] += 1
                change[0] = parseFloat(change[0].toFixed(2))
            }    
        }
    }

    /* cambio de 0.25 */
    if(change[0]>=0.25 && cid[cid.length-6][1]!==0){
        if (cid[cid.length-6][1] - change[0]<0){
            for(let i=cid[cid.length-6][1];  cid[cid.length-6][1]>0; i-=0.25){
                change[0]-=0.25
                change[change.length-6][1]+=0.25
                cid[cid.length-6][1]-=0.25
            }
        }else{
            for(let i=cid[cid.length-6][1]; change[0]>=0.25; i-=0.25){
                change[0]-=0.25
                change[change.length-6][1] += 0.25
                change[0] = parseFloat(change[0].toFixed(2))
            }    
        }
    }    

    /* cambio de 0.1 */
    if(change[0]>=0.1 && cid[cid.length-7][1]!==0){
        if (cid[cid.length-7][1] - change[0]<0){
            for(let i=cid[cid.length-7][1];  cid[cid.length-7][1]>0; i-=0.1){
                change[0]-=0.1
                change[change.length-7][1]+=0.1
                cid[cid.length-7][1]-=0.1
                change[0] = parseFloat(change[0].toFixed(2))
                cid[cid.length-7][1] = parseFloat(cid[cid.length-7][1])
            }
        }else{
            for(let i=cid[cid.length-7][1]; change[0]>=0.1; i-=0.1){
                change[0]-=0.1
                change[change.length-7][1] += 0.1
                change[0] = parseFloat(change[0].toFixed(2))
            }    
        }
    }     

    /* cambio de 0.05 */
    if(change[0]>=0.05 && cid[cid.length-8][1]!==0){
        if (cid[cid.length-8][1] - change[0]<0){
            for(let i=cid[cid.length-8][1];  cid[cid.length-8][1]>0; i-=0.05){
                change[0]-=0.05
                change[change.length-8][1]+=0.05
                cid[cid.length-8][1]-=0.05
                change[0] = parseFloat(change[0].toFixed(2))
                cid[cid.length-8][1] = parseFloat(cid[cid.length-8][1])
            }
        }else{
            for(let i=cid[cid.length-8][1]; change[0]>=0.05; i-=0.05){
                change[0]-=0.05
                change[change.length-8][1] += 0.05
                change[0] = parseFloat(change[0].toFixed(2))
            }    
        }
    }  
    
    /* cambio de 0.01 */
    if(change[0]>=0.01 && cid[cid.length-9][1]!==0){
        if (cid[cid.length-9][1] - change[0]<0){
            for(let i=cid[cid.length-9][1];  cid[cid.length-9][1]>0; i-=0.01){
                change[0]-=0.01
                change[change.length-9][1]+=0.01
                cid[cid.length-9][1]-=0.01
                change[0] = parseFloat(change[0].toFixed(2))
                cid[cid.length-9][1] = parseFloat(cid[cid.length-9][1])
            }
        }else{
            for(let i=cid[cid.length-9][1]; change[0]>=0.01; i-=0.01){
                change[0]-=0.01
                change[change.length-9][1] += 0.01
                change[0] = parseFloat(change[0].toFixed(2))
                change[change.length-9][1] = parseFloat(change[change.length-9][1].toFixed(2))
            }    
        }
    }

/* verifica 3 casos posibles, primero si "moneyForChange" es igual a "moneyInReg" lo que significa que al usuario se le puede dar el cambio completo pero al final de la operación la caja queda sin dinero para segir operando. Un segundo caso donde "moneyForChange" es mayor a "moneyInReg" o que no hay  suficiente dinero en todas las denomicaiones para completar el cambio exacto, indicando que la registradora no tiene los recursos para dar el cambio exacto. El tercer caso es donde "moneyInReg" es mas suficiente para dar el "change" exacto y quedar con dinero paea seguir operando*/
if(moneyForChange == moneyInReg){
    return {status:"CLOSED", change: change.splice(1,change.length-1)}
}else if(moneyForChange > moneyInReg || change[0]>0){
    return {status: "INSUFFICIENT_FUNDS", change: []}
}else{
    let ansArr = change.splice(1,change.length-1)
    let a =[]
    for (i=ansArr.length-1; i>=0 ; i--){
        if (ansArr[i][1]!=0){
            a.push(ansArr[i])
        }
    }
    return {status:"OPEN", change: a}
}  
}

/* pruebas */
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))    
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) 

  

   