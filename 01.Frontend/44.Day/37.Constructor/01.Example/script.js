// Constructor = special method for defining the properties and methods of objects

function car(make,model,year,color)
{
    this.make=make;
    this.model=model;
    this.year=year;
    this.color=color;
    this.drive=function(){
        console.log(`You drive the ${this.model}`)
    }
}

const car1=new car("Fode","Mustang",2025,"red");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

//--- for using the second object
console.log("-------------------------------------------------------")

const car2=new car("Chevrolet","Camaro",2050,"bule");
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();

console.log("---------------------------------------------------");

const car3=new car("Doge","Changer",2050,"Green");
console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
car3.drive();

