const originalPizza = ["Cheese", "Tomato", "Olives"];

//without modifying the original we can create a new pizza.
const newPizza = [...originalPizza, "pineapple"];


console.log(`Orginal: ${originalPizza} and New: ${newPizza}`);


const updatePizza = [...originalPizza, "Mushrooms", "Jalapeños"];

console.log(`The update pizza menu with new toppings are: ${updatePizza}`);



//merging two pizza
const order1 = ["Cheese", "Tomato", "Basil"];
const order2 = ["Olives", "Mushrooms", "Pepperoni"];


const mergedPizza = [...order1, ...order2];

console.log(`Merged orders are ${mergedPizza}`);