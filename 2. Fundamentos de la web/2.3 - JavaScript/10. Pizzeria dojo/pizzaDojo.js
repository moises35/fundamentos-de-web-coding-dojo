function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas){
    let pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}

let pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
let pizza2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
let pizza3 = pizzaOven("italiana", "tradicional", ["4 quesos"], ["pepperoni"]);
let pizza4 = pizzaOven("masa fina", "marinara", ["feta"], ["salchicha"]);
console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);