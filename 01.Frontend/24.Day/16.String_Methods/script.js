// String methods = allow you to manipulate and work with text (Srings)

let username="   Clevercodequest   ";
let lc="CLEVERCODEQUEST  ";
console.log(username)

//charAt(n) will print the letter in n th index
console.log(username.charAt(9));

//indexOf("char") will print the index of the character
console.log(username.indexOf("e"));

//length will print the length of the string
console.log(username.length);

//trim will remove a white space before a string and after a string 
console.log(username.trim());

//toUperCase is used to make a string  uppercase
console.log(username.toUpperCase());

//toLowerCase is used to make a string to lowercase
console.log(lc.toLowerCase());

//repeat(n) make a string to repeat n times
console.log(lc.repeat(5));

//startswith is used to check the string how to start and using in boolean

let result=username.startsWith("")
if(result)
{
    console.log("Your user name can't starts width empthy space");


}
else{
    console.log(username);
}

//endswith is used to check the string how to end and using in boolean
let resultt=username.endsWith("")
if(resultt)
{
    console.log("Your user name can't end width empthy space");


}
else{
    console.log(username);
}
 
//includes id used in a boolean to check the codtions
 let demo = "CLEVER CODE QUEST"

 let de=demo.includes("")
 if(de)
 {
    console.log("It's Havig a empty space");
 }

 else{
    console.log(de);
 }

 //replaceAll("where" ,"what") method is used to replace where to what

 let phoneno="123-345-567"
 console.log(phoneno.replaceAll("-",""));

 //padstart(n,what ") method is used to what need to padding in n times
 //padstart(n,"what ") method is used to what need to padding in n times fornt
 
console.log(phoneno.padStart(13,"3"));
console.log(phoneno.padStart(15, "3"));

//padend(n,"what") method is used to what is need to padding in n times at end
console.log(phoneno.padEnd(22,"0"));