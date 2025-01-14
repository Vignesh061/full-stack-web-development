/**
2. Question:
What is the input number?

If the number is divisible by 3 and 5, print "FizzBuzz."
If the number is divisible by 3, print "Fizz."
If the number is divisible by 5, print "Buzz."
If the number is neither divisible by 3 nor 5, print "Neither."
 */

var num =50

if (num%5===0 && num/3===0)
{
    console.log("FizzBuzz")
}
else if(num%3===0)
{
    console.log("Fizz")

}
else if(num/5===0)
{
    console.log("Buzz")
}
else if (num/5===0 ||num/3===0)
{
    console.log("Neither")
}
else{
    console.log("invalid output")
}