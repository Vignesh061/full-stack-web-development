//  .map()   = accepts a callback and applies that function to each elements of an array, then return a new array

const number=[1,2,3,4,5,6];
const squares=number.map(square); 
const cubes=number.map(cube);
console.log(squares);
console.log(cubes);


function cube(elements)
{
    return Math.pow(elements,3)
}
function square(elements)
{
    return Math.pow(elements,2);
}