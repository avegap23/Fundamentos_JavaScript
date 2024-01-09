const age = 12;

// Operador ternario condicional:
//                cond   ? valor_true  :   valor_false
let beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // 

if (age >= 21) {
  beverage = "Beer";
} else {
  beverage = "Juice";
}

console.log(beverage);

switch (beverage) {
  case "Beer":
    console.log("Toma tu cerveza");
    break;
  case "Juice":
    console.log("Toma tu zumo");
    break;
  default:
    console.log("No sé qué quieres tomar");
    break;
}
