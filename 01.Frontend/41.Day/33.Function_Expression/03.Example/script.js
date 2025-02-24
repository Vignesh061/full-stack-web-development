// ------Example------

const num=[1,2,3,4,5,6,7,8,9];
console.log("Number:",num);
// check the number is odd 
const oddnum=num.filter(function(elements){
    return (elements%2!==0);
})

console.log("Odd Number:",oddnum);

// check the number is even
const evennum=num.filter(function(elements){
    return (elements%2===0);
})

console.log("Even Number:",evennum);

// Total
const total =num.reduce(function(accumulators,elements){
    return accumulators+elements;
})

console.log("Total:",total);