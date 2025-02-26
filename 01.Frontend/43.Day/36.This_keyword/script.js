// This =  reference to the object where this is used (the object depends on the immediate context)

// person.name=this.name

const person1={
    name:"Vignesh",
    age:20,
    dept:"CSE",
    sayabout:function(){
        console.log(`Hello, I am ${this.name} , Studing ${person1.dept}`);
    },

    // In the arrow function we can use the this keyword

    sayage:()=>console.log(`I am ${this.old}`),
    // output: I am undefined 
    // But we use object_Name

    sayage:()=>console.log(`I am ${person1.age}`)
}

console.log(person1.name);
console.log(person1.age);
console.log(person1.dept);
person1.sayabout();
person1.sayage();