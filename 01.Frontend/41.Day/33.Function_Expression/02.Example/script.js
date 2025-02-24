// function decleration 

// -----01.Example-----
console.log("Functio decleration examples:")
const number=[1,2,3,4,5,6,7,8,9];
const poweroftwo=number.map(square);

// square the elements

function square(elements)
{
    return Math.pow(elements,2);
}
console.log("Square values:",poweroftwo);


// cube the elements
function cube(elements)
{
    return Math.pow(elements,3);
}

const powerofthree=number.map(cube);
console.log("Cube values:",powerofthree);




// Function expression
console.log("Function expression examples:")
// square the elements 

const twice=number.map(function(elements)
{
    return Math.pow(elements,2)
})

console.log("Square values:",twice);

// cube the elements

const tripple =number.map(function(elements){
    return Math.pow(elements,3)
})

console.log("Cube values:",tripple)