//By using the rest parameter we can combain strings

function combineString(...string)

{
    return string.join("");

}

const fullname=combineString("Clever","Code","Quest");
console.log(fullname)