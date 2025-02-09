/**
 * Spread operators = ... allow an iteratable such as 
 *                      string or array can be expandad 
 *                      into a seperate elements
 * 
 */


let number = [1,2,3,4,5,6];
let maxno=Math.max(...number);
let minno=Math.min(...number);
console.log(number); // 1,2.3,4,5,6
console.log(maxno); // 6
console.log(minno); // 1

let username="CleverCode Quest";
let letter=[...username].join('-');
console.log(letter);

//By spread operator we can add two or more array
let fruits=["apple" ,"orange","banana"];
let vegetable=["tomato","potatoes","celery"]
console.log([...fruits ,...vegetable , "carrots","brinjal"].join('-'));