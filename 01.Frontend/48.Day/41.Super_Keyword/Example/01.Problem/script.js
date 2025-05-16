// Super Keyword  = It is used to call the constructure or acces the  property and  methods in a parent (Super class) 
// this = this Object
// super = the parent

class Animal {
    constructor(name,age)
    {
        this.name=name;
        this.age=age;

    }
}

class Rabbit extends Animal{
    constructor(name,age, runspeed){

        super(name,age)
        {
            this.runspeed=runspeed;
        }
    }
}

class Fish extends Animal{
    constructor(name,age,swimspeed)
    {

        super(name,age)
    {
        this.swimspeed=swimspeed;
    }
    }

}

class Hawk extends Animal{
    constructor (name,age,flyspeed){
        super(name,age)
        {
            this.flyspeed=flyspeed;
        }
    }
}
// to call rabbit
console.log("----------Rabbit-------------");
const rabbit=new Rabbit("rabbit",21,45);
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);

// to call fish
console.log("----------Fish-----------");
const fish = new Fish("fish",23,33);
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimspeed);
// to call hawk

console.log("-----------Hawk----------");

const hawk = new Hawk("Hawk",19,55);
console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flyspeed);


