/**
 * 5. Question:
What is the year?

If the year is divisible by 4 but not divisible by 100, print "Leap year."
If the year is divisible by 400, print "Leap year."
If the year is not divisible by 4, print "Not a leap year."
 */


var year=2024
if(year%4===0 && year%100!==0)
{
    console.log("Leap Year")
}
else if(year%400===0)
{
    console.log("Leap year")
}
else {
    console.log("Not a leap year")
}
