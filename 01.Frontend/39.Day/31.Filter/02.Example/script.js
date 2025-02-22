// -------- Example 2 --------

const ages=[18,19,20,17,18,19,16];
console.log(" People ages",ages);
const adultage=ages.filter(isAdult);

function isAdult(elements)
{
    return (elements>=18);
}
console.log(`There are ${adultage.length} Adult agers in :`,adultage)
const childage=ages.filter(ischild)
function ischild(elements)
{
    return (elements<=17)
}
console.log(`There are  ${childage.length} Child agers in : `,childage);

