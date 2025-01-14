/**
 * 3. Question:
What is the input number?

If the number is positive and even, print "Positive even number."
If the number is positive and odd, print "Positive odd number."
If the number is negative and even, print "Negative even number."
If the number is negative and odd, print "Negative odd number."
If the number is zero, print "Zero."
 */

var num=6
if(num>0 && num%2===0)
{
    console.log("Positive even number")
}
else if(num>0 && num%2!==0)
{
    console.log("Positive odd number")
}
else if(num<0 && num%2===0)
{
    console.log("Negative even number")
}
else if(num<0 && num%2!==0)
{
    console.log("Negative odd number")
}
else if(num===0)
{
    console.log("The number is Zero")
}
else{
    console.log("Invalid number")
}