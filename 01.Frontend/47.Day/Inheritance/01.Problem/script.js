// Inheritance = it allows to inherite a methods and properties from the existing class (Parent-> child) it help a code reusablity

class Animal{
    alive = true;

    eat()
    {
        console.log(`This ${this.name} is eating`);
    }
    sleep()
    {
        console.log(`This ${this.name} is eating`);
    }
}

class Rabbit extends Animal{
    name = "rabbit"
    run()
    {
        console.log(`${this.name} is running`)
    }
} 
class Fish extends Animal{
    name= "Fish"

    swim()
    {
        console.log(`${this.name} is swimming`)
    }
}
class Hawk extends Animal{
    name="Hawk"

    fly()
    {
        console.log(`${this.name} is flying`)
    }
}
 

console.log("----------------RABBIT----------------");
// call rabbit 
const rabbit=new Rabbit();

 console.log(rabbit.alive);
 console.log(rabbit.eat());
//  console.log(rabbit.sleep());
 console.log(rabbit.run());

 // call Fish
console.log("---------------FISH------------------");

const fish = new Fish();

console.log(fish.alive);
console.log(fish.eat());
console.log(fish.swim())


// call Hawk
console.log("--------------HAWK------------------");
const hawk=new Hawk();

console.log(hawk.alive);
console.log(hawk.eat());
console.log(hawk.fly());