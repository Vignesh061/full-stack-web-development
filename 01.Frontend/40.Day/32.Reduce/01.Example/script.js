// reduce() = reduce the elements of an arry in a  single value

//-----------01.Example-------------

const price=[12,13,14,15,16,17,18];
const total=price.reduce(sum)

console.log(total.toFixed(2));
function sum(previous,elements)
{
    return previous+elements
}