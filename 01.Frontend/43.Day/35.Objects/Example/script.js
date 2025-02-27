// --------Example------

const car1={
    make:"Ford",
    model:"Mustang",
    year:2025,
    color:"red",
    drive:function(){console.log(`You drive  the ${this.model}`)}
}
const car2={
    make:"Chevrolet",
    model:"Camaro",
    year:2050,
    color:"blue",
    drive:function(){
        console.log(`You drive the ${this.model}`)
    }

}

const car3={
    make:"Doge",
    model:"Changer",
    year:2050,
    color:"geen",
    drive:function(){console.log(`You drive the ${this.model}`)}
}


console.log(car1.make);
console.log(car1.model)
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car3.year);
console.log(car3.color);
car2.drive();