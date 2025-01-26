/* Ternary operator = a shortcut to if {} and else{}
                        statements help to assign a variables based on a conditions
                        Syntax

                        condition ? condition True:condition False;


*/
console.log("Problem 1");

let age=21;
let message= age>=18 ? "Your are eligible for vote": "Your are not eligible for vote";
console.log(message);


console.log("Problem 2");

let time=12;
let day=time<=13?"Good afternoon":"Good morning"
console.log(day);

console.log("Probem 3")

let student=false;

let stdifo=student?"Your are a student":"Your are not a student";
console.log(stdifo);

console.log("Problem 4");

let amount =124;
let discount = amount>100 ? 10:0;
console.log(`The total amount is ${(amount-amount*(discount/100))}`);