//-------02.Example------- 

/// ----By Using callback

setTimeout(hello,3000);

function hello()
{
    console.log("Hello");
}

// ----- By using function expression

setTimeout(function(){
    console.log("Hope you doing well..")
},3500);


// -----By using Arrow Function

setTimeout(()=>console.log(" All the Best"),4000)