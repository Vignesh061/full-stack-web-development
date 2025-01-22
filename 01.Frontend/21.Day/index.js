const mybutton=document.getElementById("mybutton");
const mylabel=document.getElementById("mylabel");
const min=10;
const max= 16;
let rm;

mybutton.onclick=function()
{
rm=Math.floor(Math.random()*(max-min))+min;
mylabel.textContent=rm;
}