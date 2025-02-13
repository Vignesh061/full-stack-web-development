/*
Rest parameters = (...) rest parameters allow a function to take any number of arguments and store them in an array.
        spread = exands an array into seperate elements
        rest   = bundles seperate elements into an
*/


// Example 1

function Fridge(...foods)
{
    console.log(foods);
}

const food1="Pizza";
const food2="Humberger";
const food3="Sotdog";
const food4="Sushi";
const food5="Ramen";

 Fridge(food1,food2,food3,food4,food5);


// op
/**
 * [Pizza, Humberger, Hotdog, Sushi, Ramen]
 */


