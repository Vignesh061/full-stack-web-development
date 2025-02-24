/*Function decleration = It is defined as a reusable a block of a code and do 
                        a particular task       

*/                      

// ------ Example of function decleration ------

function hello()
{
    console.log("Hey there!");
}

hello();




/**
 * Function expression = a way to define a function in a value or variable
 * 
 */
 //------Example------
const Hello=function()
{
    console.log("Hey There!");
}

setTimeout(Hello,3000)


//--------Example---------

setTimeout(function(){
    console.log("Hello There!");
},3000)