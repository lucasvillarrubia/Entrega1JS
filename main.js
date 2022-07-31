/*

Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

*/


// Array de pizzas

class pizza {
        constructor (id, nombre, ingredientes, precio) {
                this.id = id;
                this.nombre = nombre;
                this.ingredientes = ingredientes;
                this.precio = precio;
        }
}

const pizzas = [
        new pizza (1, "mozzarella", ["mozzarella", "salsa de tomate", "jamón"], 550), 
        new pizza (2, "de jamón y morrornes", ["jamón", "morrón", "mozzarella", "salsa de tomate"], 750),
        new pizza (3, "fugazzetta", ["cebolla", "mozzarella"], 600), 
        new pizza (4, "napolitana", ["mozzarella", "tomate", "salsa de tomate"], 500), 
        new pizza (5, "cuatro quesos", ["mozzarella", "queso azúl", "fontina", "parmesano"], 1000), 
        new pizza (6, "de jamón y palmitos", ["jamón", "mozzarella", "salsa de tomate", "palmitos", "salsa golf"], 750), 
        new pizza (7, "calabresa", ["mozzarella", "salsa de tomate", "longaniza"], 700), 
        new pizza (8, "de rúcula", ["rúcula", "parmesano", "mozzarella", "salsa de tomate", "jamón crudo"], 1200), 
        new pizza (9, "hawaiana", ["ananá", "mozzarella", "salsa de tomate", "jamón", "bacon"], 800), 
        new pizza (10, "de roquefort", ["mozzarella", "salsa de tomate", "queso azúl"], 750), 
];
console.log(pizzas);


// a)
console.log ("a) Pizzas que tienen un id impar");
const pizzas_impares = pizzas.filter ((pizza) => pizza.id % 2 != 0);
function mostrar_pizzas_impares () {
        return pizzas_impares.forEach ((pizza) => console.log("La pizza %s tiene id %i", pizza.nombre, pizza.id));
}
mostrar_pizzas_impares ();


// b) ¿Hay alguna pizza que vale menos de $600?
function hay_pizzas_baratas (precio_economico) {
        if (!pizzas.some((pizza) => pizza.precio < precio_economico)) {
                console.log ("b) Nop, está todo re caro, es todo un tema...");
                return;
        }
        let una_pizza_economica = pizzas.find((pizza) => pizza.precio < precio_economico);
        console.log ("b) Síp, por menos de %i puedo ofrecerte la %s por %i pesos master", precio_economico, una_pizza_economica.nombre, una_pizza_economica.precio);
}
hay_pizzas_baratas (600);


// c)
console.log ("c) Nombres de todas las pizzas:");
console.log (pizzas.map ((pizza) => pizza.nombre));


// d)
console.log ("d) Precios de las pizzas:");
console.log (pizzas.map ((pizza) => pizza.precio));


// e) Nombre de cada pizza con su respectivo precio
console.log ("e) Nombre de cada pizza con su respectivo precio");
function mostrar_lista_precios () {
        return pizzas.forEach ((pizza) => console.log("La %s sale %i pesos", pizza.nombre, pizza.precio));
}
mostrar_lista_precios ();