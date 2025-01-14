/**
 1. Question:
What is your age?

If the age is less than 13, print "Child."
If the age is between 13 and 19 (inclusive), print "Teenager."
If the age is between 20 and 59 (inclusive), print "Adult."
If the age is 60 or older, print "Senior Citizen."
 */

var age=54
if(age<13)
{
    console.log("Child")

}
else if(age>=13&&age<=19)
{
    console.log("Teenager")
}
else if(age>=20 && age<=59)
{
    console.log("Adult")
}
else
{
    console.log("Senior citizon")
}