//----------02.Example -----------

const gread=[89,88,79,95,99,60];
const maximum =gread.reduce(max);
console.log("Gread:"+gread.join('-'))

console.log("Maximum gread:"+maximum);
function max( accumulater,elements)
{
    return Math.max(accumulater,elements)
}

const minimum =gread.reduce(min);

console.log("Minimum gread:"+minimum)
function min(accumulator,elements)
{
    return Math.min(accumulator,elements)
}