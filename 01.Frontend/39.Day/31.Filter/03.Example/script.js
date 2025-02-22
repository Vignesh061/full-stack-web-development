// ---------03 Example -----------

const fruits=["Apple","Kiwi","Orange","Banana","Pomegranate","Coconut"]
console.log("fruits are :" , fruits); 
const lessletter=fruits.filter(lesschar)

function lesschar(elements){
    return (elements.length<=6);
}
console.log("Fruits with less char of 6 are :",lessletter);

const longletter=fruits.filter(longchar)
function longchar(elements)
{
    return (elements.length>6);

}
console.log("Fruit with long char more then 6 are :",longletter);