//02.Exampel
sum(displaypage,4,6)
function sum(callback,x,y)
{
    let result=x+y;
    callback(result);

}
function displayresult(result)
{
    console.log(result);
}
function displaypage(result)
{
    
     document.getElementById("h2result").textContent=result;
}