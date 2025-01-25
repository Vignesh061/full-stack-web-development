const mininput=document.getElementById("mininput");
const maxinput=document.getElementById("maxinput");
const mybutton=document.getElementById("mybutton");
let rm=0;

mybutton.onclick=function()
{

       min=mininput.value;
        min=Number(min);
        max=maxinput.value;
        max=Number(max);
    
        rm=Math.floor(Math.random()*(max-min))+min;
        mylabel.textContent=`Random Number from ${min} to ${max}:${rm}`;
}