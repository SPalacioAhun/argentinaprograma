const readlineSync = require('readline-sync');
let numeroMes = parseInt(readlineSync.question("Ingrese un numero del mes"));

let meses = {
    1: "Enero",
    2: "Febrero",
    3: "Marzo",
    4: "Abril",
    5: "Mayo",
    6: "Junio",
    7: "Julio",
    8: "Agosto",
    9: "Septiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre"
};

if (numeroMes >= 1 && numeroMes <= 12) {
    let nombreMes = meses[numeroMes];
    
    let cantidadDeDias = 31;
    if(numeroMes === 2) {
    cantidadDeDias = 28; 
    }
        
    console.log("La cantidad de dias del mes de " + nombreMes + " es " + cantidadDeDias)
}
