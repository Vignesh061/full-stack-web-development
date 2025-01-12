// 3. Comparison Operators
console.log("\nComparison Operators:");
let y = 10, z = "10";
// 1. Equal to (==)
// Checks if two values are equal, but it does not consider their types
console.log("Equal to (==):", y == z);    // true


//2. Strict Equal to (===)
//Checks if two values are equal AND of the same type.
console.log("Strict Equal (===):", y === z); // false

//3.Not Equal to(!=)
// checks if two values are not equal ,but not consider their types
console.log("Not Equal (!=):", y != z);  // false

//4.Strict Not Equal to (!==)
// Checks if two values are not equal AND of the same types
console.log("Strict Not Equal (!==):", y !== z); // true

//Greater 
console.log("Greater than:", y > 5);    // true

//Lesser
console.log("Less than or equal to:", y <= 10); // true