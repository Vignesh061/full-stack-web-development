class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
   
    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.log("First name must be a non-empty string.");
        }
    }

   
    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        } else {
            console.log("Last name must be a non-empty string.");
        }
    }

 
    set age(newAge) {
        if (typeof newAge === "number" && newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Age must be a positive number.");
        }
    }

      get firstName() {
        return `First Name: ${this._firstName}`
    }

    get lastName() {
        return `Second Name: ${this._lastName}`
    }

    get age() {
        return `Your age: ${this._age}`
    }

}

const person = new Person("Vignesh", "P", 20);
console.log(person.firstName); 
console.log(person.lastName);  
console.log(person.age);       
