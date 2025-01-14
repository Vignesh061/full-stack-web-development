/**
 * 4. Question:
What is the grade?

If the grade is between 90 and 100, print "A+"
If the grade is between 80 and 89, print "A"
If the grade is between 70 and 79, print "B"
If the grade is between 60 and 69, print "C"
If the grade is between 50 and 59, print "D"
If the grade is below 50, print "Fail"

 */
 var gd=80

if (gd>=90 && gd<=100) 
{
    console.log("A+")
}
else if(gd>=80 && gd<90)
{
    console.log("A")
}
else if(gd>=70 && gd<80)
{
    console.log("B")
}
else if(gd>=60 && gd<70)
{
    console.log("C")
}
else if(gd>=50 && gd<60)
{
    console.log("D")
}
else if(gd<50)
{
    console.log("Fail")
}
else {
    console.log("Invalid input")
}