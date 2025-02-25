///-------03.Example---------


const number=[1,2,3,4,5,6,7,8,9];

console.log(`Numbers  ${number} ` )

// Square the elements
const square=number.map((elements)=>Math.pow(elements,2));
console.log(`Square :${square}`);

//Cube the elements
const cube=number.map((elements)=>Math.pow(elements,3));
console.log(`Cube :${cube}`)

// Check the even numbers
const iseven=number.filter((elements)=>elements%2===0);
console.log(`Even number are:${iseven}`);

//Check the odd numbers
const isodd=number.filter((elements)=>elements%2!==0);
console.log(`Odd number are:${isodd}`);

// Sum the elemenst in the array
const sum=number.reduce((accumulater,elements)=>accumulater+elements);
console.log(`Sum of ${number} is :${sum}`);