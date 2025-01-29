

//String slicing = creating a substring from a portion of another string 
//                  string.slice(start,end)


//-------Example 1 --------

const fullname="CleverCode Quest"

let firstName=fullname.slice(0,11);
console.log(firstName);

let lastName=fullname.slice(11,21);
console.log(lastName);


//-------Example 2 --------

let fullchar = fullname.slice(0,1);
console.log(fullchar);


let lastchar = fullname.slice(-1); //begining at the end
console.log(lastchar);


//------Example 3 ---------
//fullName="CleverCode Quest"


console.log(fullname.slice(0, fullname.indexOf("")));
