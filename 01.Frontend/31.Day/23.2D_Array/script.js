// A 2D array in JavaScript is an array of arrays, where each inner array represents a row, forming a table-like structure. 
// It is used to store data in a grid format.

// Creating a 2D array (Matrix)
let array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Printing the 2D array
console.log("2D Array:");
for (let i = 0; i < array2D.length; i++) {
    console.log(array2D[i].join(" ")); // Joining elements for better readability
}
