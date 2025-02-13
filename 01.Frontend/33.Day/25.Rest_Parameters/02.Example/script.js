// Example 2

function getfruits(...fruits) // here we using the rest parameters it allow  a function to take any number of arguments and stored them in a array.
{
   return fruits;
  
}
const fruit1="Banana";
const fruit2="Orange";
const fruit3="Apple";
const fruit4="Mango";
const fruit5="Graps";

const fruits=getfruits(fruit1, fruit2,fruit3,fruit4,fruit5);

console.log(...fruits); // here we using the spread expand the array into differen elements.

// without spread operator . the output will be ["Banana", "Orange","Apple","Mango","Graps"]

// with spread operator The output will be.
/**
 * Banana Orange Apple Mango Graps
 */