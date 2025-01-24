const myinput=document.getElementById("myinput");
const mybtn=document.getElementById("mybtn");
const myresult=document.getElementById("myresult");
let age;

mybtn.onclick=function()
{   age=myinput.value ;
    age=Number(age);
    if(age===Number(""))
        {
            console.log("Enter the input");
            myresult.textContent=`Enter the input`
        }
        else if(age>=100)
    {
        console.log("You are very OLD ");
        myresult.textContent=`You are very OLD`
    }
    else if(age >=18)
    {
        console.log("You are eligibel for vote");
        myresult.textContent=`Your are eligibel for`
    }

    else if(age<0)    
    {
        console.log("Your age is in negative");
        myresult.textContent=`Your age is in negative`;
        
    }
   
    else if(age<18 )
    {
        console.log("You are less then 18 not eligibel for vote");
        myresult.textContent=`You are less then 18 not eleigibel for vote`;

    }
    else
    {
        console.log("Invalid input")
        myresylt.textContent=`Invalid input`
    }
}