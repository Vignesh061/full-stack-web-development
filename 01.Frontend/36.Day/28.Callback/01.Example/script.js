/**
 * Callback = a function passed as an arguments to an another function
 *  
 *      used to handle asynchronous operations:
 *      1.Randing a file 
 *      2.Newtork request
 *      3.Interacting with database
 * 
 * 
 */


// 01.Example 
hello(wait)


function hello(callback)
{
    console.log("Hello");
    callback();
}

function wait( )
{
    console.log("Wait!");
   
}
function leave()
{
    console.log("Leave!")
}
function goodbye()
{
    console.log("GoodBye");
}