// Arrow function = Is a concise Way to write a Function Expression is good for simple function, 
//                  That you can   use only once


//  (Parameter)=> some code

//------01.Example--------

const Name=()=> console.log("Hey There! "); // for single line
Name()


const hello=(name,age)=>{
                       console.log(`It's ${name}, `)
                       console.log(`I am ${age} old`)
}
 hello("Vignesh",20)