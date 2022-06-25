function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizza(){
    var crusts = ["deep dish", "hand tossed", "thin crust", "regular", "stuffed crust"];
    var sauces = ["marinara", "barbeque", "alfredo", "buffalo", "pesto"];
    var cheeseTypes = ["mozzarella", "feta", "parmesan"];
    var toppingTypes = ["pepperoni", "sausage", "beef", "ham", "olives", "mushrooms", "onions", "green pepper"];

    var demoPizza = pizzaOven(crusts[Math.floor(Math.random() * crusts.length)], sauces[Math.floor(Math.random() * sauces.length)], 
                                cheeseTypes[Math.floor(Math.random() * cheeseTypes.length)], toppingTypes[Math.floor(Math.random() * toppingTypes.length)]);
    return demoPizza;
}

var firstPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var secondPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var thirdPizza = pizzaOven("thin crust", "alfredo", ["mozzarella"], ["chicken", "mushrooms", "bacon"]);
var fourthPizza = pizzaOven("regular", "barbeque", ["mozzarella"], ["pineapple", "salami", "jalapenos"]);


var myRandomPizza = randomPizza();
console.log(myRandomPizza);