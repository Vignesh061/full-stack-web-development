//forEach = is a  meathod used ot iterate a elements in a array and apply in a speacific function(callback) to each elements

//              array.forEach(callback)
//              elements,index ,array are provider

let number = [1, 2, 3, 4, 5];

// number.forEach(double);
// number.forEach(tripple);
// number.forEach(square);
number.forEach(cube);
number.forEach(display);

function double(elements, index, array) {
    array[index] = elements * 2;  // Doubles each element in the array
}

function tripple(elements,index,array)

{
array[index]=elements*3
}

function square(elements, index, array)
{
    array[index]=Math.pow(elements,2);
}

function cube(elements,index,array)
{
    array[index]=Math.pow(elements,3);
}

function display(elements) {
    console.log(elements);
}

