// filter() 
// This method creates a new array with elements that pass a certain test provided by a function.

//------For even number-------

const numbers = [1, 2, 3, 4, 5, 6];
console.log("Number:",numbers);


const evennumber=numbers.filter(iseven)

function iseven(elements)
{
    return (elements%2===0)
}
console.log("Even number are:",evennumber)


// -------- Odd number ------

const oddnumber=numbers.filter(isodd)

function isodd(elements)

{
    return (elements%2!==0)
}

console.log("Odd numbers are:",oddnumber);