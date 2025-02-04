//---------------Array----------------


//  an array is a special type of object used to store multiple values in a single variable. 
// Arrays allow you to group related data and access them using an index.

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits)

//Output
// ["Apple ","Banana","Cherry"]


//----- Will Pint the Elements By Using index Values--------


// we can  print the elements by using index values
// let fruits =["Apple","Banana","Cherry"]
// index      =     0 ,     1 ,     2

console.log(fruits[0]);//Apple 
console.log(fruits[1]);//Banana
console.log(fruits[2]);//Cherry





//--------Built in methods---------
//1)----push------
//push is used to add the elements at the end of the Array

fruits.push("Coconut");


// -------output-----------

    /*
    Apple
    Banana
    Cherry
    Cocount
    */

//2)-----pop--------
//Pop is used to remove the elements at the end of the array

fruits.pop()

// output
    /**
     * Apple
     * Banana
     * Cherry
     
     * 
     */

//3)------unshift---------
//unshift is used to add the elements  at the end of the array

fruits.unshift("Orange")


// output
/**
 * Orange
 * Banana
 * Apple
 * Cherry
 
 */



//4)------shift-------
//shit is used to remove the elements at the front of the array
fruits.shift();
//output
/**
 * Apple
 * Banana
 * Cherry
 * 
 */



console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); 


// 5)--------length-------------
// length is used to print the lenght of the array

let numofarray=fruits.length;
console.log(numofarray);


// output  3


//6) --------------indexOf----------
// indexOf is used to print the lentgh of the array
let laptop=["Lenovo", "HP","ASUS", "DELL"];
console.log(laptop.indexOf("Lenovo"));
console.log(laptop.indexOf("HP"));
console.log(laptop.indexOf("DELL"));
console.log(laptop.indexOf("ASUS"));

//output
// 0
// 1
// 3
// 2