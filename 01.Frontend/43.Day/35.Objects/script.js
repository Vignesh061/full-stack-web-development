/*Object = Is a collection of the reated properties and and the method can         
            represent the real world objects (people,products,place) 
            
            object={
            key:values,
            function()
}
            */ 

// ---------01.Example--------

const person1={
    firstname:"Vignesh",
    student:true,
    dept:"CSE-B",
    age:20,
    sayabout:function(){
        console.log(`Hello Its ${this.firstname} `);
    },
    sayage:function(){console.log(`My age is ${this.age}`)},
  

    
}


console.log(person1.firstname);
console.log(person1.student);
console.log(person1.dept);
console.log(person1.age);
person1.sayabout();
person1.sayage();


const person2={
    firstname:"vicky",
    age:20,
    student:false,
    setTimeout: () => {
        setTimeout(() => {
            console.log("Hello");
        }, 3000);
    },
    sayabout:()=> console.log("I am "+person2.firstname+" I am freelancer:")
}

console.log(person2.firstname);
console.log(person2.age);
console.log(person2.student);
person2.setTimeout();
person2.sayabout();
