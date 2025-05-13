// Defining a class
class Person {
  // Constructor method
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an object (instance) of the class
const person1 = new Person("Vignesh", 22);

// Calling a method
person1.greet();
