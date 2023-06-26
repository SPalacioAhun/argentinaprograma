let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"]
let rechazados = [];
let admitidos = [];

for (let i = 0; i < personas.length; i++) {
    if(personas[i] === "Jose" || personas[i] === "Sofia") {
        rechazados.push(personas[i]);
    } else {
        admitidos.push(personas[i]);
    }
    
}


console.log("La lista ordenada de invitados admitidos es:");
for (let i = 0; i < admitidos.length; i++) {
  admitidos.sort();
  console.log(admitidos[i]);
}

console.log("La lista ordenada de invitados rechazados es:");
for (let i = 0; i < rechazados.length; i++) {
  rechazados.sort();
  console.log(rechazados[i]);
}
    