// 02.Example 

const Name=["clever", "code", "quest"];
const nameUpper=Name.map(upperCase);
const nameLower=Name.map(lowerCase);

console.log(nameUpper);
console.log(nameLower);


function lowerCase(elements)
{
    return elements.toLowerCase();
}

function upperCase(elements)
{
    return elements.toUpperCase();
}