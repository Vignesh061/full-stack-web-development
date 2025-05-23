//02. Example 

class Animal{
    constructor (name,age){
        this.name=name;
        this.age=age;

    }
    move(speed)
    {
        console.log(`The ${this.name} moves at a speed of ${speed} mph`);
    }
}

class Rabbit extends Animal{
    constructor(name,age,runspeed)
    {
        //super constructor
        super(name,age)
        this.runspeed=runspeed;
        
    }

    run()
        {
            console.log(`This ${this.name} can run `)
            //super method
            super.move(this.runspeed)
        }
}
class Fish extends Animal{
    constructor(name,age,swimspeed)
    {
        super(name,age)
        this.swimspeed=swimspeed;

    }
    swim()
    {
        console.log(`This ${this.fish } can swim`)
        super.move(this.swimspeed);
    }
}

class Hawk extends Animal{
    constructor(name,age,flyspeed)
    {
        super(name,age)
        this.flyspeed=flyspeed;

    }
    fly ()
    {
        console.log(`This ${this.name} can fly`);
        super.move(this.flyspeed);

    }
}

console.log("------------Rabbit-------------")
 const rabbit=new Rabbit ("Rabbit",23,45);

 console.log(rabbit.name);
 console.log(rabbit.age);
 console.log(rabbit.runspeed);
 rabbit.run()

console.log("------------Fish--------------")

const fish=new Fish("fish",22,23);
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimspeed);
fish.swim()

console.log("-------------Hawk-------------")

const hawk=new Hawk("Hawk",21,43);
console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flyspeed);
hawk.fly();
